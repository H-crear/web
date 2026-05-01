# Shanhe Atelier Demo Site

一个可直接展示的个人创作作品集成品站点，包含：

- 多页官网：`首页 / 作品 / 详情 / 协同 / 关于 / 联系`
- 12 个数据驱动案例：`data/works.json`
- 协同展示页：`data/collaboration.json`
- 抖音 30 秒视频素材包：`video/`

## 1) 快速启动

在项目根目录执行：

```powershell
.\start-demo.ps1 -OpenBrowser
```

默认地址：

```text
http://127.0.0.1:5500/index.html
```

如需改端口：

```powershell
.\start-demo.ps1 -Port 6600 -OpenBrowser
```

新增参数：

```powershell
# 强制离线模式（不走本地端口）
.\start-demo.ps1 -Offline -OpenBrowser

# 如果你只想离线启动，也可用专用脚本
.\start-demo-offline.ps1 -OpenBrowser

# 关闭自动兜底（仅用于排错）
.\start-demo.ps1 -NoFallback
```

## 1.1) 如果出现“拒绝连接”

你当前环境可能存在本地网络栈问题（`WinError 10106`），这会导致本地 HTTP 服务无法绑定端口。  
已内置离线回退模式：可直接双击打开 [index.html](C:\Users\www22\Documents\Codex\2026-04-25\superpowers-plugin-superpowers-openai-curated-claude\index.html) 进行完整演示（作品与协同数据照常加载）。

如需修复本机网络栈，再恢复本地服务模式，可在管理员终端执行：

```powershell
netsh winsock reset
```

然后重启系统。

## 2) 目录说明

```text
.
├── index.html
├── works.html
├── work.html
├── collaboration.html
├── about.html
├── contact.html
├── styles.css
├── script.js
├── home.js / works.js / work.js / collaboration.js
├── data/
│   ├── works.json
│   └── collaboration.json
├── assets/works/
│   └── 12 套封面 + 细节 SVG
├── video/
│   ├── manifest.json
│   ├── storyboard.md
│   ├── captions.srt
│   ├── bgm-plan.md
│   ├── edit-guide.md
│   └── publish-copy.md
├── CONTENT_GUIDE.md
└── DEMO_SCRIPT.md
```

## 3) 验收清单

- 全页面可访问
- 作品列表可筛选，详情页 `?id=` 正常
- 无效 `id` 有兜底状态
- 移动端不破版
- `prefers-reduced-motion` 下动效可降级
- 本地服务可一键启动

## 4) 演示顺序

请按 `DEMO_SCRIPT.md` 进行 5-8 分钟演示。  
抖音短视频制作请看 `video/edit-guide.md` 和 `video/storyboard.md`。
