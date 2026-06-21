import { useState } from 'react'
import type { DayId } from './data/types'
import { AppBar } from './components/AppBar'
import { Hero } from './components/Hero'
import { Highlights } from './components/Highlights'
import { Itinerary } from './components/Itinerary'
import { TripMap } from './components/TripMap'
import { Budget } from './components/Budget'
import { Transport } from './components/Transport'
import { Packing } from './components/Packing'
import { Emergency } from './components/Emergency'
import { BottomNav } from './components/BottomNav'
import { BackToTop } from './components/BackToTop'
import { useActiveSection } from './hooks/useActiveSection'

const SECTION_IDS = ['itinerary', 'map', 'budget', 'transport', 'packing', 'emergency']

export default function App() {
  const [openDays, setOpenDays] = useState<Record<DayId, boolean>>({
    d1: true,
    d2: false,
    d3: false,
    d4: false,
  })

  const active = useActiveSection(SECTION_IDS)
  const activeTab = active === 'packing' || active === 'emergency' ? 'transport' : active

  const toggleDay = (id: DayId) => setOpenDays((prev) => ({ ...prev, [id]: !prev[id] }))

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  const selectDay = (id: DayId) => {
    setOpenDays((prev) => ({ ...prev, [id]: true }))
    requestAnimationFrame(() => scrollTo(id))
  }

  return (
    <div className="pb-16">
      <AppBar onSelectDay={selectDay} />
      <Hero />

      <main className="max-w-3xl mx-auto px-4 py-8 space-y-12">
        <Highlights />
        <Itinerary openDays={openDays} onToggleDay={toggleDay} />
        <TripMap />
        <Budget />
        <Transport />
        <Packing />
        <Emergency />
      </main>

      <footer className="max-w-3xl mx-auto px-4 pb-24 pt-2 text-center text-xs text-slate-500 leading-relaxed">
        料金・時刻・規制は変動します。出発前に各公式で最新情報をご確認ください。
        <br />
        南九州＆屋久島 3泊4日 旅のしおり
      </footer>

      <BackToTop />
      <BottomNav active={activeTab} onJump={scrollTo} />
    </div>
  )
}
