import { motion } from 'framer-motion'
import { Media } from '../Media'

interface GuidedTourProps {
  images: { src: string; alt: string }[]
}

/**
 * Start Guided Tour 的图片陈列视图。
 * 仅做简单等宽等高的网格排版：每张图完整展示、自然等比，
 * 不切割、不裁剪、不重复、不交错叠放。
 *   1 张 → 单列
 *   2 张 → 2 列
 *   3 张 → 3 列
 *   4 张 → 2 列
 *   5 张 → 2-3 列
 *   7 张 → 2-4 列
 *   8 张 → 2-4 列
 */
export function GuidedTour({ images }: GuidedTourProps) {
  if (images.length === 0) return null

  const gridClass = gridClassFor(images.length)

  return (
    <motion.div
      key={images.map((i) => i.src).join('|')}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
      <div className={`grid gap-4 md:gap-6 items-start ${gridClass}`}>
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