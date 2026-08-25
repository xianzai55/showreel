import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import { LazyImage } from './LazyImage'

interface WorksItemProps {
  project: Project
  index: number
}

export function WorksItem({ project, index }: WorksItemProps) {
  const number = String(index + 1).padStart(2, '0')

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group border-t border-stone/60 py-10 md:py-14"
    >
      <Link to={`/works/${project.id}`} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
        {/* Number */}
        <div className="md:col-span-1">
          <span className="font-serif text-3xl md:text-4xl text-ash group-hover:text-rice transition-colors duration-300">
            {number}
          </span>
        </div>

        {/* Text */}
        <div className="md:col-span-4">
          <h2 className="font-serif text-2xl md:text-3xl text-rice group-hover:text-rice-dim transition-colors duration-300">
            {project.title}
          </h2>
          <p className="mt-1 text-sm text-ash">{project.titleEn}</p>
          <p className="mt-4 text-sm text-rice/60 leading-relaxed line-clamp-2">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] uppercase tracking-wider px-2 py-1 border rounded-full"
                style={{ borderColor: `${project.accent}50`, color: project.accent }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="md:col-span-6 flex justify-center md:justify-end">
          <div className="relative overflow-hidden bg-charcoal max-w-[420px] w-full aspect-[16/10] border border-stone/40 group-hover:border-rice/30 transition-colors duration-300">
            <LazyImage
              src={project.cover}
              alt={project.coverAlt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-500 flex items-center justify-center">
              <ArrowUpRight
                size={24}
                className="text-rice opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="hidden md:flex md:col-span-1 justify-end">
          <ArrowUpRight
            size={20}
            className="text-ash group-hover:text-rice transition-colors duration-300"
          />
        </div>
      </Link>
    </motion.article>
  )
}
