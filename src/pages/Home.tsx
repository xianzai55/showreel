import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { LazyImage } from '../components/LazyImage'
import { Section } from '../components/Section'
import { projects, site } from '../data/projects'

export function Home() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-24 md:pt-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-6"
          >
            <span className="text-[10px] uppercase tracking-[0.35em] text-ash block mb-6">
              {site.titleEn}
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-rice leading-[1.08] tracking-wide text-balance">
              数字诗意的
              <br />
              造物者
            </h1>
            <p className="mt-8 text-sm md:text-base text-rice/60 max-w-md leading-relaxed">
              {site.statement}
            </p>
            <div className="mt-10">
              <Link
                to="/works"
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-rice border-b border-rice/40 pb-1 hover:border-rice transition-colors duration-300"
              >
                View Works
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-6 flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-[520px]">
              <div className="relative z-10 overflow-hidden border border-stone/40 bg-charcoal aspect-[16/10]">
                <LazyImage
                  src={projects[2].cover}
                  alt={projects[2].coverAlt}
                  loading="eager"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 md:w-44 overflow-hidden border border-stone/40 bg-charcoal aspect-[4/3] z-20">
                <LazyImage
                  src={projects[1].cover}
                  alt={projects[1].coverAlt}
                  loading="eager"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Selected Works */}
      <Section className="bg-ink-light">
        <div className="mb-12 md:mb-16">
          <span className="text-[10px] uppercase tracking-[0.35em] text-ash block mb-4">
            Selected Works
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-rice">精选作品</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          {projects.map((project, index) => {
            const sizes = ['md:col-span-7', 'md:col-span-5', 'md:col-span-5', 'md:col-span-7']
            const heights = ['aspect-[16/10]', 'aspect-[4/3]', 'aspect-[4/3]', 'aspect-[16/10]']
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`group ${sizes[index]} ${heights[index]}`}
              >
                <Link to={`/works/${project.id}`} className="block h-full">
                  <div className="relative h-full overflow-hidden border border-stone/40 bg-charcoal">
                    <LazyImage
                      src={project.cover}
                      alt={project.coverAlt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                      <div className="flex items-end justify-between">
                        <div>
                          <span
                            className="text-[10px] uppercase tracking-[0.2em] px-2 py-1 border rounded-full mb-3 inline-block"
                            style={{ borderColor: `${project.accent}60`, color: project.accent }}
                          >
                            {project.tags[0]}
                          </span>
                          <h3 className="font-serif text-xl md:text-2xl text-rice">
                            {project.title}
                          </h3>
                          <p className="text-xs text-rice/50 mt-1">{project.titleEn}</p>
                        </div>
                        <ArrowRight
                          size={18}
                          className="text-rice opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-1"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </Section>

      {/* Statement */}
      <Section compact>
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-[10px] uppercase tracking-[0.35em] text-ash block mb-6">
            01 — Preface
          </span>
          <p className="font-serif text-xl md:text-2xl lg:text-3xl text-rice/85 leading-relaxed text-balance">
            {site.statement}
          </p>
          <p className="mt-6 text-sm text-ash leading-relaxed max-w-xl mx-auto">
            {site.statementEn}
          </p>
        </div>
      </Section>
    </>
  )
}
