import { motion } from 'framer-motion'
import { Compass, X } from 'lucide-react'
import type { Exhibition, Hall } from '../../data/onlineMuseum'
import { GuidedTour } from './GuidedTour'
import { Media } from '../Media'

interface MuseumLobbyProps {
  exhibition: Exhibition
  halls: Hall[]
  exhibitionNumber: number
  exhibitionCount: number
  /** 是否已进入 Start Guided Tour 的图片陈列视图 */
  tourActive: boolean
  onStartGuided: () => void
  onLeaveTour: () => void
}

export function MuseumLobby({
  exhibition,
  halls,
  exhibitionNumber,
  exhibitionCount,
  tourActive,
  onStartGuided,
  onLeaveTour,
}: MuseumLobbyProps) {
  const hasTour = exhibition.tourImages.length > 0
  // 进入图片陈列模式：删除现有文字，仅展示图片 + Back to Cover
  const tourView = hasTour && tourActive

  return (
    <div className="min-h-screen flex flex-col justify-center pt-24 md:pt-28 pb-16 px-6 md:px-[var(--board-gutter)]">
      <div className="max-w-[var(--board-max)] mx-auto w-full">
        {tourView ? (
          // 只出现图片陈列：不显示任何文字，仅右下角放一个纯图标关闭按钮便于退出
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <GuidedTour images={exhibition.tourImages} layout={exhibition.tourLayout} />
            <div className="mt-8 flex justify-end">
              <button
                type="button"
                onClick={onLeaveTour}
                aria-label="Back to cover"
                className="pointer-events-auto inline-flex items-center justify-center w-11 h-11 border border-rice/50 text-rice/80 hover:text-rice hover:bg-rice/5 transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Text column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5"
            >
              <span className="font-mono text-xs tracking-[0.25em] text-[var(--color-museum-warm)] block mb-6">
                Exhibition {String(exhibitionNumber).padStart(2, '0')} · {exhibitionCount > 1 ? `${exhibitionCount} Exhibitions` : 'Virtual Gallery'}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-rice leading-[1.1] mb-4">
                {exhibition.title}
              </h1>
              <p className="text-lg md:text-xl text-rice/50 font-light mb-8">
                {exhibition.titleEn}
              </p>
              <p className="text-sm md:text-base text-rice/70 leading-relaxed max-w-md mb-8 whitespace-pre-line">
                {exhibition.preface}
              </p>

              <div className="grid grid-cols-2 gap-6 text-xs mb-10 border-t border-b border-stone/30 py-6">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-ash mb-1">Year</p>
                  <p className="text-rice">{exhibition.year}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-ash mb-1">Location</p>
                  <p className="text-rice">{exhibition.location}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-ash mb-1">Medium</p>
                  <p className="text-rice">{exhibition.medium}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-ash mb-1">Halls</p>
                  <p className="text-rice">{halls.length}</p>
                </div>
              </div>

              {/* 仅当该展览拥有 tourImages 时才渲染 Start Guided Tour 按钮；Green Shoots 等无 tour 时不显示 */}
              {hasTour && (
                <div className="flex flex-wrap gap-4">
                  <button
                    type="button"
                    onClick={onStartGuided}
                    className="inline-flex items-center gap-3 px-6 py-3 border border-rice/60 text-rice text-xs uppercase tracking-[0.2em] hover:bg-rice/5 transition-colors"
                  >
                    <Compass size={16} /> Start Guided Tour
                  </button>
                </div>
              )}
            </motion.div>

            {/* Visual column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7"
            >
              <div className="relative aspect-video overflow-hidden border border-stone/30">
                <div
                  className="absolute inset-0 z-10"
                  style={{
                    background:
                      'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(245,240,230,0.12) 0%, transparent 65%)',
                  }}
                />
                <Media
                  src={exhibition.cover}
                  alt={exhibition.coverAlt}
                  className="w-full h-full object-cover opacity-90"
                  animate
                />
              </div>

              {/* Hall quick links（不可点击，仅陈列） */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
                {halls.map((hall) => (
                  <div
                    key={hall.id}
                    className="text-left p-3 border border-stone/30"
                  >
                    <span className="font-mono text-[10px] text-[var(--color-museum-warm)] block mb-1">
                      Hall {String(hall.order).padStart(2, '0')}
                    </span>
                    <span className="font-serif text-sm text-rice line-clamp-1">
                      {hall.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
}
