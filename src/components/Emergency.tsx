import { emergencyNumbers, hazards, hospitals, officialLinks } from '../data/safety'
import { SectionHeading } from './SectionHeading'
import { LinkChip } from './LinkChip'
import { Icon } from './Icon'

export function Emergency() {
  return (
    <section id="emergency" className="section-anchor">
      <SectionHeading icon="shield" title="緊急・実用情報" sub="夏の南九州＆屋久島で気をつけること" />

      <div className="grid grid-cols-3 gap-2 mb-4">
        {emergencyNumbers.map((n) => (
          <a
            key={n.tel}
            href={`tel:${n.tel}`}
            className="bg-ember-600 text-white rounded-xl p-3 text-center active:scale-95 transition-transform"
          >
            <div className="tabular text-2xl font-black leading-none">{n.tel}</div>
            <div className="text-[11px] font-bold opacity-90 leading-tight mt-1.5">{n.label}</div>
          </a>
        ))}
      </div>

      <div className="space-y-3 mb-4">
        {hazards.map((h) => (
          <div key={h.title} className="bg-white rounded-xl border border-slate-200 p-4 flex gap-3">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-ochre-100 text-ochre-700 shrink-0">
              <Icon name={h.icon} className="w-5 h-5" />
            </span>
            <div className="min-w-0">
              <h3 className="font-display text-slate-900 text-[0.9375rem]">{h.title}</h3>
              <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">{h.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-4 mb-4">
        <div className="flex items-center gap-2 mb-3">
          <Icon name="hospital" className="w-5 h-5 text-ember-600 shrink-0" />
          <h3 className="font-display text-slate-900">主要病院</h3>
        </div>
        <ul className="space-y-2.5">
          {hospitals.map((h) => (
            <li key={h.area} className="text-sm">
              <span className="font-bold text-slate-700">{h.area}：</span>
              <span className="text-slate-800">{h.name}</span>
              <span className="block text-xs text-slate-500 mt-0.5">{h.note}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-4">
        <div className="flex items-center gap-2 mb-3">
          <Icon name="external" className="w-5 h-5 text-brand-600 shrink-0" />
          <h3 className="font-display text-slate-900">公式リンク（運航・火山・天気）</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {officialLinks.map((l) => (
            <LinkChip key={l.url} {...l} />
          ))}
        </div>
      </div>
    </section>
  )
}
