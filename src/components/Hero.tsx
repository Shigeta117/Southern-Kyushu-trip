import { tripMeta } from '../data/trip'
import { Icon } from './Icon'

export function Hero() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-brand-600 via-brand-800 to-brand-900 text-white">
      {/* 装飾（オフラインでも崩れないCSSのみ） */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(255,255,255,.6) 0, transparent 35%), radial-gradient(circle at 80% 0%, rgba(253,224,71,.5) 0, transparent 30%)',
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-3xl mx-auto px-5 pt-9 pb-8 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-white/15 border border-white/25 text-xs font-bold tracking-widest mb-4">
          {tripMeta.badge}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black leading-tight mb-2">
          {tripMeta.title}
          <br className="sm:hidden" />
          <span className="sm:ml-3">{tripMeta.subtitle}</span>
        </h1>
        <div className="inline-flex items-center gap-1.5 text-brand-100 text-sm font-bold mb-4">
          <Icon name="sun" className="w-4 h-4" />
          {tripMeta.season}
        </div>
        <p className="text-brand-50/90 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
          {tripMeta.lead}
        </p>

        <dl className="grid grid-cols-3 gap-2 mt-6 max-w-md mx-auto">
          {tripMeta.stats.map((s) => (
            <div key={s.label} className="bg-white/10 border border-white/15 rounded-2xl py-3 px-2">
              <dd className="text-base sm:text-lg font-black leading-tight">{s.value}</dd>
              <dt className="text-[11px] text-brand-100 mt-0.5">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </header>
  )
}
