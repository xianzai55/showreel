import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { EditorialSection } from '../components/EditorialSection'
import { Lightbox } from '../components/Lightbox'
import { ProjectHeader } from '../components/ProjectHeader'
import { Section } from '../components/Section'
import type { ProjectId, ProjectImage } from '../data/projects'
import { getProjectById, getProjectIndex, projects } from '../data/projects'

export function ProjectDetail() {
  const { projectId } = useParams<{ projectId: ProjectId }>()
  const project = useMemo(() => getProjectById(projectId as ProjectId), [projectId])

  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const currentIndex = useMemo(
    () => (projectId ? getProjectIndex(projectId as ProjectId) : -1),
    [projectId],
  )
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  const allImages = useMemo<ProjectImage[]>(() => {
    if (!project) return []
    const cover: ProjectImage = { src: project.cover, alt: project.coverAlt }
    return [cover, ...project.sections.flatMap((s) => s.images || [])]
  }, [project])

  const sectionBaseIndices = useMemo(() => {
    if (!project) return []
    return project.sections.map((_, index) =>
      1 + project.sections
        .slice(0, index)
        .reduce((sum, section) => sum + (section.images?.length || 0), 0),
    )
  }, [project])

  const openLightbox = (sectionIndex: number, localIndex: number) => {
    setLightboxIndex(sectionBaseIndices[sectionIndex] + localIndex)
    setLightboxOpen(true)
  }

  const openCover = () => {
    setLightboxIndex(0)
    setLightboxOpen(true)
  }

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
    <div className="bg-ink">
      <ProjectHeader project={project} onImageClick={() => openCover()} />

      {/* Project statement */}
      <Section compact className="border-t border-stone/40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <span
              className="text-[10px] uppercase tracking-[0.35em] block mb-4"
              style={{ color: project.accent }}
            >
              00 — Statement
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-rice">项目理念</h2>
          </div>
          <div className="md:col-span-8 max-w-2xl">
            <p className="font-serif text-xl md:text-2xl text-rice/85 leading-relaxed text-balance">
              {project.statement}
            </p>
            <p className="mt-5 text-sm text-ash leading-relaxed">{project.statementEn}</p>
          </div>
        </div>
      </Section>

      {/* Editorial sections */}
      {project.sections.map((section, sectionIndex) => (
        <div key={`${section.type}-${sectionIndex}`} className="border-t border-stone/30">
          <EditorialSection
            section={section}
            accent={project.accent}
            onImageClick={(_, idx) => openLightbox(sectionIndex, idx)}
          />
        </div>
      ))}

      {/* Info & nav */}
      <Section compact className="border-t border-stone/40 bg-ink-light">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <h3 className="font-serif text-xl text-rice mb-6">项目信息</h3>
            <dl className="space-y-4 text-sm">
              <div className="grid grid-cols-3 gap-4 border-b border-stone/40 pb-4">
                <dt className="text-ash uppercase text-[10px] tracking-wider">Year</dt>
                <dd className="col-span-2 text-rice">{project.year}</dd>
              </div>
              <div className="grid grid-cols-3 gap-4 border-b border-stone/40 pb-4">
                <dt className="text-ash uppercase text-[10px] tracking-wider">Medium</dt>
                <dd className="col-span-2 text-rice">{project.medium}</dd>
              </div>
              <div className="grid grid-cols-3 gap-4 border-b border-stone/40 pb-4">
                <dt className="text-ash uppercase text-[10px] tracking-wider">Role</dt>
                <dd className="col-span-2 text-rice">{project.role}</dd>
              </div>
              <div className="grid grid-cols-3 gap-4 border-b border-stone/40 pb-4">
                <dt className="text-ash uppercase text-[10px] tracking-wider">Tech</dt>
                <dd className="col-span-2 text-rice">{project.tech.join(' / ')}</dd>
              </div>
            </dl>
          </div>

          <div className="flex flex-col justify-end">
            <Link
              to="/works"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ash hover:text-rice transition-colors"
            >
              <ArrowLeft size={14} /> Back to Works
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-stone/40 flex flex-col md:flex-row justify-between gap-8">
          {prevProject ? (
            <Link to={`/works/${prevProject.id}`} className="group flex items-center gap-4">
              <ArrowLeft size={18} className="text-ash group-hover:text-rice transition-colors" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-ash mb-1">Previous</p>
                <p className="font-serif text-lg text-rice group-hover:text-rice-dim transition-colors">
                  {prevProject.title}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link to={`/works/${nextProject.id}`} className="group flex items-center gap-4 text-right">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-ash mb-1">Next</p>
                <p className="font-serif text-lg text-rice group-hover:text-rice-dim transition-colors">
                  {nextProject.title}
                </p>
              </div>
              <ArrowRight size={18} className="text-ash group-hover:text-rice transition-colors" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </Section>

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
