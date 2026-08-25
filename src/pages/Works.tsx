import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { imageUrl } from '../utils/imageUrl'

export function Works() {
  return (
    <div className="pt-28 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-[var(--board-max)] mx-auto px-[var(--board-gutter)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20"
        >
          <span className="font-mono text-xs tracking-[0.25em] text-ash block mb-4">
            Exhibition Catalog
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-rice">
            展览目录
          </h1>
          <p className="mt-6 text-sm text-rice/55 max-w-xl leading-relaxed">
            五个项目，五组关于东方数字艺术的展板。点击任意作品进入独立策展空间，浏览每块展板的构图与细节。
          </p>
        </motion.div>

        <div className="space-y-0">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group border-t border-stone/60 py-10 md:py-14"
            >
              <Link
                to={`/works/${project.id}`}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center"
              >
                <div className="md:col-span-1">
                  <span className="font-serif text-3xl md:text-4xl text-ash group-hover:text-rice transition-colors duration-300">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

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
                        style={{
                          borderColor: `${project.accent}50`,
                          color: project.accent,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-6 flex justify-center md:justify-end">
                  <div className="relative overflow-hidden bg-charcoal max-w-[420px] w-full aspect-video border border-stone/40 group-hover:border-rice/30 transition-colors duration-300">
                    <img
                      src={imageUrl(project.cover)}
                      alt={project.coverAlt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="hidden md:flex md:col-span-1 justify-end">
                  <ArrowRight
                    size={20}
                    className="text-ash group-hover:text-rice transition-colors duration-300"
                  />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
}
