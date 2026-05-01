# 内容替换指南（网站）

## 1) 作品数据入口

文件：`data/works.json`

每个对象字段如下：

```json
{
  "id": "work-01",
  "title": "作品标题",
  "year": "2026",
  "category": "摄影叙事",
  "cover": "./assets/works/work-01-cover.svg",
  "excerpt": "作品一句话摘要",
  "tags": ["标签1", "标签2"],
  "detailImages": [
    "./assets/works/work-01-detail-1.svg",
    "./assets/works/work-01-detail-2.svg",
    "./assets/works/work-01-detail-3.svg"
  ],
  "story": "详情叙事文本，可换行",
  "externalLink": "https://example.com/..."
}
```

## 2) 协同页数据入口

文件：`data/collaboration.json`

- `kpis`: 顶部指标
- `steps`: 协同阶段
- `milestones`: 里程碑和交付证据

## 3) 图片替换规范

- 推荐封面尺寸：`1280x960`
- 推荐详情尺寸：`1200x900`
- 推荐格式：`jpg/png/webp/svg`
- 替换后保持路径一致或同步更新 JSON 字段

## 4) 文案替换建议

- `excerpt` 控制在 35-60 字
- `story` 建议 3 段结构：背景 -> 策略 -> 结果
- `tags` 保持 3-5 个，便于列表页视觉整洁

## 5) 常见问题

- 页面空白：检查 JSON 是否存在逗号/引号错误
- 图片不显示：检查相对路径是否正确
- 详情页找不到：检查 `id` 与链接中的 `?id=` 是否一致
