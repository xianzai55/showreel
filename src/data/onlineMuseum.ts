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
/*  Exhibition 01 — 苏州山水全图卷 (Digital Landscape)                    */
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
    atmosphereImage: '/images/苏州山水全图卷/毕设1.png',
    atmosphereAlt: '数字山水全景：苏州青绿山水城镇',
    exhibits: [
      {
        id: 'DL-01',
        title: '山水全景',
        titleEn: 'Landscape Panorama',
        caption: '可漫游的数字山水全景',
        captionEn: 'The walkable digital landscape in full view',
        image: '/images/苏州山水全图卷/毕设1.png',
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
        image: '/images/苏州山水全图卷/毕设1.png',
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
        image: '/images/苏州山水全图卷/毕设1.png',
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
    atmosphereImage: '/images/苏州山水全图卷/毕设1.png',
    atmosphereAlt: '塔院与山林',
    exhibits: [
      {
        id: 'DL-04',
        title: '塔院',
        titleEn: 'Pagoda Court',
        caption: '塔院在晨雾中显影',
        captionEn: 'The pagoda court appears in the morning mist',
        image: '/images/苏州山水全图卷/毕设1.png',
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
        image: '/images/苏州山水全图卷/毕设1.png',
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
        image: '/images/苏州山水全图卷/毕设1.png',
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
        image: '/images/苏州山水全图卷/毕设1.png',
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
    atmosphereImage: '/images/苏州山水全图卷/毕设1.png',
    atmosphereAlt: '远山淡影',
    exhibits: [
      {
        id: 'DL-08',
        title: '远山',
        titleEn: 'Distant Hills',
        caption: '远山以几笔墨色淡入留白',
        captionEn: 'Distant hills dissolving into emptiness with a few strokes',
        image: '/images/苏州山水全图卷/毕设1.png',
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
  title: '苏州山水全图卷',
  titleEn: 'The Whole Scroll of Suzhou Landscape',
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
  cover: '/images/苏州山水全图卷/毕设1.png',
  coverAlt: '数字山水全景：苏州青绿山水城镇',
  accent: '#d6d3cc',
  accentSecondary: '#70706c',
  halls: digitalLandscapeHalls,
}

/* ------------------------------------------------------------------ */
/*  Exhibition 02 — 天龙山石窟 (Tianlongshan Grottoes)                  */
/* ------------------------------------------------------------------ */

const tianlongshanHalls: Hall[] = [
  {
    id: 'tl-hall-01',
    order: 1,
    name: '凝视厅',
    nameEn: 'Hall of the Gaze',
    subtitle: '东峰 · 造像 · 眉眼',
    subtitleEn: 'Eastern Cliff · Sculpture · Gaze',
    description:
      '天龙山石窟开凿于东魏至唐。凝视厅从一张张仍保有温度的面孔出发 —— 低垂的眉眼、衣纹的起伏 —— 让唐代造像在数字化光里重新与你对视。',
    descriptionEn:
      'The Tianlongshan Grottoes were carved from the Eastern Wei to Tang dynasties. This hall begins with faces that still hold warmth — lowered eyes, the fold of robes — letting Tang sculpture meet your gaze again in digital light.',
    atmosphereImage: '/images/天龙山石窟/tls1.png',
    atmosphereAlt: '唐代石造菩萨头部的温和神态与残存金彩',
    exhibits: [
      {
        id: 'TL-01',
        title: '菩萨首',
        titleEn: 'Bodhisattva Head',
        caption: '低垂眉眼里的温和与虔敬',
        captionEn: 'Mildness and devotion in a lowered gaze',
        image: '/images/天龙山石窟/tls1.png',
        alt: '唐代石造菩萨头部',
        material: 'Freestone Sculpture',
        period: 'Tang Dynasty',
        order: 1,
        hallId: 'tl-hall-01',
      },
      {
        id: 'TL-02',
        title: '飞天',
        titleEn: 'Flying Apsara',
        caption: '衣带飘举的凌空之姿',
        captionEn: 'A figure floating on flowing ribbons',
        image: '/images/天龙山石窟/tls2.png',
        alt: '岩石高浮雕的飞天',
        material: 'Stone High Relief',
        period: 'Tang Dynasty',
        order: 2,
        hallId: 'tl-hall-01',
      },
      {
        id: 'TL-03',
        title: '窟龛全景',
        titleEn: 'Grotto Panorama',
        caption: '山崖之中层层叠叠的窟龛',
        captionEn: 'Rows of cave niches layered into the cliff',
        image: '/images/天龙山石窟/tls1.png',
        alt: '天龙山石窟山崖全景',
        material: 'Cave Temple',
        period: 'Eastern Wei — Tang',
        order: 3,
        hallId: 'tl-hall-01',
      },
    ],
  },
  {
    id: 'tl-hall-02',
    order: 2,
    name: '离散厅',
    nameEn: 'Hall of Dispersion',
    subtitle: '流失 · 残件 · 跨国',
    subtitleEn: 'Dispersion · Fragments · Across Borders',
    description:
      '二十世纪初，许多天龙山造像被凿下、流散至世界各地博物馆。离散厅呈现这些残件的现状 —— 被编号、被陈列，却在空间上远离其山崖的原位。',
    descriptionEn:
      'In the early 20th century many Tianlongshan sculptures were cut from the cliff and scattered across the world. This hall shows them as they are now — numbered, exhibited, yet spatially far from the cliff where they once stood.',
    atmosphereImage: '/images/天龙山石窟/tls1.png',
    atmosphereAlt: '流失残件陈列在展柜中，缺失的轮廓被标注',
    exhibits: [
      {
        id: 'TL-04',
        title: '残缺轮廓',
        titleEn: 'Silhouette of Loss',
        caption: '被凿走后留下的一处空缺',
        captionEn: 'A void left where stone was once cut away',
        image: '/images/天龙山石窟/tls1.png',
        alt: '展柜中的流失残件与缺失轮廓',
        material: 'Fragment / Exhibit',
        period: 'Tang Dynasty',
        order: 1,
        hallId: 'tl-hall-02',
      },
      {
        id: 'TL-05',
        title: '高浮雕扫描',
        titleEn: 'High-Relief Scan',
        caption: '以三维扫描重新记录流散的造像',
        captionEn: 'Re-recording the dispersed sculpture through 3D scanning',
        image: '/images/天龙山石窟/tls2.png',
        alt: '石造高浮雕的三维扫描可视化',
        material: '3D Scan',
        period: 'Contemporary Digitisation',
        order: 2,
        hallId: 'tl-hall-02',
      },
    ],
  },
  {
    id: 'tl-hall-03',
    order: 3,
    name: '重构厅',
    nameEn: 'Hall of Reassembly',
    subtitle: '数字 · 复归 · 整体',
    subtitleEn: 'Digital · Return · Wholeness',
    description:
      '离散不是终局。借由数字扫描与重建，分处世界各地的残件可以在虚拟空间里重新回到同一面山崖。重构厅让石窟在数字中复归其整体，把散佚重新陈列为一种开始。',
    descriptionEn:
      'Dispersion is not the end. Through digital scanning and reconstruction, fragments held in different corners of the world can be returned to the same cliff in virtual space. This hall restores the grotto to a whole in the digital, re-exhibiting what was scattered as a beginning.',
    atmosphereImage: '/images/天龙山石窟/tls2.png',
    atmosphereAlt: '三维重建的唐代造像',
    exhibits: [
      {
        id: 'TL-06',
        title: '数字重建',
        titleEn: 'Digital Reconstruction',
        caption: '残件在数据中重新合拢',
        captionEn: 'Fragments closed again within the data',
        image: '/images/天龙山石窟/tls2.png',
        alt: '三维重建的造像数据',
        material: 'Digital Reconstruction',
        period: '2024',
        order: 1,
        hallId: 'tl-hall-03',
      },
      {
        id: 'TL-07',
        title: '复归',
        titleEn: 'Return',
        caption: '飞天重新回到山崖之上',
        captionEn: 'The apsara returned to the cliff',
        image: '/images/天龙山石窟/tls2.png',
        alt: '高浮雕飞天复归',
        material: 'Digital Reconstruction',
        period: '2024',
        order: 2,
        hallId: 'tl-hall-03',
      },
    ],
  },
]

const tianlongshanExhibition: Exhibition = {
  id: 'tianlongshan',
  title: '天龙山石窟',
  titleEn: 'Tianlongshan Grottoes',
  subtitle: '散落在世界里的同一张脸',
  subtitleEn: 'One Face, Scattered Across the World',
  preface:
    '三间展厅 —— 凝视厅、离散厅、重构厅 —— 围绕天龙山石窟的唐代造像与流失海外的高浮雕残件展开。在凝视厅与仍保有温度的面孔对望，在离散厅看见被凿离原位的残件，在重构厅见证残片于数据中重新合拢，让石窟在数字空间里复归其整体。',
  prefaceEn:
    'Three halls — the Gaze, the Dispersion, the Reassembly — unfold around the Tang sculpture of the Tianlongshan Grottoes and their dispersed relief fragments. Meet faces that still hold warmth, see fragments cut from their origin, and witness them closed again in data as the grotto returns to a whole in digital space.',
  statement:
    '散佚不是终局，而是另一种等待被重新陈列的开始。',
  statementEn:
    'Dispersion is not an end, but a beginning waiting to be re-exhibited.',
  year: '2024',
  location: '山西太原 · 数字石窟',
  locationEn: 'Taiyuan, Shanxi · Digital Grotto',
  medium: '石窟数字化 / 3D 重建 / 数字展陈',
  mediumEn: 'Grotto Digitisation / 3D Reconstruction / Digital Exhibition',
  cover: '/images/天龙山石窟/tls1.png',
  coverAlt: '天龙山石窟东峰窟龛与天际轮廓',
  accent: '#d6d3cc',
  accentSecondary: '#70706c',
  halls: tianlongshanHalls,
}

/* ------------------------------------------------------------------ */
/*  Exhibition 03 — 北齐壁画博物馆 (Beiqi Mural Museum)                 */
/* ------------------------------------------------------------------ */

const beiqiMuralHalls: Hall[] = [
  {
    id: 'bq-hall-01',
    order: 1,
    name: '仪仗厅',
    nameEn: 'Hall of Procession',
    subtitle: '出行 · 车马 · 仪仗',
    subtitleEn: 'Outing · Carriage · Retinue',
    description:
      '北齐壁画以墓室长卷最为恢弘。仪仗厅让浩浩荡荡的出行队伍在数字展墙上重新展开 —— 车马随行、仪仗铺排，矿物色的厚重沿着墙面一路延伸。',
    descriptionEn:
      'Northern Qi murals are best known for their grand tomb-scroll processions. This hall unfolds the long retinue again on the digital wall — carriages and attendants in step, the weight of mineral pigment running along the surface.',
    atmosphereImage: '/images/北齐壁画博物馆/bq3.png',
    atmosphereAlt: '横向展开的北齐仪仗出行壁画',
    exhibits: [
      {
        id: 'BQ-01',
        title: '长卷仪仗',
        titleEn: 'Scroll Procession',
        caption: '沿墙展开的出殡仪仗与侍从',
        captionEn: 'A funeral retinue spelled out along the wall',
        image: '/images/北齐壁画博物馆/bq3.png',
        alt: '横向的仪仗出行壁画',
        material: 'Earthen-Wall Mural',
        period: 'Northern Qi',
        order: 1,
        hallId: 'bq-hall-01',
      },
      {
        id: 'BQ-02',
        title: '出行主景',
        titleEn: 'The Great Outing',
        caption: '车马人物构成的完整出行场景',
        captionEn: 'A full outing scene of carriages and figures',
        image: '/images/北齐壁画博物馆/bq1.png',
        alt: '北齐出行壁画主景',
        material: 'Mural',
        period: 'Northern Qi',
        order: 2,
        hallId: 'bq-hall-01',
      },
    ],
  },
  {
    id: 'bq-hall-02',
    order: 2,
    name: '骏马厅',
    nameEn: 'Hall of the Horse',
    subtitle: '通使 · 神骏 · 鞍辔',
    subtitleEn: 'Courier · Steed · Harness',
    description:
      '北齐壁画中的马常常比人物更动人 —— 通使牵马、鞍辔齐整，神骏之姿仿佛还带着墓室里的呼吸。骏马厅把这份静态的奔放单独挂上展墙。',
    descriptionEn:
      'The horses of Northern Qi murals are often more moving than the figures — couriers leading steeds, harnesses in order, the bearing of the horse still holding the breath of the tomb. This hall hangs that still gallop alone on the wall.',
    atmosphereImage: '/images/北齐壁画博物馆/bq2.png',
    atmosphereAlt: '牵马通使与骏马的壁画特写',
    exhibits: [
      {
        id: 'BQ-03',
        title: '通使与马',
        titleEn: 'Courier & Horse',
        caption: '牵马而行的人物与神骏',
        captionEn: 'A figure leading a fine steed',
        image: '/images/北齐壁画博物馆/bq2.png',
        alt: '牵马人物与骏马',
        material: 'Mural Detail',
        period: 'Northern Qi',
        order: 1,
        hallId: 'bq-hall-02',
      },
      {
        id: 'BQ-04',
        title: '神骏',
        titleEn: 'The Steed',
        caption: '鞍辔齐整的墓室骏马',
        captionEn: 'A tomb horse with harness intact',
        image: '/images/北齐壁画博物馆/bq2.png',
        alt: '骏马壁画特写',
        material: 'Mural Detail',
        period: 'Northern Qi',
        order: 2,
        hallId: 'bq-hall-02',
      },
    ],
  },
  {
    id: 'bq-hall-03',
    order: 3,
    name: '矿物厅',
    nameEn: 'Hall of Pigment',
    subtitle: '色彩 · 笔法 · 时间',
    subtitleEn: 'Colour · Brushwork · Time',
    description:
      '矿物厅凝视壁画的皮肤 —— 石青、朱砂、赭石与时间共同留下的裂纹。色彩不是静止的，它随光线与年岁呼吸；壁画的血管，就藏在这些矿物颗粒里。',
    descriptionEn:
      'This hall gazes at the skin of the mural — azurite, cinnabar, ochre and the cracks left by time together. Colour is not still; it breathes with light and age. The vessels of a mural lie inside these mineral grains.',
    atmosphereImage: '/images/北齐壁画博物馆/bq2.png',
    atmosphereAlt: '矿物色层的裂纹与笔法显微',
    exhibits: [
      {
        id: 'BQ-05',
        title: '宴乐',
        titleEn: 'Feast & Music',
        caption: '墓室中宴会与乐舞的场景',
        captionEn: 'A feast and music scene within the tomb',
        image: '/images/北齐壁画博物馆/bq1.png',
        alt: '北齐宴乐壁画',
        material: 'Mural',
        period: 'Northern Qi',
        order: 1,
        hallId: 'bq-hall-03',
      },
      {
        id: 'BQ-06',
        title: '矿物肌理',
        titleEn: 'Pigment Texture',
        caption: '矿物层在时间里的裂纹与剥落',
        captionEn: 'Cracks and flaking of the mineral layers over time',
        image: '/images/北齐壁画博物馆/bq2.png',
        alt: '矿物色肌理显微',
        material: 'Pigment Study',
        period: 'Northern Qi',
        order: 2,
        hallId: 'bq-hall-03',
      },
    ],
  },
]

const beiqiMuralExhibition: Exhibition = {
  id: 'beiqi-mural',
  title: '北齐壁画博物馆',
  titleEn: 'Beiqi Mural Museum',
  subtitle: '墓室里的呼吸与色彩',
  subtitleEn: 'Colour and Breath Inside the Tomb',
  preface:
    '三间展厅 —— 仪仗厅、骏马厅、矿物厅 —— 围绕北齐墓室壁画展开。在仪仗厅随浩浩荡荡的出行队伍前行，在骏马厅看神骏仍带着墓室里的呼吸，在矿物厅凝视色彩与时间共同留下的裂纹。',
  prefaceEn:
    'Three halls — the Procession, the Horse, the Pigment — unfold around the Northern Qi tomb murals. Walk with the great procession, see the steeds still holding the breath of the tomb, and gaze at the cracks colour and time have left together.',
  statement:
    '壁画的呼吸在色彩里，色彩的血管是时间。',
  statementEn:
    'A mural breathes through its colour, and the vessel of that colour is time.',
  year: '2024',
  location: '山西太原 · 数字壁画馆',
  locationEn: 'Taiyuan, Shanxi · Digital Mural Hall',
  medium: '壁画数字化 / 色彩复原 / 数字展陈',
  mediumEn: 'Mural Digitisation / Colour Restoration / Digital Exhibition',
  cover: '/images/北齐壁画博物馆/bq1.png',
  coverAlt: '北齐壁画墓室壁画的矿物色彩特写',
  accent: '#d6d3cc',
  accentSecondary: '#70706c',
  halls: beiqiMuralHalls,
}

/* ------------------------------------------------------------------ */
/*  Exhibition 04 — 体乐里 (AR Museum · Body)                           */
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
    atmosphereImage: '/images/体乐里体育博物馆/AR1.png',
    atmosphereAlt: 'AR 召唤场景：人物在身份证锚点上被立体召唤',
    exhibits: [
      {
        id: 'ARM-01',
        title: '应用入口',
        titleEn: 'App Entry',
        caption: 'AR 应用的首页与召唤入口',
        captionEn: 'Home screen and the entry point for AR summoning',
        image: '/images/体乐里体育博物馆/AR1.png',
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
        image: '/images/体乐里体育博物馆/AR1.png',
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
        image: '/images/体乐里体育博物馆/AR1.png',
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
    atmosphereImage: '/images/体乐里体育博物馆/AR1.png',
    atmosphereAlt: '青铜戈的数字展示界面',
    exhibits: [
      {
        id: 'ARM-04',
        title: '青铜戈',
        titleEn: 'Bronze Ge',
        caption: '长柄冷兵器，礼制与武力兼具',
        captionEn: 'A long-shafted cold weapon combining ritual and force',
        image: '/images/体乐里体育博物馆/AR1.png',
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
        image: '/images/体乐里体育博物馆/AR1.png',
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
    atmosphereImage: '/images/体乐里体育博物馆/AR1.png',
    atmosphereAlt: '马球人物 3D 数字模型',
    exhibits: [
      {
        id: 'ARM-06',
        title: '马球',
        titleEn: 'Polo',
        caption: '唐代马球人物，挥杖击球的瞬间',
        captionEn: 'Tang-dynasty polo player, the moment of striking the ball',
        image: '/images/体乐里体育博物馆/AR1.png',
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
        image: '/images/体乐里体育博物馆/AR1.png',
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
        image: '/images/体乐里体育博物馆/AR1.png',
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
  title: '体乐里体育博物馆',
  titleEn: 'Tǐ Yuè Lǐ — AR Sports Museum',
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
  cover: '/images/体乐里体育博物馆/AR1.png',
  coverAlt: 'AR 虚拟展厅内部视角',
  accent: '#d6d3cc',
  accentSecondary: '#70706c',
  halls: arMuseumHalls,
}

/* ------------------------------------------------------------------ */
/*  Exhibition 05 — Green Shoots of arts                               */
/* ------------------------------------------------------------------ */

const greenShootsHalls: Hall[] = [
  {
    id: 'gs-hall-01',
    order: 1,
    name: '萌发厅',
    nameEn: 'Hall of Sprouting',
    subtitle: '种子 · 土壤 · 新芽',
    subtitleEn: 'Seed · Soil · New Shoot',
    description:
      '以「新芽」为主题的策展项目。从种子与土壤出发，观看艺术在萌发之前的第一缕光，以及破土而出的那一刻。',
    descriptionEn:
      'A curation themed around sprouts. Starting from seed and soil, this hall watches the first glimmer before a piece of art germinates, and the moment it breaks through.',
    atmosphereImage: '/images/Green Shoots of arts/IMG_8637.MP4',
    atmosphereAlt: 'Green Shoots of arts · 展览封面',
    exhibits: [
      {
        id: 'GS-01',
        title: '新芽',
        titleEn: 'New Shoot',
        caption: '展览主视觉',
        captionEn: 'Exhibition key visual',
        image: '/images/Green Shoots of arts/IMG_8637.MP4',
        alt: 'Green Shoots of arts 主视觉',
        material: 'Curatorial Visual',
        period: '2024',
        order: 1,
        hallId: 'gs-hall-01',
      },
    ],
  },
]

const greenShootsExhibition: Exhibition = {
  id: 'green-shoots',
  title: 'Green Shoots of arts',
  titleEn: 'Green Shoots of Arts',
  subtitle: '艺术的新芽',
  subtitleEn: 'New Shoots of Art',
  preface:
    '在种子与土壤之间，在萌发与绽放之间，艺术以自身的方式生长。Green Shoots of arts 以「新芽」为题，将生长的过程重新放上展墙，等待它们破土。',
  prefaceEn:
    'Between seed and soil, between sprouting and blooming, art grows in its own way. Green Shoots of arts unfolds the act of growth back onto the wall, waiting for it to break ground.',
  statement: '艺术的新芽，总在无人注目的土壤里破土。',
  statementEn: 'New shoots of art always break ground where no one is looking.',
  year: '2024',
  location: '数字展馆 · Green Shoots',
  locationEn: 'Digital Gallery · Green Shoots',
  medium: '跨媒介 / 策展 / 数字展陈',
  mediumEn: 'Cross-media / Curation / Digital Exhibition',
  cover: '/images/Green Shoots of arts/IMG_8637.MP4',
  coverAlt: 'Green Shoots of arts · 展览封面',
  accent: '#d6d3cc',
  accentSecondary: '#70706c',
  halls: greenShootsHalls,
}

/* ------------------------------------------------------------------ */
/*  Registry                                                            */
/* ------------------------------------------------------------------ */

export const exhibitions: Exhibition[] = [
  digitalLandscapeExhibition,
  tianlongshanExhibition,
  beiqiMuralExhibition,
  arMuseumExhibition,
  greenShootsExhibition,
]

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