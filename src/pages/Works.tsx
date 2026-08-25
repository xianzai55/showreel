import { motion } from 'framer-motion'
import { Section } from '../components/Section'
import { WorksItem } from '../components/WorksItem'
import { projects } from '../data/projects'

export function Works() {
  return (
    <div className="pt-28 md:pt-32 pb-16 md:pb-24">
      <Section compact>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[10px] uppercase tracking-[0.35em] text-ash block mb-4">
            Exhibition Catalog
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-rice">展览目录</h1>
          <p className="mt-6 text-sm text-rice/55 max-w-xl leading-relaxed">
            四个项目，四种关于东方数字艺术的探索路径。点击任意作品进入独立策展空间。
          </p>
        </motion.div>
      </Section>

      <div className="max-w-[var(--spacing-max)] mx-auto px-6 md:px-[var(--spacing-gutter)]">
        {projects.map((project, index) => (
          <WorksItem key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  )
}
