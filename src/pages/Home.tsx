import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { InteractiveBackdrop } from '../components/InteractiveBackdrop'
import { designCollections, exhibitions, site } from '../data/projects'
import { imageUrl } from '../utils/imageUrl'

const ease = [0.22, 1, 0.36, 1] as const

function EntryPanel({
  index,
  kicker,
  title,
  titleEn,
  blurb,
  cover,
  coverAlt,
  to,
}: {
  index: string
  kicker: string
  title: string
  titleEn: string
  blurb: string
  cover: string
  coverAlt: string
  to: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.35, ease }}
      whileHover="hover"
      className="group w-full"
    >
      <Link
        to={to}
        className="relative block border border-stone/50 bg-charcoal/40 overflow-hidden hover:border-rice/40 transition-colors duration-500"
      >
        {/* Cover */}
        <div className="relative aspect-[16/11] md:aspect-[16/9] overflow-hidden">
          <motion.img
            variants={{ hover: { scale: 1.06 } }}
            transition={{ duration: 1.2, ease }}
            src={imageUrl(cover)}
            alt={coverAlt}
            decoding="sync"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-700 contrast-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
        </div>

        {/* Meta */}
        <div className="relative px-7 md:px-10 py-8 md:py-10">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] text-ash uppercase mb-3">
                {index} — {kicker}
              </p>
              <h2 className="font-serif text-3xl md:text-5xl text-rice leading-tight">
                {title}
                <span className="hidden md:inline text-rice/40"> ·</span>
              </h2>
              <p className="mt-1 text-sm text-ash tracking-wide uppercase">{titleEn}</p>
              <p className="mt-4 text-sm text-rice/60 leading-relaxed max-w-md">{blurb}</p>
            </div>
            <span className="shrink-0 flex items-center justify-center w-11 h-11 md:w-12 md:h-12 border border-stone rounded-full text-rice/80 group-hover:border-rice group-hover:bg-rice group-hover:text-ink transition-colors duration-500 mt-1">
              <ArrowUpRight size={18} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export function Home() {
  const curationCount = exhibitions.length
  const designCount = designCollections.reduce((n, c) => n + c.images.length, 0)

  return (
    <div className="relative min-h-screen">
      {/* 交互式艺术背景：墨点随指针呼吸 */}
      <InteractiveBackdrop />

      {/* 序章：艺术家名 + 宣言 */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-[var(--board-gutter)]">
        <div className="w-full max-w-[var(--board-max)] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="font-mono text-[11px] tracking-[0.35em] uppercase text-ash block mb-6"
          >
            Digital Spatial Narrative Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.12, ease }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-rice leading-[1.05] tracking-tight"
          >
            {site.artist}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.24, ease }}
            className="mt-6 max-w-xl text-base md:text-lg text-rice/70 font-light leading-relaxed"
          >
            {site.statement}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-x-10 gap-y-3 text-[11px] tracking-[0.25em] uppercase text-ash"
          >
            <span>{String(curationCount).padStart(2, '0')} 展览 Exhibitions</span>
            <span>{String(designCount).padStart(2, '0')} 作品 Design Works</span>
            <span>{site.location}</span>
          </motion.div>
        </div>
      </section>

      {/* 两个入口：展览 / 设计集 */}
      <section className="relative z-10 px-6 md:px-[var(--board-gutter)] pb-24 md:pb-32">
        <div className="w-full max-w-[var(--board-max)] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          <EntryPanel
            index="01"
            kicker="Curated Spaces"
            title="展览"
            titleEn="Exhibitions"
            blurb="六座可漫游的数字展馆 —— 苏州山水、天龙山石窟、北齐壁画、体乐里、Green Shoots of arts，以及 The Weingreen Museum。点击进入，随导览顺序步入每间展厅。"
            cover={exhibitions[0].cover}
            coverAlt={exhibitions[0].coverAlt}
            to="/exhibition"
          />
          <EntryPanel
            index="02"
            kicker="Personal Practice"
            title="设计集"
            titleEn="Design Works"
            blurb="摄影与海报。横向推移浏览，图片依其自身比例展开，完整无裁切。"
            cover={designCollections[0].images[0].src}
            coverAlt="设计集 · 摄影作品"
            to="/design"
          />
        </div>
      </section>

      {/* 落款 */}
      <footer className="relative z-10 px-6 md:px-[var(--board-gutter)] pb-16">
        <div className="w-full max-w-[var(--board-max)] mx-auto border-t border-stone/40 pt-8 flex flex-col md:flex-row justify-between gap-3 text-[11px] tracking-[0.2em] uppercase text-ash">
          <span>© {site.artist} · Digital Spatial Narratives</span>
          <span className="text-rice/50">移动指针，墨点随呼吸散开</span>
        </div>
      </footer>
    </div>
  )
}