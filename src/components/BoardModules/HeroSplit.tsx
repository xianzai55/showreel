import { BoardImage } from '../BoardImage'
import { AnimatedBlock, ModuleLabel, ModuleText, ModuleTitle } from './shared'
import type { BoardImage as BoardImageType, BoardModule } from '../../data/projects'

interface HeroSplitProps {
  module: BoardModule
  onImageClick?: (image: BoardImageType) => void
}

export function HeroSplit({ module, onImageClick }: HeroSplitProps) {
  const mainImage = module.images?.[0]
  const sideImages = module.images?.slice(1) || []

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      <div className="lg:col-span-5 order-2 lg:order-1">
        <AnimatedBlock>
          {module.label && <ModuleLabel>{module.label}</ModuleLabel>}
          {module.title && <ModuleTitle>{module.title}</ModuleTitle>}
          {module.text && <ModuleText>{module.text}</ModuleText>}
        </AnimatedBlock>
      </div>

      <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col md:flex-row items-start md:items-end gap-6">
        {mainImage && (
          <AnimatedBlock delay={0.1}>
            <BoardImage
              image={mainImage}
              onClick={onImageClick ? () => onImageClick(mainImage) : undefined}
            />
          </AnimatedBlock>
        )}
        <div className="flex flex-col gap-5">
          {sideImages.map((img, i) => (
            <AnimatedBlock key={`${img.src}-${i}`} delay={0.2 + i * 0.08}>
              <BoardImage
                image={img}
                onClick={onImageClick ? () => onImageClick(img) : undefined}
              />
            </AnimatedBlock>
          ))}
        </div>
      </div>
    </div>
  )
}
