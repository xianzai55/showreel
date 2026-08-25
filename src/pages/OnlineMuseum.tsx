import { ArrowLeft, Home } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Floorplan, HallView, MuseumLightbox, MuseumLobby, MuseumShell } from '../components/museum'
import { allExhibits, halls, onlineMuseum } from '../data/onlineMuseum'
import type { Exhibit } from '../data/onlineMuseum'

type MuseumMode = 'lobby' | 'guided' | 'free'

export function OnlineMuseum() {
  const [mode, setMode] = useState<MuseumMode>('lobby')
  const [currentHallId, setCurrentHallId] = useState<string>(halls[0].id)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentExhibitId, setCurrentExhibitId] = useState<string | null>(null)

  const currentHallIndex = useMemo(
    () => halls.findIndex((h) => h.id === currentHallId),
    [currentHallId]
  )
  const currentHall = halls[currentHallIndex]

  const handleOpenExhibit = (exhibit: Exhibit) => {
    setCurrentExhibitId(exhibit.id)
    setLightboxOpen(true)
  }

  const handleExhibitChange = (exhibitId: string) => {
    setCurrentExhibitId(exhibitId)
  }

  const handleSelectHall = (hallId: string) => {
    setCurrentHallId(hallId)
    setMode('free')
  }

  const handleStartGuided = () => {
    setCurrentHallId(halls[0].id)
    setMode('guided')
  }

  const handleStartFree = () => {
    setMode('free')
  }

  const handlePrevHall = () => {
    if (currentHallIndex > 0) {
      setCurrentHallId(halls[currentHallIndex - 1].id)
    }
  }

  const handleNextHall = () => {
    if (currentHallIndex < halls.length - 1) {
      setCurrentHallId(halls[currentHallIndex + 1].id)
    }
  }

  return (
    <MuseumShell variant={mode === 'lobby' ? 'lobby' : 'hall'}>
      {/* Subtle top bar inside museum experience */}
      <div className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-[var(--board-gutter)] py-4 pt-20 md:pt-24 pointer-events-none">
        <Link
          to="/works"
          className="pointer-events-auto inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-ash hover:text-rice transition-colors"
        >
          <ArrowLeft size={14} /> Back to Works
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
          exhibition={onlineMuseum}
          halls={halls}
          onStartGuided={handleStartGuided}
          onStartFree={handleStartFree}
          onSelectHall={handleSelectHall}
        />
      )}

      {mode === 'free' && (
        <Floorplan
          halls={halls}
          currentHallId={currentHallId}
          onSelectHall={handleSelectHall}
          onStartGuided={handleStartGuided}
        />
      )}

      {(mode === 'guided' || mode === 'free') && currentHall && (
        <HallView
          hall={currentHall}
          mode={mode}
          onOpenExhibit={handleOpenExhibit}
          onSwitchMode={() => setMode(mode === 'guided' ? 'free' : 'guided')}
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
