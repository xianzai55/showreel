import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Grid3X3 } from 'lucide-react'
import type { Exhibit, Hall } from '../../data/onlineMuseum'
import { imageUrl } from '../../utils/imageUrl'
import { ExhibitFrame } from './ExhibitFrame'

interface HallViewProps {
  hall: Hall
  mode: 'guided' | 'free'
  onOpenExhibit: (exhibit: Exhibit) => void
  onSwitchMode: () => void
  onPrevHall: () => void
  onNextHall: () => void
  hasPrev: boolean
  hasNext: boolean
  currentHallIndex: number
  totalHalls: number
}

export function HallView({
  hall,
  mode,
  onOpenExhibit,
  onSwitchMode,
  onPrevHall,
  onNextHall,
  hasPrev,
  hasNext,
  currentHallIndex,
  totalHalls,
}: HallViewProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hall header / progress */}
      <header className="pt-24 md:pt-28 pb-6 md:pb-10 px-6 md:px-[var(--board-gutter)] max-w-[var(--board-max)] mx-auto w-full">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-[var(--color-museum-warm)] tracking-[0.2em]">
              Hall {String(hall.order).padStart(2, '0')} / {String(totalHalls).padStart(2, '0')}
            </span>
            <div className="hidden md:flex items-center gap-2">
              {Array.from({ length: totalHalls }).map((_, i) => (
                <div
                  key={i}
                  className={`w-6 h-px transition-colors ${
                    i === currentHallIndex ? 'bg-rice' : 'bg-stone'
                  }`}
                />
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={onSwitchMode}
            className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-ash hover:text-rice transition-colors"
          >
            <Grid3X3 size={14} />
            {mode === 'guided' ? 'Free Explore' : 'Guided Tour'}
          </button>
        </div>

        <motion.div
          key={hall.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-rice mb-2">{hall.name}</h2>
          <p className="text-sm md:text-base text-ash mb-4">{hall.nameEn} — {hall.subtitle}</p>
          <p className="text-sm text-rice/60 leading-relaxed max-w-xl">{hall.description}</p>
        </motion.div>
      </header>

      {/* Exhibition wall */}
      <main className="flex-1 flex flex-col justify-center py-8 md:py-12">
        <div className="max-w-[var(--board-max)] mx-auto px-6 md:px-[var(--board-gutter)] w-full">
          {/* Atmosphere / feature image for the hall */}
          <motion.div
            key={`${hall.id}-atmosphere`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-10 md:mb-14"
          >
            <div className="relative max-w-3xl mx-auto aspect-video overflow-hidden border border-stone/20">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(245,240,230,0.10) 0%, transparent 70%)',
                }}
              />
              <img
                src={imageUrl(hall.atmosphereImage)}
                alt={hall.atmosphereAlt}
                loading="lazy"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
          </motion.div>

          {/* Wall of exhibits */}
          <motion.div
            key={`${hall.id}-wall`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap justify-center md:justify-start gap-x-6 md:gap-x-10 gap-y-10 md:gap-y-14"
          >
            {hall.exhibits.map((exhibit, index) => (
              <motion.div
                key={exhibit.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 + index * 0.08 }}
                className={`${
                  index === 0 ? 'md:basis-full md:flex md:justify-center' : ''
                }`}
              >
                <ExhibitFrame
                  exhibit={exhibit}
                  onClick={() => onOpenExhibit(exhibit)}
                  size={index === 0 ? 'lg' : 'md'}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      {/* Guided tour controls */}
      {mode === 'guided' && (
        <footer className="py-6 md:py-10 border-t border-stone/20">
          <div className="max-w-[var(--board-max)] mx-auto px-6 md:px-[var(--board-gutter)] flex items-center justify-between">
            <button
              type="button"
              onClick={onPrevHall}
              disabled={!hasPrev}
              className={`flex items-center gap-2 text-xs uppercase tracking-[0.15em] transition-colors ${
                hasPrev ? 'text-rice hover:text-rice-dim' : 'text-ash/40 cursor-not-allowed'
              }`}
            >
              <ArrowLeft size={16} /> Previous Hall
            </button>
            <span className="font-mono text-xs text-ash">
              {String(currentHallIndex + 1).padStart(2, '0')} / {String(totalHalls).padStart(2, '0')}
            </span>
            <button
              type="button"
              onClick={onNextHall}
              disabled={!hasNext}
              className={`flex items-center gap-2 text-xs uppercase tracking-[0.15em] transition-colors ${
                hasNext ? 'text-rice hover:text-rice-dim' : 'text-ash/40 cursor-not-allowed'
              }`}
            >
              Next Hall <ArrowRight size={16} />
            </button>
          </div>
        </footer>
      )}
    </div>
  )
}
