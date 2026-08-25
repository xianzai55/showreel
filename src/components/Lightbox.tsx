import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import type { ProjectImage } from '../data/projects'
import { imageUrl } from '../utils/imageUrl'

interface LightboxProps {
  images: ProjectImage[]
  open: boolean
  index: number
  onClose: () => void
  onIndexChange?: (index: number) => void
  projectTitle?: string
}

export function Lightbox({ images, open, index, onClose, onIndexChange, projectTitle }: LightboxProps) {
  const [zoom, setZoom] = useState(false)
  const touchStartX = useRef<number | null>(null)

  const current = Math.max(0, Math.min(index, images.length - 1))
  const currentImage = images[current]

  const goNext = useCallback(() => {
    onIndexChange?.(current < images.length - 1 ? current + 1 : 0)
    setZoom(false)
  }, [current, images.length, onIndexChange])

  const goPrev = useCallback(() => {
    onIndexChange?.(current > 0 ? current - 1 : images.length - 1)
    setZoom(false)
  }, [current, images.length, onIndexChange])

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
  }, [open, onClose, goNext, goPrev])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const endX = e.changedTouches[0].screenX
    const diff = touchStartX.current - endX
    if (diff > 50) goNext()
    if (diff < -50) goPrev()
    touchStartX.current = null
  }

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
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-4 md:px-10">
            <div className="text-xs text-ash">
              {projectTitle && <span className="text-rice/80 mr-3">{projectTitle}</span>}
              <span>{String(current + 1).padStart(2, '0')}</span>
              <span className="mx-2">/</span>
              <span>{String(images.length).padStart(2, '0')}</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={(e) => { e.stopPropagation(); setZoom((z) => !z) }}
                className="p-2 text-rice/70 hover:text-rice transition-colors"
                aria-label="Toggle zoom"
              >
                {zoom ? <ZoomOut size={20} /> : <ZoomIn size={20} />}
              </button>
              <button
                onClick={onClose}
                className="p-2 text-rice/70 hover:text-rice transition-colors"
                aria-label="Close lightbox"
              >
                <X size={22} />
              </button>
            </div>
          </div>

          {/* Main image */}
          <div
            className="flex-1 flex items-center justify-center px-6 md:px-16 py-4"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <button
              onClick={(e) => { e.stopPropagation(); goPrev() }}
              className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 p-3 text-rice/50 hover:text-rice transition-colors"
              aria-label="Previous image"
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
                className={`max-h-full max-w-full object-contain transition-all duration-300 ${zoom ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'}`}
                onClick={(e) => { e.stopPropagation(); setZoom((z) => !z) }}
              />
            </AnimatePresence>

            <button
              onClick={(e) => { e.stopPropagation(); goNext() }}
              className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 p-3 text-rice/50 hover:text-rice transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Caption */}
          {currentImage.caption && (
            <div className="px-6 md:px-10 py-4 text-center">
              <p className="text-sm text-rice/80">{currentImage.caption}</p>
            </div>
          )}

          {/* Thumbnails */}
          <div className="px-6 md:px-10 pb-6 pt-2 overflow-x-auto">
            <div className="flex justify-center gap-2 min-w-max">
              {images.map((img, i) => (
                <button
                  key={img.src}
                  onClick={(e) => { e.stopPropagation(); onIndexChange?.(i); setZoom(false) }}
                  className={`relative w-14 h-14 md:w-16 md:h-16 overflow-hidden border-2 transition-colors ${
                    i === current ? 'border-rice' : 'border-transparent hover:border-rice/40'
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                >
                  <img src={imageUrl(img.src)} alt={img.alt} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
