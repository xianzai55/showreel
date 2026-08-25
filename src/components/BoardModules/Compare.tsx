import { BoardImage } from '../BoardImage'
import { AnimatedBlock, ModuleLabel, ModuleTitle } from './shared'
import type { BoardImage as BoardImageType, BoardModule } from '../../data/projects'

interface CompareProps {
  module: BoardModule
  onImageClick?: (image: BoardImageType) => void
}

export function Compare({ module, onImageClick }: CompareProps) {
  const images = module.images || []

  return (
    <div>
      {(module.label || module.title) && (
        <AnimatedBlock className="mb-8">
          {module.label && <ModuleLabel>{module.label}</ModuleLabel>}
          {module.title && <ModuleTitle>{module.title}</ModuleTitle>}
        </AnimatedBlock>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
        {images.map((img, i) => (
          <AnimatedBlock key={`${img.src}-${i}`} delay={i * 0.08} className="flex justify-center">
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
