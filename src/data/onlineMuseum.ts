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
/*  Exhibition 03 — 体乐里 (AR Museum · Body)                           */
/* ------------------------------------------------------------------ */

const arMuseumHalls: Hall[] = [
  {
    id: 'arm-hall-01',
    order: 1,
    name: '召唤厅',
    nameEn: 'Hall of Summoning',
    subtitle: 'AR 锚定 / 虚实叠合',
    subtitleEn: 'AR Anchoring · Reality & Virtuality',
    description:
      '当摄像头扫过身份证或桌面，被锁在博物馆展柜里的运动人物，被重新放回身体曾经站立过的位置。召唤厅记录 AR 召唤发生的第一秒：从平面图像到立体身体的瞬间跃迁。',
    descriptionEn:
      'When the camera passes over an ID card or a tabletop, the sports figure once locked in a museum vitrine is placed back where the body once stood. This hall records the first second of AR summoning.',
    atmosphereImage: '/images/ar-museum/05.jpg',
    atmosphereAlt: 'AR 召唤场景：人物在身份证锚点上被立体召唤',
    exhibits: [
      {
        id: 'ARM-01',
        title: '应用入口',
        titleEn: 'App Entry',
        caption: 'AR 应用的首页与召唤入口',
        captionEn: 'Home screen and the entry point for AR summoning',
        image: '/images/ar-museum/01.jpg',
        alt: 'AR 应用首页',
        material: 'Application Interface',
        period: '2024',
        order: 1,
        hallId: 'arm-hall-01',
      },
      {
        id: 'ARM-02',
        title: 'AR 召唤时刻',
        titleEn: 'AR Summon Moment',
        caption: '3D 人物被锚定在身份证上',
        captionEn: '3D figure anchored on the ID card',
        image: '/images/ar-museum/05.jpg',
        alt: 'AR 角色与身份证锚点',
        material: 'AR Experience',
        period: '2024',
        order: 2,
        hallId: 'arm-hall-01',
      },
      {
        id: 'ARM-03',
        title: '展题门',
        titleEn: 'Exhibition Title Wall',
        caption: '「体乐里」三字题写的入口门',
        captionEn: 'The entrance wall inscribed with the project title',
        image: '/images/ar-museum/08.jpg',
        alt: '博物馆入口题字',
        material: 'Spatial Type',
        period: '2024',
        order: 3,
        hallId: 'arm-hall-01',
      },
    ],
  },
  {
    id: 'arm-hall-02',
    order: 2,
    name: '器物厅',
    nameEn: 'Hall of Artifacts',
    subtitle: '青铜 / 箭头 / 棋具',
    subtitleEn: 'Bronze · Arrowheads · Game Tools',
    description:
      '古代运动不是抽象的数字，而是被青铜戈、箭镞与棋具这些真实器物所托起。器物厅是博物馆展柜的延伸，把每一件器物转译为可被旋转、放大、阅读铭文的数字对象。',
    descriptionEn:
      'Ancient sport was never abstract — it was supported by real artefacts such as bronze ge, arrowheads and gaming tools. This hall extends the museum vitrine, translating each object into a digital one that can be rotated, enlarged and read.',
    atmosphereImage: '/images/ar-museum/02.jpg',
    atmosphereAlt: '青铜戈的数字展示界面',
    exhibits: [
      {
        id: 'ARM-04',
        title: '青铜戈',
        titleEn: 'Bronze Ge',
        caption: '长柄冷兵器，礼制与武力兼具',
        captionEn: 'A long-shafted cold weapon combining ritual and force',
        image: '/images/ar-museum/02.jpg',
        alt: '青铜戈展示',
        material: 'Bronze',
        period: 'Spring & Autumn Period',
        dimensions: 'L. 280mm',
        order: 1,
        hallId: 'arm-hall-02',
      },
      {
        id: 'ARM-05',
        title: '展墙影像',
        titleEn: 'Wall of Motion',
        caption: '冰上运动历史影像在展墙上循环播放',
        captionEn: 'Historical ice-sport imagery loops on the gallery wall',
        image: '/images/ar-museum/04.jpg',
        alt: '冰上运动影像墙',
        material: 'Moving Image',
        period: '2024',
        order: 2,
        hallId: 'arm-hall-02',
      },
    ],
  },
  {
    id: 'arm-hall-03',
    order: 3,
    name: '身体厅',
    nameEn: 'Hall of Bodies',
    subtitle: '马球 / 蹴鞠 / 棋艺',
    subtitleEn: 'Polo · Cuju · Weiqi',
    description:
      '身体厅聚焦于被转译为 3D 数字对象的运动人物。每一个角色都代表一种被放回身体的运动 —— 马球的奔马、蹴鞠的脚法、棋艺的沉思。',
    descriptionEn:
      'This hall focuses on the sports figures translated into 3D digital objects. Each character represents a sport returned to the body: the gallop of polo, the footwork of cuju, the contemplation of weiqi.',
    atmosphereImage: '/images/ar-museum/03.jpg',
    atmosphereAlt: '马球人物 3D 数字模型',
    exhibits: [
      {
        id: 'ARM-06',
        title: '马球',
        titleEn: 'Polo',
        caption: '唐代马球人物，挥杖击球的瞬间',
        captionEn: 'Tang-dynasty polo player, the moment of striking the ball',
        image: '/images/ar-museum/03.jpg',
        alt: '马球人物 3D 角色',
        material: '3D Character',
        period: 'Tang Dynasty',
        order: 1,
        hallId: 'arm-hall-03',
      },
      {
        id: 'ARM-07',
        title: '蹴鞠',
        titleEn: 'Cuju',
        caption: '古代足球动作的数字化还原',
        captionEn: 'Digital restoration of an ancient football motion',
        image: '/images/ar-museum/06.jpg',
        alt: '蹴鞠人物 3D 角色',
        material: '3D Character',
        period: 'Han — Tang',
        order: 2,
        hallId: 'arm-hall-03',
      },
      {
        id: 'ARM-08',
        title: '棋艺',
        titleEn: 'Weiqi',
        caption: '围棋对弈时的静坐姿态',
        captionEn: 'The seated posture of a weiqi player',
        image: '/images/ar-museum/07.jpg',
        alt: '棋艺人物 3D 角色',
        material: '3D Character',
        period: 'Han — Tang',
        order: 3,
        hallId: 'arm-hall-03',
      },
    ],
  },
]

const arMuseumExhibition: Exhibition = {
  id: 'ar-museum',
  title: '体乐里',
  titleEn: 'Tǐ Yuè Lǐ — AR Body Museum',
  subtitle: '从展柜到身体的中国古代运动',
  subtitleEn: 'From Vitrine to Body — Chinese Ancient Sports',
  preface:
    '从中国古代体育史出发，将文献、器物与运动图像转译为可交互的数字对象。三间展厅 —— 召唤厅、器物厅、身体厅 —— 邀请你从应用入口进入，让 AR 把博物馆展柜里的静止文物放回它们原本被使用的身体情境中。',
  prefaceEn:
    'Starting from the history of Chinese ancient sport, this project translates documents, artefacts and motion images into interactive digital objects. Three halls — Summoning, Artifacts, Bodies — invite you to step from the app entry and let AR return these still artefacts to the bodily situations they were once used in.',
  statement:
    '文物的沉默不是结束，而是等待一个被身体重新激活的瞬间。',
  statementEn:
    "The silence of an artefact is not an ending, but a moment waiting to be re-activated by the body.",
  year: '2024',
  location: '中国 · 数字博物馆',
  locationEn: 'China · Digital Museum',
  medium: 'AR / 3D 美术 / 交互原型',
  mediumEn: 'AR / 3D Art / Interaction Prototype',
  cover: '/images/ar-museum/cover.jpg',
  coverAlt: 'AR 虚拟展厅内部视角',
  accent: '#7a5a3f',
  accentSecondary: '#3a5a6a',
  halls: arMuseumHalls,
}

/* ------------------------------------------------------------------ */
/*  Exhibition 04 — 云林寺壁画 (Digital Mural · Yunlin Temple)         */
/* ------------------------------------------------------------------ */

const digitalMuralHalls: Hall[] = [
  {
    id: 'dm-hall-01',
    order: 1,
    name: '长卷厅',
    nameEn: 'Hall of the Scroll',
    subtitle: '矿物色 / 水陆 / 神祇',
    subtitleEn: 'Mineral Pigment · Water-Land Ritual · Deities',
    description:
      '山西阳高云林寺明代水陆壁画体量浩大，神祇众多。长卷厅让壁画在数字光中重新展开，矿物色的厚重被保留，而观看方式从静止凝视变为空间漫游。',
    descriptionEn:
      "The Ming-dynasty water-land murals of Yunlin Temple in Yanggao, Shanxi, are monumental and densely populated with deities. This hall lets the scroll reopen in digital light, keeping the weight of mineral pigment while changing the way of looking from stillness to a walk through space.",
    atmosphereImage: '/images/digital-mural/05.png',
    atmosphereAlt: '数字长卷在虚拟空间环绕展开',
    exhibits: [
      {
        id: 'DM-01',
        title: '长卷主视觉',
        titleEn: 'Scroll Main View',
        caption: '数字长卷在空间中的主视角',
        captionEn: 'Main view of the digital scroll in space',
        image: '/images/digital-mural/cover.jpg',
        alt: '壁画长卷局部',
        material: 'Digital Scroll',
        period: '2024',
        order: 1,
        hallId: 'dm-hall-01',
      },
      {
        id: 'DM-02',
        title: '长卷局部 A',
        titleEn: 'Scroll Fragment A',
        caption: '石青石绿与朱砂交织的神祇群像',
        captionEn: 'Deities woven with azurite, malachite and cinnabar',
        image: '/images/digital-mural/05.png',
        alt: '虚拟展厅长卷局部',
        material: 'Digital Scroll',
        period: '2024',
        order: 2,
        hallId: 'dm-hall-01',
      },
      {
        id: 'DM-03',
        title: '长卷局部 C',
        titleEn: 'Scroll Fragment C',
        caption: '矿物色最浓烈的局部',
        captionEn: 'A fragment where mineral pigment is at its densest',
        image: '/images/digital-mural/10.png',
        alt: '壁画局部',
        material: 'Digital Scroll',
        period: '2024',
        order: 3,
        hallId: 'dm-hall-01',
      },
    ],
  },
  {
    id: 'dm-hall-02',
    order: 2,
    name: '神祇厅',
    nameEn: 'Hall of Deities',
    subtitle: '面孔 / 衣纹 / 神性',
    subtitleEn: 'Faces · Robes · Divinity',
    description:
      '神祇厅是长卷的放大版。每一张面孔、每一道衣纹都被单独挂上数字展墙，让被密集排列淹没的个体神性重新可见。',
    descriptionEn:
      'The Hall of Deities is a magnified version of the scroll. Each face and each fold of robe is hung separately on the digital wall, so the individual divinity once buried in density becomes visible again.',
    atmosphereImage: '/images/digital-mural/09.jpg',
    atmosphereAlt: '壁画人物面孔特写',
    exhibits: [
      {
        id: 'DM-04',
        title: '面孔',
        titleEn: 'Face',
        caption: '矿物朱砂晕染的菩萨面孔',
        captionEn: 'A bodhisattva face tinted with mineral cinnabar',
        image: '/images/digital-mural/09.jpg',
        alt: '壁画人物特写',
        material: 'Mural Detail',
        period: 'Ming Dynasty',
        order: 1,
        hallId: 'dm-hall-02',
      },
      {
        id: 'DM-05',
        title: '群像 B',
        titleEn: 'Assembly B',
        caption: '神祇群像的横向铺陈',
        captionEn: 'A horizontal procession of deities',
        image: '/images/digital-mural/01.jpg',
        alt: '壁画人物群像',
        material: 'Mural Fragment',
        period: 'Ming Dynasty',
        order: 2,
        hallId: 'dm-hall-02',
      },
    ],
  },
  {
    id: 'dm-hall-03',
    order: 3,
    name: '体感厅',
    nameEn: 'Hall of Gestures',
    subtitle: '身体 / 手势 / 在场',
    subtitleEn: 'Body · Gesture · Presence',
    description:
      '体感厅把观众的身体重新放进展厅。手掌开合、合十、握拳等动作被映射为翻阅、放大、聚焦等壁画交互方式 —— 身体成为阅读壁画的媒介。',
    descriptionEn:
      'This hall puts the viewer\'s body back into the gallery. Palms opening, hands in prayer, fists clenching — these are mapped to the act of turning, zooming and focusing the mural. The body becomes a medium for reading the wall.',
    atmosphereImage: '/images/digital-mural/06.png',
    atmosphereAlt: '体感手势控制壁画的演示',
    exhibits: [
      {
        id: 'DM-06',
        title: '身体控制',
        titleEn: 'Body Control',
        caption: '手势被映射为壁画控制指令',
        captionEn: 'Gestures mapped to mural control commands',
        image: '/images/digital-mural/06.png',
        alt: '身体动作控制',
        material: 'Interactive System',
        period: '2024',
        order: 1,
        hallId: 'dm-hall-03',
      },
      {
        id: 'DM-07',
        title: '手势图解',
        titleEn: 'Gesture Diagram',
        caption: '手势与壁画交互的对应图解',
        captionEn: 'Diagram of gesture-to-mural mappings',
        image: '/images/digital-mural/07.png',
        alt: '手势说明',
        material: 'System Diagram',
        period: '2024',
        order: 2,
        hallId: 'dm-hall-03',
      },
    ],
  },
  {
    id: 'dm-hall-04',
    order: 4,
    name: '展呈厅',
    nameEn: 'Hall of Display',
    subtitle: '现场 / 推导 / 在场感',
    subtitleEn: 'On-Site · Derivation · Sense of Being There',
    description:
      '展呈厅汇集了项目从设计推导到现场呈现的所有图像。它是数字展馆自身的元展厅，展出数字壁画如何被构想、被推导、被落地为一场可被身体进入的展览。',
    descriptionEn:
      'This hall gathers every image from the project\'s design derivation to its on-site presentation. It is the meta-gallery of the digital exhibition itself, showing how the digital mural was imagined, derived and made into an exhibition the body can enter.',
    atmosphereImage: '/images/digital-mural/04.jpg',
    atmosphereAlt: '观众观看数字壁画的现场',
    exhibits: [
      {
        id: 'DM-08',
        title: '设计推导',
        titleEn: 'Design Derivation',
        caption: '从文献到数字壁画的设计推导',
        captionEn: 'From documents to the digital mural — design derivation',
        image: '/images/digital-mural/02.png',
        alt: '设计说明海报',
        material: 'Process Poster',
        period: '2024',
        order: 1,
        hallId: 'dm-hall-04',
      },
      {
        id: 'DM-09',
        title: '神祇分类',
        titleEn: 'Deity Taxonomy',
        caption: '按职能与位阶对神祇进行分类',
        captionEn: 'Classification of deities by function and rank',
        image: '/images/digital-mural/03.png',
        alt: '神祇分类海报',
        material: 'Process Poster',
        period: '2024',
        order: 2,
        hallId: 'dm-hall-04',
      },
      {
        id: 'DM-10',
        title: '现场观看',
        titleEn: 'On-Site Viewing',
        caption: '观众在屏幕前与壁画对望的瞬间',
        captionEn: 'A viewer meeting the mural in front of the screen',
        image: '/images/digital-mural/04.jpg',
        alt: '观众观看屏幕',
        material: 'Documentation',
        period: '2024',
        order: 3,
        hallId: 'dm-hall-04',
      },
      {
        id: 'DM-11',
        title: '展陈现场',
        titleEn: 'Exhibition Site',
        caption: '数字壁画展览的现场记录',
        captionEn: 'On-site documentation of the digital mural exhibition',
        image: '/images/digital-mural/08.png',
        alt: '展览现场',
        material: 'Documentation',
        period: '2024',
        order: 4,
        hallId: 'dm-hall-04',
      },
    ],
  },
]

const digitalMuralExhibition: Exhibition = {
  id: 'digital-mural',
  title: '云林寺壁画',
  titleEn: 'Yunlin Temple — Digital Mural',
  subtitle: '明代水陆壁画的体感活化',
  subtitleEn: 'Re-animating Ming Water-Land Murals through the Body',
  preface:
    '四间展厅 —— 长卷厅、神祇厅、体感厅、展呈厅 —— 围绕山西阳高云林寺的明代水陆壁画展开。在长卷厅感受矿物色的厚重，在神祇厅看见被密集排列淹没的个体神性，在体感厅用手势翻阅壁画，在展呈厅回看整场数字展览如何被构想与落地。',
  prefaceEn:
    'Four halls — the Scroll, the Deities, the Gestures, the Display — unfold around the Ming-dynasty water-land murals of Yunlin Temple in Yanggao, Shanxi. Feel the weight of mineral pigment in the Scroll, see the individual divinity once buried in density, turn the mural with your hands, and look back at how the exhibition was imagined and built.',
  statement:
    '壁画的褪色不是消逝，而是等待一次被重新凝视的仪式。',
  statementEn:
    'The fading of a mural is not disappearance, but a ritual waiting to be seen again.',
  year: '2024',
  location: '山西阳高 · 数字展厅',
  locationEn: 'Yanggao, Shanxi · Digital Gallery',
  medium: '体感交互 / 数字影像 / 壁画活化',
  mediumEn: 'Body Interaction / Digital Image / Mural Re-animation',
  cover: '/images/digital-mural/cover.jpg',
  coverAlt: '云林寺水陆壁画长卷局部',
  accent: '#b85c50',
  accentSecondary: '#4a7c8c',
  halls: digitalMuralHalls,
}

/* ------------------------------------------------------------------ */
/*  Exhibition 05 — 数字山水 (Digital Landscape)                        */
/* ------------------------------------------------------------------ */

const digitalLandscapeHalls: Hall[] = [
  {
    id: 'dl-hall-01',
    order: 1,
    name: '山径厅',
    nameEn: 'Hall of Mountain Paths',
    subtitle: '全景 / 远山 / 大境',
    subtitleEn: 'Panorama · Distant Hills · Great Realm',
    description:
      '从宋代青绿山水与江南园林出发，山径厅把观众带进一座可漫游的数字山水城镇的开阔全景。塔、桥、山径、远山在薄雾中铺开，留白比填满更重。',
    descriptionEn:
      'Starting from Song-dynasty blue-green landscape and Jiangnan gardens, this hall opens onto a walkable digital landscape town. Pagodas, bridges, paths and distant hills unfold in mist — where emptiness outweighs fill.',
    atmosphereImage: '/images/digital-landscape/cover.jpg',
    atmosphereAlt: '数字山水全景：苏州青绿山水城镇',
    exhibits: [
      {
        id: 'DL-01',
        title: '山水全景',
        titleEn: 'Landscape Panorama',
        caption: '可漫游的数字山水全景',
        captionEn: 'The walkable digital landscape in full view',
        image: '/images/digital-landscape/cover.jpg',
        alt: '数字山水全景',
        material: 'Digital Painting',
        period: '2024',
        order: 1,
        hallId: 'dl-hall-01',
      },
      {
        id: 'DL-02',
        title: '苏州山水',
        titleEn: 'Suzhou Landscape',
        caption: '以苏州园林为底本的水墨长卷',
        captionEn: 'An ink scroll based on Suzhou gardens',
        image: '/images/digital-landscape/01.jpg',
        alt: '苏州山水全景',
        material: 'Digital Painting',
        period: '2024',
        order: 2,
        hallId: 'dl-hall-01',
      },
      {
        id: 'DL-03',
        title: '山径',
        titleEn: 'Mountain Path',
        caption: '拾级而上的山间小道',
        captionEn: 'A small mountain path rising step by step',
        image: '/images/digital-landscape/04.jpg',
        alt: '山径拾级',
        material: 'Digital Painting',
        period: '2024',
        order: 3,
        hallId: 'dl-hall-01',
      },
    ],
  },
  {
    id: 'dl-hall-02',
    order: 2,
    name: '城镇厅',
    nameEn: 'Hall of the Town',
    subtitle: '塔院 / 桥下 / 渔村 / 街市',
    subtitleEn: 'Pagoda · Bridge · Fishing Village · Market',
    description:
      '城镇厅把全景拉近，呈现山水城镇中的几处日常 —— 塔院晨雾、桥下渔樵、渔村泊舟、街市叫卖。每一个小图都是进入山水的一个入口。',
    descriptionEn:
      'This hall zooms into the landscape town, presenting its daily corners: the pagoda in morning mist, the life under the bridge, the fishing village at rest, the market in motion. Each small image is an entrance into the whole landscape.',
    atmosphereImage: '/images/digital-landscape/02.jpg',
    atmosphereAlt: '塔院与山林',
    exhibits: [
      {
        id: 'DL-04',
        title: '塔院',
        titleEn: 'Pagoda Court',
        caption: '塔院在晨雾中显影',
        captionEn: 'The pagoda court appears in the morning mist',
        image: '/images/digital-landscape/02.jpg',
        alt: '塔与山林',
        material: 'Digital Painting',
        period: '2024',
        order: 1,
        hallId: 'dl-hall-02',
      },
      {
        id: 'DL-05',
        title: '桥下',
        titleEn: 'Under the Bridge',
        caption: '桥下停泊的小船与渔樵身影',
        captionEn: 'Small boats and the silhouette of a fisherman under the bridge',
        image: '/images/digital-landscape/03.jpg',
        alt: '桥下渔樵',
        material: 'Digital Painting',
        period: '2024',
        order: 2,
        hallId: 'dl-hall-02',
      },
      {
        id: 'DL-06',
        title: '渔村',
        titleEn: 'Fishing Village',
        caption: '泊舟与炊烟',
        captionEn: 'Moored boats and rising smoke',
        image: '/images/digital-landscape/05.jpg',
        alt: '渔村日常',
        material: 'Digital Painting',
        period: '2024',
        order: 3,
        hallId: 'dl-hall-02',
      },
      {
        id: 'DL-07',
        title: '街市',
        titleEn: 'Market Street',
        caption: '山水之间的小小街市',
        captionEn: 'A small market tucked between hills and water',
        image: '/images/digital-landscape/06.jpg',
        alt: '街市',
        material: 'Digital Painting',
        period: '2024',
        order: 4,
        hallId: 'dl-hall-02',
      },
    ],
  },
  {
    id: 'dl-hall-03',
    order: 3,
    name: '余境厅',
    nameEn: 'Hall of After-Realm',
    subtitle: '远山 / 漫游提示 / 题跋',
    subtitleEn: 'Distant Hills · Roaming Hint · Colophon',
    description:
      '余境厅是全景与近景之间最后一段留白。远山在画面边缘淡化为几笔墨色，漫游提示以极小字号出现在画面角落 —— 如古画题跋，不破坏山水本身的空灵感。',
    descriptionEn:
      'The final hall is a stretch of emptiness between the panorama and the close-ups. Distant hills fade into a few strokes of ink at the edges, and the roaming hint appears in tiny type at a corner — like a colophon on an old painting, never breaking the emptiness of the landscape itself.',
    atmosphereImage: '/images/digital-landscape/07.jpg',
    atmosphereAlt: '远山淡影',
    exhibits: [
      {
        id: 'DL-08',
        title: '远山',
        titleEn: 'Distant Hills',
        caption: '远山以几笔墨色淡入留白',
        captionEn: 'Distant hills dissolving into emptiness with a few strokes',
        image: '/images/digital-landscape/07.jpg',
        alt: '远景',
        material: 'Digital Painting',
        period: '2024',
        order: 1,
        hallId: 'dl-hall-03',
      },
    ],
  },
]

const digitalLandscapeExhibition: Exhibition = {
  id: 'digital-landscape',
  title: '数字山水',
  titleEn: 'Digital Landscape — A Walkable Realm',
  subtitle: '以手势为舟的青绿山水漫游',
  subtitleEn: 'A Blue-Green Landscape Roamed by Gesture',
  preface:
    '三间展厅 —— 山径厅、城镇厅、余境厅 —— 邀请你漫游一座以宋代青绿山水与江南园林为底本的数字山水城镇。塔、桥、渔村、远山在薄雾中铺开，双手握拳前后移动可以漫步其间，画面角落的小字题跋告诉你如何用身体进入山水。',
  prefaceEn:
    'Three halls — Mountain Paths, the Town, After-Realm — invite you to walk through a digital landscape based on Song-dynasty blue-green painting and Jiangnan gardens. Pagodas, bridges, a fishing village and distant hills open up in the mist; fists move you forward, and tiny colophon-style hints tell you how to enter the landscape with your body.',
  statement:
    '山水不是被观看的风景，而是可以被身体进入的境界。',
  statementEn:
    'Landscape is not a scene to be viewed, but a realm to be entered by the body.',
  year: '2024',
  location: '江南 · 数字山水展厅',
  locationEn: 'Jiangnan · Digital Landscape Gallery',
  medium: '体感交互 / 数字影像 / 空间叙事',
  mediumEn: 'Body Interaction / Digital Image / Spatial Narrative',
  cover: '/images/digital-landscape/cover.jpg',
  coverAlt: '数字山水全景：苏州青绿山水城镇',
  accent: '#5e7d6b',
  accentSecondary: '#a85d4d',
  halls: digitalLandscapeHalls,
}

/* ------------------------------------------------------------------ */
/*  Exhibition 06 — 星球召唤 (Planet Summon)                           */
/* ------------------------------------------------------------------ */

const planetSummonHalls: Hall[] = [
  {
    id: 'ps-hall-01',
    order: 1,
    name: '深空厅',
    nameEn: 'Hall of Deep Space',
    subtitle: '巨构 / 飞船 / 仰望',
    subtitleEn: 'Megastructure · Starship · Looking Up',
    description:
      '深空厅把巨构飞船悬挂在展馆正中。冷蓝紫为底，锈红与青绿是仅有的两处光源 —— 一切都在提醒观者：在寂静的星球表面，仰望是人类最后的仪式。',
    descriptionEn:
      'This hall suspends a megastructure starship at the center of the gallery. Cold blue-violet is the ground, rust-red and teal are the only two sources of light — everything reminds the viewer: on the silent surface of a planet, looking up is the last human ritual.',
    atmosphereImage: '/images/planet-summon/cover.png',
    atmosphereAlt: '星球召唤主视觉：深空中的飞船与孤独角色',
    exhibits: [
      {
        id: 'PS-01',
        title: '主视觉',
        titleEn: 'Hero Image',
        caption: '深空、巨构与仰望的角色剪影',
        captionEn: 'Deep space, megastructure and the silhouette of one who looks up',
        image: '/images/planet-summon/cover.png',
        alt: '星球召唤主视觉',
        material: 'Concept Art',
        period: '2024',
        order: 1,
        hallId: 'ps-hall-01',
      },
      {
        id: 'PS-02',
        title: '飞船局部',
        titleEn: 'Starship Fragment',
        caption: '巨构飞船的近距细节',
        captionEn: 'Close-up detail of the megastructure',
        image: '/images/planet-summon/02.png',
        alt: '飞船细节',
        material: 'Concept Art',
        period: '2024',
        order: 2,
        hallId: 'ps-hall-01',
      },
      {
        id: 'PS-03',
        title: '冷夜',
        titleEn: 'Cold Night',
        caption: '深空蓝紫下的星球夜色',
        captionEn: 'Planetary night under deep-space blue-violet',
        image: '/images/planet-summon/05.png',
        alt: '冷夜场景',
        material: 'Concept Art',
        period: '2024',
        order: 3,
        hallId: 'ps-hall-01',
      },
    ],
  },
  {
    id: 'ps-hall-02',
    order: 2,
    name: '地表厅',
    nameEn: 'Hall of the Surface',
    subtitle: '荒凉 / 角色 / 信标',
    subtitleEn: 'Barren · Character · Beacon',
    description:
      '地表厅是角色站立的地方。地表被压成锈红色，废墟点缀其间，远处始终有一束光。来自未知文明的信号，或仅仅是希望。',
    descriptionEn:
      'This hall is where the character stands. The surface is pressed into rust-red, ruins are scattered, and a single beam of light is always in the distance. A signal from an unknown civilization — or simply hope.',
    atmosphereImage: '/images/planet-summon/01.png',
    atmosphereAlt: '角色在荒凉地表上仰望',
    exhibits: [
      {
        id: 'PS-04',
        title: '地表 A',
        titleEn: 'Surface A',
        caption: '角色剪影与荒凉地表',
        captionEn: 'Character silhouette and a barren surface',
        image: '/images/planet-summon/01.png',
        alt: '角色剪影',
        material: 'Concept Art',
        period: '2024',
        order: 1,
        hallId: 'ps-hall-02',
      },
      {
        id: 'PS-05',
        title: '地表 C',
        titleEn: 'Surface C',
        caption: '地表上的第三道远景',
        captionEn: 'A third view onto the surface',
        image: '/images/planet-summon/03.png',
        alt: '场景三',
        material: 'Concept Art',
        period: '2024',
        order: 2,
        hallId: 'ps-hall-02',
      },
    ],
  },
  {
    id: 'ps-hall-03',
    order: 3,
    name: '信号厅',
    nameEn: 'Hall of the Signal',
    subtitle: '光 / 接收 / 仪式',
    subtitleEn: 'Light · Receiving · Ritual',
    description:
      '信号厅收集所有与「接收信号」相关的画面 —— 青绿信号光、锈红地平线、角色与光的对视。召唤不是咒语，而是安静地站在光里。',
    descriptionEn:
      'This hall gathers every image related to "receiving the signal" — the teal signal light, the rust-red horizon, the character facing the light. Summoning is not a spell, but standing quietly inside the light.',
    atmosphereImage: '/images/planet-summon/06.png',
    atmosphereAlt: '角色与信号光',
    exhibits: [
      {
        id: 'PS-06',
        title: '信号接收',
        titleEn: 'Signal Received',
        caption: '角色与青绿信号光对视',
        captionEn: 'Character facing the teal signal light',
        image: '/images/planet-summon/06.png',
        alt: '角色与信号光',
        material: 'Concept Art',
        period: '2024',
        order: 1,
        hallId: 'ps-hall-03',
      },
      {
        id: 'PS-07',
        title: '地表 B',
        titleEn: 'Surface B',
        caption: '信号临近时的第二道地表',
        captionEn: 'A second view of the surface as the signal approaches',
        image: '/images/planet-summon/04.png',
        alt: '场景二',
        material: 'Concept Art',
        period: '2024',
        order: 2,
        hallId: 'ps-hall-03',
      },
    ],
  },
]

const planetSummonExhibition: Exhibition = {
  id: 'planet-summon',
  title: '星球召唤',
  titleEn: 'Planet Summon — A Sci-Fi Concept',
  subtitle: '深空、废墟与召唤的科幻游戏概念',
  subtitleEn: 'A Sci-Fi Game Concept of Deep Space, Ruin and Summoning',
  preface:
    '三间展厅 —— 深空厅、地表厅、信号厅 —— 共同构成一颗被寂静覆盖的星球。巨构飞船悬挂在展馆正中，角色在荒凉的地表仰望，唯一能听见的是来自未知文明的青绿色信号。',
  prefaceEn:
    'Three halls — Deep Space, the Surface, the Signal — together form a planet covered in silence. A megastructure starship hangs in the middle of the gallery, a character looks up from the barren surface, and the only thing audible is a teal signal from an unknown civilisation.',
  statement:
    '在寂静的星球表面，仰望是人类最后的仪式。',
  statementEn:
    'On the silent surface of a planet, looking up is the last human ritual.',
  year: '2024',
  location: '未知星球 · 数字展厅',
  locationEn: 'Unknown Planet · Digital Gallery',
  medium: '游戏概念 / 数字绘景 / 叙事设计',
  mediumEn: 'Game Concept / Digital Matte Painting / Narrative Design',
  cover: '/images/planet-summon/cover.png',
  coverAlt: '星球召唤主视觉：深空中的飞船与孤独角色',
  accent: '#5b9bd5',
  accentSecondary: '#4ecdc4',
  halls: planetSummonHalls,
}

/* ------------------------------------------------------------------ */
/*  Exhibition 07 — 爱尔兰风景摄影 (Irish Landscape)                   */
/* ------------------------------------------------------------------ */

const irishLandscapeHalls: Hall[] = [
  {
    id: 'il-hall-01',
    order: 1,
    name: '水畔厅',
    nameEn: 'Hall of the Water',
    subtitle: '湖面 / 帆影 / 静水',
    subtitleEn: 'Lake · Sail · Still Water',
    description:
      '水畔厅收集所有与水有关的画面 —— 平静的湖面、远处的帆影、海面与岸线在远处相接的边界。水把人的视线拉得很远，让天空的留白成为画面里最大的部分。',
    descriptionEn:
      'This hall gathers every image connected to water — a still lake, a distant sail, the line where sea meets shore. Water pulls the gaze far away, and the empty sky becomes the largest part of every picture.',
    atmosphereImage: '/images/irish-landscape/01.jpg',
    atmosphereAlt: '湖面上的红帆船与远处岸线',
    exhibits: [
      {
        id: 'IL-01',
        title: '帆影',
        titleEn: 'Sail',
        caption: '湖面上静泊的红帆船',
        captionEn: 'A red sailboat resting on the lake',
        image: '/images/irish-landscape/01.jpg',
        alt: '湖面与红帆船',
        material: 'Photograph',
        period: '2024',
        order: 1,
        hallId: 'il-hall-01',
      },
      {
        id: 'IL-02',
        title: '海面',
        titleEn: 'Sea',
        caption: '海面与石塔在远处相遇',
        captionEn: 'Sea and stone tower meeting in the distance',
        image: '/images/irish-landscape/09.jpg',
        alt: '海面与石塔',
        material: 'Photograph',
        period: '2024',
        order: 2,
        hallId: 'il-hall-01',
      },
      {
        id: 'IL-03',
        title: '远水',
        titleEn: 'Distant Water',
        caption: '远处水面与天空相接',
        captionEn: 'Distant water meeting the sky',
        image: '/images/irish-landscape/11.jpg',
        alt: '远处水面',
        material: 'Photograph',
        period: '2024',
        order: 3,
        hallId: 'il-hall-01',
      },
    ],
  },
  {
    id: 'il-hall-02',
    order: 2,
    name: '海岸厅',
    nameEn: 'Hall of the Coast',
    subtitle: '悬崖 / 孤影 / 海风',
    subtitleEn: 'Cliff · Solitary Figure · Sea Wind',
    description:
      '海岸厅是爱尔兰西海岸最具存在感的一组画面 —— 一个人站在悬崖边，整片海在身后。天与海各自占据画面的一半，没有人说话。',
    descriptionEn:
      'This hall gathers the most present images of the western Irish coast — one person standing at the edge of a cliff, the entire ocean behind them. Sky and sea each take half the frame, and no one speaks.',
    atmosphereImage: '/images/irish-landscape/07.jpg',
    atmosphereAlt: '悬崖边的人与海',
    exhibits: [
      {
        id: 'IL-04',
        title: '悬崖',
        titleEn: 'Cliff',
        caption: '站在悬崖边的孤影与身后的海',
        captionEn: 'A solitary figure at the cliff, with the sea behind',
        image: '/images/irish-landscape/07.jpg',
        alt: '悬崖边的人',
        material: 'Photograph',
        period: '2024',
        order: 1,
        hallId: 'il-hall-02',
      },
      {
        id: 'IL-05',
        title: '远岸',
        titleEn: 'Distant Shore',
        caption: '远处岸线与海风',
        captionEn: 'A distant shoreline in the sea wind',
        image: '/images/irish-landscape/12.jpg',
        alt: '远岸',
        material: 'Photograph',
        period: '2024',
        order: 2,
        hallId: 'il-hall-02',
      },
      {
        id: 'IL-06',
        title: '静崖',
        titleEn: 'Quiet Cliff',
        caption: '无人时的海岸线',
        captionEn: 'A coast when no one is there',
        image: '/images/irish-landscape/02.jpg',
        alt: '无人海岸',
        material: 'Photograph',
        period: '2024',
        order: 3,
        hallId: 'il-hall-02',
      },
    ],
  },
  {
    id: 'il-hall-03',
    order: 3,
    name: '林荫厅',
    nameEn: 'Hall of Trees',
    subtitle: '光斑 / 长椅 / 林下日常',
    subtitleEn: 'Light Patch · Bench · Forest Daily',
    description:
      '林荫厅是绿色的。阳光透过针叶林落在草地上，长椅上坐着安静的人。城市与海都被暂时关在树林之外。',
    descriptionEn:
      'This hall is green. Sunlight falls through the conifers onto the lawn, and quiet people sit on a bench. For a moment, the city and the sea are shut out beyond the trees.',
    atmosphereImage: '/images/irish-landscape/05.jpg',
    atmosphereAlt: '针叶林下的草地与长椅',
    exhibits: [
      {
        id: 'IL-07',
        title: '林下',
        titleEn: 'Under the Trees',
        caption: '针叶林下的草地与长椅',
        captionEn: 'Lawn and bench under conifers',
        image: '/images/irish-landscape/05.jpg',
        alt: '林下草地',
        material: 'Photograph',
        period: '2024',
        order: 1,
        hallId: 'il-hall-03',
      },
      {
        id: 'IL-08',
        title: '光与叶',
        titleEn: 'Light & Leaves',
        caption: '阳光在叶缝里落下',
        captionEn: 'Sunlight falls between the leaves',
        image: '/images/irish-landscape/03.jpg',
        alt: '光与叶',
        material: 'Photograph',
        period: '2024',
        order: 2,
        hallId: 'il-hall-03',
      },
      {
        id: 'IL-09',
        title: '绿意',
        titleEn: 'Greenery',
        caption: '林间一处鲜绿',
        captionEn: 'A patch of vivid green between trees',
        image: '/images/irish-landscape/04.jpg',
        alt: '绿意',
        material: 'Photograph',
        period: '2024',
        order: 3,
        hallId: 'il-hall-03',
      },
    ],
  },
  {
    id: 'il-hall-04',
    order: 4,
    name: '街巷厅',
    nameEn: 'Hall of Streets',
    subtitle: '电车 / 屋檐 / 招牌',
    subtitleEn: 'Tram · Eaves · Signboard',
    description:
      '街巷厅收集都柏林与小镇的几帧街景 —— 远去的电车、泛黄的屋檐、写着 "Devaney" 的酒馆招牌。街巷不是被规划的风景，是被居住过的痕迹。',
    descriptionEn:
      'This hall gathers a few frames of streets in Dublin and small towns — a tram receding, yellowed eaves, a pub sign reading "Devaney". Streets are not a planned view but a record of having been lived in.',
    atmosphereImage: '/images/irish-landscape/10.jpg',
    atmosphereAlt: '都柏林街景与远去的电车',
    exhibits: [
      {
        id: 'IL-10',
        title: '电车',
        titleEn: 'Tram',
        caption: '都柏林街景中远去的电车',
        captionEn: 'A tram receding in a Dublin street',
        image: '/images/irish-landscape/10.jpg',
        alt: '都柏林街景与电车',
        material: 'Photograph',
        period: '2024',
        order: 1,
        hallId: 'il-hall-04',
      },
      {
        id: 'IL-11',
        title: '小镇',
        titleEn: 'Small Town',
        caption: '写着 "Devaney" 的酒馆与小镇街道',
        captionEn: 'A pub sign reading "Devaney" and a small-town street',
        image: '/images/irish-landscape/14.jpg',
        alt: '小镇街景',
        material: 'Photograph',
        period: '2024',
        order: 2,
        hallId: 'il-hall-04',
      },
      {
        id: 'IL-12',
        title: '城角',
        titleEn: 'City Corner',
        caption: '城市转角的一处静景',
        captionEn: 'A quiet corner in the city',
        image: '/images/irish-landscape/06.jpg',
        alt: '城市转角',
        material: 'Photograph',
        period: '2024',
        order: 3,
        hallId: 'il-hall-04',
      },
    ],
  },
  {
    id: 'il-hall-05',
    order: 5,
    name: '日常厅',
    nameEn: 'Hall of the Everyday',
    subtitle: '通勤 / 余温 / 一束光',
    subtitleEn: 'Commute · Residual Warmth · A Stripe of Light',
    description:
      '日常厅是这次策展最后的留白 —— 一节车厢里的通勤者、阳光下被一束光穿过的玻璃窗。它们提醒观者：旅行最美的瞬间，常常发生在目的地的间隙。',
    descriptionEn:
      'This final hall is the most spare of the exhibition — a commuter in a train car, a stripe of light crossing a windowpane. They remind the viewer that the most beautiful moments of a journey often happen in the in-between.',
    atmosphereImage: '/images/irish-landscape/13.jpg',
    atmosphereAlt: '车厢里戴帽子的通勤者',
    exhibits: [
      {
        id: 'IL-13',
        title: '通勤',
        titleEn: 'Commute',
        caption: '车厢里戴帽子的通勤者',
        captionEn: 'A commuter in a beanie on a train',
        image: '/images/irish-landscape/13.jpg',
        alt: '车厢里的通勤者',
        material: 'Photograph',
        period: '2024',
        order: 1,
        hallId: 'il-hall-05',
      },
      {
        id: 'IL-14',
        title: '一束光',
        titleEn: 'A Stripe of Light',
        caption: '落在玻璃上的光',
        captionEn: 'A stripe of light falling on the glass',
        image: '/images/irish-landscape/08.jpg',
        alt: '玻璃上的光',
        material: 'Photograph',
        period: '2024',
        order: 2,
        hallId: 'il-hall-05',
      },
    ],
  },
]

const irishLandscapeExhibition: Exhibition = {
  id: 'irish-landscape',
  title: '爱尔兰风景摄影',
  titleEn: 'In Ireland — 14 Glimpses',
  subtitle: '海岸、林荫、街巷与日常',
  subtitleEn: 'Coastline, Woods, Streets and the Everyday',
  preface:
    '五间展厅 —— 水畔厅、海岸厅、林荫厅、街巷厅、日常厅 —— 收集十四张爱尔兰的瞬间。它们不必组合成一个完整的故事，只是被共同放进同一座展馆里，让观者按自己的速度走完。',
  prefaceEn:
    'Five halls — the Water, the Coast, the Trees, the Streets, the Everyday — gather fourteen glimpses of Ireland. They do not need to form a complete story; they are simply placed in the same gallery, for the viewer to walk through at their own pace.',
  statement:
    '风景不是被看见的，而是被走过的。',
  statementEn:
    'A landscape is not seen — it is walked through.',
  year: '2024',
  location: '爱尔兰 · 虚拟展厅',
  locationEn: 'Ireland · Virtual Gallery',
  medium: '摄影 / 虚拟策展',
  mediumEn: 'Photography / Virtual Curation',
  cover: '/images/irish-landscape/cover.jpg',
  coverAlt: '爱尔兰湖面与红帆船',
  accent: '#4a6b7a',
  accentSecondary: '#c8a366',
  halls: irishLandscapeHalls,
}

/* ------------------------------------------------------------------ */
/*  Registry                                                            */
/* ------------------------------------------------------------------ */

export const exhibitions: Exhibition[] = [
  onlineMuseumExhibition,
  arMuseumExhibition,
  digitalMuralExhibition,
  digitalLandscapeExhibition,
  planetSummonExhibition,
  irishCurationExhibition,
  irishLandscapeExhibition,
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
