import { AnimatePresence, motion } from 'framer-motion'
import { lazy, Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { PageLoader } from './components/PageLoader'
import { useLenis } from './hooks/useLenis'

const Home = lazy(() => import('./pages/Home').then((m) => ({ default: m.Home })))
const Works = lazy(() => import('./pages/Works').then((m) => ({ default: m.Works })))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail').then((m) => ({ default: m.ProjectDetail })))
const OnlineMuseum = lazy(() => import('./pages/OnlineMuseum').then((m) => ({ default: m.OnlineMuseum })))
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          <main>
            <Suspense fallback={<PageLoader />}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/works" element={<Works />} />
                <Route path="/works/online-museum" element={<OnlineMuseum />} />
                <Route path="/works/irish-curation" element={<OnlineMuseum />} />
                <Route path="/works/:projectId" element={<ProjectDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </main>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App
