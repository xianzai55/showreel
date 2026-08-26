// 站点板块：首页 + 展览 + 设计集（摄影与设计）
// 图片均引用自 /public/images/ 下你上传的本地文件

export interface BoardImage {
  src: string
  alt: string
  caption?: string
}

/** 展览（策展类目） */
export interface Exhibition {
  id: string
  title: string
  titleEn: string
  subtitle: string
  cover: string // 封面图，位于 /images/对应文件夹/
  coverAlt: string
  intro: string
  year: string
  medium: string
  /** 为 true 时为占位条目录（暂无图片与内容，暂不可点击进入） */
  pending?: boolean
}

/** 设计集：摄影 / 海报 各自是一组横向滑动画廊 */
export interface GalleryImage {
  src: string
  alt: string
  caption?: string
}

export interface DesignCollection {
  id: string
  title: string
  titleEn: string
  description: string
  images: GalleryImage[]
}

export const site = {
  artist: 'Kexin Hu',
  artistEn: 'Kexin Hu',
  email: 'k811138129@126.com',
  location: '中国 · 武汉',
  statement:
    '以数字媒介重新想象东方文化与空间叙事。作品游走于虚拟博物馆、活化壁画、数字山水与科幻场景之间，试图在屏幕与身体之间，为“观看”开辟一种新的、近乎呼吸的路径。',
  statementEn:
    'Reimagining Eastern culture and spatial narratives through digital media. The works move between virtual museums, awakened murals, digital landscapes, and sci-fi scenes — opening a new, almost breath-like way of seeing between screen and body.',
}

/* ------------------------------------------------------------------ */
/*  展览（5 个）                                                       */
/* ------------------------------------------------------------------ */

export const exhibitions: Exhibition[] = [
  {
    id: 'digital-landscape',
    title: '苏州山水全图卷',
    titleEn: 'The Whole Scroll of Suzhou Landscape',
    subtitle: '以手势为舟的青绿山水漫游',
    cover: '/images/苏州山水全图卷/毕设1.jpg',
    coverAlt: '苏州山水全图卷 · 青绿山水城镇',
    intro:
      '自宋代青绿山水与江南园林取意，营造一座可手势漫游的数字山水城镇。塔影、桥痕、渔村、远山在薄雾中次第展开，握拳轻推，便能行舟其间。',
    year: '2024',
    medium: '体感交互 / 数字影像 / 空间叙事',
  },
  {
    id: 'tianlongshan',
    title: '天龙山石窟',
    titleEn: 'Tianlongshan Grottoes',
    subtitle: '散落在世界里的同一张脸',
    cover: '/images/天龙山石窟/tls1.jpg',
    coverAlt: '天龙山石窟 · 东峰窟龛与石刻造像',
    intro:
      '以唐代造像与流失海外的高浮雕残像为经，三间展厅重新安放那些流散于世界的面孔，让石窟在数字空间中归于完璧。',
    year: '2024',
    medium: '石窟数字化 / 3D 重建 / 数字展陈',
  },
  {
    id: 'beiqi-mural',
    title: '北齐壁画博物馆',
    titleEn: 'Beiqi Mural Museum',
    subtitle: '墓室里的呼吸与色彩',
    cover: '/images/北齐壁画博物馆/bq1.jpg',
    coverAlt: '北齐壁画博物馆 · 墓室壁画的矿物色彩',
    intro:
      '循墓室壁画的仪仗出行、骏马与宴乐图像而行，四间展厅让重矿物色与一个王朝残存的呼吸重新苏醒。',
    year: '2024',
    medium: '壁画数字化 / 色彩复原 / 数字展陈',
  },
  {
    id: 'ar-museum',
    title: '体乐里体育博物馆',
    titleEn: 'Tǐ Yuè Lǐ — AR Sports Museum',
    subtitle: '从展柜到身体的中国古代运动',
    cover: '/images/体乐里体育博物馆/AR1.jpg',
    coverAlt: '体乐里体育博物馆 · AR 虚拟展厅',
    intro:
      '以 AR 与 3D 交互召回被尘封的中国古代体育记忆。轻扫之下，蹴鞠、马球、射箭等古代运动员从展柜跃至掌心，在虚实叠合中步入一座永不闭馆的数字体育博物馆。',
    year: '2024',
    medium: 'AR / 3D 美术 / 交互原型',
  },
  {
    id: 'green-shoots',
    title: 'Green Shoots of arts',
    titleEn: 'Green Shoots of Arts',
    subtitle: '艺术的新芽',
    cover: '/images/Green Shoots of arts/IMG_8637.MP4',
    coverAlt: 'Green Shoots of arts · 展览视频封面',
    intro: '以「新芽」为题的策展项目，注视艺术如何破土、生长，直至盛放。',
    year: '2024',
    medium: '跨媒介 / 策展 / 数字展陈',
  },
  {
    id: 'weingreen',
    title: 'The Weingreen Museum',
    titleEn: 'The Weingreen Museum',
    subtitle: '圣经文物数字博物馆',
    cover: '/images/The Weingreen Museum/首图.jpg',
    coverAlt: 'The Weingreen Museum · The Long Room HUB 入口',
    intro:
      '围绕圣经考古与近东文物构建的数字展厅。从一片陶、一块彩绘板、一枚护身符、一只圣甲虫到一页草纸，走向 The Long Room HUB 那汇聚万物于一处的当代策展空间。',
    year: '2024',
    medium: '文物数字化 / 数字展陈',
  },
]

export function getExhibitionList(): Exhibition[] {
  return exhibitions
}

export function getProjectById(id: string): Exhibition | undefined {
  return exhibitions.find((p) => p.id === id)
}

/* ------------------------------------------------------------------ */
/*  设计集（摄影 + 海报）                                              */
/* ------------------------------------------------------------------ */

const photographyImages: GalleryImage[] = [
  { src: '/images/摄影与设计/0b887a736e7a0370b3f5dfb410f961.JPG', alt: '摄影作品 01', caption: '摄影 · 01' },
  { src: '/images/摄影与设计/2af3d060eb11849bf5b0f71ab92589.JPG', alt: '摄影作品 02', caption: '摄影 · 02' },
  { src: '/images/摄影与设计/5a631b036026cb3a1118cb441f70c7.JPG', alt: '摄影作品 03', caption: '摄影 · 03' },
  { src: '/images/摄影与设计/65842eb9bd9a68e1ed607880e9313f.JPG', alt: '摄影作品 04', caption: '摄影 · 04' },
  { src: '/images/摄影与设计/7497e43ff51f09121a388bf8ae0327.JPG', alt: '摄影作品 05', caption: '摄影 · 05' },
  { src: '/images/摄影与设计/7bbc59106c9344e284d5b24453d6aa.JPG', alt: '摄影作品 06', caption: '摄影 · 06' },
  { src: '/images/摄影与设计/ab18a7e77c7cf1d76b4fab4de754d0.JPG', alt: '摄影作品 07', caption: '摄影 · 07' },
  { src: '/images/摄影与设计/b228fad91c67500695eeebfd5abc3d.JPG', alt: '摄影作品 08', caption: '摄影 · 08' },
  { src: '/images/摄影与设计/b8e62f580b5e3f81677161888baa58.JPG', alt: '摄影作品 09', caption: '摄影 · 09' },
  { src: '/images/摄影与设计/d5ff1aa7da1c5febd3ce8a8ec4e21c.JPG', alt: '摄影作品 10', caption: '摄影 · 10' },
  { src: '/images/摄影与设计/dcee649c7e667347e4d10b561cb5fb.JPG', alt: '摄影作品 11', caption: '摄影 · 11' },
  { src: '/images/摄影与设计/dea595befe671c7ff33c0a2d182d16.JPG', alt: '摄影作品 12', caption: '摄影 · 12' },
  { src: '/images/摄影与设计/e92730d7f1f03131e3051492961beb.JPG', alt: '摄影作品 13', caption: '摄影 · 13' },
  { src: '/images/摄影与设计/ea753651b502a988221a9a749fe614.JPG', alt: '摄影作品 14', caption: '摄影 · 14' },
  { src: '/images/摄影与设计/eaccf713225607b0139351f62995f7.JPG', alt: '摄影作品 15', caption: '摄影 · 15' },
]

const posterImages: GalleryImage[] = [
  { src: '/images/摄影与设计/hb1.jpg', alt: '海报作品 01', caption: '海报 · 01' },
  { src: '/images/摄影与设计/hb2.jpg', alt: '海报作品 02', caption: '海报 · 02' },
  { src: '/images/摄影与设计/hb3.jpg', alt: '海报作品 03', caption: '海报 · 03' },
]

const websiteImages: GalleryImage[] = [
  {
    src: '/images/网站/bandicam 2024-04-10 10-48-10-521.mp4',
    alt: 'The Weingreen Museum 网站展示视频',
    caption: 'The Weingreen Museum',
  },
]

export const designCollections: DesignCollection[] = [
  {
    id: 'photography',
    title: '摄影',
    titleEn: 'Photography',
    description: '海岸、田野、林荫与街巷 —— 被风与光放慢的瞬间。滑动浏览，让光在留白处呼吸。',
    images: photographyImages,
  },
  {
    id: 'website',
    title: '网站',
    titleEn: 'Website',
    description: '为线上展馆而作的界面与体验。滑动浏览，点击观看视频演示。',
    images: websiteImages,
  },
  {
    id: 'poster',
    title: '海报',
    titleEn: 'Poster & Design',
    description: '展览海报、视觉系统与版式语言。滑动浏览，让墨与纸在方寸间落定。',
    images: posterImages,
  },
]