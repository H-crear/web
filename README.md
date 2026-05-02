# Synthetic Atelier / 合成景观档案

个人 AI 图片作品集网站。当前版本保持静态结构：HTML / CSS / 原生 JS / JSON，无复杂框架，支持本地服务与 `file://` 离线打开。

## 内容结构

- 首页：个人定位、风格光谱、精选作品、创作方法和合作入口
- 作品总览：搜索、分类筛选、图片类型筛选、风格筛选、结果数量
- 作品详情：项目背景、提示词思路、迭代过程、应用场景、结果说明、图片元信息
- 创作流程：Methodology、阶段输入输出、可交付物
- 关于：创作者定位、工具栈、擅长方向
- 联系：AI 图片方向探索、系列视觉、封面图和概念提案合作入口

## 快速查看

直接双击 `index.html` 可以离线打开。页面会优先尝试读取 JSON；在 `file://` 下会自动使用 `data/*-data.js` fallback。

如需本地服务：

```powershell
.\start-demo.ps1 -OpenBrowser
```

## 维护作品内容

作品主数据在：

- `data/works.json`
- `data/works-data.js`，用于离线 fallback，必须与 JSON 保持同步

每个作品资产放在：

```text
assets/works/<work-id>/
├── cover.webp
├── cover.png
├── detail-1.svg
└── detail-2.svg
```

更新作品时至少填写：标题、分类、年份、摘要、标签、`style`、`medium`、`mood`、`useCase`、`coverType`、项目背景、提示词思路、迭代过程、结果说明、图片 alt、元信息中的 credits 和 license。

新增或替换 `cover.png` 后，运行图片优化脚本生成 WebP 并同步尺寸：

```powershell
node scripts\optimize-images.js
```

脚本会保留 PNG 原图，生成 `cover.webp`，并把 `data/works.json` / `data/works-data.js` / `data/assets-manifest.json` / `data/assets-manifest-data.js` 同步到 WebP 优先、PNG fallback 的结构。

## 验证

```powershell
node scripts/validate-site.js
```

验证脚本会检查 12 个作品项目、必填字段、WebP + PNG fallback、图片尺寸、详情图、资产清单、JSON fallback 和分享 meta。
