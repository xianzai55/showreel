import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { site } from '../data/projects'

const links = [
  { label: '主页', href: '/' },
  { label: '展览', href: '/exhibition' },
  { label: '设计集', href: '/design' },
]

export function Navbar() {
  const location = useLocation()
  const [open, setOpen] = useState(false)

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/'
    return location.pathname.startsWith(href)
  }

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 mix-blend-difference"
      >
        <div className="max-w-[var(--board-max)] mx-auto px-6 md:px-[var(--board-gutter)]">
          <nav className="flex items-center justify-between py-5">
            <Link to="/" className="font-serif text-base md:text-lg tracking-[0.15em] text-rice">
              {site.artist}
            </Link>

            <ul className="hidden md:flex items-center gap-8 lg:gap-12">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={`relative font-sans text-xs tracking-[0.15em] uppercase text-rice/70 hover:text-rice transition-colors duration-300 ${
                      isActive(link.href) ? 'text-rice' : ''
                    }`}
                  >
                    {link.label}
                    {isActive(link.href) && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 right-0 h-px bg-rice"
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-rice p-2"
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <motion.div
        initial={false}
        animate={
          open
            ? { opacity: 1, pointerEvents: 'auto' as const }
            : { opacity: 0, pointerEvents: 'none' as const }
        }
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 bg-ink/97 backdrop-blur-md md:hidden"
      >
        <nav className="flex flex-col items-center justify-center h-full gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setOpen(false)}
              className="font-serif text-3xl text-rice/90 hover:text-rice transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </motion.div>
    </>
  )
}
