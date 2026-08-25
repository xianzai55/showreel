import { AnimatePresence, motion } from 'framer-motion'
import { Suspense, lazy } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { PageLoader } from './components/PageLoader'
import { useLenis } from './hooks/useLenis'

const Home = lazy(() => import('./pages/Home').then((m) => ({ default: m.Home })))
const Works = lazy(() => import('./pages/Works').then((m) => ({ default: m.Works })))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail').then((m) => ({ default: m.ProjectDetail })))
const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })))
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })))

function App() {
  const location = useLocation()
  useLenis()

  return (
    <div className="min-h-screen bg-ink text-rice font-sans">
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Suspense fallback={<PageLoader />}>
            <main>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/works" element={<Works />} />
                <Route path="/works/:projectId" element={<ProjectDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
          </Suspense>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App
