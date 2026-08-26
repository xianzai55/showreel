import { motion } from 'framer-motion'
import { Media } from '../Media'

interface GuidedTourProps {
  images: { src: string; alt: string }[]
}

/**
 * Start Guided Tour 入口的右侧拼贴视图。
 * 根据图片数量自适应布局：
 *   1 张 → 全宽
 *   2 张 → 上下两行
 *   3 张 → 一主二副
 *   4 张 → 2x2
 *   5 张 → 一大四小
 *   6 张 → 2x3
 *   7+ 张 → 2 列瀑布拼贴
 * 仅排版美化，不裁不伪造图片。
 */
export function GuidedTour({ images }: GuidedTourProps) {
  if (images.length === 0) return null

  return (
    <motion.div
      key={images.map((i) => i.src).join('|')}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative aspect-[4/5] lg:aspect-[5/4] w-full overflow-hidden border border-stone/30 bg-[var(--color-museum-wall)]/30"
    >
      {/* 顶部微光蒙版，呼应大厅的中央射灯 */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(245,240,230,0.10) 0%, transparent 65%)',
        }}
      />
      {renderLayout(images)}
    </motion.div>
  )
}

function renderLayout(images: { src: string; alt: string }[]) {
  const cell = (src: string, alt: string, extra = '') => (
    <div className={`relative overflow-hidden bg-stone/10 ${extra}`}>
      <Media src={src} alt={alt} className="w-full h-full object-cover opacity-90" />
    </div>
  )

  switch (images.length) {
    case 1:
      return (
        <div className="grid grid-cols-1 h-full">
          {cell(images[0].src, images[0].alt)}
        </div>
      )
    case 2:
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 h-full">
          {cell(images[0].src, images[0].alt)}
          {cell(images[1].src, images[1].alt)}
        </div>
      )
    case 3:
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 h-full">
          {cell(images[0].src, images[0].alt, 'sm:row-span-2')}
          {cell(images[1].src, images[1].alt)}
          {cell(images[2].src, images[2].alt)}
        </div>
      )
    case 4:
      return (
        <div className="grid grid-cols-2 grid-rows-2 gap-1 h-full">
          {cell(images[0].src, images[0].alt)}
          {cell(images[1].src, images[1].alt)}
          {cell(images[2].src, images[2].alt)}
          {cell(images[3].src, images[3].alt)}
        </div>
      )
    case 5:
      return (
        <div className="grid grid-cols-2 grid-rows-3 gap-1 h-full">
          {cell(images[0].src, images[0].alt, 'row-span-2')}
          {cell(images[1].src, images[1].alt)}
          {cell(images[2].src, images[2].alt)}
          {cell(images[3].src, images[3].alt)}
          {cell(images[4].src, images[4].alt)}
        </div>
      )
    case 6:
      return (
        <div className="grid grid-cols-2 sm:grid-cols-3 grid-rows-3 gap-1 h-full">
          {cell(images[0].src, images[0].alt)}
          {cell(images[1].src, images[1].alt)}
          {cell(images[2].src, images[2].alt)}
          {cell(images[3].src, images[3].alt)}
          {cell(images[4].src, images[4].alt)}
          {cell(images[5].src, images[5].alt)}
        </div>
      )
    default: {
      // 7+ 张：左一主大图 + 右侧 2 列
      const [first, ...rest] = images
      return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 h-full">
          {cell(first.src, first.alt, 'sm:row-span-2')}
          {rest.map((img) => cell(img.src, img.alt))}
        </div>
      )
    }
  }
}
