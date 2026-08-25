import { motion } from 'framer-motion'

export function PageLoader() {
  return (
    <div className="fixed inset-0 z-[90] bg-ink flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-6"
      >
        <div className="relative w-12 h-12">
          <motion.span
            className="absolute inset-0 rounded-full border border-stone"
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.span
            className="absolute inset-2 rounded-full border border-rice/40"
            animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          />
        </div>
        <p className="text-[10px] uppercase tracking-[0.35em] text-ash">
          Loading Exhibition
        </p>
      </motion.div>
    </div>
  )
}
