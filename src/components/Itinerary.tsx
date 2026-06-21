import type { Day, DayId } from '../data/types'
import { days } from '../data/trip'
import { SectionHeading } from './SectionHeading'
import { SpotCard } from './SpotCard'
import { Icon } from './Icon'

function DayCard({ day, open, onToggle }: { day: Day; open: boolean; onToggle: () => void }) {
  return (
    <section id={day.id} className="section-anchor">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`${day.id}-panel`}
        className="w-full flex items-center gap-3 bg-white rounded-2xl border border-slate-200 shadow-sm p-3 text-left active:bg-slate-50 transition-colors"
      >
        <span
          style={{ backgroundColor: day.color }}
          className="inline-flex items-center justify-center w-12 h-12 rounded-full text-white font-black text-lg shadow-sm shrink-0"
        >
          {day.label}
        </span>
        <span className="flex-1 min-w-0">
          <span className="block font-bold text-slate-900 leading-tight">{day.title}</span>
          <span className="block text-xs text-slate-500 mt-0.5">{day.subtitle}</span>
        </span>
        <Icon
          name="chevron"
          className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div
          id={`${day.id}-panel`}
          className="mt-3 bg-white rounded-2xl shadow-sm border border-slate-200 p-4 sm:p-5 space-y-4 animate-fade-in-up"
        >
          {day.spots.map((spot, i) => (
            <div key={spot.id} className={i > 0 ? 'border-t border-slate-100 pt-4' : ''}>
              <SpotCard spot={spot} />
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export function Itinerary({
  openDays,
  onToggleDay,
}: {
  openDays: Record<DayId, boolean>
  onToggleDay: (id: DayId) => void
}) {
  return (
    <section id="itinerary" className="section-anchor">
      <SectionHeading icon="calendar" title="ツアースケジュール" sub="タップで各日を開閉" />
      <div className="space-y-4">
        {days.map((day) => (
          <DayCard key={day.id} day={day} open={openDays[day.id]} onToggle={() => onToggleDay(day.id)} />
        ))}
      </div>
    </section>
  )
}
