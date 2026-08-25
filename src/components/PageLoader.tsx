import { motion } from 'framer-motion'

export function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="text-center"
      >
        <div className="mx-auto mb-4 h-px w-16 bg-gradient-to-r from-transparent via-rice/60 to-transparent" />
        <p className="font-serif text-sm tracking-[0.2em] text-rice/70">
          Loading Exhibition
        </p>
        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-ash">
          Please wait
        </p>
      </motion.div>
    </div>
  )
}
