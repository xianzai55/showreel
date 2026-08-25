export interface Exhibit {
  id: string
  title: string
  titleEn: string
  caption?: string
  captionEn?: string
  image: string
  alt: string
  material: string
  period: string
  dimensions?: string
  accession?: string
  order: number
  hallId: string
}

export interface Hall {
  id: string
  order: number
  name: string
  nameEn: string
  subtitle: string
  subtitleEn: string
  description: string
  descriptionEn: string
  atmosphereImage: string
  atmosphereAlt: string
  exhibits: Exhibit[]
}

export interface Exhibition {
  id: string
  title: string
  titleEn: string
  subtitle: string
  subtitleEn: string
  preface: string
  prefaceEn: string
  statement: string
  statementEn: string
  year: string
  location: string
  locationEn: string
  medium: string
  mediumEn: string
  cover: string
  coverAlt: string
  accent: string
  accentSecondary: string
  halls: Hall[]
}

/* ------------------------------------------------------------------ */
/*  Exhibition 01 — 线上博物馆 (existing)                              */
/* ------------------------------------------------------------------ */

const onlineMuseumHalls: Hall[] = [
  {
    id: 'hall-01',
    order: 1,
    name: '神祇护身符厅',
    nameEn: 'Hall of Divine Amulets',
    subtitle: '守护、权力与信仰',
    subtitleEn: 'Protection, Power & Belief',
    description:
      '古埃及护身符被佩戴于生前，也随葬于死后。阿努比斯、塞赫麦特与贝斯以不同神性守护着身体的各个方位，构成一套微观的信仰宇宙。',
    descriptionEn:
      'Egyptian amulets were worn in life and buried in death. Anubis, Sekhmet and Bes guard different directions of the body, forming a microcosm of belief.',
    atmosphereImage: '/images/online-museum/atmosphere/collection-screenshot.jpg',
    atmosphereAlt: '博物馆收藏页截图，洋红背景上排列蓝色护身符',
    exhibits: [
      {
        id: 'E-01',
        title: '阿努比斯（胡狼）护身符',
        titleEn: 'Anubis (Jackal) Amulet',
        caption: '守护亡者与木乃伊化过程的神祇形象',
        captionEn: 'Guardian of the dead and the mummification process',
        image: '/images/online-museum/exhibits/anubis-jackal-amulet.jpg',
        alt: '浅蓝色釉陶胡狼头人身护身符，立于洋红色背景',
        material: 'Glazed Faience',
        period: 'Late Period — Ptolemaic',
        dimensions: 'H. 49mm',
        accession: 'WM 1660',
        order: 1,
        hallId: 'hall-01',
      },
      {
        id: 'E-02',
        title: '塞赫麦特护身符',
        titleEn: 'Sekhmet Amulet',
        caption: '战争与治愈之狮首女神',
        captionEn: 'The lion-headed goddess of war and healing',
        image: '/images/online-museum/exhibits/sekhemet-amulet.jpg',
        alt: '蓝绿色釉陶狮首女神护身符',
        material: 'Glazed Faience',
        period: 'Late Period',
        dimensions: 'H. 38mm',
        accession: 'WM 1661',
        order: 2,
        hallId: 'hall-01',
      },
      {
        id: 'E-03',
        title: '贝斯神护身符',
        titleEn: 'Bes Creature Amulet',
        caption: '守护家庭与分娩的矮神',
        captionEn: 'Dwarf deity protecting home and childbirth',
        image: '/images/online-museum/exhibits/bes-creature-amulet.jpg',
        alt: '蓝绿色釉陶贝斯神护身符',
        material: 'Glazed Faience',
        period: 'Late Period',
        dimensions: 'H. 32mm',
        accession: 'WM 1662',
        order: 3,
        hallId: 'hall-01',
      },
      {
        id: 'E-04',
        title: '护身符与珠串',
        titleEn: 'String of Amulets and Beads',
        caption: '护身符与彩珠组成的随身护符组合',
        captionEn: 'A portable protective assemblage of amulets and beads',
        image: '/images/online-museum/exhibits/string-of-amulets-and-beads.jpg',
        alt: '环绕排列的多彩护身符与珠子串',
        material: 'Faience, Glass, Stone',
        period: 'New Kingdom — Late Period',
        dimensions: 'L. 210mm',
        accession: 'WM 1663',
        order: 4,
        hallId: 'hall-01',
      },
    ],
  },
  {
    id: 'hall-02',
    order: 2,
    name: '圣甲虫厅',
    nameEn: 'Hall of Scarabs',
    subtitle: '再生、日与旅程',
    subtitleEn: 'Regeneration, Sun & Journey',
    description:
      '圣甲虫是埃及最具代表性的象征之一。它推动太阳重生，也推动亡者穿越冥界。展翅的圣甲虫则将护身符转化为可以飞翔的护符。',
    descriptionEn:
      "The scarab is one of Egypt's most iconic symbols. It pushes the sun to rebirth and guides the dead through the underworld. The winged scarab turns the amulet into a flying charm.",
    atmosphereImage: '/images/online-museum/exhibits/winged-scarab-amulet.jpg',
    atmosphereAlt: '展开双翅的蓝绿色圣甲虫护身符',
    exhibits: [
      {
        id: 'E-05',
        title: '圣甲虫',
        titleEn: 'Scarab Beetle',
        caption: '象征凯普利神的日轮与重生',
        captionEn: 'Symbolising Khepri, the sun god of rebirth',
        image: '/images/online-museum/exhibits/scarab-beetle.jpg',
        alt: '带双翅的蓝绿色圣甲虫护身符俯视图',
        material: 'Glazed Faience',
        period: 'New Kingdom',
        dimensions: 'L. 52mm',
        accession: 'WM 1750',
        order: 1,
        hallId: 'hall-02',
      },
      {
        id: 'E-06',
        title: '展翅圣甲虫护身符',
        titleEn: 'Winged Scarab Amulet',
        caption: '以翼助亡灵穿越天空的飞行形态',
        captionEn: 'Winged form to help the dead fly across the sky',
        image: '/images/online-museum/exhibits/winged-scarab-amulet.jpg',
        alt: '展开翅膀的圣甲虫护身符',
        material: 'Glazed Faience',
        period: 'Late Period',
        dimensions: 'W. 78mm',
        accession: 'WM 1751',
        order: 2,
        hallId: 'hall-02',
      },
      {
        id: 'E-07',
        title: '圣甲虫躯体',
        titleEn: 'Scarab Beetle Body',
        caption: '去翅后的核心圣甲虫本体',
        captionEn: 'The core scarab body without wings',
        image: '/images/online-museum/exhibits/scarab-beetle-body.jpg',
        alt: '蓝绿色圣甲虫主体特写',
        material: 'Glazed Faience',
        period: 'New Kingdom',
        dimensions: 'L. 31mm',
        accession: 'WM 1752',
        order: 3,
        hallId: 'hall-02',
      },
    ],
  },
  {
    id: 'hall-03',
    order: 3,
    name: '沙布提俑厅',
    nameEn: 'Hall of Shabtis',
    subtitle: '来世的仆役',
    subtitleEn: 'Servants of the Afterlife',
    description:
      '沙布提俑被埋入墓中，意在替代亡者在来世劳作。每一尊小俑都是一份沉默的契约：当劳作召唤时，它将代替主人回应。',
    descriptionEn:
      "Shabtis were buried to perform labour for the dead in the afterlife. Each small figure is a silent contract: when work calls, it answers in the owner's place.",
    atmosphereImage: '/images/online-museum/exhibits/shabti-of-nesikhons.jpg',
    atmosphereAlt: '蓝色沙布提俑立于洋红背景',
    exhibits: [
      {
        id: 'E-08',
        title: '尼西孔斯的沙布提俑',
        titleEn: 'Shabti of Nesikhons',
        caption: '刻有神名与来生祷文的个人仆役俑',
        captionEn: 'Personal servant figure inscribed with divine names and afterlife spells',
        image: '/images/online-museum/exhibits/shabti-of-nesikhons.jpg',
        alt: '蓝色釉陶沙布提俑，双臂交叉持农具',
        material: 'Glazed Faience',
        period: 'Third Intermediate Period',
        dimensions: 'H. 115mm',
        accession: 'WM 1445',
        order: 1,
        hallId: 'hall-03',
      },
      {
        id: 'E-09',
        title: '沙布提俑 1478',
        titleEn: 'Shabti 1478',
        caption: '典型 Late Period 模制沙布提',
        captionEn: 'A typical moulded shabti of the Late Period',
        image: '/images/online-museum/exhibits/shabti-1478.jpg',
        alt: '站立的蓝绿色沙布提俑',
        material: 'Glazed Faience',
        period: 'Late Period',
        dimensions: 'H. 98mm',
        accession: 'WM 1478',
        order: 2,
        hallId: 'hall-03',
      },
      {
        id: 'E-10',
        title: '沙布提俑 1446',
        titleEn: 'Shabti 1446',
        caption: '双臂交叉、身着葬礼服的沙布提',
        captionEn: 'Arms crossed, wearing burial regalia',
        image: '/images/online-museum/exhibits/shabti-1446.jpg',
        alt: '浅蓝色沙布提俑正面',
        material: 'Glazed Faience',
        period: 'Late Period',
        dimensions: 'H. 102mm',
        accession: 'WM 1446',
        order: 3,
        hallId: 'hall-03',
      },
    ],
  },
  {
    id: 'hall-04',
    order: 4,
    name: '数字叙事厅',
    nameEn: 'Digital Narrative Hall',
    subtitle: '从网页到展厅',
    subtitleEn: 'From Webpage to Gallery',
    description:
      '原项目以网站形式呈现博物馆收藏、故事与虚拟参观。此厅展示线上博物馆的设计界面与叙事结构，作为虚拟展馆自身的元叙事。',
    descriptionEn:
      'The original project presented the museum collection, stories and virtual visit through a website. This hall displays the design interfaces as the meta-narrative of the online museum itself.',
    atmosphereImage: '/images/online-museum/atmosphere/home-screenshot.jpg',
    atmosphereAlt: '原线上博物馆网站首页截图',
    exhibits: [
      {
        id: 'E-11',
        title: '网站首页',
        titleEn: 'Homepage',
        caption: '博物馆品牌与导览入口',
        captionEn: 'Museum branding and navigation entry',
        image: '/images/online-museum/atmosphere/home-screenshot.jpg',
        alt: 'Weingreen Museum 网站首页截图',
        material: 'Web Interface',
        period: '2024',
        order: 1,
        hallId: 'hall-04',
      },
      {
        id: 'E-12',
        title: '收藏页',
        titleEn: 'Collection Page',
        caption: '网格化文物目录浏览',
        captionEn: 'Grid-based catalogue browsing',
        image: '/images/online-museum/atmosphere/collection-screenshot.jpg',
        alt: '收藏页截图，展示多个文物卡片',
        material: 'Web Interface',
        period: '2024',
        order: 2,
        hallId: 'hall-04',
      },
      {
        id: 'E-13',
        title: '虚拟参观页',
        titleEn: 'Virtual Visit Page',
        caption: '360° 虚拟参观入口',
        captionEn: '360° virtual tour entry',
        image: '/images/online-museum/atmosphere/virtual-visit-screenshot.jpg',
        alt: '虚拟参观页面截图',
        material: 'Web Interface',
        period: '2024',
        order: 3,
        hallId: 'hall-04',
      },
      {
        id: 'E-14',
        title: '故事与影像页',
        titleEn: 'Stories & Media',
        caption: '博物馆口述历史与博客内容',
        captionEn: 'Oral histories and blog content',
        image: '/images/online-museum/atmosphere/stories-screenshot.jpg',
        alt: 'Videos and Blogs 页面截图',
        material: 'Web Interface',
        period: '2024',
        order: 4,
        hallId: 'hall-04',
      },
    ],
  },
]

const onlineMuseumExhibition: Exhibition = {
  id: 'online-museum',
  title: '线上博物馆',
  titleEn: 'The Weingreen Museum Online',
  subtitle: '古埃及护身符与来世器物的数字展陈',
  subtitleEn: 'A Digital Exhibition of Egyptian Amulets & Afterlife Objects',
  preface:
    '一座收藏古代近东与埃及文物的博物馆，被重新构筑为可漫游的数字展厅。在这里，釉陶护身符、圣甲虫与沙布提俑从展柜走入光中，等待被逐一凝视。',
  prefaceEn:
    'A museum of ancient Near Eastern and Egyptian artefacts, rebuilt as a roamable digital gallery. Here, faience amulets, scarabs, and shabtis step out of their cases into light.',
  statement:
    '文物的沉默需要空间来承托。数字展馆不是为了替代真实展厅，而是为每一件器物提供一个被缓慢观看的房间。',
  statementEn:
    'The silence of artefacts needs space to hold it. The digital gallery does not replace the physical room; it gives each object a room in which to be seen slowly.',
  year: '2024',
  location: '线上展厅',
  locationEn: 'Online Gallery',
  medium: '网站设计 / 虚拟展厅 / 数字叙事',
  mediumEn: 'Web Design / Virtual Gallery / Digital Narrative',
  cover: '/images/online-museum/atmosphere/virtual-visit-screenshot.jpg',
  coverAlt: 'Weingreen Museum 虚拟展厅入口，展柜中陈列古代文物',
  accent: '#a85d5d',
  accentSecondary: '#4a7c8c',
  halls: onlineMuseumHalls,
}

/* ------------------------------------------------------------------ */
/*  Exhibition 02 — 爱尔兰策展 (new)                                   */
/* ------------------------------------------------------------------ */

const irishCurationHalls: Hall[] = [
  {
    id: 'ic-hall-01',
    order: 1,
    name: '启程厅',
    nameEn: 'Hall of Departures',
    subtitle: '海岸线 / 晨光 / 第一口呼吸',
    subtitleEn: 'Coastline · First Light · First Breath',
    description:
      '第一道光抵达爱尔兰西海岸时，风与盐已经开始书写它的名字。启程厅记录旅程最初的几帧：潮湿的空气、缓慢的云层、以及被海风磨圆的石面。',
    descriptionEn:
      'When the first light reaches the western coast of Ireland, wind and salt have already begun to write its name. This hall opens the journey with the earliest frames — damp air, slow clouds, and stones rounded by sea wind.',
    atmosphereImage: '/images/irish-curation/01.jpg',
    atmosphereAlt: '爱尔兰西海岸的清晨光影',
    exhibits: [
      {
        id: 'IC-01',
        title: '海岸线 I',
        titleEn: 'Coastline I',
        caption: '薄雾尚未完全退去时的海面与岸线',
        captionEn: 'The sea and shoreline before the mist has fully lifted',
        image: '/images/irish-curation/01.jpg',
        alt: '爱尔兰西海岸清晨的薄雾与岸线',
        material: 'Photograph',
        period: '2024',
        dimensions: '1 / 14',
        order: 1,
        hallId: 'ic-hall-01',
      },
      {
        id: 'IC-02',
        title: '海岸线 II',
        titleEn: 'Coastline II',
        caption: '云层与海水在远处相接的边界',
        captionEn: 'The meeting line of cloud and water in the distance',
        image: '/images/irish-curation/02.jpg',
        alt: '云层与海水在远方相接的边界',
        material: 'Photograph',
        period: '2024',
        dimensions: '2 / 14',
        order: 2,
        hallId: 'ic-hall-01',
      },
      {
        id: 'IC-03',
        title: '晨光',
        titleEn: 'First Light',
        caption: '光线抵达田野之前的过渡时刻',
        captionEn: 'The in-between moment before light reaches the field',
        image: '/images/irish-curation/03.jpg',
        alt: '光线抵达田野之前的过渡时刻',
        material: 'Photograph',
        period: '2024',
        dimensions: '3 / 14',
        order: 3,
        hallId: 'ic-hall-01',
      },
    ],
  },
  {
    id: 'ic-hall-02',
    order: 2,
    name: '田野厅',
    nameEn: 'Hall of Open Land',
    subtitle: '石墙 / 牧道 / 远山',
    subtitleEn: 'Stone Walls · Pastoral Path · Distant Hills',
    description:
      '离开海岸，地形向内陆铺开。田野厅呈现的是缓慢的、靠步行丈量的地形：篱笆、田垄、被放牧到低矮的草地，以及远处始终跟随的淡灰色山脊。',
    descriptionEn:
      'Leaving the coast, the land opens inland. This hall traces the slow, walkable terrain: fences, furrows, low pastures grazed close, and a pale grey ridge that follows from a distance.',
    atmosphereImage: '/images/irish-curation/05.jpg',
    atmosphereAlt: '爱尔兰内陆的田野与远山',
    exhibits: [
      {
        id: 'IC-04',
        title: '田与篱',
        titleEn: 'Fields & Fences',
        caption: '石砌篱笆在田块之间划出柔性的边界',
        captionEn: 'Stone fences drawing soft borders between fields',
        image: '/images/irish-curation/04.jpg',
        alt: '石砌篱笆在田块之间划出柔性的边界',
        material: 'Photograph',
        period: '2024',
        dimensions: '4 / 14',
        order: 1,
        hallId: 'ic-hall-02',
      },
      {
        id: 'IC-05',
        title: '石墙',
        titleEn: 'Stone Walls',
        caption: '长满苔藓的干砌石墙',
        captionEn: 'A dry-stone wall carrying the weight of moss',
        image: '/images/irish-curation/05.jpg',
        alt: '长满苔藓的干砌石墙',
        material: 'Photograph',
        period: '2024',
        dimensions: '5 / 14',
        order: 2,
        hallId: 'ic-hall-02',
      },
      {
        id: 'IC-06',
        title: '远山',
        titleEn: 'Distant Hills',
        caption: '阴云下被压低的山脊轮廓',
        captionEn: 'A ridge line pressed low beneath overcast sky',
        image: '/images/irish-curation/06.jpg',
        alt: '阴云下被压低的山脊轮廓',
        material: 'Photograph',
        period: '2024',
        dimensions: '6 / 14',
        order: 3,
        hallId: 'ic-hall-02',
      },
      {
        id: 'IC-07',
        title: '牧道',
        titleEn: 'Pastoral Path',
        caption: '沿着牧道向低处折返的小路',
        captionEn: 'A path turning back downhill along the pasture',
        image: '/images/irish-curation/07.jpg',
        alt: '沿着牧道向低处折返的小路',
        material: 'Photograph',
        period: '2024',
        dimensions: '7 / 14',
        order: 4,
        hallId: 'ic-hall-02',
      },
    ],
  },
  {
    id: 'ic-hall-03',
    order: 3,
    name: '居所厅',
    nameEn: 'Hall of Inhabited Places',
    subtitle: '街角 / 屋檐 / 门窗',
    subtitleEn: 'Street Corner · Eaves · Door & Window',
    description:
      '居所厅集中于人造空间——街道转角、屋檐阴影、半开的门窗。它们是气候与人共同作用的结果，也是旅人最容易走进去的房间。',
    descriptionEn:
      "This hall gathers the made spaces: street corners, eaves in shadow, half-open doors and windows. They are the result of weather meeting people — and the rooms a traveller most easily steps into.",
    atmosphereImage: '/images/irish-curation/09.jpg',
    atmosphereAlt: '爱尔兰小镇的街角与建筑细节',
    exhibits: [
      {
        id: 'IC-08',
        title: '街角',
        titleEn: 'Street Corner',
        caption: '涂成深色的门与相邻店铺的转角',
        captionEn: 'A dark-painted door at the corner of a small shop',
        image: '/images/irish-curation/08.jpg',
        alt: '涂成深色的门与相邻店铺的转角',
        material: 'Photograph',
        period: '2024',
        dimensions: '8 / 14',
        order: 1,
        hallId: 'ic-hall-03',
      },
      {
        id: 'IC-09',
        title: '屋檐',
        titleEn: 'Eaves',
        caption: '屋檐在石墙上投下的细长阴影',
        captionEn: 'A long, slim shadow cast by an eave onto stone',
        image: '/images/irish-curation/09.jpg',
        alt: '屋檐在石墙上投下的细长阴影',
        material: 'Photograph',
        period: '2024',
        dimensions: '9 / 14',
        order: 2,
        hallId: 'ic-hall-03',
      },
      {
        id: 'IC-10',
        title: '门',
        titleEn: 'Doorway',
        caption: '门框里透出室内暖光的瞬间',
        captionEn: 'A doorway letting a sliver of warm light through',
        image: '/images/irish-curation/10.jpg',
        alt: '门框里透出室内暖光的瞬间',
        material: 'Photograph',
        period: '2024',
        dimensions: '10 / 14',
        order: 3,
        hallId: 'ic-hall-03',
      },
      {
        id: 'IC-11',
        title: '窗',
        titleEn: 'Window',
        caption: '窗台上搁置的旧物与一束光',
        captionEn: 'Old objects on a windowsill with a stripe of light',
        image: '/images/irish-curation/11.jpg',
        alt: '窗台上搁置的旧物与一束光',
        material: 'Photograph',
        period: '2024',
        dimensions: '11 / 14',
        order: 4,
        hallId: 'ic-hall-03',
      },
    ],
  },
  {
    id: 'ic-hall-04',
    order: 4,
    name: '余光厅',
    nameEn: 'Hall of Afterlight',
    subtitle: '暮色 / 归途 / 尾声',
    subtitleEn: 'Twilight · Return · Coda',
    description:
      '旅程的最后几帧不是新的风景，而是回看时眼睛里残留的余光。余光厅收集一天结束时仍带着体温的画面：光在屋顶上慢慢退潮。',
    descriptionEn:
      "The last frames of a journey are not new landscapes, but the afterlight the eye keeps on the way back. This hall gathers the pictures that still hold body heat as the day ends — light slowly withdrawing from rooftops.",
    atmosphereImage: '/images/irish-curation/13.jpg',
    atmosphereAlt: '一天结束时仍带着体温的光线',
    exhibits: [
      {
        id: 'IC-12',
        title: '暮色',
        titleEn: 'Twilight',
        caption: '光尚未完全退场的过渡时刻',
        captionEn: 'A transitional moment before the light fully leaves',
        image: '/images/irish-curation/12.jpg',
        alt: '光尚未完全退场的过渡时刻',
        material: 'Photograph',
        period: '2024',
        dimensions: '12 / 14',
        order: 1,
        hallId: 'ic-hall-04',
      },
      {
        id: 'IC-13',
        title: '归途',
        titleEn: 'Return',
        caption: '回程车窗外的连绵地平线',
        captionEn: 'A long horizon seen through the return window',
        image: '/images/irish-curation/13.jpg',
        alt: '回程车窗外的连绵地平线',
        material: 'Photograph',
        period: '2024',
        dimensions: '13 / 14',
        order: 2,
        hallId: 'ic-hall-04',
      },
    ],
  },
]

const irishCurationExhibition: Exhibition = {
  id: 'irish-curation',
  title: '爱尔兰策展',
  titleEn: 'Curaidh — Photographs from Ireland',
  subtitle: '一场关于海岸、田野与居所的虚拟策展',
  subtitleEn: 'A virtual curation on coastline, open land and inhabited places',
  preface:
    '十四张影像，四个展厅，像一次被放慢的行走。启程厅记录抵达、田野厅丈量地形、居所厅进入人造的房间、余光厅收集一天结束时眼睛里仍带着体温的画面。',
  prefaceEn:
    'Fourteen photographs across four halls, paced like a slowed-down walk. The Hall of Departures records the arrival, the Hall of Open Land measures the terrain, the Hall of Inhabited Places steps into made rooms, and the Hall of Afterlight gathers the pictures still holding body heat as the day ends.',
  statement:
    '策展是为风景留出停顿的方式。每一张影像都是一个被刻意放慢的瞬间，邀请观者把目光当作脚步，慢慢走完这一段爱尔兰。',
  statementEn:
    'Curation is a way of making pauses for landscape. Each image is a deliberately slowed-down moment, inviting the viewer to use gaze as footsteps and walk slowly through this stretch of Ireland.',
  year: '2024',
  location: '爱尔兰 · 虚拟展厅',
  locationEn: 'Ireland · Virtual Gallery',
  medium: '摄影 / 虚拟策展 / 数字展陈',
  mediumEn: 'Photography / Virtual Curation / Digital Exhibition',
  cover: '/images/irish-curation/cover.jpg',
  coverAlt: '爱尔兰西海岸清晨的薄雾与岸线',
  accent: '#6f8a76',
  accentSecondary: '#b58a52',
  halls: irishCurationHalls,
}

/* ------------------------------------------------------------------ */
/*  Registry                                                            */
/* ------------------------------------------------------------------ */

export const exhibitions: Exhibition[] = [
  onlineMuseumExhibition,
  irishCurationExhibition,
]

// Backwards-compatible exports for the existing online-museum view.
export const onlineMuseum: Exhibition = onlineMuseumExhibition
export const halls: Hall[] = onlineMuseumHalls
export const allExhibits: Exhibit[] = onlineMuseumHalls.flatMap((h) => h.exhibits)

export function getExhibition(id: string | undefined): Exhibition | undefined {
  if (!id) return undefined
  return exhibitions.find((e) => e.id === id)
}

export function getExhibitionHalls(id: string | undefined): Hall[] {
  return getExhibition(id)?.halls ?? []
}

export function getExhibitionExhibits(id: string | undefined): Exhibit[] {
  return getExhibitionHalls(id).flatMap((h) => h.exhibits)
}

export function getHallById(id: string): Hall | undefined {
  for (const ex of exhibitions) {
    const found = ex.halls.find((h) => h.id === id)
    if (found) return found
  }
  return undefined
}

export function getExhibitById(id: string): Exhibit | undefined {
  for (const ex of exhibitions) {
    for (const hall of ex.halls) {
      const found = hall.exhibits.find((e) => e.id === id)
      if (found) return found
    }
  }
  return undefined
}

export function getAdjacentExhibit(exhibitId: string): {
  prev: Exhibit | null
  next: Exhibit | null
} {
  const all = exhibitions.flatMap((e) => e.halls.flatMap((h) => h.exhibits))
  const idx = all.findIndex((e) => e.id === exhibitId)
  if (idx === -1) return { prev: null, next: null }
  return {
    prev: idx > 0 ? all[idx - 1] : null,
    next: idx < all.length - 1 ? all[idx + 1] : null,
  }
}
