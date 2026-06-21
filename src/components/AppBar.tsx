import { days } from '../data/trip'
import type { DayId } from '../data/types'

export function AppBar({ onSelectDay }: { onSelectDay: (id: DayId) => void }) {
  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-3xl mx-auto px-3 h-14 flex items-center gap-2">
        <span className="font-black text-brand-800 text-sm whitespace-nowrap">南九州＆屋久島</span>
        <div className="flex-1 flex gap-1.5 justify-end">
          {days.map((d) => (
            <button
              key={d.id}
              type="button"
              onClick={() => onSelectDay(d.id)}
              aria-label={`${d.label}：${d.title}へ移動`}
              style={{ backgroundColor: d.color }}
              className="shrink-0 w-10 h-10 rounded-full text-white text-sm font-bold shadow-sm active:scale-95 transition-transform"
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
