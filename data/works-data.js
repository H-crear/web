window.WORKS_DATA = [
  {
    "id": "midnight-atlas",
    "title": "午夜地图集",
    "titleEn": "Midnight Atlas",
    "year": "2026",
    "category": "概念世界观",
    "excerpt": "一套把夜行城市想象成可考据地图的 AI 视觉档案，介于城市导览、梦境地理与电影分镜之间。",
    "tags": [
      "城市夜行",
      "地图叙事",
      "电影感",
      "档案",
      "概念城市",
      "电影感夜景"
    ],
    "featured": true,
    "cover": {
      "src": "./assets/works/midnight-atlas/cover.webp",
      "alt": "午夜地图集 的 电影感夜景 主视觉封面，类型为 概念城市。",
      "fallbackSrc": "./assets/works/midnight-atlas/cover.png",
      "width": 1400,
      "height": 900
    },
    "detailImages": [
      {
        "src": "./assets/works/midnight-atlas/detail-1.svg",
        "alt": "带有坐标线和霓虹街区编号的午夜城市剖面图。",
        "caption": "将城市道路处理成天文坐标，强调“迷路也可被归档”的世界观。"
      },
      {
        "src": "./assets/works/midnight-atlas/detail-2.svg",
        "alt": "黑色纸面上的夜行路线、发光节点和半透明建筑轮廓。",
        "caption": "细节图保留路线、节点和建筑阴影，方便延展为海报或短片分镜。"
      }
    ],
    "background": "项目设定为一座只在午夜开放的城市档案馆。每条街道既是地理路线，也是人物记忆的索引。",
    "promptApproach": "关键词围绕 nocturnal cartography、archive interface、cinematic city fragments 展开，并用“低照度、铜色标注、坐标网格”限制风格。",
    "iterations": [
      {
        "title": "建立地图语法",
        "text": "先生成 3 组道路和建筑关系，筛掉过度科幻的版本，保留最像真实档案的构图。"
      },
      {
        "title": "压低叙事噪音",
        "text": "第二轮减少人物与车辆，只留下光点、编号和路线，让观看者把注意力放在城市结构。"
      },
      {
        "title": "整理成档案封面",
        "text": "最后统一色温与标注层级，使封面、局部图和详情图能像同一套研究材料。"
      }
    ],
    "result": "适合作为视觉小说、城市漫游 App、展览导览或音乐现场视觉的世界观预研素材。",
    "meta": {
      "tools": [
        "Midjourney style prompt",
        "Vector cleanup",
        "Manual art direction",
        "Raster cover art direction"
      ],
      "format": "WebP raster cover + PNG fallback + 2 SVG details",
      "aspectRatio": "16:10",
      "license": "Portfolio concept demo, do not resell as stock asset",
      "credits": "Synthetic Atelier / 合成景观档案"
    },
    "style": "电影感夜景",
    "medium": "概念城市",
    "mood": "神秘 / 冷光 / 档案感",
    "useCase": "城市概念提案、视觉小说、音乐现场视觉",
    "coverType": "raster WebP + PNG fallback"
  },
  {
    "id": "porcelain-clouds",
    "title": "瓷云档案",
    "titleEn": "Porcelain Clouds",
    "year": "2026",
    "category": "AI 视觉创作",
    "excerpt": "把瓷器釉色、云层气象与博物馆标本语言合成在一起，形成轻盈但带有考古感的静物系列。",
    "tags": [
      "瓷器",
      "云层",
      "静物",
      "材质",
      "产品静物",
      "东方静物"
    ],
    "featured": true,
    "cover": {
      "src": "./assets/works/porcelain-clouds/cover.webp",
      "alt": "瓷云档案 的 东方静物 主视觉封面，类型为 产品静物。",
      "fallbackSrc": "./assets/works/porcelain-clouds/cover.png",
      "width": 1400,
      "height": 900
    },
    "detailImages": [
      {
        "src": "./assets/works/porcelain-clouds/detail-1.svg",
        "alt": "一组像标本卡片一样排列的瓷白云团和青色釉裂纹。",
        "caption": "用标本卡片结构承接材质研究，让浪漫图像拥有档案秩序。"
      },
      {
        "src": "./assets/works/porcelain-clouds/detail-2.svg",
        "alt": "近景展示瓷釉裂纹、柔软云边和半透明编号标签。",
        "caption": "细节强调釉裂、边缘羽化与半透明标签之间的冲突。"
      }
    ],
    "background": "设想一间未来博物馆收藏了人工培育的云，每一朵云都以瓷器釉色命名并存放在恒温柜中。",
    "promptApproach": "从 porcelain glaze、museum specimen、soft meteorology、translucent label 四个方向组合，避免普通云海图像。",
    "iterations": [
      {
        "title": "材质优先",
        "text": "第一轮只测试青花、汝窑、月白等釉色与云层的融合程度。"
      },
      {
        "title": "增加收藏感",
        "text": "第二轮加入编号、展签和浅景深，让画面从装饰图转向档案图。"
      },
      {
        "title": "控制洁净度",
        "text": "最后移除过多高光与金属质感，保留安静、潮湿、易碎的气质。"
      }
    ],
    "result": "适合艺术出版物、香氛包装、展览主视觉与材质趋势板。",
    "meta": {
      "tools": [
        "Image prompt design",
        "Palette system",
        "SVG art pass",
        "Raster cover art direction"
      ],
      "format": "WebP raster cover + PNG fallback + 2 SVG details",
      "aspectRatio": "4:3",
      "license": "Portfolio concept demo, do not resell as stock asset",
      "credits": "Synthetic Atelier / 合成景观档案"
    },
    "style": "东方静物",
    "medium": "产品静物",
    "mood": "轻盈 / 釉色 / 博物馆感",
    "useCase": "香氛包装、艺术出版、材质趋势板",
    "coverType": "raster WebP + PNG fallback"
  },
  {
    "id": "memory-reef",
    "title": "记忆珊瑚",
    "titleEn": "Memory Reef",
    "year": "2026",
    "category": "概念世界观",
    "excerpt": "一座由旧照片、语音碎片和珊瑚结构共同生长的海底记忆库，偏向科幻生态与情绪叙事。",
    "tags": [
      "海底",
      "记忆",
      "生态科幻",
      "情绪叙事",
      "幻想场景"
    ],
    "featured": true,
    "cover": {
      "src": "./assets/works/memory-reef/cover.webp",
      "alt": "记忆珊瑚 的 生态科幻 主视觉封面，类型为 幻想场景。",
      "fallbackSrc": "./assets/works/memory-reef/cover.png",
      "width": 1400,
      "height": 900
    },
    "detailImages": [
      {
        "src": "./assets/works/memory-reef/detail-1.svg",
        "alt": "珊瑚枝杈间悬浮着照片碎片和发光数据气泡。",
        "caption": "把照片碎片处理成海洋生物附着物，强化记忆“生长”的概念。"
      },
      {
        "src": "./assets/works/memory-reef/detail-2.svg",
        "alt": "蓝绿色海底剖面里，珊瑚像神经网络一样连接。 ",
        "caption": "剖面图将生态结构和神经连接结合，方便解释世界观规则。"
      }
    ],
    "background": "作品假设人的回忆会沉入海底，并在矿物盐、声音频率和数据残片之间长成新的珊瑚。",
    "promptApproach": "用 bioluminescent coral、archival fragments、underwater neural map 形成主体，再以低对比蓝绿控制情绪。",
    "iterations": [
      {
        "title": "避免普通海景",
        "text": "第一轮剔除海豚、潜水员等直白元素，确保画面中心是“记忆结构”。"
      },
      {
        "title": "建立碎片尺度",
        "text": "第二轮让照片、气泡和珊瑚枝杈形成明确大小关系，避免全部成为装饰纹理。"
      },
      {
        "title": "增加叙事暗线",
        "text": "最后用微弱连线和坐标标签提示这是可被检索的档案，而不只是自然景观。"
      }
    ],
    "result": "可延展为沉浸式展览概念、游戏场景设定或音乐专辑视觉。",
    "meta": {
      "tools": [
        "Worldbuilding prompt",
        "Compositional iteration",
        "SVG mood study",
        "Raster cover art direction"
      ],
      "format": "WebP raster cover + PNG fallback + 2 SVG details",
      "aspectRatio": "16:9",
      "license": "Portfolio concept demo, do not resell as stock asset",
      "credits": "Synthetic Atelier / 合成景观档案"
    },
    "style": "生态科幻",
    "medium": "幻想场景",
    "mood": "深海 / 发光 / 情绪叙事",
    "useCase": "沉浸展览、游戏场景、专辑视觉",
    "coverType": "raster WebP + PNG fallback"
  },
  {
    "id": "neon-herbarium",
    "title": "霓虹植物志",
    "titleEn": "Neon Herbarium",
    "year": "2025",
    "category": "作品档案馆",
    "excerpt": "把夜间招牌、植物学图谱和人工培育物种融合成一套城市植物标本。",
    "tags": [
      "植物志",
      "霓虹",
      "城市标本",
      "图谱",
      "插画图鉴",
      "霓虹图谱"
    ],
    "featured": true,
    "cover": {
      "src": "./assets/works/neon-herbarium/cover.webp",
      "alt": "霓虹植物志 的 霓虹图谱 主视觉封面，类型为 插画图鉴。",
      "fallbackSrc": "./assets/works/neon-herbarium/cover.png",
      "width": 1400,
      "height": 900
    },
    "detailImages": [
      {
        "src": "./assets/works/neon-herbarium/detail-1.svg",
        "alt": "三株发光植物旁带有编号、拉丁名样式标签和色块标注。",
        "caption": "用植物学标注语法解释虚构物种，让幻想内容显得可信。"
      },
      {
        "src": "./assets/works/neon-herbarium/detail-2.svg",
        "alt": "近景展示粉绿霓虹叶脉、暗色根系和透明采集标签。",
        "caption": "叶脉参考城市灯管走线，根系则保留更自然的手绘感。"
      }
    ],
    "background": "设定中，城市霓虹灯在雨季泄漏光谱，催生出只在夜晚开花的人工植物。",
    "promptApproach": "以 botanical plate、neon signage、rain-wet asphalt、synthetic species 为核心，要求画面保持图谱而非插画海报。",
    "iterations": [
      {
        "title": "确立图谱版式",
        "text": "先固定白描式植物布局，再逐步叠加霓虹光谱，避免光效吞掉结构。"
      },
      {
        "title": "做物种差异",
        "text": "第二轮为每株植物设定不同叶形、根系和发光方式，避免系列重复。"
      },
      {
        "title": "补齐档案信息",
        "text": "最后加入采集编号、色谱条和微小注释，形成可扩展的档案馆语言。"
      }
    ],
    "result": "适合潮流空间视觉、音乐活动海报、城市幻想主题内容栏目。",
    "meta": {
      "tools": [
        "Prompt matrix",
        "Specimen layout",
        "SVG illustration",
        "Raster cover art direction"
      ],
      "format": "WebP raster cover + PNG fallback + 2 SVG details",
      "aspectRatio": "3:2",
      "license": "Portfolio concept demo, do not resell as stock asset",
      "credits": "Synthetic Atelier / 合成景观档案"
    },
    "style": "霓虹图谱",
    "medium": "插画图鉴",
    "mood": "潮湿 / 荧光 / 都市植物",
    "useCase": "活动海报、潮流空间、社媒栏目",
    "coverType": "raster WebP + PNG fallback"
  },
  {
    "id": "lunar-street-market",
    "title": "月面夜市",
    "titleEn": "Lunar Street Market",
    "year": "2025",
    "category": "AI 视觉创作",
    "excerpt": "在月球基地边缘搭建一条有烟火气的夜市街，把硬科幻场景转译成可居住的日常。",
    "tags": [
      "月面",
      "夜市",
      "生活科幻",
      "场景设计"
    ],
    "featured": false,
    "cover": {
      "src": "./assets/works/lunar-street-market/cover.webp",
      "alt": "月面夜市 的 生活科幻 主视觉封面，类型为 场景设计。",
      "fallbackSrc": "./assets/works/lunar-street-market/cover.png",
      "width": 1400,
      "height": 900
    },
    "detailImages": [
      {
        "src": "./assets/works/lunar-street-market/detail-1.svg",
        "alt": "月面夜市摊位、透明穹顶和手写招牌构成的场景草图。",
        "caption": "用暖色摊位灯光打破冷硬太空基地，使空间变得有人味。"
      },
      {
        "src": "./assets/works/lunar-street-market/detail-2.svg",
        "alt": "摊位菜单、氧气罐、月壤地面和地球光组成的细节图。",
        "caption": "小物件承担世界观说明，减少页面上直接解释的负担。"
      }
    ],
    "background": "项目想象第一批月面移民如何把临时补给点改造成夜市，让陌生星球出现熟悉的人间秩序。",
    "promptApproach": "组合 lunar colony、night market、warm food stall、earthrise background，并限制镜头为半纪实街拍。",
    "iterations": [
      {
        "title": "平衡科幻与烟火气",
        "text": "第一轮过于太空歌剧，后来压低基地尺度，把摊位、桌椅和招牌作为主角。"
      },
      {
        "title": "补充生活细节",
        "text": "第二轮加入保温箱、氧气接口、菜单灯箱等物件，强化场景可信度。"
      },
      {
        "title": "统一光源",
        "text": "最后让地球冷光与摊位暖光形成清晰对比，使封面更有记忆点。"
      }
    ],
    "result": "适合品牌联名视觉、科幻短片场景、游戏市集关卡概念。",
    "meta": {
      "tools": [
        "Scene prompt",
        "Mood references",
        "SVG key art",
        "Raster cover art direction"
      ],
      "format": "WebP raster cover + PNG fallback + 2 SVG details",
      "aspectRatio": "21:9",
      "license": "Portfolio concept demo, do not resell as stock asset",
      "credits": "Synthetic Atelier / 合成景观档案"
    },
    "style": "生活科幻",
    "medium": "场景设计",
    "mood": "暖光 / 月面 / 烟火气",
    "useCase": "品牌联名、短片场景、游戏关卡",
    "coverType": "raster WebP + PNG fallback"
  },
  {
    "id": "glass-monsoon",
    "title": "玻璃季风",
    "titleEn": "Glass Monsoon",
    "year": "2025",
    "category": "创作流程展示",
    "excerpt": "以季风、玻璃幕墙与潮湿街道为基础，探索透明材质如何承载天气叙事。",
    "tags": [
      "季风",
      "玻璃",
      "天气系统",
      "材质研究",
      "建筑视觉",
      "建筑材质"
    ],
    "featured": false,
    "cover": {
      "src": "./assets/works/glass-monsoon/cover.webp",
      "alt": "玻璃季风 的 建筑材质 主视觉封面，类型为 建筑视觉。",
      "fallbackSrc": "./assets/works/glass-monsoon/cover.png",
      "width": 1400,
      "height": 900
    },
    "detailImages": [
      {
        "src": "./assets/works/glass-monsoon/detail-1.svg",
        "alt": "玻璃碎片、雨滴轨迹和风向线构成的抽象天气图。",
        "caption": "将风向线和雨滴轨迹作为构图骨架，避免只停留在材质贴图。"
      },
      {
        "src": "./assets/works/glass-monsoon/detail-2.svg",
        "alt": "湿润街道倒影中出现玻璃建筑、信号灯和季风标注。",
        "caption": "用倒影层建立城市空间，保留可被商业项目复用的高级感。"
      }
    ],
    "background": "它来自一次关于“天气作为品牌资产”的视觉实验：让季风像产品系统一样有色彩、节奏和识别度。",
    "promptApproach": "关键词集中在 monsoon diagram、glass facade、wet reflection、weather interface，并反复控制透明层次。",
    "iterations": [
      {
        "title": "拆解天气层",
        "text": "先分别生成风、雨、倒影、玻璃材质，再筛选能同时成立的组合。"
      },
      {
        "title": "控制透明关系",
        "text": "第二轮减少重叠元素，让视线能从前景雨滴穿过玻璃进入城市。"
      },
      {
        "title": "形成流程图",
        "text": "最后将图像拆成封面与细节页，展示从材质实验到完整视觉的过程。"
      }
    ],
    "result": "适合建筑品牌、天气主题活动、城市更新项目的视觉预研。",
    "meta": {
      "tools": [
        "Material prompt tests",
        "Palette constraints",
        "SVG composition",
        "Raster cover art direction"
      ],
      "format": "WebP raster cover + PNG fallback + 2 SVG details",
      "aspectRatio": "5:4",
      "license": "Portfolio concept demo, do not resell as stock asset",
      "credits": "Synthetic Atelier / 合成景观档案"
    },
    "style": "建筑材质",
    "medium": "建筑视觉",
    "mood": "雨季 / 透明 / 高级感",
    "useCase": "建筑品牌、城市更新、天气主题活动",
    "coverType": "raster WebP + PNG fallback"
  },
  {
    "id": "satellite-garden",
    "title": "卫星花园",
    "titleEn": "Satellite Garden",
    "year": "2024",
    "category": "作品档案馆",
    "excerpt": "一组围绕轨道农业、卫星天线与花园温室的视觉设定，讨论技术系统如何变成景观。",
    "tags": [
      "轨道农业",
      "卫星",
      "温室",
      "系统景观",
      "可持续未来"
    ],
    "featured": false,
    "cover": {
      "src": "./assets/works/satellite-garden/cover.webp",
      "alt": "卫星花园 的 可持续未来 主视觉封面，类型为 系统景观。",
      "fallbackSrc": "./assets/works/satellite-garden/cover.png",
      "width": 1400,
      "height": 900
    },
    "detailImages": [
      {
        "src": "./assets/works/satellite-garden/detail-1.svg",
        "alt": "卫星花园的圆形温室、太阳能板和植物培养舱示意图。",
        "caption": "以设施剖面解释技术结构，同时保留花园的柔软感。"
      },
      {
        "src": "./assets/works/satellite-garden/detail-2.svg",
        "alt": "太空背景下的温室植物、轨道线和银绿色模块编号。",
        "caption": "轨道线作为装饰与信息层，连接所有画面形成系统感。"
      }
    ],
    "background": "项目设定未来小型卫星不再只是通讯节点，也会成为漂浮花园、种子库和气候观测站。",
    "promptApproach": "以 orbital greenhouse、satellite array、botanical module、technical diagram 组合，避免变成普通太空站概念图。",
    "iterations": [
      {
        "title": "先做系统图",
        "text": "第一轮优先确定卫星、天线、温室和植物舱的空间关系。"
      },
      {
        "title": "增加园艺感",
        "text": "第二轮加入叶片、培养盘和湿润光泽，让技术图不显得冰冷。"
      },
      {
        "title": "整理模块语言",
        "text": "最后将太阳能板、轨道线和编号做成可复用视觉组件。"
      }
    ],
    "result": "适合作为可持续科技品牌、科普展陈或未来农业项目的视觉母题。",
    "meta": {
      "tools": [
        "System diagram prompt",
        "SVG diagramming",
        "Art direction",
        "Raster cover art direction"
      ],
      "format": "WebP raster cover + PNG fallback + 2 SVG details",
      "aspectRatio": "16:10",
      "license": "Portfolio concept demo, do not resell as stock asset",
      "credits": "Synthetic Atelier / 合成景观档案"
    },
    "style": "可持续未来",
    "medium": "系统景观",
    "mood": "轨道 / 植物 / 技术温室",
    "useCase": "科普展陈、未来农业、科技品牌",
    "coverType": "raster WebP + PNG fallback"
  },
  {
    "id": "desert-signal-library",
    "title": "沙丘信号图书馆",
    "titleEn": "Desert Signal Library",
    "year": "2024",
    "category": "创作流程展示",
    "excerpt": "把沙丘、无线电信号和图书馆索引系统结合，形成一座在荒漠中接收旧文明讯号的档案设施。",
    "tags": [
      "沙漠",
      "信号",
      "图书馆",
      "文明遗迹",
      "概念建筑",
      "荒漠档案"
    ],
    "featured": false,
    "cover": {
      "src": "./assets/works/desert-signal-library/cover.webp",
      "alt": "沙丘信号图书馆 的 荒漠档案 主视觉封面，类型为 概念建筑。",
      "fallbackSrc": "./assets/works/desert-signal-library/cover.png",
      "width": 1400,
      "height": 900
    },
    "detailImages": [
      {
        "src": "./assets/works/desert-signal-library/detail-1.svg",
        "alt": "沙漠剖面、信号波纹、索引卡片和图书馆塔的组合图。",
        "caption": "将沙丘剖面与信号波纹叠在一起，让地形也成为信息载体。"
      },
      {
        "src": "./assets/works/desert-signal-library/detail-2.svg",
        "alt": "旧文明信号被整理成绿色索引卡片，背景是暗金沙丘。",
        "caption": "细节图把抽象讯号转译为目录卡片，承接“图书馆”的叙事。"
      }
    ],
    "background": "这是一座远离城市的图书馆，它不收藏书，而是接收、翻译并封存穿越沙漠的失落讯号。",
    "promptApproach": "使用 desert archive、radio signal、brutalist library、index card interface 组合，并保留高温空气的颗粒感。",
    "iterations": [
      {
        "title": "确认主视觉符号",
        "text": "先让沙丘、图书馆塔和信号波纹同时出现，确保主题一眼可读。"
      },
      {
        "title": "建立信息层",
        "text": "第二轮把信号转成索引卡片、编号和频段条，形成可讲述的流程。"
      },
      {
        "title": "收束色彩",
        "text": "最后控制在沙金、碳黑和信号绿三组颜色内，提升系列识别度。"
      }
    ],
    "result": "适合文学播客视觉、概念展览、独立游戏世界观或文化空间提案。",
    "meta": {
      "tools": [
        "Narrative prompt",
        "Archive layout",
        "SVG visual system",
        "Raster cover art direction"
      ],
      "format": "WebP raster cover + PNG fallback + 2 SVG details",
      "aspectRatio": "3:2",
      "license": "Portfolio concept demo, do not resell as stock asset",
      "credits": "Synthetic Atelier / 合成景观档案"
    },
    "style": "荒漠档案",
    "medium": "概念建筑",
    "mood": "沙金 / 信号 / 文明遗迹",
    "useCase": "文学播客、概念展览、文化空间",
    "coverType": "raster WebP + PNG fallback"
  },
  {
    "id": "synthetic-portrait-studio",
    "title": "合成人像工作室",
    "titleEn": "Synthetic Portrait Studio",
    "year": "2026",
    "category": "AI 视觉创作",
    "excerpt": "一组面向个人品牌与虚构角色设定的 AI 人像实验，强调人物气质、服装语言和背景叙事的统一。",
    "tags": [
      "人像",
      "角色设定",
      "时尚",
      "个人品牌"
    ],
    "featured": true,
    "background": "项目模拟为艺术家、播客主持人和虚构角色建立一套可延展肖像系统，而不是生成单张头像。",
    "promptApproach": "提示词围绕 editorial portrait、soft key light、couture texture、character biography 展开，用背景物件提示身份。",
    "iterations": [
      {
        "title": "确定人物气质",
        "text": "先测试冷静、锋利、亲和三种面部气质，选出最适合个人品牌的方向。"
      },
      {
        "title": "统一服装和背景",
        "text": "第二轮把服装材质、配饰和背景器物做成同一套身份线索。"
      },
      {
        "title": "收束为肖像系统",
        "text": "最后统一光线和构图，使单张图能扩展为系列封面和人物介绍页。"
      }
    ],
    "result": "适合个人主页头像、播客封面、角色卡、品牌主理人视觉提案。",
    "style": "编辑部肖像",
    "medium": "AI 人像",
    "mood": "克制 / 高级 / 人物叙事",
    "useCase": "个人品牌、角色设定、播客封面",
    "coverType": "raster WebP + PNG fallback",
    "palette": [
      "#151210",
      "#3b2a25",
      "#f0d5b4",
      "#7fd8c2",
      "#f25f5c"
    ],
    "cover": {
      "src": "./assets/works/synthetic-portrait-studio/cover.webp",
      "alt": "合成人像工作室 的 编辑部肖像 主视觉封面，类型为 AI 人像。",
      "fallbackSrc": "./assets/works/synthetic-portrait-studio/cover.png",
      "width": 1586,
      "height": 992
    },
    "detailImages": [
      {
        "src": "./assets/works/synthetic-portrait-studio/detail-1.svg",
        "alt": "合成人像工作室 的风格板详情图。",
        "caption": "提炼 编辑部肖像 的构图、材质和情绪关键词。"
      },
      {
        "src": "./assets/works/synthetic-portrait-studio/detail-2.svg",
        "alt": "合成人像工作室 的应用场景详情图。",
        "caption": "展示该方向如何延展到 个人品牌、角色设定、播客封面。"
      }
    ],
    "meta": {
      "tools": [
        "Image direction",
        "Prompt matrix",
        "Raster cover render",
        "SVG detail system"
      ],
      "format": "WebP raster cover + PNG fallback + 2 SVG details",
      "aspectRatio": "14:9",
      "license": "Portfolio concept demo, do not resell as stock asset",
      "credits": "Synthetic Atelier / 合成景观档案"
    }
  },
  {
    "id": "hyperreal-product-lab",
    "title": "超写实产品实验室",
    "titleEn": "Hyperreal Product Lab",
    "year": "2026",
    "category": "AI 视觉创作",
    "excerpt": "围绕香氛、耳机和未来饮品的商业广告视觉实验，展示 AI 生成在产品概念阶段的速度与质感。",
    "tags": [
      "产品广告",
      "超写实",
      "商业视觉",
      "包装"
    ],
    "featured": true,
    "background": "项目用于验证新品在上市前的视觉方向：材质、背景、卖点和货架记忆点能否快速成立。",
    "promptApproach": "从 hyperreal studio lighting、macro material、floating product、premium campaign key visual 组合，控制高光和包装轮廓。",
    "iterations": [
      {
        "title": "确定产品轮廓",
        "text": "先测试瓶型、盒型和佩戴设备三种品类，筛选最有广告感的几何外形。"
      },
      {
        "title": "增强材质可信度",
        "text": "第二轮放大玻璃、金属、雾面塑料和液体边缘，避免廉价 3D 感。"
      },
      {
        "title": "加入传播结构",
        "text": "最后把主视觉留白、标题位置和电商裁切比例一起考虑。"
      }
    ],
    "result": "适合新品概念提案、电商主图方向、社媒广告和包装视觉预演。",
    "style": "超写实广告",
    "medium": "产品视觉",
    "mood": "干净 / 高光 / 商业质感",
    "useCase": "产品概念、广告 KV、电商主图",
    "coverType": "raster WebP + PNG fallback",
    "palette": [
      "#0d1012",
      "#1c2a2f",
      "#e8f1ef",
      "#9ddad4",
      "#ffb45c"
    ],
    "cover": {
      "src": "./assets/works/hyperreal-product-lab/cover.webp",
      "alt": "超写实产品实验室 的 超写实广告 主视觉封面，类型为 产品视觉。",
      "fallbackSrc": "./assets/works/hyperreal-product-lab/cover.png",
      "width": 1586,
      "height": 992
    },
    "detailImages": [
      {
        "src": "./assets/works/hyperreal-product-lab/detail-1.svg",
        "alt": "超写实产品实验室 的风格板详情图。",
        "caption": "提炼 超写实广告 的构图、材质和情绪关键词。"
      },
      {
        "src": "./assets/works/hyperreal-product-lab/detail-2.svg",
        "alt": "超写实产品实验室 的应用场景详情图。",
        "caption": "展示该方向如何延展到 产品概念、广告 KV、电商主图。"
      }
    ],
    "meta": {
      "tools": [
        "Image direction",
        "Prompt matrix",
        "Raster cover render",
        "SVG detail system"
      ],
      "format": "WebP raster cover + PNG fallback + 2 SVG details",
      "aspectRatio": "14:9",
      "license": "Portfolio concept demo, do not resell as stock asset",
      "credits": "Synthetic Atelier / 合成景观档案"
    }
  },
  {
    "id": "quiet-architecture-interior",
    "title": "静默建筑内景",
    "titleEn": "Quiet Architecture Interior",
    "year": "2025",
    "category": "作品档案馆",
    "excerpt": "以画廊、阅读室和未来民宿为灵感，探索 AI 建筑室内图像如何表达光、材料和空间节奏。",
    "tags": [
      "建筑",
      "室内",
      "空间",
      "光影"
    ],
    "featured": false,
    "background": "项目面向空间提案早期阶段，用低成本图像快速判断空间调性、材料搭配和动线情绪。",
    "promptApproach": "关键词以 quiet luxury interior、gallery daylight、microcement wall、warm timber detail 为核心，避免过度装饰。",
    "iterations": [
      {
        "title": "限定空间用途",
        "text": "先分别生成画廊、阅读室和短住空间，观察哪种场景更能承载品牌气质。"
      },
      {
        "title": "校准材料比例",
        "text": "第二轮控制木、石、织物和金属的占比，避免空间过冷或过满。"
      },
      {
        "title": "整理镜头路径",
        "text": "最后把入口、停留区和局部细节组织成可讲解的空间故事。"
      }
    ],
    "result": "适合空间品牌提案、展厅方向、室内 moodboard 和建筑视觉预研。",
    "style": "极简建筑摄影",
    "medium": "建筑室内",
    "mood": "安静 / 自然光 / 材质秩序",
    "useCase": "空间提案、室内概念、展厅视觉",
    "coverType": "raster WebP + PNG fallback",
    "palette": [
      "#171614",
      "#3a3832",
      "#d6c8ae",
      "#8da39a",
      "#f0e7d8"
    ],
    "cover": {
      "src": "./assets/works/quiet-architecture-interior/cover.webp",
      "alt": "静默建筑内景 的 极简建筑摄影 主视觉封面，类型为 建筑室内。",
      "fallbackSrc": "./assets/works/quiet-architecture-interior/cover.png",
      "width": 1587,
      "height": 991
    },
    "detailImages": [
      {
        "src": "./assets/works/quiet-architecture-interior/detail-1.svg",
        "alt": "静默建筑内景 的风格板详情图。",
        "caption": "提炼 极简建筑摄影 的构图、材质和情绪关键词。"
      },
      {
        "src": "./assets/works/quiet-architecture-interior/detail-2.svg",
        "alt": "静默建筑内景 的应用场景详情图。",
        "caption": "展示该方向如何延展到 空间提案、室内概念、展厅视觉。"
      }
    ],
    "meta": {
      "tools": [
        "Image direction",
        "Prompt matrix",
        "Raster cover render",
        "SVG detail system"
      ],
      "format": "WebP raster cover + PNG fallback + 2 SVG details",
      "aspectRatio": "14:9",
      "license": "Portfolio concept demo, do not resell as stock asset",
      "credits": "Synthetic Atelier / 合成景观档案"
    }
  },
  {
    "id": "collage-dream-engine",
    "title": "拼贴梦境引擎",
    "titleEn": "Collage Dream Engine",
    "year": "2025",
    "category": "创作流程展示",
    "excerpt": "一套混合纸张、扫描纹理、3D 碎片和抽象符号的拼贴实验，展示非写实方向的生成潜力。",
    "tags": [
      "拼贴",
      "抽象",
      "实验视觉",
      "海报"
    ],
    "featured": false,
    "background": "项目用于探索 AI 在非写实、非摄影任务中的价值：它可以生成视觉碎片，也可以组织出新的版式张力。",
    "promptApproach": "以 surreal collage、scanned paper texture、constructivist poster、dream logic symbols 组织提示词，并保留随机边缘。",
    "iterations": [
      {
        "title": "收集视觉碎片",
        "text": "先生成纸张、符号、几何物和扫描噪点，建立可拼贴的素材池。"
      },
      {
        "title": "建立版式方向",
        "text": "第二轮用构成主义网格压住随机感，让画面像可发布海报而不是素材堆。"
      },
      {
        "title": "保留实验气质",
        "text": "最后只清理影响阅读的噪点，保留错位、叠印和纸张边缘。"
      }
    ],
    "result": "适合独立音乐海报、实验出版、艺术活动视觉和创意过程展示。",
    "style": "实验拼贴",
    "medium": "抽象海报",
    "mood": "梦境 / 颗粒 / 叠印",
    "useCase": "音乐海报、艺术活动、实验出版",
    "coverType": "raster WebP + PNG fallback",
    "palette": [
      "#13110f",
      "#f0e1c2",
      "#e4572e",
      "#2f80ed",
      "#80ff72"
    ],
    "cover": {
      "src": "./assets/works/collage-dream-engine/cover.webp",
      "alt": "拼贴梦境引擎 的 实验拼贴 主视觉封面，类型为 抽象海报。",
      "fallbackSrc": "./assets/works/collage-dream-engine/cover.png",
      "width": 1586,
      "height": 992
    },
    "detailImages": [
      {
        "src": "./assets/works/collage-dream-engine/detail-1.svg",
        "alt": "拼贴梦境引擎 的风格板详情图。",
        "caption": "提炼 实验拼贴 的构图、材质和情绪关键词。"
      },
      {
        "src": "./assets/works/collage-dream-engine/detail-2.svg",
        "alt": "拼贴梦境引擎 的应用场景详情图。",
        "caption": "展示该方向如何延展到 音乐海报、艺术活动、实验出版。"
      }
    ],
    "meta": {
      "tools": [
        "Image direction",
        "Prompt matrix",
        "Raster cover render",
        "SVG detail system"
      ],
      "format": "WebP raster cover + PNG fallback + 2 SVG details",
      "aspectRatio": "14:9",
      "license": "Portfolio concept demo, do not resell as stock asset",
      "credits": "Synthetic Atelier / 合成景观档案"
    }
  }
];
