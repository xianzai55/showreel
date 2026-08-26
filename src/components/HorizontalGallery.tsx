import {
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type WheelEvent as ReactWheelEvent,
} from 'react'
import { Lightbox } from './Lightbox'
import { Media } from './Media'
import type { BoardImage } from '../data/projects'

interface HorizontalGalleryProps {
  images: BoardImage[]
  title: string
}

// 横向滑动画廊：图片依自身原始比例自适应高度与宽度，完整呈现、不裁切。
// 支持鼠标拖拽、滚轮(水平)、触屏滑动；点击图片放大查看。
export function HorizontalGallery({ images, title }: HorizontalGalleryProps) {
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

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-6">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ash">
          Drag 拖移 · Scroll 滚动 · Click 放大
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
        className="relative flex items-center gap-6 md:gap-10 overflow-x-auto cursor-grab active:cursor-grabbing pb-6 select-none px-2"
        data-lenis-prevent
      >
        {images.map((image, i) => (
          <figure
            key={`${image.src}-${i}`}
            className="group relative shrink-0 flex flex-col items-start"
          >
            <button
              type="button"
              onClick={() => {
                // 仅当几乎未发生拖拽时才触发放大（区分滑动与点击）
                if (drag.current.moved < 6) openAt(i)
              }}
              className="relative overflow-hidden border border-stone/50 bg-charcoal group-hover:border-rice/40 transition-colors duration-500 align-top"
            >
              {/* 以原始比例自适应：在给定的高/宽范围内完整显示，不裁切 */}
              <Media
                src={image.src}
                alt={image.alt}
                className="max-h-[58vh] md:max-h-[66vh] max-w-[84vw] md:max-w-[60vw] w-auto h-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-[1.015]"
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 px-4 py-3 text-left text-[11px] text-rice/90 bg-gradient-to-t from-ink/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                {image.caption || `作品 ${String(i + 1).padStart(2, '0')}`}
              </span>
            </button>
            <span className="mt-3 text-[10px] tracking-[0.3em] uppercase text-ash opacity-0 group-hover:opacity-100 transition-opacity duration-400">
              {String(i + 1).padStart(2, '0')}
            </span>
          </figure>
        ))}

        <div className="shrink-0 w-2" />
      </div>

      <Lightbox
        images={images}
        open={lightboxOpen}
        index={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onIndexChange={setLightboxIndex}
        projectTitle={title}
      />
    </div>
  )
}