import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { exhibitions } from '../data/projects'
import { imageUrl } from '../utils/imageUrl'

const ease = [0.22, 1, 0.36, 1] as const

export function Exhibition() {
  return (
    <div className="pt-28 md:pt-36 pb-24 md:pb-32 px-6 md:px-[var(--board-gutter)]">
      <div className="w-full max-w-[var(--board-max)] mx-auto">
        {/* 页头 */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
          className="mb-14 md:mb-20"
        >
          <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-ash mb-5">
            Curated Spaces — 展览
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-rice leading-tight">
            展览目录
          </h1>
          <p className="mt-5 text-base md:text-lg text-rice/60 font-light max-w-2xl leading-relaxed">
            五座数字展馆，各自由若干可漫游的展厅构成。点击任一展览，随导览顺序或自由平面图进入，点开作品可放大端详。
          </p>
        </motion.header>

        {/* 展览列表 */}
        <div className="flex flex-col divide-y divide-stone/40 border-y border-stone/40">
          {exhibitions.map((ex, index) => (
            <motion.div
              key={ex.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: Math.min(index * 0.06, 0.3), ease }}
            >
              <Link
                to={`/exhibition/${ex.id}`}
                className="group grid grid-cols-12 items-center gap-x-6 gap-y-6 py-8 md:py-12"
              >
                {/* 序号 */}
                <span className="col-span-12 md:col-span-1 font-serif text-2xl md:text-4xl text-ash group-hover:text-rice transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* 封面 */}
                <div className="col-span-12 md:col-span-4 overflow-hidden bg-charcoal border border-stone/40 group-hover:border-rice/30 aspect-[16/10]">
                  <img
                    src={imageUrl(ex.cover)}
                    alt={ex.coverAlt}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>

                {/* 文字 */}
                <div className="col-span-12 md:col-span-6">
                  <h2 className="font-serif text-2xl md:text-4xl text-rice group-hover:text-rice-dim transition-colors">
                    {ex.title}
                  </h2>
                  <p className="mt-1 text-sm text-ash tracking-wide uppercase">{ex.titleEn}</p>
                  <p className="mt-3 text-sm text-rice/60 leading-relaxed max-w-lg line-clamp-2">
                    {ex.intro}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-[11px] uppercase tracking-[0.2em] text-ash">
                    <span>{ex.year}</span>
                    {ex.subtitle && <span>{ex.subtitle}</span>}
                    <span>{ex.medium}</span>
                  </div>
                </div>

                {/* 进入 */}
                <div className="col-span-12 md:col-span-1 flex items-center">
                  <span className="inline-flex items-center justify-center w-12 h-12 border border-stone rounded-full text-rice/70 group-hover:border-rice group-hover:bg-rice group-hover:text-ink transition-colors duration-500">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}