import { motion } from 'framer-motion'
import { Compass } from 'lucide-react'
import type { Hall } from '../../data/onlineMuseum'
import { imageUrl } from '../../utils/imageUrl'

interface FloorplanProps {
  halls: Hall[]
  currentHallId: string
  onSelectHall: (hallId: string) => void
  onStartGuided: () => void
}

export function Floorplan({ halls, currentHallId, onSelectHall, onStartGuided }: FloorplanProps) {
  return (
    <div className="min-h-screen flex flex-col pt-24 md:pt-28 pb-16 px-6 md:px-[var(--board-gutter)]">
      <div className="max-w-[var(--board-max)] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-10 md:mb-14"
        >
          <span className="font-mono text-xs tracking-[0.25em] text-[var(--color-museum-warm)] block mb-4">
            Floorplan
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-rice mb-3">展馆总览</h2>
          <p className="text-sm text-rice/55 max-w-xl">
            点击任意展厅进入自由观展，或选择「开始导览」按顺序参观。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Plan map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="relative aspect-[4/3] border border-stone/30 bg-[var(--color-museum-wall)] p-6 md:p-10">
              {/* Rooms */}
              <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
                {halls.map((hall, index) => {
                  const isActive = hall.id === currentHallId
                  const positions = [
                    'items-start justify-start',
                    'items-start justify-end',
                    'items-end justify-start',
                    'items-end justify-end',
                  ]
                  return (
                    <button
                      key={hall.id}
                      type="button"
                      onClick={() => onSelectHall(hall.id)}
                      className={`relative flex ${positions[index]} p-4 border transition-all duration-500 group text-left ${
                        isActive
                          ? 'border-[var(--color-museum-warm)] bg-rice/5'
                          : 'border-stone/30 hover:border-rice/40 hover:bg-rice/[0.03]'
                      }`}
                    >
                      <div>
                        <span
                          className={`font-mono text-[10px] tracking-wider block mb-2 ${
                            isActive ? 'text-[var(--color-museum-warm)]' : 'text-ash'
                          }`}
                        >
                          Hall {String(hall.order).padStart(2, '0')}
                        </span>
                        <h3 className="font-serif text-lg md:text-xl text-rice group-hover:text-rice-dim transition-colors">
                          {hall.name}
                        </h3>
                        <p className="text-[10px] text-ash mt-1">{hall.nameEn}</p>
                        <p className="text-[10px] text-ash/60 mt-3 line-clamp-2">
                          {hall.exhibits.length} exhibits
                        </p>
                      </div>
                      {isActive && (
                        <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[var(--color-museum-warm)]" />
                      )}
                    </button>
                  )
                })}
              </div>

              {/* Center label */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 px-3 py-1.5 border border-stone/40 bg-[var(--color-museum-floor)]">
                <Compass size={14} className="text-[var(--color-museum-warm)]" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-ash">Atrium</span>
              </div>
            </div>
          </motion.div>

          {/* Selected hall preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-5"
          >
            <div className="h-full flex flex-col justify-between border border-stone/30 p-6 md:p-8">
              <div>
                <span className="font-mono text-xs text-[var(--color-museum-warm)] tracking-[0.2em] block mb-4">
                  Selected Hall
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-rice mb-2">
                  {halls.find((h) => h.id === currentHallId)?.name}
                </h3>
                <p className="text-sm text-ash mb-4">
                  {halls.find((h) => h.id === currentHallId)?.nameEn}
                </p>
                <p className="text-sm text-rice/60 leading-relaxed">
                  {halls.find((h) => h.id === currentHallId)?.description}
                </p>

                <div className="mt-6 grid grid-cols-3 gap-2">
                  {halls
                    .find((h) => h.id === currentHallId)
                    ?.exhibits.slice(0, 3)
                    .map((exhibit) => (
                      <div key={exhibit.id} className="aspect-square overflow-hidden border border-stone/30">
                        <img
                          src={imageUrl(exhibit.image)}
                          alt={exhibit.alt}
                          loading="lazy"
                          className="w-full h-full object-cover opacity-80"
                        />
                      </div>
                    ))}
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <button
                  type="button"
                  onClick={() => onSelectHall(currentHallId)}
                  className="w-full py-3 border border-rice/60 text-rice text-xs uppercase tracking-[0.2em] hover:bg-rice/5 transition-colors"
                >
                  Enter This Hall
                </button>
                <button
                  type="button"
                  onClick={onStartGuided}
                  className="w-full py-3 border border-[var(--color-museum-warm)] text-[var(--color-museum-warm)] text-xs uppercase tracking-[0.2em] hover:bg-[var(--color-museum-warm)]/10 transition-colors"
                >
                  Start Guided Tour
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
