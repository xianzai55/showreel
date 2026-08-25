import { BoardImage } from '../BoardImage'
import { AnimatedBlock, ModuleLabel, ModuleText, ModuleTitle } from './shared'
import type { BoardImage as BoardImageType, BoardModule } from '../../data/projects'

interface TextImageProps {
  module: BoardModule
  onImageClick?: (image: BoardImageType) => void
}

export function TextImage({ module, onImageClick }: TextImageProps) {
  const image = module.images?.[0]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
      <div className="lg:col-span-5">
        <AnimatedBlock>
          {module.label && <ModuleLabel>{module.label}</ModuleLabel>}
          {module.title && <ModuleTitle>{module.title}</ModuleTitle>}
          {module.text && <ModuleText>{module.text}</ModuleText>}
        </AnimatedBlock>
      </div>
      <div className="lg:col-span-7 flex justify-center lg:justify-end">
        {image && (
          <AnimatedBlock delay={0.1}>
            <BoardImage
              image={image}
              onClick={onImageClick ? () => onImageClick(image) : undefined}
            />
          </AnimatedBlock>
        )}
      </div>
    </div>
  )
}
