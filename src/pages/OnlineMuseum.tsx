import { ArrowLeft, Home } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HallView, MuseumLightbox, MuseumLobby, MuseumShell } from '../components/museum'
import type { Exhibit } from '../data/onlineMuseum'
import { exhibitions, getExhibition, getExhibitionExhibits, getExhibitionHalls } from '../data/onlineMuseum'

type MuseumMode = 'lobby' | 'guided'

export function OnlineMuseum() {
  const location = useLocation()
  // 从 URL 路径里解析展览 id：/exhibition/green-shoots → green-shoots
  const exhibitionId = useMemo(() => {
    const match = location.pathname.match(/^\/exhibition\/([^/]+)/)
    return match ? match[1] : undefined
  }, [location.pathname])
  const exhibition = useMemo(() => getExhibition(exhibitionId), [exhibitionId])
  const halls = useMemo(() => getExhibitionHalls(exhibitionId), [exhibitionId])
  const allExhibits = useMemo(() => getExhibitionExhibits(exhibitionId), [exhibitionId])

  const [mode, setMode] = useState<MuseumMode>('lobby')
  const [tourActive, setTourActive] = useState(false)
  const [currentHallId, setCurrentHallId] = useState<string | undefined>(halls[0]?.id)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentExhibitId, setCurrentExhibitId] = useState<string | null>(null)

  const currentHallIndex = useMemo(
    () => halls.findIndex((h) => h.id === currentHallId),
    [halls, currentHallId]
  )
  const currentHall = currentHallIndex >= 0 ? halls[currentHallIndex] : undefined
  const exhibitionIndex = exhibitions.findIndex((e) => e.id === exhibitionId)

  const handleOpenExhibit = (exhibit: Exhibit) => {
    setCurrentExhibitId(exhibit.id)
    setLightboxOpen(true)
  }

  const handleExhibitChange = (exhibitId: string) => {
    setCurrentExhibitId(exhibitId)
  }

  const handleStartGuided = () => {
    if (exhibition && exhibition.tourImages.length > 0) {
      // 进入 Start Guided Tour：在 Lobby 内切换为拼贴视图
      setTourActive(true)
      return
    }
    if (halls[0]) setCurrentHallId(halls[0].id)
    setMode('guided')
  }

  const handleLeaveTour = () => {
    setTourActive(false)
  }

  const handlePrevHall = () => {
    if (currentHallIndex > 0) {
      setCurrentHallId(halls[currentHallIndex - 1].id)
    }
  }

  const handleNextHall = () => {
    if (currentHallIndex >= 0 && currentHallIndex < halls.length - 1) {
      setCurrentHallId(halls[currentHallIndex + 1].id)
    }
  }

  if (!exhibition || halls.length === 0) {
    return (
      <div className="pt-40 text-center text-ash">
        <p>展览未找到</p>
        <Link to="/exhibition" className="text-rice underline mt-4 inline-block">
          返回展览
        </Link>
      </div>
    )
  }

  return (
    <MuseumShell variant={mode === 'lobby' ? 'lobby' : 'hall'}>
      {/* Subtle top bar inside museum experience */}
      <div className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-[var(--board-gutter)] py-4 pt-20 md:pt-24 pointer-events-none">
        <Link
          to="/exhibition"
          className="pointer-events-auto inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-ash hover:text-rice transition-colors"
        >
          <ArrowLeft size={14} /> Back to Exhibitions
        </Link>
        {mode !== 'lobby' && (
          <button
            type="button"
            onClick={() => setMode('lobby')}
            className="pointer-events-auto inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-ash hover:text-rice transition-colors"
          >
            <Home size={14} /> Lobby
          </button>
        )}
      </div>

      {mode === 'lobby' && (
        <MuseumLobby
          exhibition={exhibition}
          halls={halls}
          exhibitionNumber={exhibitionIndex >= 0 ? exhibitionIndex + 1 : 1}
          exhibitionCount={exhibitions.length}
          tourActive={tourActive}
          onStartGuided={handleStartGuided}
          onLeaveTour={handleLeaveTour}
        />
      )}

      {mode === 'guided' && currentHall && (
        <HallView
          hall={currentHall}
          onOpenExhibit={handleOpenExhibit}
          onPrevHall={handlePrevHall}
          onNextHall={handleNextHall}
          hasPrev={currentHallIndex > 0}
          hasNext={currentHallIndex < halls.length - 1}
          currentHallIndex={currentHallIndex}
          totalHalls={halls.length}
        />
      )}

      <MuseumLightbox
        exhibits={allExhibits}
        open={lightboxOpen}
        exhibitId={currentExhibitId}
        onClose={() => setLightboxOpen(false)}
        onExhibitChange={handleExhibitChange}
        hallName={currentHall?.name}
      />
    </MuseumShell>
  )
}
