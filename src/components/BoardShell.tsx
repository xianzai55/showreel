import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface BoardShellProps {
  children: ReactNode
  className?: string
  id?: string
}

export function BoardShell({ children, className = '', id }: BoardShellProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`relative w-full min-h-[var(--board-height)] flex flex-col justify-center py-16 md:py-20 border-b border-stone/30 ${className}`}
    >
      <div className="w-full max-w-[var(--board-max)] mx-auto px-[var(--board-gutter)]">
        {children}
      </div>
    </motion.section>
  )
}

interface BoardHeaderProps {
  boardId: string
  title: string
  titleEn?: string
  subtitle?: string
  accent?: string
}

export function BoardHeader({ boardId, title, titleEn, subtitle, accent }: BoardHeaderProps) {
  return (
    <header className="flex items-start justify-between gap-6 mb-10 md:mb-14 pb-6 border-b border-stone/40">
      <div>
        <div className="flex items-center gap-4 mb-3">
          <span
            className="font-mono text-xs tracking-[0.2em] text-ash"
            style={accent ? { color: accent } : undefined}
          >
            Board {boardId}
          </span>
          {subtitle && (
            <span className="text-[11px] text-ash tracking-wider">{subtitle}</span>
          )}
        </div>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-rice leading-tight">
          {title}
        </h2>
        {titleEn && (
          <p className="mt-2 text-sm md:text-base text-ash font-light tracking-wide">
            {titleEn}
          </p>
        )}
      </div>
    </header>
  )
}
