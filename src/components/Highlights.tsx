import { highlights } from '../data/highlights'
import { Icon } from './Icon'

export function Highlights() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {highlights.map((h) => (
        <div
          key={h.title}
          className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 flex sm:flex-col items-center sm:text-center gap-4"
        >
          <span
            className={`inline-flex items-center justify-center w-12 h-12 ${h.bg} ${h.color} rounded-full shrink-0 sm:mb-3`}
          >
            <Icon name={h.icon} className="w-6 h-6" />
          </span>
          <div>
            <h3 className="font-display text-base sm:text-lg sm:mb-1">{h.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{h.body}</p>
          </div>
        </div>
      ))}
    </section>
  )
}
