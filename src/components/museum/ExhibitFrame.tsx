import { ZoomIn } from 'lucide-react'
import { useState } from 'react'
import type { Exhibit } from '../../data/onlineMuseum'
import { imageUrl } from '../../utils/imageUrl'

interface ExhibitFrameProps {
  exhibit: Exhibit
  onClick: () => void
  size?: 'sm' | 'md' | 'lg'
  layout?: 'vertical' | 'horizontal'
}

const sizeClasses = {
  sm: 'w-[160px] md:w-[200px]',
  md: 'w-[220px] md:w-[300px]',
  lg: 'w-[300px] md:w-[420px]',
}

export function ExhibitFrame({
  exhibit,
  onClick,
  size = 'md',
  layout = 'vertical',
}: ExhibitFrameProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group text-left ${layout === 'horizontal' ? 'flex gap-4 items-start' : 'flex flex-col'}`}
    >
      <div
        className={`relative overflow-hidden bg-[#1a0f12] border border-stone/30 ${sizeClasses[size]} aspect-square shadow-lg`}
      >
        {!loaded && (
          <div className="absolute inset-0 animate-pulse bg-charcoal" />
        )}
        <img
          src={imageUrl(exhibit.image)}
          alt={exhibit.alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 ease-out ${
            loaded ? 'opacity-100' : 'opacity-0'
          } group-hover:scale-[1.05]`}
        />
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/25 transition-colors duration-500 flex items-center justify-center">
          <ZoomIn
            size={20}
            className="text-rice opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        </div>
      </div>

      <div className={`${layout === 'horizontal' ? 'flex-1 pt-1' : 'mt-3'}`}>
        <p className="font-mono text-[10px] tracking-wider text-[var(--color-museum-warm)] mb-1">
          {exhibit.id}
        </p>
        <h3 className="font-serif text-sm md:text-base text-rice leading-tight group-hover:text-rice-dim transition-colors">
          {exhibit.title}
        </h3>
        <p className="text-[10px] text-ash mt-0.5">{exhibit.titleEn}</p>
        <p className="text-[10px] text-ash/70 mt-2 leading-relaxed line-clamp-2">
          {exhibit.material} · {exhibit.period}
        </p>
      </div>
    </button>
  )
}
