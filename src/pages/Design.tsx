import { motion } from 'framer-motion'
import { HorizontalGallery } from '../components/HorizontalGallery'
import { designCollections } from '../data/projects'

const ease = [0.22, 1, 0.36, 1] as const

export function Design() {
  return (
    <div className="pt-28 md:pt-36 pb-24 md:pb-32 px-0 md:px-[var(--board-gutter)]">
      <div className="w-full max-w-[var(--board-max)] mx-auto mb-14 md:mb-20 px-6 md:px-0">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
        >
          <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-ash mb-5">
            Personal Practice — 设计集
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-rice leading-tight">
            摄影与设计
          </h1>
          <p className="mt-5 text-base md:text-lg text-rice/60 font-light max-w-2xl leading-relaxed">
            「目光的切片与秩序的练习」
            <br />
            记录光线、空间与日常裂隙中的偶然诗意。横向推移以阅览全貌。
          </p>
        </motion.header>
      </div>

      {/* 各个设计集（摄影 / 海报） */}
      <div className="flex flex-col gap-20 md:gap-28">
        {designCollections.map((collection, idx) => (
          <motion.section
            key={collection.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease }}
          >
            {/* 横条内嵌于全宽画布，左右边缘与屏幕对齐 */}
            <div className="px-6 md:px-[var(--board-gutter)] mb-6">
              <div className="w-full max-w-[var(--board-max)] mx-auto flex items-end justify-between gap-6">
                <div>
                  <div className="flex items-baseline gap-4">
                    <span className="font-serif text-3xl md:text-4xl text-rice">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h2 className="font-serif text-2xl md:text-4xl text-rice">{collection.title}</h2>
                  </div>
                  <p className="mt-1 text-sm text-ash tracking-wide uppercase">
                    {collection.titleEn}
                  </p>
                  <p className="mt-3 text-sm text-rice/60 max-w-xl leading-relaxed">
                    {collection.description}
                  </p>
                </div>
                <span className="hidden md:block font-serif text-6xl lg:text-7xl text-rice/10 select-none">
                  {collection.title}
                </span>
              </div>
            </div>

            {/* 全宽横向画廊（允许延伸到屏幕边缘） */}
            <div className="w-full overflow-hidden pl-6 md:pl-[var(--board-gutter)]">
              <HorizontalGallery images={collection.images} title={collection.title} />
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  )
}