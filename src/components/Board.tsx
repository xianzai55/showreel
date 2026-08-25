import { BoardHeader, BoardShell } from './BoardShell'
import { BoardModuleRenderer } from './BoardModules'
import type { Board as BoardType, BoardImage, Project } from '../data/projects'

interface BoardProps {
  board: BoardType
  project: Project
  onImageClick?: (image: BoardImage) => void
}

export function Board({ board, project, onImageClick }: BoardProps) {
  return (
    <BoardShell id={`board-${board.id}`}>
      <BoardHeader
        boardId={board.id}
        title={board.title}
        titleEn={board.titleEn}
        subtitle={board.subtitle}
        accent={project.accent}
      />
      <div className="space-y-12 md:space-y-16">
        {board.modules.map((module, index) => (
          <BoardModuleRenderer
            key={`${module.type}-${index}`}
            module={module}
            accent={project.accent}
            onImageClick={onImageClick}
          />
        ))}
      </div>
    </BoardShell>
  )
}
