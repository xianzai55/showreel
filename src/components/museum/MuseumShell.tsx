import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface MuseumShellProps {
  children: ReactNode
  className?: string
  variant?: 'lobby' | 'hall'
}

export function MuseumShell({ children, className = '', variant = 'hall' }: MuseumShellProps) {
  return (
    <div
      className={`relative min-h-screen overflow-hidden bg-[var(--color-museum-floor)] text-rice ${className}`}
    >
      {/* Far wall */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 45%, var(--color-museum-spot) 0%, transparent 70%),
            linear-gradient(180deg, var(--color-ink) 0%, var(--color-museum-wall) 35%, var(--color-museum-wall) 70%, var(--color-museum-floor) 100%)
          `,
        }}
      />

      {/* Ceiling spot gradient */}
      <div
        className="absolute inset-x-0 top-0 h-[55vh] z-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 80% at 50% 0%, rgba(245,240,230,0.08) 0%, transparent 65%)',
        }}
      />

      {/* Floor shadow */}
      <div
        className="absolute inset-x-0 bottom-0 h-[30vh] z-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(0deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 40%, transparent 100%)',
        }}
      />

      {/* Wall grid lines - faint architectural seams */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.06]">
        <div className="h-full w-px bg-rice absolute left-[12%]" />
        <div className="h-full w-px bg-rice absolute left-[50%]" />
        <div className="h-full w-px bg-rice absolute right-[12%]" />
        <div className="w-full h-px bg-rice absolute top-[35%]" />
      </div>

      {/* Subtle noise overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: variant === 'lobby' ? 0.9 : 0.6, ease: 'easeOut' }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </div>
  )
}
