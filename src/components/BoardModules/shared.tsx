import { motion } from 'framer-motion'
import { BoardImage } from '../BoardImage'
import type { BoardImage as BoardImageType } from '../../data/projects'

export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
}

export function ModuleLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="block text-[10px] uppercase tracking-[0.25em] text-ash mb-4 font-mono">
      {children}
    </span>
  )
}

export function ModuleTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-serif text-xl md:text-2xl text-rice mb-3 leading-tight">
      {children}
    </h3>
  )
}

export function ModuleText({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm md:text-[15px] text-rice/70 leading-relaxed max-w-md">
      {children}
    </p>
  )
}

export function ImageGrid({
  images,
  onImageClick,
}: {
  images: BoardImageType[]
  onImageClick?: (image: BoardImageType) => void
}) {
  return (
    <>
      {images.map((image, i) => (
        <BoardImage
          key={`${image.src}-${i}`}
          image={image}
          onClick={onImageClick ? () => onImageClick(image) : undefined}
        />
      ))}
    </>
  )
}

export function AnimatedBlock({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      {...fadeUp}
      transition={{ ...fadeUp.transition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
