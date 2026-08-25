import { motion } from 'framer-motion'
import { ZoomIn } from 'lucide-react'
import type { ProjectImage } from '../data/projects'
import { LazyImage } from './LazyImage'

interface EditorialImageProps {
  image: ProjectImage
  index?: number
  onClick?: () => void
  className?: string
}

const sizeClasses: Record<string, string> = {
  xs: 'max-w-[200px] md:max-w-[260px]',
  sm: 'max-w-[280px] md:max-w-[380px]',
  md: 'max-w-[380px] md:max-w-[520px]',
  lg: 'max-w-[520px] md:max-w-[760px]',
  xl: 'max-w-[720px] md:max-w-[1100px]',
}

export function EditorialImage({ image, onClick, className = '' }: EditorialImageProps) {
  const sizeClass = sizeClasses[image.size || 'md']

  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`group ${sizeClass} ${className}`}
    >
      <button
        onClick={onClick}
        className="block w-full text-left cursor-zoom-in"
        aria-label={`放大查看：${image.alt}`}
      >
        <div className="relative overflow-hidden bg-charcoal border border-stone/40">
          <LazyImage
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/15 transition-colors duration-500 flex items-center justify-center">
            <ZoomIn
              size={20}
              className="text-rice opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        </div>
      </button>
      {image.caption && (
        <figcaption className="mt-3 text-[11px] md:text-xs text-ash leading-relaxed">
          {image.caption}
        </figcaption>
      )}
    </motion.figure>
  )
}
