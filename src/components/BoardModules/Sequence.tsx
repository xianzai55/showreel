import { BoardImage } from '../BoardImage'
import { AnimatedBlock, ModuleLabel, ModuleTitle } from './shared'
import type { BoardImage as BoardImageType, BoardModule } from '../../data/projects'

interface SequenceProps {
  module: BoardModule
  onImageClick?: (image: BoardImageType) => void
}

export function Sequence({ module, onImageClick }: SequenceProps) {
  const images = module.images || []

  return (
    <div>
      {(module.label || module.title) && (
        <AnimatedBlock className="mb-8">
          {module.label && <ModuleLabel>{module.label}</ModuleLabel>}
          {module.title && <ModuleTitle>{module.title}</ModuleTitle>}
        </AnimatedBlock>
      )}
      <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-4 md:gap-6 overflow-x-auto pb-2">
        {images.map((img, i) => (
          <AnimatedBlock key={`${img.src}-${i}`} delay={i * 0.06} className="shrink-0">
            <BoardImage
              image={img}
              onClick={onImageClick ? () => onImageClick(img) : undefined}
            />
          </AnimatedBlock>
        ))}
      </div>
    </div>
  )
}
