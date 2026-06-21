import type { Spot } from '../data/types'
import { Icon } from './Icon'
import { BadgePill } from './Badge'
import { mapsUrl } from '../lib/maps'

export function SpotCard({ spot }: { spot: Spot }) {
  return (
    <div className="flex gap-3">
      <span className="mt-0.5 inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-100 text-slate-500 shrink-0">
        <Icon name={spot.icon} className="w-5 h-5" />
      </span>

      <div className="flex-1 min-w-0">
        {spot.time && (
          <div className="text-xs font-bold tracking-wide text-brand-600">{spot.time}</div>
        )}
        <h4 className="font-bold text-slate-900">{spot.title}</h4>
        {spot.lead && <p className="text-sm text-slate-600 mt-1 leading-relaxed">{spot.lead}</p>}

        {spot.places && spot.places.length > 0 && (
          <ul className="mt-3 space-y-2">
            {spot.places.map((p) => (
              <li key={p.name} className="flex items-start gap-2">
                <span className="mt-0.5 text-brand-500 shrink-0">
                  <Icon name="map-pin" className="w-4 h-4" />
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-slate-800">{p.name}</div>
                  {p.note && <div className="text-xs text-slate-500 leading-snug">{p.note}</div>}
                </div>
                {(p.coord || p.query) && (
                  <a
                    href={mapsUrl(p.coord, p.query)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.name} を地図で開く`}
                    className="shrink-0 inline-flex items-center gap-1 text-xs font-bold text-brand-700 bg-brand-50 border border-brand-200 rounded-lg px-2.5 py-1.5 active:scale-95 transition-transform"
                  >
                    <Icon name="navigation" className="w-3.5 h-3.5" />
                    地図
                  </a>
                )}
              </li>
            ))}
          </ul>
        )}

        {spot.badges && spot.badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {spot.badges.map((b, i) => (
              <BadgePill key={i} badge={b} />
            ))}
          </div>
        )}

        {spot.tip && (
          <div className="mt-3 flex gap-2 bg-brand-50 text-brand-900 rounded-xl p-3 text-sm leading-relaxed">
            <Icon name="sparkles" className="w-4 h-4 shrink-0 mt-0.5 text-brand-600" />
            <span>{spot.tip}</span>
          </div>
        )}
      </div>
    </div>
  )
}
