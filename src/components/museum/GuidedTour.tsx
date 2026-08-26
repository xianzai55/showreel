import { motion } from 'framer-motion'
import { Media } from '../Media'

interface GuidedTourProps {
  images: { src: string; alt: string }[]
}

/**
 * Start Guided Tour 的图片陈列视图。
 * 仅做简单等宽等高的网格排版，不裁不伪造图片。
 *   1 张 → 单列单行
 *   2 张 → 单行 2 列
 *   3+ 张 → 自适应列数（1 列、2 列、3 列…），统一等宽等高
 */
export function GuidedTour({ images }: GuidedTourProps) {
  if (images.length === 0) return null

  // 列数策略：1 / 2 / 3 / 4 / 5 / 6 / 7+ → 1, 2, 3, 2, 3, 3, 4 列
  const cols = pickColumns(images.length)
  const cellClass = `overflow-hidden bg-stone/10 ${cellAspect(images.length)}`

  return (
    <motion.div
      key={images.map((i) => i.src).join('|')}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
      <div
        className={`grid gap-2 md:gap-3 w-full`}
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      >
        {images.map((img) => (
          <div key={img.src} className={cellClass}>
            <Media
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover opacity-95"
            />
          </div>
        ))}
      </div>
    </motion.div>
  )
}

function pickColumns(n: number): number {
  if (n <= 1) return 1
  if (n === 2) return 2
  if (n === 3) return 3
  if (n === 4) return 2
  if (n === 5) return 3
  if (n === 6) return 3
  return 4
}

/**
 * 根据图片总数决定每个格子的高宽比：
 *  - 1 张：4:5（竖版陈列）
 *  - 2-3 张：3:4
 *  - 4-5 张：1:1
 *  - 6 张以上：4:3
 */
function cellAspect(n: number): string {
  if (n === 1) return 'aspect-[4/5]'
  if (n <= 3) return 'aspect-[3/4]'
  if (n <= 5) return 'aspect-square'
  return 'aspect-[4/3]'
}
