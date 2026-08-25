import { BoardImage } from '../BoardImage'
import { AnimatedBlock, ModuleLabel, ModuleTitle } from './shared'
import type { BoardImage as BoardImageType, BoardModule } from '../../data/projects'

interface MatrixProps {
  module: BoardModule
  onImageClick?: (image: BoardImageType) => void
}

export function Matrix({ module, onImageClick }: MatrixProps) {
  const images = module.images || []

  return (
    <div>
      {(module.label || module.title) && (
        <AnimatedBlock className="mb-8">
          {module.label && <ModuleLabel>{module.label}</ModuleLabel>}
          {module.title && <ModuleTitle>{module.title}</ModuleTitle>}
        </AnimatedBlock>
      )}
      <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-8 items-end">
        {images.map((img, i) => (
          <AnimatedBlock key={`${img.src}-${i}`} delay={i * 0.06}>
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
