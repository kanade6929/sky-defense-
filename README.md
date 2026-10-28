# 苍穹防卫圈 · 网页试玩版

在线游玩：https://kanade6929.github.io/sky-defense-/

手机横屏游玩：左半屏拖动控制飞行和瞄准，战斗中自动开火，右侧按钮冲刺 / 投弹 / 减速 / 建造 / 变形 / 暂停。电脑上用鼠标键盘。

这个仓库只放导出好的网页文件，由 Godot 项目里的 `tools/build_web.py` 生成。游戏文件以 gzip 压缩存放（`*.gz.wasm`），由网页在浏览器里解压。

## 腾讯云 EdgeOne Pages 加速

和《辰星夜》同样的做法：在 EdgeOne Pages 导入本仓库的 `main` 分支，框架选 Other，区域选「全球可用区（不含中国大陆）」（域名未备案），再绑定自定义域名。`edgeone.json` 已写好构建命令 `node tools/publish-edgeone.cjs`、输出目录 `out/edgeone` 和缓存头，之后每次推送到 `main` 都会自动重新部署。

EdgeOne 单文件上限 25MB，所以 Windows 包和 APK 不放上去，加速站里的下载按钮直接指向 GitHub Pages 上的文件。
