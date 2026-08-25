import { motion } from 'framer-motion'
import { Mail, MapPin } from 'lucide-react'
import { site } from '../data/projects'

export function Contact() {
  return (
    <div className="pt-28 md:pt-32 pb-20 md:pb-28">
      <div className="max-w-[var(--board-max)] mx-auto px-[var(--board-gutter)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <span className="font-mono text-xs tracking-[0.25em] text-ash block mb-6">
              Contact
            </span>
            <h1 className="font-serif text-4xl md:text-5xl text-rice mb-6">
              联系
            </h1>
            <p className="text-sm text-rice/60 leading-relaxed max-w-sm">
              如有展览、合作或作品咨询，欢迎通过邮件联系。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="space-y-8">
              <a
                href={`mailto:${site.email}`}
                className="group flex items-start gap-5"
              >
                <Mail size={18} className="text-ash mt-1 group-hover:text-rice transition-colors" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-ash mb-1">Email</p>
                  <p className="text-lg md:text-xl text-rice group-hover:text-rice-dim transition-colors">
                    {site.email}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-5">
                <MapPin size={18} className="text-ash mt-1" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-ash mb-1">Location</p>
                  <p className="text-lg md:text-xl text-rice">{site.location}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
