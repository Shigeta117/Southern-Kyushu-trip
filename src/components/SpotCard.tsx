import type { Spot } from '../data/types'
import { Icon } from './Icon'
import { BadgePill } from './Badge'
import { mapsUrl } from '../lib/maps'

export function SpotCard({ spot }: { spot: Spot }) {
  return (
    <div className="flex gap-3">
      {/* 時間軸上のノード。背景を紙色で塗って縦線を切る */}
      <span className="relative z-10 mt-0.5 inline-flex items-center justify-center w-9 h-9 rounded-full bg-paper ring-1 ring-slate-300 text-slate-600 shrink-0">
        <Icon name={spot.icon} className="w-[1.15rem] h-[1.15rem]" />
      </span>

      <div className="flex-1 min-w-0 pb-1">
        {spot.time && (
          <div className="tabular text-[11px] font-bold tracking-[0.12em] text-brand-700">
            {spot.time}
          </div>
        )}
        <h4 className="font-display text-[1.0625rem] text-slate-900 leading-snug mt-0.5">
          {spot.title}
        </h4>
        {spot.lead && <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">{spot.lead}</p>}

        {spot.places && spot.places.length > 0 && (
          <ul className="mt-3 space-y-2.5">
            {spot.places.map((p) => (
              <li key={p.name} className="flex items-start gap-2">
                <span className="mt-0.5 text-brand-500 shrink-0">
                  <Icon name="map-pin" className="w-4 h-4" />
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-slate-800">{p.name}</div>
                  {p.note && <div className="text-xs text-slate-500 leading-snug mt-0.5">{p.note}</div>}
                </div>
                {(p.coord || p.query) && (
                  <a
                    href={mapsUrl(p.coord, p.query)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.name} を地図で開く`}
                    className="shrink-0 inline-flex items-center gap-1 text-xs font-bold text-brand-700 bg-brand-50 border border-brand-200 rounded-md px-2.5 py-1.5 active:scale-95 transition-transform"
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
          <div className="flex flex-wrap gap-1.5 mt-3">
            {spot.badges.map((b, i) => (
              <BadgePill key={i} badge={b} />
            ))}
          </div>
        )}

        {spot.tip && (
          <div className="mt-3 flex gap-2 border-l-2 border-brand-300 bg-brand-50/70 text-brand-900 rounded-r-md py-2.5 pl-3 pr-3 text-sm leading-relaxed">
            <Icon name="sparkles" className="w-4 h-4 shrink-0 mt-0.5 text-brand-600" />
            <span>{spot.tip}</span>
          </div>
        )}
      </div>
    </div>
  )
}
