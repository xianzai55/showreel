export type ProjectId = 'ar-museum' | 'digital-landscape' | 'tianlongshan' | 'beiqi-mural'

// 站点板块分类：策展（虚拟展馆）与个人创作（横向滑动画廊）
export type ProjectCategory = 'curation'
export type GalleryCategory = 'photography' | 'design'

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
  category: ProjectCategory
  museumExhibitionId?: string
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
    category: 'curation',
    museumExhibitionId: 'ar-museum',
    title: '体乐里体育博物馆',
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
    id: 'digital-landscape',
    category: 'curation',
    museumExhibitionId: 'digital-landscape',
    title: '苏州山水全图卷',
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
    id: 'tianlongshan',
    category: 'curation',
    museumExhibitionId: 'tianlongshan',
    title: '天龙山石窟',
    titleEn: 'Tianlongshan Grottoes',
    year: '2024',
    medium: '石窟数字化 / 虚拟展馆 / 数字遗产',
    tags: ['石窟', '数字遗产', '虚拟展馆'],
    cover: '/images/tianlongshan/cover.jpg',
    coverAlt: '天龙山石窟东峰窟龛与天际轮廓',
    accent: '#a8896a',
    accentSecondary: '#5e7d8c',
    description:
      '天龙山石窟的数字化重构展馆。以唐代造像与流失海外的高浮雕残件为核心，四间展厅重新安置那些离散于世界的面孔，让石窟在数字空间中复归其整体。',
    descriptionEn:
      'A digital reconstruction of the Tianlongshan Grottoes. Four halls gather Tang-dynasty sculpture and dispersed relief fragments, restoring the grotto to a whole in digital space.',
    statement:
      '散佚不是终局，而是另一种等待被重新陈列的开始。',
    statementEn:
      'Dispersion is not an end, but a beginning waiting to be re-exhibited.',
    role: '3D 重建 / 展陈设计 / 数字遗产',
    roleEn: '3D Reconstruction / Exhibition Design / Digital Heritage',
    tech: ['Agisoft Metashape', 'Blender', 'WebGL', 'Vite + React'],
    boards: [],
  },
  {
    id: 'beiqi-mural',
    category: 'curation',
    museumExhibitionId: 'beiqi-mural',
    title: '北齐壁画博物馆',
    titleEn: 'Beiqi (Northern Qi) Mural Museum',
    year: '2024',
    medium: '壁画数字化 / 虚拟展馆 / 数字遗产',
    tags: ['壁画', '北齐', '虚拟展馆'],
    cover: '/images/beiqi-mural/cover.jpg',
    coverAlt: '北齐壁画墓室壁画的矿物色彩特写',
    accent: '#9a6b52',
    accentSecondary: '#3f6d6a',
    description:
      '北齐壁画博物馆的数字化展馆。以墓室壁画的仪仗出行、骏马与宴乐图像为线索，四间展厅将重矿物色与逝去王朝的呼吸重新展开。',
    descriptionEn:
      'A digital museum of Northern Qi murals. Four halls unfold the mineral colors and the breath of a lost dynasty through processions, horses and banquet scenes.',
    statement:
      '壁画的呼吸在色彩里，色彩的血管是时间。',
    statementEn:
      'A mural breathes through its colour, and the vessel of that colour is time.',
    role: '壁画复原 / 展陈设计 / 视觉系统',
    roleEn: 'Mural Restoration / Exhibition Design / Visual System',
    tech: ['即身修复', 'Blender', 'TouchDesigner', 'Vite + React'],
    boards: [],
  },
]

// 策展部分按导览顺序呈现（苏州山水全图卷 → 天龙山石窟 → 北齐壁画 → 体乐里）
const curationOrder: ProjectId[] = [
  'digital-landscape',
  'tianlongshan',
  'beiqi-mural',
  'ar-museum',
]

export function getProjectById(id: ProjectId): Project | undefined {
  return projects.find((p) => p.id === id)
}

export function getCuratedProjects(): Project[] {
  return curationOrder
    .map((id) => getProjectById(id))
    .filter((p): p is Project => Boolean(p))
}

export function getProjectIndex(id: ProjectId): number {
  return curationOrder.indexOf(id)
}

export function getAdjacentProjects(id: ProjectId): { prev: Project | null; next: Project | null } {
  const list = getCuratedProjects()
  const idx = list.findIndex((p) => p.id === id)
  return {
    prev: idx > 0 ? list[idx - 1] : null,
    next: idx < list.length - 1 ? list[idx + 1] : null,
  }
}

/* ------------------------------------------------------------------ */
/*  个人创作 —— 横向滑动画廊                                           */
/* ------------------------------------------------------------------ */

export interface PersonalGallery {
  id: GalleryCategory
  title: string
  titleEn: string
  description: string
  accent: string
  images: BoardImage[]
}

const photographyImages: BoardImage[] = [
  { src: '/images/irish-landscape/cover.jpg', alt: '爱尔兰湖面与红帆船', size: 'lg', aspect: '16/9', caption: '水畔 · 清晨' },
  { src: '/images/irish-landscape/01.jpg', alt: '海岸线', size: 'md', aspect: '4/3', caption: '海岸 · 雾' },
  { src: '/images/irish-landscape/02.jpg', alt: '草地与云影', size: 'md', aspect: '4/3', caption: '原野 · 云影' },
  { src: '/images/irish-landscape/03.jpg', alt: '林间小径', size: 'md', aspect: '4/3', caption: '林荫 · 光隙' },
  { src: '/images/irish-landscape/04.jpg', alt: '街巷一角', size: 'md', aspect: '4/3', caption: '街巷 · 日常' },
  { src: '/images/irish-landscape/05.jpg', alt: '海面波光', size: 'md', aspect: '4/3', caption: '海岸 · 波光' },
  { src: '/images/irish-landscape/06.jpg', alt: '石墙与天光', size: 'md', aspect: '4/3', caption: '田野 · 石墙' },
  { src: '/images/irish-landscape/07.jpg', alt: '悬崖孤影', size: 'lg', aspect: '16/9', caption: '悬崖 · 孤影' },
  { src: '/images/irish-landscape/08.jpg', alt: '傍晚湖面', size: 'md', aspect: '4/3', caption: '水畔 · 暮色' },
  { src: '/images/irish-landscape/09.jpg', alt: '远山与云', size: 'md', aspect: '4/3', caption: '远山 · 云' },
  { src: '/images/irish-landscape/10.jpg', alt: '海滨小镇', size: 'md', aspect: '4/3', caption: '镇 · 屋顶' },
  { src: '/images/irish-landscape/11.jpg', alt: '雪后的路', size: 'md', aspect: '4/3', caption: '雪 · 足迹' },
  { src: '/images/irish-landscape/12.jpg', alt: '午后光线', size: 'md', aspect: '4/3', caption: '午后 · 静光' },
  { src: '/images/irish-landscape/13.jpg', alt: '归途的人', size: 'lg', aspect: '16/9', caption: '归途 · 黄昏' },
  { src: '/images/irish-landscape/14.jpg', alt: '夜灯初上', size: 'md', aspect: '4/3', caption: '夜 · 灯' },
]

const designImages: BoardImage[] = [
  { src: '/images/online-museum/atmosphere/home-screenshot.jpg', alt: '数字展厅网站首页', size: 'lg', aspect: '4/3', caption: '虚拟展厅 · 门厅' },
  { src: '/images/online-museum/atmosphere/virtual-visit-screenshot.jpg', alt: '虚拟参观界面', size: 'md', aspect: '4/3', caption: '虚拟参观 · 界面' },
  { src: '/images/online-museum/atmosphere/collection-screenshot.jpg', alt: '收藏目录页', size: 'md', aspect: '4/3', caption: '收藏 · 目录' },
  { src: '/images/online-museum/atmosphere/stories-screenshot.jpg', alt: '故事线页面', size: 'md', aspect: '4/3', caption: '叙事 · 故事' },
  { src: '/images/online-museum/atmosphere/about-screenshot.jpg', alt: '关于页', size: 'md', aspect: '4/3', caption: '关于 · 介绍' },
  { src: '/images/online-museum/atmosphere/contact-screenshot.jpg', alt: '联系页', size: 'md', aspect: '4/3', caption: '联系 · 页面' },
  { src: '/images/online-museum/atmosphere/expect-screenshot.jpg', alt: '参观须知页', size: 'md', aspect: '4/3', caption: '导览 · 须知' },
  { src: '/images/ar-museum/AR1.png', alt: '体乐里 AR 应用界面', size: 'lg', aspect: '4/3', caption: 'AR 应用 · 界面' },
]

export const personalGalleries: PersonalGallery[] = [
  {
    id: 'photography',
    title: '摄影',
    titleEn: 'Photography',
    description: '海岸、田野、林荫与街巷 —— 一些被放慢的瞬间。横向滑动浏览。',
    accent: '#4a6b7a',
    images: photographyImages,
  },
  {
    id: 'design',
    title: '设计',
    titleEn: 'Design',
    description: '虚拟展厅、网站界面与交互应用的视觉系统。横向滑动浏览。',
    accent: '#c9a86c',
    images: designImages,
  },
]
