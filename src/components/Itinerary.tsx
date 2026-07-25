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
        className="w-full flex items-center gap-3 bg-white rounded-xl border border-slate-200 p-3 text-left active:bg-slate-50 transition-colors"
      >
        <span
          style={{ backgroundColor: day.color }}
          className="tabular inline-flex items-center justify-center w-11 h-11 rounded-md text-white font-black text-base shrink-0"
        >
          {day.label}
        </span>
        <span className="flex-1 min-w-0">
          <span className="block font-display text-[1.0625rem] text-slate-900 leading-snug">
            {day.title}
          </span>
          <span className="block text-xs text-slate-500 mt-1">{day.subtitle}</span>
        </span>
        <Icon
          name="chevron"
          className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {open && (
        <div
          id={`${day.id}-panel`}
          style={{ borderTopColor: day.color }}
          className="mt-2 bg-white rounded-xl border border-slate-200 border-t-2 p-4 sm:p-5 animate-fade-in-up"
        >
          <div className="timeline space-y-5">
            {day.spots.map((spot) => (
              <div key={spot.id} className="timeline-item">
                <SpotCard spot={spot} />
              </div>
            ))}
          </div>
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
      <div className="space-y-3">
        {days.map((day) => (
          <DayCard key={day.id} day={day} open={openDays[day.id]} onToggle={() => onToggleDay(day.id)} />
        ))}
      </div>
    </section>
  )
}
