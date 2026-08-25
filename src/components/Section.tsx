import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  compact?: boolean
}

export function Section({ children, className = '', compact = false }: SectionProps) {
  return (
    <section
      className={`relative w-full px-6 md:px-[var(--spacing-gutter)] ${compact ? 'py-16 md:py-24' : 'min-h-[var(--spacing-section)] py-20 md:py-28'} flex flex-col justify-center ${className}`}
    >
      <div className="w-full max-w-[var(--spacing-max)] mx-auto">
        {children}
      </div>
    </section>
  )
}

interface SectionLabelProps {
  label: string
  accent?: string
}

export function SectionLabel({ label, accent }: SectionLabelProps) {
  return (
    <motion.span
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="inline-block text-[10px] uppercase tracking-[0.3em] text-ash mb-4"
      style={accent ? { color: accent } : undefined}
    >
      {label}
    </motion.span>
  )
}

interface SectionTitleProps {
  children: ReactNode
  className?: string
}

export function SectionTitle({ children, className = '' }: SectionTitleProps) {
  return (
    <h2 className={`font-serif text-2xl md:text-3xl text-rice mb-6 ${className}`}>
      {children}
    </h2>
  )
}
