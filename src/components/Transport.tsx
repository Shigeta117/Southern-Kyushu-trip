import { transportCards, accessPlans } from '../data/transport'
import { SectionHeading } from './SectionHeading'
import { LinkChip } from './LinkChip'
import { Icon } from './Icon'

export function Transport() {
  return (
    <section id="transport" className="section-anchor">
      <SectionHeading icon="ship" title="移動・予約" sub="料金・時刻は目安。出発前に公式で確認を" />

      <div className="space-y-4">
        {transportCards.map((card) => (
          <div key={card.id} className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5">
            <div className="flex items-center gap-2 mb-3">
              <Icon name={card.icon} className="w-5 h-5 text-brand-600 shrink-0" />
              <h3 className="font-display text-slate-900">{card.title}</h3>
            </div>
            {card.lead && <p className="text-sm text-slate-600 mb-3">{card.lead}</p>}

            <dl className="space-y-1.5">
              {card.rows.map((r, i) => (
                <div key={i} className="flex gap-3 text-sm">
                  <dt className="w-24 sm:w-32 shrink-0 font-bold text-slate-500">{r.label}</dt>
                  <dd className="flex-1 text-slate-800">{r.value}</dd>
                </div>
              ))}
            </dl>

            {card.notes && card.notes.length > 0 && (
              <ul className="mt-3 space-y-1">
                {card.notes.map((n, i) => (
                  <li key={i} className="text-xs text-ember-600 flex gap-1.5 leading-snug">
                    <Icon name="warn" className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            )}

            {card.links && card.links.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {card.links.map((l) => (
                  <LinkChip key={l.url} {...l} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 mt-4">
        <div className="flex items-center gap-2 mb-3">
          <Icon name="plane-takeoff" className="w-5 h-5 text-brand-600 shrink-0" />
          <h3 className="font-display text-slate-900">各地からのアクセス</h3>
        </div>
        <p className="tabular text-xs text-slate-500 mb-3">
          集合：8/23 11:00 熊本空港 ／ 解散：8/26 19:20 阿蘇くまもと空港発（成田行き）
        </p>
        <div className="space-y-3">
          {accessPlans.map((a) => (
            <div key={a.area} className="border-t border-slate-200 pt-3 first:border-0 first:pt-0">
              <div className="font-bold text-sm bg-slate-100 inline-block px-2 py-0.5 rounded mb-1">
                ■ {a.area}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong className="text-slate-700">行：</strong>
                {a.go}
                <br />
                <strong className="text-slate-700">帰：</strong>
                {a.back}
              </p>
              {a.hint && <p className="text-xs text-brand-700 mt-1">💡 {a.hint}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
