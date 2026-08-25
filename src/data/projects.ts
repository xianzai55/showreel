export type ProjectId = 'ar-museum' | 'digital-mural' | 'digital-landscape' | 'planet-summon'

export type ImageSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface BoardImage {
  src: string
  alt: string
  caption?: string
  size?: ImageSize
  aspect?: '16/9' | '4/3' | '3/2' | 'square' | 'video'
}

export type BoardModuleType =
  | 'hero-split'
  | 'triptych'
  | 'matrix'
  | 'text-image'
  | 'image-text'
  | 'sequence'
  | 'compare'
  | 'callout'
  | 'statement'
  | 'info'

export interface CalloutItem {
  number: string
  text: string
}

export interface BoardModule {
  type: BoardModuleType
  label?: string
  title?: string
  text?: string
  images?: BoardImage[]
  callouts?: CalloutItem[]
}

export interface Board {
  id: string
  title: string
  titleEn?: string
  subtitle?: string
  statement?: string
  modules: BoardModule[]
}

export interface Project {
  id: ProjectId
  title: string
  titleEn: string
  year: string
  medium: string
  tags: string[]
  cover: string
  coverAlt: string
  accent: string
  accentSecondary: string
  description: string
  descriptionEn: string
  statement: string
  statementEn: string
  role: string
  roleEn: string
  tech: string[]
  boards: Board[]
}

export const site = {
  artist: 'Kexin Hu',
  artistEn: 'Kexin Hu',
  email: 'k811138129@126.com',
  location: '中国 · 武汉',
  statement:
    '以数字媒介重新想象东方文化与空间叙事。作品游走于虚拟博物馆、活化壁画、数字山水与科幻场景之间，试图在屏幕与身体之间建立一种新的观展经验。',
  statementEn:
    'Reimagining Eastern culture and spatial narratives through digital media. The works move between virtual museums, awakened murals, digital landscapes, and sci-fi scenes, seeking a new exhibition experience between screen and body.',
}

export const projects: Project[] = [
  {
    id: 'ar-museum',
    title: '体乐里',
    titleEn: 'AR Museum of Ancient Sports',
    year: '2024',
    medium: 'AR / 交互应用 / 数字博物馆',
    tags: ['AR', '交互设计', '文化遗产'],
    cover: '/images/ar-museum/cover.jpg',
    coverAlt: '虚拟中国古代体育博物馆展厅内部空间',
    accent: '#c9a86c',
    accentSecondary: '#8b6f4e',
    description:
      '以 AR 与 3D 交互重构中国古代体育文化记忆。观众通过手机扫描即可召唤蹴鞠、马球、射箭等古代运动人物，在虚实叠合中走入一座永不闭馆的数字化体育博物馆。',
    descriptionEn:
      'Reconstructing ancient Chinese sports heritage through AR and 3D interaction. Visitors summon figures of cuju, polo, and archery into the present.',
    statement:
      '传统不是被封存的标本，而是可以被重新唤醒的身体经验。',
    statementEn:
      'Tradition is not a specimen to be sealed away, but a bodily experience waiting to be reawakened.',
    role: '视觉设计 / 3D美术 / 交互原型',
    roleEn: 'Visual Design / 3D Art / Interaction Prototype',
    tech: ['Unity', 'Vuforia / EasyAR', 'Blender', 'Figma'],
    boards: [
      {
        id: '01',
        title: '项目扉页',
        titleEn: 'Project Cover',
        subtitle: '虚拟博物馆 · 身体唤醒',
        modules: [
          {
            type: 'hero-split',
            label: 'Board 01',
            title: '体乐里',
            text: '从中国古代体育史出发，将文献、器物与运动图像转译为可交互的数字对象。AR 成为一座桥，把博物馆展柜里的静止文物放回它们原本被使用的身体情境中。',
            images: [
              { src: '/images/ar-museum/cover.jpg', alt: '虚拟展厅内部', size: 'lg', aspect: '4/3', caption: 'Fig.01 展厅漫游视角' },
              { src: '/images/ar-museum/08.jpg', alt: '博物馆入口题字', size: 'xs', aspect: '4/3', caption: 'Fig.02 展题' },
              { src: '/images/ar-museum/01.jpg', alt: '应用首页', size: 'xs', aspect: '3/2', caption: 'Fig.03 应用入口' },
            ],
          },
        ],
      },
      {
        id: '02',
        title: '空间分析',
        titleEn: 'Spatial Analysis',
        subtitle: '展墙 · 标注 · 层级',
        modules: [
          {
            type: 'statement',
            text: '虚拟展厅按历史线索组织展墙，观众可在空间中自由漫游。展墙既是信息界面，也是空间边界。',
          },
          {
            type: 'callout',
            title: '展厅阅读层级',
            images: [
              { src: '/images/ar-museum/04.jpg', alt: '冰上运动影像墙', size: 'lg', aspect: '16/9', caption: 'Fig.04 历史影像在展墙中播放' },
            ],
            callouts: [
              { number: '1', text: '主展墙：历史影像与文字说明' },
              { number: '2', text: '展柜层：3D 文物与交互锚点' },
              { number: '3', text: '漫游界面：虚拟摇杆与地图' },
            ],
          },
          {
            type: 'matrix',
            label: '展墙片段',
            images: [
              { src: '/images/ar-museum/02.jpg', alt: '青铜戈展示', size: 'sm', aspect: '4/3', caption: 'Fig.05 器物层' },
              { src: '/images/ar-museum/03.jpg', alt: '马球人物', size: 'sm', aspect: '3/2', caption: 'Fig.06 运动人物' },
              { src: '/images/ar-museum/06.jpg', alt: '蹴鞠人物', size: 'sm', aspect: '3/2', caption: 'Fig.07 蹴鞠角色' },
              { src: '/images/ar-museum/07.jpg', alt: '棋艺人物', size: 'sm', aspect: '3/2', caption: 'Fig.08 棋艺角色' },
            ],
          },
        ],
      },
      {
        id: '03',
        title: '交互场景',
        titleEn: 'Interaction Scenes',
        subtitle: 'AR 召唤 · 虚实叠合',
        modules: [
          {
            type: 'text-image',
            title: 'AR 召唤逻辑',
            text: '扫描身份证或指定平面后，3D 运动人物被锚定在现实空间中。观众可以环绕、缩放、触发动画，使古代运动从平面图像恢复为立体身体。',
            images: [
              { src: '/images/ar-museum/05.jpg', alt: 'AR 角色与身份证锚点', size: 'md', aspect: '4/3', caption: 'Fig.09 AR 召唤场景' },
            ],
          },
          {
            type: 'sequence',
            label: '角色序列',
            images: [
              { src: '/images/ar-museum/03.jpg', alt: '马球人物', size: 'sm', aspect: '3/2', caption: 'Fig.10 马球' },
              { src: '/images/ar-museum/06.jpg', alt: '蹴鞠人物', size: 'sm', aspect: '3/2', caption: 'Fig.11 蹴鞠' },
              { src: '/images/ar-museum/07.jpg', alt: '棋艺人物', size: 'sm', aspect: '3/2', caption: 'Fig.12 棋艺' },
            ],
          },
        ],
      },
      {
        id: '04',
        title: '文物与人物',
        titleEn: 'Artifacts & Figures',
        subtitle: '3D 转译 · 材质叙事',
        modules: [
          {
            type: 'image-text',
            title: '器物数字化',
            text: '青铜戈、箭镞等器物通过 3D 扫描与建模重建，材质、铭文与使用方式在同一界面中可读。',
            images: [
              { src: '/images/ar-museum/02.jpg', alt: '青铜戈展示界面', size: 'md', aspect: '4/3', caption: 'Fig.13 青铜戈模型与说明' },
            ],
          },
          {
            type: 'triptych',
            label: '运动人物 trio',
            images: [
              { src: '/images/ar-museum/03.jpg', alt: '唐代马球人物', size: 'md', aspect: '3/2', caption: 'Fig.14 马球' },
              { src: '/images/ar-museum/06.jpg', alt: '蹴鞠人物', size: 'md', aspect: '3/2', caption: 'Fig.15 蹴鞠' },
              { src: '/images/ar-museum/07.jpg', alt: '棋艺人物', size: 'md', aspect: '3/2', caption: 'Fig.16 棋艺' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'digital-mural',
    title: '云林寺壁画',
    titleEn: 'Digital Mural · Yunlin Temple',
    year: '2024',
    medium: '数字影像 / 交互装置 / 壁画活化',
    tags: ['数字壁画', '体感交互', '文化遗产'],
    cover: '/images/digital-mural/cover.jpg',
    coverAlt: '云林寺水陆壁画长卷局部',
    accent: '#b85c50',
    accentSecondary: '#4a7c8c',
    description:
      '基于情境感知的山西阳高云林寺壁画交互展示设计。以体感手势为引，让沉睡的明代水陆壁画在数字光中缓缓苏醒。',
    descriptionEn:
      'An interactive display design for the Ming-dynasty Yunlin Temple murals in Yanggao, Shanxi.',
    statement:
      '壁画的褪色不是消逝，而是等待一次被重新凝视的仪式。',
    statementEn:
      'The fading of a mural is not disappearance, but a ritual waiting to be seen again.',
    role: '交互设计 / 视觉系统 / 展览策划',
    roleEn: 'Interaction Design / Visual System / Exhibition Curation',
    tech: ['TouchDesigner', 'Kinect / MediaPipe', 'Blender', 'After Effects'],
    boards: [
      {
        id: '01',
        title: '项目扉页',
        titleEn: 'Project Cover',
        subtitle: '重彩 · 活化 · 仪式',
        modules: [
          {
            type: 'hero-split',
            label: 'Board 01',
            title: '云林寺壁画',
            text: '山西阳高云林寺明代水陆壁画体量浩大、神祇众多。项目以情境感知与体感交互为方法，让观众用身体动作「翻阅」壁画，使历史图像重新进入当代观者的感知范围。',
            images: [
              { src: '/images/digital-mural/cover.jpg', alt: '壁画长卷局部', size: 'lg', aspect: '16/9', caption: 'Fig.01 长卷局部：神祇群像' },
              { src: '/images/digital-mural/01.jpg', alt: '展览现场', size: 'xs', aspect: '4/3', caption: 'Fig.02 展览现场' },
              { src: '/images/digital-mural/09.jpg', alt: '壁画人物特写', size: 'xs', aspect: '3/2', caption: 'Fig.03 人物面孔' },
            ],
          },
        ],
      },
      {
        id: '02',
        title: '长卷叙事',
        titleEn: 'Scroll Narrative',
        subtitle: '横向序列 · 矿物色',
        modules: [
          {
            type: 'statement',
            text: '壁画以横向长卷展开，石青、石绿、朱砂、赭石交织成密集的宗教叙事。数字化的长卷保留了矿物色的厚重，同时允许观众在时空中移动目光。',
          },
          {
            type: 'sequence',
            label: '长卷片段序列',
            images: [
              { src: '/images/digital-mural/05.png', alt: '虚拟展厅长卷', size: 'sm', aspect: '16/9', caption: 'Fig.04 虚拟长卷 A' },
              { src: '/images/digital-mural/09.jpg', alt: '壁画人物群像', size: 'sm', aspect: '16/9', caption: 'Fig.05 人物群像 B' },
              { src: '/images/digital-mural/10.png', alt: '壁画局部', size: 'sm', aspect: '16/9', caption: 'Fig.06 局部 C' },
              { src: '/images/digital-mural/04.jpg', alt: '观众观看屏幕', size: 'sm', aspect: '16/9', caption: 'Fig.07 现场观看 D' },
            ],
          },
          {
            type: 'compare',
            title: '壁画 / 活化对照',
            images: [
              { src: '/images/digital-mural/09.jpg', alt: '原始壁画人物', size: 'md', aspect: '4/3', caption: 'Fig.08 原始壁画面孔' },
              { src: '/images/digital-mural/10.png', alt: '数字活化效果', size: 'md', aspect: '4/3', caption: 'Fig.09 数字光中的面孔' },
            ],
          },
        ],
      },
      {
        id: '03',
        title: '局部与材料',
        titleEn: 'Details & Materials',
        subtitle: '塑像 · 线描 · 修复',
        modules: [
          {
            type: 'matrix',
            label: '局部特写矩阵',
            images: [
              { src: '/images/digital-mural/02.png', alt: '设计说明海报', size: 'sm', aspect: '3/2', caption: 'Fig.10 设计推导' },
              { src: '/images/digital-mural/03.png', alt: '神祇分类海报', size: 'sm', aspect: '3/2', caption: 'Fig.11 神祇分类' },
              { src: '/images/digital-mural/06.png', alt: '身体动作控制', size: 'sm', aspect: '4/3', caption: 'Fig.12 体感控制' },
              { src: '/images/digital-mural/07.png', alt: '手势说明', size: 'sm', aspect: '4/3', caption: 'Fig.13 手势映射' },
            ],
          },
          {
            type: 'callout',
            title: '人物头部细节',
            images: [
              { src: '/images/digital-mural/09.jpg', alt: '壁画人物特写', size: 'lg', aspect: '16/9', caption: 'Fig.14 头部与衣纹' },
            ],
            callouts: [
              { number: '1', text: '矿物朱砂晕染的面部' },
              { number: '2', text: '石青与石绿叠压的衣袍' },
              { number: '3', text: '铁线描勾勒的须发' },
            ],
          },
        ],
      },
      {
        id: '04',
        title: '展呈与体验',
        titleEn: 'Exhibition & Experience',
        subtitle: '沉浸 · 体感 · 在场',
        modules: [
          {
            type: 'image-text',
            title: '步入式圣殿',
            text: '壁画长卷在虚拟空间中环绕展开，观众不再是壁画前的静止凝视者，而是走入图像内部的漫游者。',
            images: [
              { src: '/images/digital-mural/05.png', alt: '3D沉浸式壁画展厅', size: 'md', aspect: '16/9', caption: 'Fig.15 沉浸展厅' },
            ],
          },
          {
            type: 'text-image',
            title: '体感语言',
            text: '手掌开合、合十、握拳等手势被映射为翻阅、放大、聚焦等动作，身体成为阅读壁画的媒介。',
            images: [
              { src: '/images/digital-mural/06.png', alt: '身体动作控制', size: 'md', aspect: '4/3', caption: 'Fig.16 身体驱动漫游' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'digital-landscape',
    title: '数字山水',
    titleEn: 'Digital Landscape',
    year: '2024',
    medium: '体感交互 / 数字影像 / 空间叙事',
    tags: ['数字山水', '体感交互', '东方诗意'],
    cover: '/images/digital-landscape/cover.jpg',
    coverAlt: '数字山水全景：苏州青绿山水城镇',
    accent: '#5e7d6b',
    accentSecondary: '#a85d4d',
    description:
      '以手势交互漫游一座数字化的东方山水城镇。青绿、淡赭与水墨灰构成诗意空间，观众用双手「握住」山水，在虚实之间游走。',
    descriptionEn:
      'A gesture-interactive journey through a digital Eastern landscape town.',
    statement:
      '山水不是被观看的风景，而是可以被身体进入的境界。',
    statementEn:
      'Landscape is not a scene to be viewed, but a realm to be entered by the body.',
    role: '视觉设计 / 交互原型 / 空间概念',
    roleEn: 'Visual Design / Interaction Prototype / Spatial Concept',
    tech: ['Unity', 'MediaPipe', 'Blender', 'After Effects'],
    boards: [
      {
        id: '01',
        title: '项目扉页',
        titleEn: 'Project Cover',
        subtitle: '青绿 · 漫游 · 诗意',
        modules: [
          {
            type: 'hero-split',
            label: 'Board 01',
            title: '数字山水',
            text: '从宋代青绿山水与江南园林出发，构建一座可漫游的数字山水城镇。塔、桥、山径、渔村在薄雾中展开，观众以手势为舟，在画中行走。',
            images: [
              { src: '/images/digital-landscape/cover.jpg', alt: '数字山水全景', size: 'lg', aspect: '16/9', caption: 'Fig.01 山水全景' },
              { src: '/images/digital-landscape/02.jpg', alt: '塔与山林', size: 'xs', aspect: '4/3', caption: 'Fig.02 塔院' },
              { src: '/images/digital-landscape/05.jpg', alt: '渔村日常', size: 'xs', aspect: '4/3', caption: 'Fig.03 渔村' },
            ],
          },
        ],
      },
      {
        id: '02',
        title: '境与游',
        titleEn: 'Realm & Journey',
        subtitle: '留白 · 小图 · 大境',
        modules: [
          {
            type: 'statement',
            text: '画面大面积留白，建筑与人物点缀其间。图不必大，境由心生。每一张小图都是进入山水的一个入口。',
          },
          {
            type: 'triptych',
            label: '山水三境',
            images: [
              { src: '/images/digital-landscape/01.jpg', alt: '苏州山水全景', size: 'md', aspect: '16/9', caption: 'Fig.04 全景' },
              { src: '/images/digital-landscape/03.jpg', alt: '桥下渔樵', size: 'md', aspect: '4/3', caption: 'Fig.05 桥下日常' },
              { src: '/images/digital-landscape/04.jpg', alt: '山径拾级', size: 'md', aspect: '4/3', caption: 'Fig.06 山径' },
            ],
          },
          {
            type: 'matrix',
            label: '片段',
            images: [
              { src: '/images/digital-landscape/02.jpg', alt: '塔与山林', size: 'sm', aspect: '4/3', caption: 'Fig.07 塔院晨雾' },
              { src: '/images/digital-landscape/05.jpg', alt: '渔村', size: 'sm', aspect: '4/3', caption: 'Fig.08 渔村泊舟' },
              { src: '/images/digital-landscape/06.jpg', alt: '街市', size: 'sm', aspect: '4/3', caption: 'Fig.09 街市' },
              { src: '/images/digital-landscape/07.jpg', alt: '远景', size: 'sm', aspect: '4/3', caption: 'Fig.10 远山' },
            ],
          },
        ],
      },
      {
        id: '03',
        title: '手势与界面',
        titleEn: 'Gesture & Interface',
        subtitle: '以手为舟 · 以身为径',
        modules: [
          {
            type: 'callout',
            title: '手势漫游',
            images: [
              { src: '/images/digital-landscape/cover.jpg', alt: '手势交互提示', size: 'lg', aspect: '16/9', caption: 'Fig.11 双手握拳前后移动以漫游' },
            ],
            callouts: [
              { number: '1', text: '双手握拳：前后移动控制进退' },
              { number: '2', text: '左右平移：平移视角' },
              { number: '3', text: '俯仰手势：俯视或仰视山水' },
            ],
          },
          {
            type: 'text-image',
            title: '界面如题跋',
            text: '交互提示以极小字号置于画面角落，如古画题跋，不破坏山水本身的空灵感。',
            images: [
              { src: '/images/digital-landscape/01.jpg', alt: '全景漫游', size: 'md', aspect: '16/9', caption: 'Fig.12 漫游视角' },
            ],
          },
        ],
      },
      {
        id: '04',
        title: '局部与境',
        titleEn: 'Details & Atmosphere',
        subtitle: '细节拼贴 · 色彩提取',
        modules: [
          {
            type: 'matrix',
            label: '局部',
            images: [
              { src: '/images/digital-landscape/02.jpg', alt: '塔院', size: 'sm', aspect: '3/2', caption: 'Fig.13 塔院' },
              { src: '/images/digital-landscape/03.jpg', alt: '桥下', size: 'sm', aspect: '3/2', caption: 'Fig.14 桥下' },
              { src: '/images/digital-landscape/05.jpg', alt: '渔村', size: 'sm', aspect: '3/2', caption: 'Fig.15 渔村' },
              { src: '/images/digital-landscape/06.jpg', alt: '街市', size: 'sm', aspect: '3/2', caption: 'Fig.16 街市' },
            ],
          },
          {
            type: 'compare',
            title: '古画 / 数字对照',
            images: [
              { src: '/images/digital-landscape/04.jpg', alt: '山径', size: 'md', aspect: '4/3', caption: 'Fig.17 数字山径' },
              { src: '/images/digital-landscape/07.jpg', alt: '远山', size: 'md', aspect: '4/3', caption: 'Fig.18 远山淡影' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'planet-summon',
    title: '星球召唤',
    titleEn: 'Planet Summon',
    year: '2024',
    medium: '游戏概念 / 数字绘景 / 叙事设计',
    tags: ['游戏概念', '科幻', '数字绘景'],
    cover: '/images/planet-summon/cover.png',
    coverAlt: '星球召唤主视觉：深空中的飞船与孤独角色',
    accent: '#5b9bd5',
    accentSecondary: '#4ecdc4',
    description:
      '一个关于深空、废墟与召唤的科幻游戏概念。角色在荒凉星球表面仰望巨构飞船，试图接收来自未知文明的信号。',
    descriptionEn:
      'A sci-fi game concept about deep space, ruins, and summons.',
    statement:
      '在寂静的星球表面，仰望是人类最后的仪式。',
    statementEn:
      'On the silent surface of a planet, looking up is the last human ritual.',
    role: '概念设计 / 视觉开发 / 叙事设计',
    roleEn: 'Concept Design / Visual Development / Narrative Design',
    tech: ['Unreal Engine', 'Blender', 'Photoshop', 'Figma'],
    boards: [
      {
        id: '01',
        title: '项目扉页',
        titleEn: 'Project Cover',
        subtitle: '深空 · 废墟 · 召唤',
        modules: [
          {
            type: 'hero-split',
            label: 'Board 01',
            title: '星球召唤',
            text: '一个关于深空、废墟与召唤的科幻游戏概念。角色在荒凉星球表面仰望巨构飞船，试图接收来自未知文明的信号。画面以冷蓝紫为底，点缀锈红与青绿光源。',
            images: [
              { src: '/images/planet-summon/cover.png', alt: '星球召唤主视觉', size: 'lg', aspect: '16/9', caption: 'Fig.01 主视觉：仰望飞船' },
              { src: '/images/planet-summon/01.png', alt: '角色剪影', size: 'xs', aspect: '3/2', caption: 'Fig.02 角色' },
              { src: '/images/planet-summon/02.png', alt: '飞船细节', size: 'xs', aspect: '3/2', caption: 'Fig.03 飞船' },
            ],
          },
        ],
      },
      {
        id: '02',
        title: '场景序列',
        titleEn: 'Scene Sequence',
        subtitle: '荒凉地表 · 巨构 · 光源',
        modules: [
          {
            type: 'statement',
            text: '从角色视角出发，场景围绕「孤独—巨构—信号」展开。每一帧都是一张独立的概念气氛图，拼接成完整的星球叙事。',
          },
          {
            type: 'sequence',
            label: '概念气氛序列',
            images: [
              { src: '/images/planet-summon/01.png', alt: '场景一', size: 'sm', aspect: '16/9', caption: 'Fig.04 地表 A' },
              { src: '/images/planet-summon/02.png', alt: '场景二', size: 'sm', aspect: '16/9', caption: 'Fig.05 地表 B' },
              { src: '/images/planet-summon/03.png', alt: '场景三', size: 'sm', aspect: '16/9', caption: 'Fig.06 地表 C' },
              { src: '/images/planet-summon/04.png', alt: '场景四', size: 'sm', aspect: '16/9', caption: 'Fig.07 地表 D' },
            ],
          },
          {
            type: 'triptych',
            label: '巨构细节',
            images: [
              { src: '/images/planet-summon/05.png', alt: '飞船局部', size: 'md', aspect: '4/3', caption: 'Fig.08 飞船局部' },
              { src: '/images/planet-summon/06.png', alt: '角色与光', size: 'md', aspect: '4/3', caption: 'Fig.09 角色与信号光' },
              { src: '/images/planet-summon/cover.png', alt: '主视觉', size: 'md', aspect: '4/3', caption: 'Fig.10 总览' },
            ],
          },
        ],
      },
      {
        id: '03',
        title: '界面与系统',
        titleEn: 'Interface & System',
        subtitle: 'UI · 轨道 · 信息',
        modules: [
          {
            type: 'matrix',
            label: '界面元素',
            images: [
              { src: '/images/planet-summon/01.png', alt: 'UI 场景 A', size: 'sm', aspect: '3/2', caption: 'Fig.11 场景 A' },
              { src: '/images/planet-summon/02.png', alt: 'UI 场景 B', size: 'sm', aspect: '3/2', caption: 'Fig.12 场景 B' },
              { src: '/images/planet-summon/03.png', alt: 'UI 场景 C', size: 'sm', aspect: '3/2', caption: 'Fig.13 场景 C' },
              { src: '/images/planet-summon/04.png', alt: 'UI 场景 D', size: 'sm', aspect: '3/2', caption: 'Fig.14 场景 D' },
            ],
          },
          {
            type: 'callout',
            title: '信号接收系统',
            images: [
              { src: '/images/planet-summon/06.png', alt: '角色与信号', size: 'lg', aspect: '16/9', caption: 'Fig.15 信号接收时刻' },
            ],
            callouts: [
              { number: '1', text: '角色定位：地表信标点' },
              { number: '2', text: '飞船：信号源/未知文明' },
              { number: '3', text: '环境光：锈红地平线与青绿光源' },
            ],
          },
        ],
      },
      {
        id: '04',
        title: '视觉系统',
        titleEn: 'Visual System',
        subtitle: '色彩 · 光效 · 氛围',
        modules: [
          {
            type: 'compare',
            title: '冷夜 / 信号光',
            images: [
              { src: '/images/planet-summon/05.png', alt: '冷夜场景', size: 'md', aspect: '4/3', caption: 'Fig.16 冷夜' },
              { src: '/images/planet-summon/06.png', alt: '信号光场景', size: 'md', aspect: '4/3', caption: 'Fig.17 信号光' },
            ],
          },
          {
            type: 'text-image',
            title: '色彩与光',
            text: '以深空蓝紫为底，通过锈红地平线与青绿信号光建立视觉焦点。人物剪影小，巨构飞船大，强化孤独与敬畏感。',
            images: [
              { src: '/images/planet-summon/cover.png', alt: '主视觉', size: 'md', aspect: '16/9', caption: 'Fig.18 视觉总览' },
            ],
          },
        ],
      },
    ],
  },
]

export function getProjectById(id: ProjectId): Project | undefined {
  return projects.find((p) => p.id === id)
}

export function getProjectIndex(id: ProjectId): number {
  return projects.findIndex((p) => p.id === id)
}

export function getAdjacentProjects(id: ProjectId): { prev: Project | null; next: Project | null } {
  const idx = getProjectIndex(id)
  return {
    prev: idx > 0 ? projects[idx - 1] : null,
    next: idx < projects.length - 1 ? projects[idx + 1] : null,
  }
}
