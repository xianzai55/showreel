import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BoardImage } from '../components/BoardImage'
import { BoardShell, BoardHeader } from '../components/BoardShell'
import { Board } from '../components/Board'
import { Lightbox } from '../components/Lightbox'
import { getAdjacentProjects, getProjectById, type BoardImage as BoardImageType } from '../data/projects'

export function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>()
  const project = useMemo(() => getProjectById(projectId as any), [projectId])
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const allImages = useMemo(() => {
    if (!project) return []
    const cover: BoardImageType = { src: project.cover, alt: project.coverAlt }
    const boardImages = project.boards.flatMap((b) => b.modules.flatMap((m) => m.images || []))
    return [cover, ...boardImages]
  }, [project])

  const handleImageClick = (image: BoardImageType) => {
    const idx = allImages.findIndex((img) => img.src === image.src)
    setLightboxIndex(idx >= 0 ? idx : 0)
    setLightboxOpen(true)
  }

  const { prev, next } = useMemo(
    () => (project ? getAdjacentProjects(project.id) : { prev: null, next: null }),
    [project]
  )

  if (!project) {
    return (
      <div className="pt-40 text-center text-ash">
        <p>作品未找到</p>
        <Link to="/works" className="text-rice underline mt-4 inline-block">
          返回展览
        </Link>
      </div>
    )
  }

  return (
    <div className="pt-24 md:pt-28">
      {/* Cover Board */}
      <BoardShell className="border-b border-stone/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 border rounded-full"
                  style={{ borderColor: project.accent, color: project.accent }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-rice leading-tight">
              {project.title}
            </h1>
            <p className="mt-2 text-lg text-rice/50 font-light">{project.titleEn}</p>
            <p className="mt-8 text-sm md:text-base text-rice/70 leading-relaxed max-w-md">
              {project.description}
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 text-xs">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-ash mb-1">Year</p>
                <p className="text-rice">{project.year}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-ash mb-1">Medium</p>
                <p className="text-rice">{project.medium}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-ash mb-1">Role</p>
                <p className="text-rice">{project.role}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-ash mb-1">Tech</p>
                <p className="text-rice">{project.tech.join(' / ')}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex justify-center lg:justify-end"
          >
            <BoardImage
              image={{
                src: project.cover,
                alt: project.coverAlt,
                size: 'lg',
                aspect: '16/9',
                caption: `${project.title} · 封面主视觉`,
              }}
              onClick={() =>
                handleImageClick({ src: project.cover, alt: project.coverAlt })
              }
            />
          </motion.div>
        </div>

        {/* Board mini nav */}
        <div className="mt-14 pt-8 border-t border-stone/40">
          <div className="flex flex-wrap items-center gap-3 md:gap-5">
            <span className="text-[10px] uppercase tracking-[0.25em] text-ash mr-2">
              Boards
            </span>
            {project.boards.map((board) => (
              <a
                key={board.id}
                href={`#board-${board.id}`}
                className="px-3 py-1.5 text-xs border border-stone/50 text-rice/70 hover:text-rice hover:border-rice/40 transition-colors"
              >
                {board.id} · {board.title}
              </a>
            ))}
          </div>
        </div>
      </BoardShell>

      {/* Project statement board */}
      <BoardShell>
        <BoardHeader
          boardId="00"
          title="项目理念"
          titleEn="Statement"
          accent={project.accent}
        />
        <div className="max-w-3xl mx-auto text-center py-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-serif text-xl md:text-2xl text-rice/85 leading-relaxed text-balance mb-6"
          >
            {project.statement}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-sm text-ash leading-relaxed"
          >
            {project.statementEn}
          </motion.p>
        </div>
      </BoardShell>

      {/* Content boards */}
      {project.boards.map((board) => (
        <Board
          key={board.id}
          board={board}
          project={project}
          onImageClick={handleImageClick}
        />
      ))}

      {/* Info board */}
      <BoardShell>
        <BoardHeader
          boardId="99"
          title="项目信息"
          titleEn="Project Info"
          accent={project.accent}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <dl className="space-y-5 text-sm">
            {[
              ['Year', project.year],
              ['Medium', project.medium],
              ['Role', project.role],
              ['Role (En)', project.roleEn],
              ['Tech', project.tech.join(' / ')],
            ].map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-3 gap-4 border-b border-stone/40 pb-4"
              >
                <dt className="text-ash uppercase text-[10px] tracking-wider">{label}</dt>
                <dd className="col-span-2 text-rice">{value}</dd>
              </div>
            ))}
          </dl>
          <div className="flex flex-col justify-end">
            <Link
              to="/works"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ash hover:text-rice transition-colors"
            >
              <ArrowLeft size={14} /> Back to Works
            </Link>
          </div>
        </div>
      </BoardShell>

      {/* Prev / Next */}
      <section className="border-t border-stone/40 py-12 md:py-16">
        <div className="max-w-[var(--board-max)] mx-auto px-[var(--board-gutter)] flex flex-col md:flex-row justify-between gap-8">
          {prev ? (
            <Link
              to={`/works/${prev.id}`}
              className="group flex items-center gap-4"
            >
              <ArrowLeft
                size={18}
                className="text-ash group-hover:text-rice transition-colors"
              />
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-ash mb-1">
                  Previous
                </p>
                <p className="font-serif text-lg text-rice group-hover:text-rice-dim transition-colors">
                  {prev.title}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              to={`/works/${next.id}`}
              className="group flex items-center gap-4 text-right"
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-ash mb-1">
                  Next
                </p>
                <p className="font-serif text-lg text-rice group-hover:text-rice-dim transition-colors">
                  {next.title}
                </p>
              </div>
              <ArrowRight
                size={18}
                className="text-ash group-hover:text-rice transition-colors"
              />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>

      <Lightbox
        images={allImages}
        open={lightboxOpen}
        index={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onIndexChange={setLightboxIndex}
        projectTitle={project.title}
      />
    </div>
  )
}
