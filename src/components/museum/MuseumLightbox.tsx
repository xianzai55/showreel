import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import type { Exhibit } from '../../data/onlineMuseum'
import { Media } from '../Media'

interface MuseumLightboxProps {
  exhibits: Exhibit[]
  open: boolean
  exhibitId: string | null
  onClose: () => void
  onExhibitChange: (exhibitId: string) => void
  hallName?: string
}

export function MuseumLightbox({
  exhibits,
  open,
  exhibitId,
  onClose,
  onExhibitChange,
  hallName,
}: MuseumLightboxProps) {
  const [zoom, setZoom] = useState(false)
  const touchStartX = useRef<number | null>(null)

  const currentIndex = exhibitId ? exhibits.findIndex((e) => e.id === exhibitId) : -1
  const safeIndex = Math.max(0, Math.min(currentIndex, exhibits.length - 1))
  const exhibit = exhibits[safeIndex]

  const goNext = useCallback(() => {
    if (exhibits.length <= 1) return
    const nextIndex = safeIndex < exhibits.length - 1 ? safeIndex + 1 : 0
    onExhibitChange(exhibits[nextIndex].id)
    setZoom(false)
  }, [safeIndex, exhibits, onExhibitChange])

  const goPrev = useCallback(() => {
    if (exhibits.length <= 1) return
    const prevIndex = safeIndex > 0 ? safeIndex - 1 : exhibits.length - 1
    onExhibitChange(exhibits[prevIndex].id)
    setZoom(false)
  }, [safeIndex, exhibits, onExhibitChange])

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

  if (!exhibit) return null

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[100] bg-ink/98 backdrop-blur-sm flex flex-col"
          onClick={onClose}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 md:px-10">
            <div className="text-xs text-ash font-mono">
              {hallName && <span className="text-rice/80 mr-3">{hallName}</span>}
              <span>{String(safeIndex + 1).padStart(2, '0')}</span>
              <span className="mx-2">/</span>
              <span>{String(exhibits.length).padStart(2, '0')}</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-rice/70 hover:text-rice transition-colors"
              aria-label="关闭灯箱"
            >
              <X size={22} />
            </button>
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
              aria-label="上一件"
            >
              <ChevronLeft size={28} />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={exhibit.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: zoom ? 1.5 : 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className={`relative ${
                  zoom ? 'cursor-zoom-out' : 'cursor-zoom-in'
                }`}
                onClick={(e) => {
                  e.stopPropagation()
                  setZoom((z) => !z)
                }}
              >
                <Media
                  src={exhibit.image}
                  alt={exhibit.alt}
                  className="max-h-[65vh] md:max-h-[70vh] max-w-full object-contain"
                />
              </motion.div>
            </AnimatePresence>

            <button
              onClick={(e) => {
                e.stopPropagation()
                goNext()
              }}
              className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 p-3 text-rice/50 hover:text-rice transition-colors"
              aria-label="下一件"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Caption / label */}
          <div className="px-6 md:px-10 pb-6 md:pb-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="font-mono text-[10px] text-[var(--color-museum-warm)] tracking-wider mb-2">
                {exhibit.id}
              </p>
              <h3 className="font-serif text-lg md:text-xl text-rice mb-1">{exhibit.title}</h3>
              <p className="text-xs text-ash mb-3">{exhibit.titleEn}</p>
              <p className="text-sm text-rice/70 leading-relaxed mb-2">{exhibit.caption}</p>
              <p className="text-[11px] text-ash/70">
                {exhibit.material} · {exhibit.period}
                {exhibit.dimensions && ` · ${exhibit.dimensions}`}
                {exhibit.accession && ` · ${exhibit.accession}`}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
