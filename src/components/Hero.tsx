import { tripMeta } from '../data/trip'
import { Icon } from './Icon'

export function Hero() {
  return (
    <header className="relative overflow-hidden bg-brand-900 text-white">
      {/* 地形図の等高線。CSS のみで描くのでオフラインでも欠けない */}
      <div className="contour absolute inset-0" aria-hidden="true" />
      {/* 森の底に沈むような減光 */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(29,46,26,0) 0%, rgba(20,32,18,.55) 70%, rgba(16,26,15,.9) 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-3xl mx-auto px-5 pt-10 pb-9">
        <span className="tabular inline-block border border-white/30 rounded-sm py-1 px-2.5 text-[11px] font-bold tracking-[0.18em] text-brand-100">
          {tripMeta.badge}
        </span>

        <h1 className="font-display text-[2rem] sm:text-5xl leading-[1.15] mt-4">
          {tripMeta.title}
        </h1>
        <p className="font-display text-base sm:text-xl text-brand-200 mt-1">{tripMeta.subtitle}</p>

        <div className="flex items-center gap-2 mt-4">
          <span className="h-px w-8 bg-white/35" aria-hidden="true" />
          <span className="inline-flex items-center gap-1.5 text-brand-200 text-xs font-bold tracking-wider">
            <Icon name="sun" className="w-3.5 h-3.5" />
            {tripMeta.season}
          </span>
        </div>

        <p className="text-brand-50/85 text-sm sm:text-base leading-loose max-w-xl mt-4">
          {tripMeta.lead}
        </p>

        <dl className="grid grid-cols-3 mt-7 border-t border-white/20 pt-4">
          {tripMeta.stats.map((s, i) => (
            <div key={s.label} className={i > 0 ? 'pl-3 border-l border-white/15' : 'pr-3'}>
              <dt className="text-[10px] tracking-[0.14em] text-brand-200/80">{s.label}</dt>
              <dd className="tabular font-display text-lg sm:text-2xl leading-tight mt-1">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </header>
  )
}
