import { BoardImage } from '../BoardImage'
import { AnimatedBlock, ModuleLabel, ModuleTitle } from './shared'
import type { BoardImage as BoardImageType, BoardModule } from '../../data/projects'

interface CalloutProps {
  module: BoardModule
  accent?: string
  onImageClick?: (image: BoardImageType) => void
}

export function Callout({ module, accent, onImageClick }: CalloutProps) {
  const image = module.images?.[0]
  const callouts = module.callouts || []

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
      <div className="lg:col-span-4 order-2 lg:order-1">
        <AnimatedBlock>
          {module.label && <ModuleLabel>{module.label}</ModuleLabel>}
          {module.title && <ModuleTitle>{module.title}</ModuleTitle>}
          <div className="space-y-5 mt-6">
            {callouts.map((item) => (
              <div key={item.number} className="flex gap-4">
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center text-[10px] font-mono"
                  style={{
                    borderColor: accent || 'rgba(244, 241, 234, 0.3)',
                    color: accent || 'var(--color-rice)',
                  }}
                >
                  {item.number}
                </span>
                <p className="text-sm text-rice/70 leading-relaxed pt-0.5">{item.text}</p>
              </div>
            ))}
          </div>
        </AnimatedBlock>
      </div>
      <div className="lg:col-span-8 order-1 lg:order-2 flex justify-center lg:justify-end">
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
