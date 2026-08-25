import { BoardImage } from '../BoardImage'
import { AnimatedBlock, ModuleLabel, ModuleTitle } from './shared'
import type { BoardImage as BoardImageType, BoardModule } from '../../data/projects'

interface TriptychProps {
  module: BoardModule
  onImageClick?: (image: BoardImageType) => void
}

export function Triptych({ module, onImageClick }: TriptychProps) {
  const images = module.images || []

  return (
    <div>
      {(module.label || module.title) && (
        <AnimatedBlock className="mb-8">
          {module.label && <ModuleLabel>{module.label}</ModuleLabel>}
          {module.title && <ModuleTitle>{module.title}</ModuleTitle>}
        </AnimatedBlock>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
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
