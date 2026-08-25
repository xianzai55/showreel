import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { BoardImage } from '../components/BoardImage'
import { projects, site } from '../data/projects'
import { imageUrl } from '../utils/imageUrl'

export function Home() {
  return (
    <div className="pt-24 md:pt-28">
      {/* Hero Board */}
      <section className="relative w-full min-h-[var(--board-height)] flex flex-col justify-center py-16 md:py-20 border-b border-stone/30">
        <div className="w-full max-w-[var(--board-max)] mx-auto px-[var(--board-gutter)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6"
            >
              <span className="font-mono text-xs tracking-[0.25em] text-ash block mb-6">
                Exhibition of Digital Spatial Narratives
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-rice leading-[1.1] mb-6">
                {site.artist}
              </h1>
              <p className="text-lg md:text-xl text-rice/70 font-light leading-relaxed max-w-md mb-8">
                数字艺术 / 新媒体艺术 / AR / 沉浸式体验
                <br />
                <span className="text-ash text-base">
                  Digital Art · New Media · AR · Immersive
                </span>
              </p>
              <Link
                to="/works"
                className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-rice border-b border-rice/30 pb-1 hover:border-rice transition-colors"
              >
                View Works <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6 flex items-end gap-5 justify-center lg:justify-end"
            >
              <BoardImage
                image={{
                  src: projects[2].cover,
                  alt: projects[2].coverAlt,
                  size: 'md',
                  aspect: '4/3',
                  caption: '',
                }}
                showCaption={false}
              />
              <div className="hidden md:flex flex-col gap-5 pb-8">
                <BoardImage
                  image={{
                    src: projects[0].cover,
                    alt: projects[0].coverAlt,
                    size: 'xs',
                    aspect: '3/2',
                    caption: '',
                  }}
                  showCaption={false}
                />
                <BoardImage
                  image={{
                    src: projects[3].cover,
                    alt: projects[3].coverAlt,
                    size: 'xs',
                    aspect: '3/2',
                    caption: '',
                  }}
                  showCaption={false}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Index Board */}
      <section className="relative w-full min-h-[var(--board-height)] flex flex-col justify-center py-16 md:py-20 border-b border-stone/30">
        <div className="w-full max-w-[var(--board-max)] mx-auto px-[var(--board-gutter)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12 md:mb-16"
          >
            <span className="font-mono text-xs tracking-[0.25em] text-ash block mb-4">
              Exhibition Catalog
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-rice">
              展板目录
            </h2>
            <p className="mt-4 text-sm text-rice/55 max-w-xl">
              四个项目，四组数字展板。每组由 2–4 块横向展板构成，点击项目进入独立策展空间。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {projects.map((project, index) => {
              const isLarge = index === 1 || index === 2
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className={`group ${isLarge ? 'md:col-span-1' : ''}`}
                >
                  <Link to={`/works/${project.id}`} className="block">
                    <div className="flex items-start gap-5">
                      <span
                        className="font-serif text-3xl md:text-4xl text-ash group-hover:text-rice transition-colors"
                        style={{ color: index === 0 ? project.accent : undefined }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="flex-1">
                        <div className="relative overflow-hidden bg-charcoal border border-stone/40 aspect-video mb-5 group-hover:border-rice/30 transition-colors">
                          <img
                            src={imageUrl(project.cover)}
                            alt={project.coverAlt}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        <h3 className="font-serif text-xl md:text-2xl text-rice group-hover:text-rice-dim transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs text-ash mt-1">{project.titleEn}</p>
                        <p className="text-sm text-rice/60 mt-3 line-clamp-2 max-w-sm">
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
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Statement Board */}
      <section className="relative w-full min-h-[60vh] flex flex-col justify-center py-20 md:py-28">
        <div className="w-full max-w-[var(--board-max)] mx-auto px-[var(--board-gutter)]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="font-mono text-xs tracking-[0.3em] text-ash block mb-8">
              00 — Statement
            </span>
            <p className="font-serif text-xl md:text-2xl lg:text-3xl text-rice/85 leading-relaxed text-balance mb-8">
              {site.statement}
            </p>
            <p className="text-sm text-ash leading-relaxed max-w-xl mx-auto">
              {site.statementEn}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
