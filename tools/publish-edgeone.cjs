// EdgeOne Pages 只发布网页文件到 out/edgeone。
// 平台单文件上限 25MB，下载区的 Windows 包和 APK 超限，所以留在 GitHub Pages，
// 输出的 index.html 里把下载链接改成 GitHub Pages 的绝对地址。
const fs = require('fs'), path = require('path');
const root = path.resolve(__dirname, '..'), output = path.join(root, 'out', 'edgeone');
const GH = 'https://kanade6929.github.io/sky-defense-/';
const LIMIT = 25 * 1024 * 1024;
fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });
let count = 0, bytes = 0;
for (const name of fs.readdirSync(root).sort()) {
  const file = path.join(root, name), stat = fs.statSync(file);
  if (!stat.isFile() || !/\.(html|js|wasm|png|ico|svg|json)$/.test(name) || name === 'edgeone.json') continue;
  if (stat.size > LIMIT) throw new Error(`EdgeOne 文件大小超限: ${name}`);
  let data = fs.readFileSync(file);
  if (name === 'index.html') data = Buffer.from(data.toString('utf8').replace(/href="downloads\//g, `href="${GH}downloads/`));
  fs.writeFileSync(path.join(output, name), data);
  count++; bytes += data.length;
}
if (!fs.existsSync(path.join(output, 'index.html'))) throw new Error('缺少 index.html');
console.log(`EdgeOne: ${count} files, ${bytes} bytes -> out/edgeone`);
