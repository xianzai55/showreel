import { ArrowUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import { site } from '../data/projects'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-stone/60 bg-ink">
      <div className="max-w-[var(--board-max)] mx-auto px-[var(--board-gutter)] py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <Link to="/" className="font-serif text-xl tracking-[0.15em] text-rice">
              {site.artist}
            </Link>
            <p className="mt-3 text-xs text-ash max-w-xs leading-relaxed">
              数字艺术 / 新媒体艺术 / AR / 沉浸式体验
              <br />
              Digital Art · New Media · AR · Immersive
            </p>
          </div>

          <div className="flex items-center gap-8">
            <Link to="/exhibition" className="text-xs text-ash hover:text-rice transition-colors uppercase tracking-wider">
              Exhibition
            </Link>
            <Link to="/design" className="text-xs text-ash hover:text-rice transition-colors uppercase tracking-wider">
              Design
            </Link>
            <button
              onClick={scrollToTop}
              className="p-2 border border-stone rounded-full text-ash hover:text-rice hover:border-rice transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone/40 flex flex-col md:flex-row justify-between gap-4 text-[10px] text-ash uppercase tracking-wider">
          <span>© 2024 {site.artist}. All rights reserved.</span>
          <span>Designed as a digital exhibition catalog.</span>
        </div>
      </div>
    </footer>
  )
}
