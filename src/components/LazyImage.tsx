import { useState } from 'react'
import { ImageOff } from 'lucide-react'

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  containerClassName?: string
  aspect?: string
  loading?: 'lazy' | 'eager'
  onError?: () => void
}

export function LazyImage({
  src,
  alt,
  className = '',
  containerClassName = '',
  aspect,
  loading = 'lazy',
  onError,
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  const handleError = () => {
    setError(true)
    onError?.()
  }

  if (error) {
    return (
      <div
        className={`w-full flex flex-col items-center justify-center text-ash bg-charcoal ${aspect || 'aspect-video'} ${containerClassName}`}
      >
        <ImageOff size={24} className="mb-2 opacity-60" />
        <span className="text-[10px] tracking-wider">图片加载失败</span>
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden bg-charcoal ${containerClassName}`}>
      {!loaded && (
        <div
          className={`absolute inset-0 animate-pulse bg-charcoal ${aspect || ''}`}
          aria-hidden="true"
        />
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={handleError}
        className={`transition-opacity duration-700 ease-out ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      />
    </div>
  )
}
