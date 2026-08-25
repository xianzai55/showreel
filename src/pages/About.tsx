import { motion } from 'framer-motion'
import { Section } from '../components/Section'
import { site } from '../data/projects'

const experiences = [
  { year: '2024', title: '数字艺术作品个展', titleEn: 'Solo Digital Art Exhibition' },
  { year: '2023', title: '新媒体艺术驻留', titleEn: 'New Media Art Residency' },
  { year: '2022', title: 'AR 文化遗产项目', titleEn: 'AR Cultural Heritage Project' },
  { year: '2021', title: '开始数字艺术创作', titleEn: 'Started Digital Art Practice' },
]

export function About() {
  return (
    <div className="pt-28 md:pt-32 pb-16 md:pb-24">
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5"
          >
            <div className="aspect-[3/4] bg-charcoal overflow-hidden border border-stone/40">
              <img
                src="/images/artist-avatar.svg"
                alt="Kexin Hu 抽象肖像"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7"
          >
            <span className="text-[10px] uppercase tracking-[0.35em] text-ash block mb-4">About</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-rice mb-8">
              {site.artist}
            </h1>

            <div className="space-y-5 text-sm md:text-base text-rice/75 leading-relaxed max-w-lg">
              <p>
                我是一名专注于东方数字诗意与沉浸式体验的新媒体艺术家。作品跨越 AR、数字影像、交互装置与游戏化叙事，试图以当代技术重新激活传统文化中的感知方式。
              </p>
              <p>
                我的创作常常从一幅古画、一件器物或一段历史场景出发，通过 3D 重建、体感交互与实时渲染，让观众以身体进入那些被时间封存的图像与空间。
              </p>
              <p className="text-ash">
                I am a new media artist focused on Eastern digital poetics and immersive
                experiences. My practice spans AR, digital imaging, interactive installation, and
                gamified narrative.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-stone/40">
              <h2 className="font-serif text-xl text-rice mb-5">擅长领域</h2>
              <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-ash">
                {['数字艺术', 'AR / MR', '沉浸式体验', '东方美学数字化', '交互设计', '实时渲染'].map(
                  (skill) => (
                    <div key={skill}>{skill}</div>
                  ),
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section compact className="border-t border-stone/40 bg-ink-light">
        <div className="max-w-3xl">
          <h2 className="font-serif text-2xl md:text-3xl text-rice mb-10">经历与展览</h2>
          <div className="border-t border-stone/40">
            {experiences.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-2 py-5 border-b border-stone/30"
              >
                <div className="md:col-span-2 text-ar-gold font-serif text-xl">{item.year}</div>
                <div className="md:col-span-5 text-rice text-sm">{item.title}</div>
                <div className="md:col-span-5 text-ash text-xs">{item.titleEn}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}
