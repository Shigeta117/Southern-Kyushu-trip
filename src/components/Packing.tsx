import { packingGroups } from '../data/packing'
import { useLocalStorage, isCheckedMap } from '../hooks/useLocalStorage'
import { SectionHeading } from './SectionHeading'
import { Icon } from './Icon'

export function Packing() {
  const [checked, setChecked] = useLocalStorage<Record<string, boolean>>('packing-v1', {}, isCheckedMap)

  const allKeys = packingGroups.flatMap((g) => g.items.map((it) => it.id))
  const doneCount = allKeys.filter((k) => checked[k]).length
  const pct = allKeys.length ? Math.round((doneCount / allKeys.length) * 100) : 0

  const toggle = (key: string) => setChecked((prev) => ({ ...prev, [key]: !prev[key] }))
  const reset = () => setChecked({})

  return (
    <section id="packing" className="section-anchor">
      <SectionHeading icon="backpack" title="持ち物チェックリスト" sub="チェックは自動保存（この端末）" />

      <div className="mb-4">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-sm font-bold text-slate-600">
            {doneCount} / {allKeys.length} 完了
          </span>
          <button type="button" onClick={reset} className="text-xs text-slate-400 underline active:text-slate-600">
            リセット
          </button>
        </div>
        <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
          <div className="h-full bg-brand-500 transition-all duration-300" style={{ width: `${pct}%` }} />
        </div>
      </div>

      <div className="space-y-4">
        {packingGroups.map((g) => (
          <div key={g.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
            <div className="flex items-center gap-2 mb-2">
              <Icon name={g.icon} className="w-5 h-5 text-brand-600 shrink-0" />
              <h3 className="font-bold text-slate-900">{g.title}</h3>
            </div>
            <ul>
              {g.items.map((item) => {
                const on = !!checked[item.id]
                return (
                  <li key={item.id} className="border-t border-slate-100 first:border-0">
                    <label className="flex items-start gap-3 py-2.5 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={on}
                        onChange={() => toggle(item.id)}
                        className="mt-0.5 w-5 h-5 rounded accent-brand-600 shrink-0"
                      />
                      <span className={`text-sm leading-relaxed ${on ? 'line-through text-slate-400' : 'text-slate-700'}`}>
                        {item.label}
                      </span>
                    </label>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
