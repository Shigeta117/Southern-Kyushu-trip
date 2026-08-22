import { useState } from 'react'
import { commonBudgetRows, originPlans, budgetNote } from '../data/budget'
import { SectionHeading } from './SectionHeading'
import { Icon } from './Icon'

export function Budget() {
  const [originId, setOriginId] = useState<string>(originPlans[0].id)
  const origin = originPlans.find((o) => o.id === originId) ?? originPlans[0]

  return (
    <section id="budget" className="section-anchor">
      <SectionHeading icon="wallet" title="費用の目安" sub="1人あたり・3名割り・現地費用は約66,000円" />

      <div className="grid grid-cols-2 gap-2 mb-4">
        {originPlans.map((o) => (
          <button
            key={o.id}
            type="button"
            onClick={() => setOriginId(o.id)}
            className={`px-2 py-2 rounded-xl text-sm font-bold border transition-colors ${
              origin.id === o.id
                ? 'bg-brand-600 text-white border-transparent'
                : 'bg-white text-slate-600 border-slate-200 active:bg-slate-50'
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="flex items-baseline justify-between gap-3 p-4 bg-brand-50 border-b border-brand-100">
          <div className="min-w-0">
            <div className="text-sm font-bold text-slate-900">{origin.transport.item}</div>
            {origin.transport.note && (
              <div className="text-xs text-slate-500 mt-0.5">{origin.transport.note}</div>
            )}
          </div>
          <div className="tabular text-sm font-bold text-brand-700 text-right shrink-0">
            {origin.transport.amount}
          </div>
        </div>

        <ul>
          {commonBudgetRows.map((r, i) => (
            <li key={i} className="flex items-baseline justify-between gap-3 p-4 border-b border-slate-200">
              <div className="min-w-0">
                <div className="text-sm font-medium text-slate-800">{r.item}</div>
                {r.note && <div className="text-xs text-slate-500 mt-0.5">{r.note}</div>}
              </div>
              <div className="tabular text-sm font-semibold text-slate-700 text-right shrink-0">{r.amount}</div>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between gap-3 p-4 bg-slate-900 text-white">
          <div className="font-bold text-sm">合計の目安（{origin.label}）</div>
          <div className="tabular font-display text-lg sm:text-xl text-right">{origin.total}</div>
        </div>
      </div>

      <div className="flex gap-2 mt-3 text-xs text-ochre-900 bg-ochre-50 border border-ochre-200 rounded-xl p-3 leading-relaxed">
        <Icon name="info" className="w-4 h-4 shrink-0 mt-0.5 text-ochre-600" />
        <p>{budgetNote}</p>
      </div>
    </section>
  )
}
