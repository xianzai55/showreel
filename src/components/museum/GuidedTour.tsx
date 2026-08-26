import { motion } from 'framer-motion'
import { Media } from '../Media'

interface GuidedTourProps {
  images: { src: string; alt: string }[]
  /** layout: 'hero-first' → 首图独占最上面一行，其余按序排在下一行；'two-wide' → 前两张横版独占首行（加大间隔），其余排在第二行 */
  layout?: 'hero-first' | 'two-wide'
  /** 网格间隙类；省略则用默认间隙 */
  gapClassName?: string
}

/**
 * Start Guided Tour 的图片陈列视图。
 * 完整等比展示，不切割、不裁剪、不重复、不交错叠放。
 *  - hero-first：首张独占一行，其余横向排开
 *   1 张 → 单列
 *   2 张 → 2 列
 *   3 张 → 3 列
 *   4 张 → 2 列
 *   5 张 → 2-3 列
 *   7 张 → 2-4 列
 *   8 张 → 2-4 列
 */
export function GuidedTour({ images, layout, gapClassName }: GuidedTourProps) {
  if (images.length === 0) return null

  const gap = gapClassName ?? 'gap-4 md:gap-6'

  const motionProps = {
    initial: { opacity: 0, y: 24 } as const,
    animate: { opacity: 1, y: 0 } as const,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  }

  if (layout === 'hero-first') {
    const [hero, ...rest] = images
    return (
      <motion.div
        key={images.map((i) => i.src).join('|')}
        {...motionProps}
        className="w-full"
      >
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="w-full overflow-hidden bg-stone/10">
            <Media src={hero.src} alt={hero.alt} className="w-full h-auto block opacity-95" />
          </div>
          <div className={`grid ${gap} items-start ${gridClassFor(rest.length)}`}>
            {rest.map((img) => (
              <div key={img.src} className="overflow-hidden bg-stone/10">
                <Media src={img.src} alt={img.alt} className="w-full h-auto block opacity-95" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    )
  }

  if (layout === 'two-wide') {
    const row1 = images.slice(0, 2)
    const rest = images.slice(2)
    return (
      <motion.div
        key={images.map((i) => i.src).join('|')}
        {...motionProps}
        className="w-full"
      >
        {/* 首行：两张横版并排，中间间隔加大 */}
        <div className="grid grid-cols-2 gap-6 md:gap-10 items-start">
          {row1.map((img) => (
            <div key={img.src} className="overflow-hidden bg-stone/10">
              <Media src={img.src} alt={img.alt} className="w-full h-auto block opacity-95" />
            </div>
          ))}
        </div>
        {/* 第二行：其余图片，第二行为首的张是原第一行第三张 */}
        <div className={`mt-6 md:mt-8 grid ${gap} items-start grid-cols-2 md:grid-cols-4`}>
          {rest.map((img) => (
            <div key={img.src} className="overflow-hidden bg-stone/10">
              <Media src={img.src} alt={img.alt} className="w-full h-auto block opacity-95" />
            </div>
          ))}
        </div>
      </motion.div>
    )
  }

  const gridClass = gridClassFor(images.length)

  return (
    <motion.div
      key={images.map((i) => i.src).join('|')}
      {...motionProps}
      className="w-full"
    >
      <div className={`grid ${gap} items-start ${gridClass}`}>
        {images.map((img) => (
          <div key={img.src} className="overflow-hidden bg-stone/10">
            {/* w-full h-auto：完整展示整张图，不切割不裁剪 */}
            <Media
              src={img.src}
              alt={img.alt}
              className="w-full h-auto block opacity-95"
            />
          </div>
        ))}
      </div>
    </motion.div>
  )
}

function gridClassFor(n: number): string {
  if (n === 1) return 'grid-cols-1'
  if (n === 2) return 'grid-cols-1 sm:grid-cols-2'
  if (n === 3) return 'grid-cols-1 sm:grid-cols-3'
  if (n === 4) return 'grid-cols-2'
  if (n === 5) return 'grid-cols-2 md:grid-cols-3'
  if (n === 6) return 'grid-cols-2 md:grid-cols-3'
  if (n === 7) return 'grid-cols-2 md:grid-cols-4'
  return 'grid-cols-2 md:grid-cols-4'
}