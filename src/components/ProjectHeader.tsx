import { motion } from 'framer-motion'
import { EditorialImage } from './EditorialImage'
import type { Project, ProjectImage } from '../data/projects'

interface ProjectHeaderProps {
  project: Project
  onImageClick: (image: ProjectImage) => void
}

export function ProjectHeader({ project, onImageClick }: ProjectHeaderProps) {
  return (
    <section className="relative min-h-[var(--spacing-section)] w-full px-6 md:px-[var(--spacing-gutter)] py-24 md:py-32 flex flex-col justify-center">
      <div className="w-full max-w-[var(--spacing-max)] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 order-2 md:order-1"
          >
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] uppercase tracking-[0.2em] px-2 py-1 border rounded-full"
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

          {/* Cover image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7 order-1 md:order-2 flex justify-center md:justify-end"
          >
            <EditorialImage
              image={{ src: project.cover, alt: project.coverAlt, size: 'lg' }}
              onClick={() =>
                onImageClick({ src: project.cover, alt: project.coverAlt })
              }
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
