import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import type { BoardImage } from '../data/projects'
import { imageUrl } from '../utils/imageUrl'

interface LightboxProps {
  images: BoardImage[]
  open: boolean
  index: number
  onClose: () => void
  onIndexChange?: (index: number) => void
  projectTitle?: string
}

export function Lightbox({
  images,
  open,
  index,
  onClose,
  onIndexChange,
  projectTitle,
}: LightboxProps) {
  const [zoom, setZoom] = useState(false)
  const touchStartX = useRef<number | null>(null)

  const safeIndex = Math.max(0, Math.min(index, images.length - 1))
  const currentImage = images[safeIndex]

  const goNext = useCallback(() => {
    onIndexChange?.(safeIndex < images.length - 1 ? safeIndex + 1 : 0)
    setZoom(false)
  }, [safeIndex, images.length, onIndexChange])

  const goPrev = useCallback(() => {
    onIndexChange?.(safeIndex > 0 ? safeIndex - 1 : images.length - 1)
    setZoom(false)
  }, [safeIndex, images.length, onIndexChange])

  useEffect(() => {
    if (!open) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose, goPrev, goNext])

  if (!currentImage) return null

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[100] bg-ink/97 backdrop-blur-sm flex flex-col"
          onClick={onClose}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 md:px-10">
            <div className="text-xs text-ash font-mono">
              {projectTitle && <span className="text-rice/80 mr-3">{projectTitle}</span>}
              <span>{String(safeIndex + 1).padStart(2, '0')}</span>
              <span className="mx-2">/</span>
              <span>{String(images.length).padStart(2, '0')}</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setZoom((z) => !z)
                }}
                className="p-2 text-rice/70 hover:text-rice transition-colors"
                aria-label="切换缩放"
              >
                {zoom ? <ZoomOut size={20} /> : <ZoomIn size={20} />}
              </button>
              <button
                onClick={onClose}
                className="p-2 text-rice/70 hover:text-rice transition-colors"
                aria-label="关闭灯箱"
              >
                <X size={22} />
              </button>
            </div>
          </div>

          {/* Main image */}
          <div
            className="flex-1 flex items-center justify-center px-6 md:px-16 py-4"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => {
              touchStartX.current = e.changedTouches[0].screenX
            }}
            onTouchEnd={(e) => {
              if (touchStartX.current === null) return
              const diff = touchStartX.current - e.changedTouches[0].screenX
              if (diff > 50) goNext()
              if (diff < -50) goPrev()
              touchStartX.current = null
            }}
          >
            <button
              onClick={(e) => {
                e.stopPropagation()
                goPrev()
              }}
              className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 p-3 text-rice/50 hover:text-rice transition-colors"
              aria-label="上一张"
            >
              <ChevronLeft size={28} />
            </button>

            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage.src}
                src={imageUrl(currentImage.src)}
                alt={currentImage.alt}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className={`max-h-full max-w-full object-contain transition-all duration-300 ${
                  zoom ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
                }`}
                onClick={(e) => {
                  e.stopPropagation()
                  setZoom((z) => !z)
                }}
              />
            </AnimatePresence>

            <button
              onClick={(e) => {
                e.stopPropagation()
                goNext()
              }}
              className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 p-3 text-rice/50 hover:text-rice transition-colors"
              aria-label="下一张"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Caption */}
          {currentImage.caption && (
            <div className="px-6 md:px-10 py-4 text-center">
              <p className="text-sm text-rice/80 font-sans">{currentImage.caption}</p>
            </div>
          )}

          {/* Thumbnails */}
          <div className="px-6 md:px-10 pb-6 pt-2 overflow-x-auto">
            <div className="flex justify-center gap-2 min-w-max">
              {images.map((img, i) => (
                <button
                  key={img.src}
                  onClick={(e) => {
                    e.stopPropagation()
                    onIndexChange?.(i)
                    setZoom(false)
                  }}
                  className={`relative w-14 h-14 md:w-16 md:h-16 overflow-hidden border-2 transition-colors ${
                    i === safeIndex
                      ? 'border-rice'
                      : 'border-transparent hover:border-rice/40'
                  }`}
                  aria-label={`切换到第 ${i + 1} 张`}
                >
                  <img
                    src={imageUrl(img.src)}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
