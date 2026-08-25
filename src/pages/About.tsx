import { motion } from 'framer-motion'
import { site } from '../data/projects'
import { imageUrl } from '../utils/imageUrl'

export function About() {
  return (
    <div className="pt-28 md:pt-32 pb-20 md:pb-28">
      <div className="max-w-[var(--board-max)] mx-auto px-[var(--board-gutter)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <span className="font-mono text-xs tracking-[0.25em] text-ash block mb-6">
              About the Artist
            </span>
            <h1 className="font-serif text-4xl md:text-5xl text-rice mb-6">
              {site.artist}
            </h1>
            <div className="relative w-48 h-48 md:w-56 md:h-56 overflow-hidden bg-charcoal border border-stone/40">
              <img
                src={imageUrl('/images/artist-avatar.svg')}
                alt="Kexin Hu 抽象肖像"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <p className="font-serif text-xl md:text-2xl text-rice/85 leading-relaxed text-balance mb-8">
              {site.statement}
            </p>
            <p className="text-sm md:text-base text-rice/60 leading-relaxed mb-10 max-w-xl">
              {site.statementEn}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm">
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.25em] text-ash mb-3">
                  Focus
                </h3>
                <ul className="space-y-2 text-rice/80">
                  <li>数字文化遗产</li>
                  <li>AR / VR 空间叙事</li>
                  <li>体感交互与展览设计</li>
                  <li>游戏概念与数字绘景</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.25em] text-ash mb-3">
                  Education
                </h3>
                <ul className="space-y-2 text-rice/80">
                  <li>环境设计 / 数字媒体艺术</li>
                  <li>{site.location}</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
