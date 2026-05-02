# Synthetic Atelier / 合成景观档案

个人 AI 生成创作作品集网站。当前版本保持静态结构：HTML / CSS / 原生 JS / JSON，无复杂框架，支持本地服务与 `file://` 离线打开。

## 内容结构

- 首页：个人定位、精选作品、创作方法和合作入口
- 作品总览：搜索、分类筛选、结果数量
- 作品详情：项目背景、提示词思路、迭代过程、结果说明、元信息
- 创作流程：Methodology、阶段输入输出、可交付物
- 关于：创作者定位、工具栈、擅长方向
- 联系：合作类型、沟通信息和 brief 入口

## 快速查看

直接双击 `index.html` 可以离线打开。页面会优先尝试读取 JSON；在 `file://` 下会自动使用 `data/*-data.js` fallback。

如需本地服务：

```powershell
.\start-demo.ps1 -OpenBrowser
```

默认地址：

```text
http://127.0.0.1:5500/index.html
```

## 维护作品内容

作品主数据在：

- `data/works.json`
- `data/works-data.js`，用于离线 fallback，必须与 JSON 保持同步

每个作品资产放在：

```text
assets/works/<work-id>/
├── cover.svg
├── detail-1.svg
└── detail-2.svg
```

更新作品时至少填写：标题、分类、年份、摘要、标签、项目背景、提示词思路、迭代过程、结果说明、图片 alt、元信息中的 credits 和 license。

## 验证

```powershell
node scripts/validate-site.js
```

验证脚本会检查：

- 8 个作品项目
- 必填字段完整
- 作品图片和资产清单存在
- JSON 与 fallback JS 同步
- 页面包含 `safe-dom.js`
- 外链包含安全属性

## 后续替换图片

当前第一版使用可提交仓库的 SVG 风格化作品封面和详情图。后续如接入 image-2 或其他图像生成工具，可在不改数据结构的前提下把 `cover.svg` / `detail-*.svg` 替换为 WebP / PNG，并同步更新 `data/assets-manifest.json`。
