import { AnimatePresence, motion } from 'framer-motion'
import { lazy, Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { PageLoader } from './components/PageLoader'
import { ScrollToTop } from './components/ScrollToTop'
import { useLenis } from './hooks/useLenis'

const Home = lazy(() => import('./pages/Home').then((m) => ({ default: m.Home })))
const Exhibition = lazy(() => import('./pages/Exhibition').then((m) => ({ default: m.Exhibition })))
const OnlineMuseum = lazy(() => import('./pages/OnlineMuseum').then((m) => ({ default: m.OnlineMuseum })))
const Design = lazy(() => import('./pages/Design').then((m) => ({ default: m.Design })))

function App() {
  const location = useLocation()
  useLenis()

  return (
    <div className="min-h-screen bg-ink text-rice font-sans">
      <ScrollToTop />
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
                <Route path="/exhibition" element={<Exhibition />} />
                <Route path="/exhibition/:projectId" element={<OnlineMuseum />} />
                <Route path="/design" element={<Design />} />
                <Route path="*" element={<Home />} />
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