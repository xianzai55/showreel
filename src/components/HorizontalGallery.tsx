import {
  useMemo,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type WheelEvent as ReactWheelEvent,
} from 'react'
import { Lightbox } from './Lightbox'
import type { BoardImage } from '../data/projects'
import { imageUrl } from '../utils/imageUrl'

interface HorizontalGalleryProps {
  images: BoardImage[]
  accent: string
  title: string
}

// 横向滑动浏览画廊：支持鼠标拖拽、滚轮（水平）、触屏滑动，点击可放大查看。
export function HorizontalGallery({ images, accent, title }: HorizontalGalleryProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const drag = useRef({ down: false, startX: 0, scrollLeft: 0, moved: 0 })

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    const el = trackRef.current
    if (!el) return
    drag.current = { down: true, startX: e.clientX, scrollLeft: el.scrollLeft, moved: 0 }
    el.setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const el = trackRef.current
    if (!el || !drag.current.down) return
    const dx = e.clientX - drag.current.startX
    drag.current.moved += Math.abs(dx)
    el.scrollLeft = drag.current.scrollLeft - dx
  }

  const endDrag = () => {
    drag.current.down = false
  }

  const onWheel = (e: ReactWheelEvent<HTMLDivElement>) => {
    const el = trackRef.current
    if (!el || Math.abs(e.deltaX) > 0) return
    el.scrollLeft += e.deltaY
  }

  const openAt = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const sizeByIndex = (i: number) => {
    const cycle = i % 5
    if (cycle === 0) return 'aspect-[16/9] w-[72vw] md:w-[560px]'
    if (cycle === 1) return 'aspect-[4/3] w-[64vw] md:w-[400px]'
    if (cycle === 2) return 'aspect-[3/2] w-[58vw] md:w-[360px]'
    if (cycle === 3) return 'aspect-video w-[70vw] md:w-[520px]'
    return 'aspect-[4/3] w-[58vw] md:w-[360px]'
  }

  const shuffled = useMemo(() => images, [images])

  return (
    <div className="relative">
      {/* Drag affordance hint */}
      <div className="flex items-center justify-between mb-5 md:mb-6">
        <span
          className="font-mono text-[10px] uppercase tracking-[0.25em]"
          style={{ color: accent }}
        >
          Drag 拖移 · Scroll 滚动
        </span>
        <span className="text-[10px] uppercase tracking-[0.25em] text-ash">
          {String(images.length).padStart(2, '0')} 幅
        </span>
      </div>

      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onWheel={onWheel}
        onDragStart={(e) => e.preventDefault()}
        className="relative flex gap-5 md:gap-8 overflow-x-auto cursor-grab active:cursor-grabbing pb-4 select-none snap-x"
        data-lenis-prevent
        style={{ scrollSnapType: 'x proximity' }}
      >
        {shuffled.map((image, i) => (
          <button
            type="button"
            key={`${image.src}-${i}`}
            onClick={() => {
              // 仅当几乎未发生拖拽时才触发放大（区分滑动与点击）
              if (drag.current.moved < 6) openAt(i)
            }}
            className={`group relative shrink-0 overflow-hidden bg-charcoal border border-stone/40 snap-start ${sizeByIndex(
              i
            )} transition-colors hover:border-rice/40`}
          >
            <img
              src={imageUrl(image.src)}
              alt={image.alt}
              loading="lazy"
              decoding="async"
              draggable={false}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            {image.caption && (
              <span className="absolute left-0 bottom-0 right-0 px-4 py-3 text-left text-[11px] text-rice/90 bg-gradient-to-t from-ink/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                {image.caption}
              </span>
            )}
          </button>
        ))}

        {/* End spacer announces the edge */}
        <div className="shrink-0 w-2" />
      </div>

      <Lightbox
        images={shuffled}
        open={lightboxOpen}
        index={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onIndexChange={setLightboxIndex}
        projectTitle={title}
      />
    </div>
  )
}