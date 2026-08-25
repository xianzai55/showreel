import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { Starfield } from '../components/Starfield'
import { site } from '../data/projects'

export function Contact() {
  return (
    <div className="relative min-h-screen pt-28 md:pt-40 pb-16 md:pb-24 bg-ink overflow-hidden">
      <Starfield density={70} speed={0.15} />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-ash mb-4">Contact</p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-rice leading-tight">
              开启一次
              <br />
              对话
            </h1>
            <p className="mt-6 text-lg text-rice/60 max-w-xl leading-relaxed">
              无论您是希望合作展览、委托创作，或只是对作品有疑问，都欢迎通过邮件联系我。
            </p>

            <a
              href={`mailto:${site.email}`}
              className="mt-10 inline-flex items-center gap-3 font-serif text-2xl md:text-3xl text-rice hover:text-ar-gold transition-colors duration-300"
            >
              {site.email}
              <ArrowUpRight size={24} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5"
          >
            <div className="p-8 md:p-10 border border-stone bg-charcoal/30 backdrop-blur-sm">
              <h2 className="font-serif text-xl text-rice mb-8">联系方式</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail size={18} className="text-ar-gold mt-1" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-ash mb-1">Email</p>
                    <a
                      href={`mailto:${site.email}`}
                      className="text-rice hover:text-ar-gold transition-colors"
                    >
                      {site.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin size={18} className="text-ar-gold mt-1" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-ash mb-1">Location</p>
                    <p className="text-rice">{site.location}</p>
                    <p className="text-ash text-sm mt-1">Wuhan, China</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-stone/50">
                <p className="text-[10px] uppercase tracking-[0.25em] text-ash mb-4">Social</p>
                <div className="flex flex-wrap gap-4">
                  {['Instagram', 'Behance', 'Vimeo', 'Weibo'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-sm text-rice/70 hover:text-rice transition-colors"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
