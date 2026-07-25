import { days } from '../data/trip'
import type { DayId } from '../data/types'

export function AppBar({ onSelectDay }: { onSelectDay: (id: DayId) => void }) {
  return (
    <header
      className="sticky top-0 z-30 bg-paper/92 backdrop-blur border-b border-slate-300"
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <div className="max-w-3xl mx-auto px-3 h-14 flex items-center gap-2">
        <span className="font-display text-brand-800 text-[0.9375rem] whitespace-nowrap">
          南九州＆屋久島
        </span>
        <div className="flex-1 flex gap-1.5 justify-end">
          {days.map((d) => (
            <button
              key={d.id}
              type="button"
              onClick={() => onSelectDay(d.id)}
              aria-label={`${d.label}：${d.title}へ移動`}
              style={{ backgroundColor: d.color }}
              className="tabular shrink-0 w-10 h-10 rounded-md text-white text-sm font-bold active:scale-95 transition-transform"
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
