import { ZoomIn } from 'lucide-react'
import { useState } from 'react'
import { imageUrl } from '../utils/imageUrl'
import type { BoardImage as BoardImageType, ImageSize } from '../data/projects'

const sizeClasses: Record<ImageSize, string> = {
  xs: 'w-[140px] md:w-[180px]',
  sm: 'w-[220px] md:w-[280px]',
  md: 'w-[300px] md:w-[380px]',
  lg: 'w-[380px] md:w-[520px]',
  xl: 'w-[460px] md:w-[680px]',
}

const aspectClasses: Record<NonNullable<BoardImageType['aspect']>, string> = {
  '16/9': 'aspect-video',
  '4/3': 'aspect-[4/3]',
  '3/2': 'aspect-[3/2]',
  square: 'aspect-square',
  video: 'aspect-video',
}

interface BoardImageProps {
  image: BoardImageType
  onClick?: () => void
  className?: string
  showCaption?: boolean
}

export function BoardImage({ image, onClick, className = '', showCaption = true }: BoardImageProps) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  const sizeClass = image.size ? sizeClasses[image.size] : sizeClasses.md
  const aspectClass = image.aspect ? aspectClasses[image.aspect] : aspectClasses['4/3']

  return (
    <figure className={`flex flex-col ${className}`}>
      <button
        type="button"
        onClick={onClick}
        className={`group relative overflow-hidden bg-charcoal border border-stone/40 ${sizeClass} ${aspectClass} ${
          onClick ? 'cursor-zoom-in' : 'cursor-default'
        }`}
        aria-label={onClick ? `放大查看：${image.alt}` : image.alt}
      >
        {error ? (
          <div className="w-full h-full flex items-center justify-center text-ash text-xs">
            <span>图加载失败</span>
          </div>
        ) : (
          <img
            src={imageUrl(image.src)}
            alt={image.alt}
            loading="lazy"
            decoding="async"
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
            className={`w-full h-full object-cover transition-all duration-700 ease-out ${
              loaded ? 'opacity-100' : 'opacity-0'
            } group-hover:scale-[1.04]`}
          />
        )}
        {onClick && (
          <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-500 flex items-center justify-center">
            <ZoomIn
              size={20}
              className="text-rice opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        )}
      </button>
      {showCaption && image.caption && (
        <figcaption className="mt-2 text-[11px] text-ash leading-relaxed font-sans max-w-[90%]">
          {image.caption}
        </figcaption>
      )}
    </figure>
  )
}
