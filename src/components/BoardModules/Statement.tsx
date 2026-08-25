import { AnimatedBlock, ModuleLabel, ModuleTitle } from './shared'
import type { BoardModule } from '../../data/projects'

interface StatementProps {
  module: BoardModule
}

export function Statement({ module }: StatementProps) {
  return (
    <div className="max-w-3xl mx-auto text-center py-6">
      <AnimatedBlock>
        {module.label && <ModuleLabel>{module.label}</ModuleLabel>}
        {module.title && <ModuleTitle>{module.title}</ModuleTitle>}
        {module.text && (
          <p className="text-base md:text-lg text-rice/75 leading-relaxed font-light">
            {module.text}
          </p>
        )}
      </AnimatedBlock>
    </div>
  )
}
