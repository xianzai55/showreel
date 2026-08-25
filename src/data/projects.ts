export type ProjectId = 'ar-museum' | 'digital-mural' | 'digital-landscape' | 'planet-summon'

export type ImageSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface ProjectImage {
  src: string
  alt: string
  caption?: string
  size?: ImageSize
}

export type SectionType =
  | 'header'
  | 'statement'
  | 'split'
  | 'text-image'
  | 'image-text'
  | 'duo'
  | 'trio'
  | 'mosaic'
  | 'single'
  | 'full'
  | 'caption'

export interface EditorialSection {
  type: SectionType
  label?: string
  title?: string
  text?: string
  images?: ProjectImage[]
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
  sections: EditorialSection[]
}

const size = (s: ImageSize) => s

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
    sections: [
      {
        type: 'statement',
        label: '01 — Concept',
        title: '概念',
        text: '项目从中国古代体育史出发，将文献、器物与运动图像转译为可交互的数字对象。AR 成为一座桥，把博物馆展柜里的静止文物放回它们原本被使用的身体情境中。',
      },
      {
        type: 'text-image',
        label: '02 — Interface',
        title: '界面与纹样',
        text: '应用首页以传统回纹与卷草为底，篆体「体乐里」作为空间入口。UI 在数字质感中保留手作温度。',
        images: [
          { src: '/images/ar-museum/01.jpg', alt: '体乐里应用首页', size: size('md'), caption: '首页：传统纹样与篆体标题' },
        ],
      },
      {
        type: 'image-text',
        label: '03 — Artifact',
        title: '器物',
        text: '青铜戈等文物通过 3D 模型与文字并置，材质、铭文与历史叙事在同一界面中可读。',
        images: [
          { src: '/images/ar-museum/02.jpg', alt: '3D青铜戈展示界面', size: size('md'), caption: '青铜戈：模型与说明并置' },
        ],
      },
      {
        type: 'trio',
        label: '04 — Figures',
        title: '运动人物',
        text: '马球、蹴鞠、棋艺等古代运动被转译为 3D 角色，观众可在现实空间中环绕观看。',
        images: [
          { src: '/images/ar-museum/03.jpg', alt: '唐代马球人物', size: size('sm'), caption: '马球' },
          { src: '/images/ar-museum/06.jpg', alt: '蹴鞠人物', size: size('sm'), caption: '蹴鞠' },
          { src: '/images/ar-museum/07.jpg', alt: '棋艺人物', size: size('sm'), caption: '棋艺' },
        ],
      },
      {
        type: 'duo',
        label: '05 — Space',
        title: '空间与交互',
        text: '虚拟展厅提供第一人称漫游，冰上运动影像与 AR 角色共同构成多重时间叠合的体验。',
        images: [
          { src: '/images/ar-museum/04.jpg', alt: '冰上运动影像', size: size('md'), caption: '冰上运动：历史影像在展厅中播放' },
          { src: '/images/ar-museum/05.jpg', alt: 'AR角色与身份证锚点', size: size('md'), caption: 'AR 召唤：文物在现实平面中被唤醒' },
        ],
      },
      {
        type: 'single',
        label: '06 — Entrance',
        title: '入口',
        images: [
          { src: '/images/ar-museum/08.jpg', alt: '博物馆入口题字', size: size('lg'), caption: '「中国古代体育博物馆展」入口' },
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
    accent: '#4a7c8c',
    accentSecondary: '#b85c50',
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
    sections: [
      {
        type: 'statement',
        label: '01 — Concept',
        title: '概念',
        text: '云林寺明代水陆壁画体量浩大、神祇众多。项目以情境感知与体感交互为方法，让观众用身体动作「翻阅」壁画，使历史图像重新进入当代观者的感知范围。',
      },
      {
        type: 'caption',
        label: '02 — Exhibition',
        title: '展览现场',
        images: [
          { src: '/images/digital-mural/01.jpg', alt: '展览现场', size: size('lg'), caption: '研究海报、交互屏幕与观众形成三重阅读层级' },
        ],
      },
      {
        type: 'mosaic',
        label: '03 — Research',
        title: '研究图谱',
        images: [
          { src: '/images/digital-mural/02.png', alt: '设计说明海报', size: size('xs'), caption: '设计推导' },
          { src: '/images/digital-mural/03.png', alt: '神祇分类海报', size: size('xs'), caption: '神祇分类' },
          { src: '/images/digital-mural/04.jpg', alt: '观众观看屏幕', size: size('xs'), caption: '现场交互' },
        ],
      },
      {
        type: 'split',
        label: '04 — Immersion',
        title: '沉浸展厅',
        text: '壁画长卷在虚拟空间中环绕展开，形成步入式圣殿。观众不再是壁画前的静止凝视者，而是走入图像内部的漫游者。',
        images: [
          { src: '/images/digital-mural/05.png', alt: '3D沉浸式壁画展厅', size: size('md'), caption: '虚拟展厅中的壁画长卷' },
        ],
      },
      {
        type: 'duo',
        label: '05 — Gesture',
        title: '体感语言',
        images: [
          { src: '/images/digital-mural/06.png', alt: '身体动作控制', size: size('md'), caption: '身体移动驱动场景漫游' },
          { src: '/images/digital-mural/07.png', alt: '手势说明', size: size('md'), caption: '手掌、合十与握拳的手势映射' },
        ],
      },
      {
        type: 'full',
        label: '06 — Scroll',
        title: '长卷',
        images: [
          { src: '/images/digital-mural/08.png', alt: '壁画长卷全幅', size: size('xl'), caption: '西壁、北壁、东壁与扇面墙的完整序列' },
        ],
      },
      {
        type: 'trio',
        label: '07 — Details',
        title: '局部与题跋',
        images: [
          { src: '/images/digital-mural/09.jpg', alt: '佛陀与菩萨网格', size: size('sm'), caption: '神祇阵列' },
          { src: '/images/digital-mural/10.png', alt: '南方宝生佛注解', size: size('sm'), caption: '南方宝生佛' },
          { src: '/images/digital-mural/cover.jpg', alt: '诸天与护法神像', size: size('sm'), caption: '诸天群像' },
        ],
      },
    ],
  },
  {
    id: 'digital-landscape',
    title: '山水全图卷 · 苏州',
    titleEn: 'Digital Landscape · Suzhou',
    year: '2024',
    medium: '数字影像 / 交互长卷 / 生成景观',
    tags: ['数字山水', '交互长卷', '东方美学'],
    cover: '/images/digital-landscape/cover.jpg',
    coverAlt: '数字苏州山水长卷封面',
    accent: '#5e7d6b',
    accentSecondary: '#a85d4d',
    description:
      '以 3D 数字技术重绘《山水全图卷》中的苏州意象。远山近水、塔寺村落、渔樵耕读在宣纸般的色调中缓缓铺陈。',
    descriptionEn:
      'A 3D digital reinterpretation of Suzhou in the tradition of the Shan shui handscroll.',
    statement:
      '山水不在纸上，而在观者缓行的目光里。',
    statementEn:
      'Landscape does not live on paper, but in the unhurried gaze of the viewer.',
    role: '艺术指导 / 3D场景 / 交互设计',
    roleEn: 'Art Direction / 3D Environment / Interaction Design',
    tech: ['Unity / Unreal', 'Blender', 'Substance', 'TouchDesigner'],
    sections: [
      {
        type: 'statement',
        label: '01 — Concept',
        title: '概念',
        text: '项目以数字三维重建传统山水手卷的空间逻辑。山、水、寺、桥、舟、人各自占据不同的景深层次，观众通过手势沿卷轴缓缓行进。',
      },
      {
        type: 'single',
        label: '02 — Panorama',
        title: '全景',
        images: [
          { src: '/images/digital-landscape/01.jpg', alt: '苏州山水全景', size: size('lg'), caption: '山寺为镇，水村相依，一叶扁舟穿桥而过' },
        ],
      },
      {
        type: 'duo',
        label: '03 — Motifs',
        title: '意象',
        images: [
          { src: '/images/digital-landscape/02.jpg', alt: '船夫撑船', size: size('md'), caption: '桥下：渔樵日常' },
          { src: '/images/digital-landscape/03.jpg', alt: '山间古寺', size: size('md'), caption: '山径：拾级而上' },
        ],
      },
      {
        type: 'image-text',
        label: '04 — Texture',
        title: '肌理',
        text: '数字渲染保留宣纸的颗粒与皴擦质感，使三维场景兼具工笔的精细与水墨的空灵。',
        images: [
          { src: '/images/digital-landscape/04.jpg', alt: '带有宣纸肌理的山水近景', size: size('md'), caption: '宣纸颗粒与数字山水的融合' },
        ],
      },
      {
        type: 'text-image',
        label: '05 — Figure',
        title: '行者',
        text: '人物成为山水叙事中的标点，暗示尺度、时间与可游性。',
        images: [
          { src: '/images/digital-landscape/05.jpg', alt: '挑担行人走过石桥', size: size('md'), caption: '挑担行人与石桥' },
        ],
      },
      {
        type: 'duo',
        label: '06 — Interaction',
        title: '交互',
        images: [
          { src: '/images/digital-landscape/06.jpg', alt: '手势漫游山水', size: size('md'), caption: '双手握拳前后移动以漫游' },
          { src: '/images/digital-landscape/07.jpg', alt: '双手击掌返回初始位置', size: size('md'), caption: '双手击掌返回卷首' },
        ],
      },
    ],
  },
  {
    id: 'planet-summon',
    title: '星球召唤',
    titleEn: 'Planet Summon',
    year: '2024',
    medium: '游戏设计 / 实时渲染 / 科幻叙事',
    tags: ['游戏', '科幻', '实时渲染'],
    cover: '/images/planet-summon/cover.png',
    coverAlt: '星球召唤游戏启动画面',
    accent: '#5b9bd5',
    accentSecondary: '#4ecdc4',
    description:
      '一款科幻动作游戏体验设计。玩家响应来自遥远星球的召唤，驾驶战机、操控机甲，在异星地表与未来遗迹间展开星际仪式。',
    descriptionEn:
      'A sci-fi action game experience. The player answers a call from a distant planet.',
    statement:
      '宇宙深处，每一束微光都是一次未被回应的召唤。',
    statementEn:
      'In the depths of the cosmos, every faint light is a summons awaiting answer.',
    role: '游戏美术 / UI设计 / 关卡氛围',
    roleEn: 'Game Art / UI Design / Level Atmosphere',
    tech: ['Unity', 'Blender', 'Figma', 'Shader Graph'],
    sections: [
      {
        type: 'statement',
        label: '01 — Concept',
        title: '概念',
        text: '玩家作为一名受命者，回应来自未知星球的信号。游戏以深空、机甲、异星遗迹为核心意象，构建一场关于使命与归途的星际仪式。',
      },
      {
        type: 'caption',
        label: '02 — Call',
        title: '召唤',
        images: [
          { src: '/images/planet-summon/cover.png', alt: '游戏标题画面', size: size('lg'), caption: '母舰悬停于黄昏地平线，玩家在此接受使命' },
        ],
      },
      {
        type: 'image-text',
        label: '03 — HUD',
        title: '界面系统',
        text: '深蓝 HUD 与科幻字体构建出统一的系统语言，信息在不影响沉浸感的前提下分层呈现。',
        images: [
          { src: '/images/planet-summon/01.png', alt: '游戏操作说明界面', size: size('md'), caption: '操作与 UI 说明' },
        ],
      },
      {
        type: 'duo',
        label: '04 — Surface',
        title: '地表',
        images: [
          { src: '/images/planet-summon/02.png', alt: '火星地表战斗', size: size('md'), caption: '赤红色荒原上的首次遭遇' },
          { src: '/images/planet-summon/03.png', alt: '机甲战士', size: size('md'), caption: '人形兵器与未来建筑' },
        ],
      },
      {
        type: 'single',
        label: '05 — Corridor',
        title: '舱内',
        images: [
          { src: '/images/planet-summon/04.png', alt: '走廊射击战斗', size: size('lg'), caption: '狭长空间中的霓虹火光与金属回声' },
        ],
      },
      {
        type: 'image-text',
        label: '06 — Dive',
        title: '俯冲',
        text: '驾驶舱视角带来速度与前路未知感，星球表面在视野中急速放大。',
        images: [
          { src: '/images/planet-summon/05.png', alt: '驾驶舱俯冲星球', size: size('md'), caption: '驾驶舱视角的高速俯冲' },
        ],
      },
      {
        type: 'single',
        label: '07 — Return',
        title: '归途',
        images: [
          { src: '/images/planet-summon/06.png', alt: '任务完成界面', size: size('lg'), caption: '星球恢复宁静，而新的召唤已在途中' },
        ],
      },
    ],
  },
]

export const getProjectById = (id: ProjectId): Project | undefined =>
  projects.find((p) => p.id === id)

export const getProjectIndex = (id: ProjectId): number =>
  projects.findIndex((p) => p.id === id)

export const site = {
  artist: 'Kexin Hu',
  title: '数字艺术作品集',
  titleEn: 'Digital Art Portfolio',
  statement:
    '我相信数字技术不是传统的替代者，而是另一种凝视方式。让壁画重新呼吸、让山水可被走入、让古物再度被触碰——这是我理解的东方数字诗意。',
  statementEn:
    'I believe digital technology is not a replacement for tradition, but another way of seeing.',
  email: 'k811138129@126.com',
  location: '中国 · 武汉',
}
