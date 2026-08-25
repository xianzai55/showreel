import type { BoardImage, BoardModule } from '../../data/projects'
import { Callout } from './Callout'
import { Compare } from './Compare'
import { HeroSplit } from './HeroSplit'
import { ImageText } from './ImageText'
import { Matrix } from './Matrix'
import { Sequence } from './Sequence'
import { Statement } from './Statement'
import { TextImage } from './TextImage'
import { Triptych } from './Triptych'

export * from './HeroSplit'
export * from './Triptych'
export * from './Matrix'
export * from './TextImage'
export * from './ImageText'
export * from './Sequence'
export * from './Compare'
export * from './Callout'
export * from './Statement'

interface BoardModuleRendererProps {
  module: BoardModule
  accent?: string
  onImageClick?: (image: BoardImage) => void
}

export function BoardModuleRenderer({ module, accent, onImageClick }: BoardModuleRendererProps) {
  switch (module.type) {
    case 'hero-split':
      return <HeroSplit module={module} onImageClick={onImageClick} />
    case 'triptych':
      return <Triptych module={module} onImageClick={onImageClick} />
    case 'matrix':
      return <Matrix module={module} onImageClick={onImageClick} />
    case 'text-image':
      return <TextImage module={module} onImageClick={onImageClick} />
    case 'image-text':
      return <ImageText module={module} onImageClick={onImageClick} />
    case 'sequence':
      return <Sequence module={module} onImageClick={onImageClick} />
    case 'compare':
      return <Compare module={module} onImageClick={onImageClick} />
    case 'callout':
      return <Callout module={module} accent={accent} onImageClick={onImageClick} />
    case 'statement':
      return <Statement module={module} />
    default:
      return null
  }
}
