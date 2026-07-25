import { todoGroups } from '../data/todos'
import type { TodoUrgency } from '../data/types'
import { useLocalStorage, isCheckedMap } from '../hooks/useLocalStorage'
import { SectionHeading } from './SectionHeading'
import { LinkChip } from './LinkChip'
import { Icon } from './Icon'

/* 切迫度で色を変える。急ぎ＝火の朱、確認＝海の藍、日付固定＝日向の黄土、直前＝苔 */
const urgencyStyle: Record<TodoUrgency, { bar: string; chip: string; icon: string }> = {
  now: { bar: 'bg-ember-500', chip: 'bg-ember-50 text-ember-700 border-ember-200', icon: 'text-ember-600' },
  confirm: { bar: 'bg-sea-500', chip: 'bg-sea-50 text-sea-700 border-sea-200', icon: 'text-sea-600' },
  dated: { bar: 'bg-ochre-500', chip: 'bg-ochre-50 text-ochre-700 border-ochre-200', icon: 'text-ochre-600' },
  before: { bar: 'bg-brand-500', chip: 'bg-brand-50 text-brand-800 border-brand-200', icon: 'text-brand-600' },
}

export function Todos() {
  const [checked, setChecked] = useLocalStorage<Record<string, boolean>>('todo-v1', {}, isCheckedMap)

  const allKeys = todoGroups.flatMap((g) => g.items.map((it) => it.id))
  const doneCount = allKeys.filter((k) => checked[k]).length
  const pct = allKeys.length ? Math.round((doneCount / allKeys.length) * 100) : 0

  const toggle = (key: string) => setChecked((prev) => ({ ...prev, [key]: !prev[key] }))
  const reset = () => setChecked({})

  return (
    <section id="todo" className="section-anchor">
      <SectionHeading icon="clock" title="予約・準備" sub="期限の早い順。チェックは自動保存（この端末）" />

      <div className="mb-4">
        <div className="flex items-center justify-between mb-1.5">
          <span className="tabular text-sm font-bold text-slate-600">
            {doneCount} / {allKeys.length} 完了
          </span>
          <button
            type="button"
            onClick={reset}
            className="text-xs text-slate-500 underline active:text-slate-600"
          >
            リセット
          </button>
        </div>
        <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
          <div
            className="h-full bg-brand-500 transition-all duration-300"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      <div className="space-y-3">
        {todoGroups.map((g) => {
          const s = urgencyStyle[g.urgency]
          const groupDone = g.items.every((it) => checked[it.id])
          return (
            <div
              key={g.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden flex"
            >
              {/* 切迫度を示す左の帯 */}
              <span className={`w-1 shrink-0 ${s.bar}`} aria-hidden="true" />

              <div className="flex-1 min-w-0 p-4">
                <div className="flex items-center gap-2">
                  <Icon name={g.icon} className={`w-[1.05rem] h-[1.05rem] shrink-0 ${s.icon}`} />
                  <h3 className="font-display text-slate-900 leading-tight">{g.title}</h3>
                  {groupDone && (
                    <span className={`ml-auto shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded border ${s.chip}`}>
                      完了
                    </span>
                  )}
                </div>
                {g.lead && <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{g.lead}</p>}

                <ul className="mt-2">
                  {g.items.map((item) => {
                    const on = !!checked[item.id]
                    return (
                      <li key={item.id} className="border-t border-slate-200 first:border-0">
                        <label className="flex items-start gap-3 py-3 cursor-pointer select-none">
                          <input
                            type="checkbox"
                            checked={on}
                            onChange={() => toggle(item.id)}
                            className="mt-0.5 w-5 h-5 rounded accent-brand-600 shrink-0"
                          />
                          <span className="min-w-0 flex-1">
                            <span
                              className={`block text-sm font-bold leading-snug ${
                                on ? 'line-through text-slate-400' : 'text-slate-800'
                              }`}
                            >
                              {item.label}
                              {item.owner && (
                                <span className="ml-1.5 text-[10px] font-bold text-slate-500 align-middle">
                                  ／{item.owner}
                                </span>
                              )}
                            </span>
                            {item.detail && (
                              <span
                                className={`block text-xs mt-1 leading-relaxed ${
                                  on ? 'text-slate-400' : 'text-slate-600'
                                }`}
                              >
                                {item.detail}
                              </span>
                            )}
                          </span>
                        </label>
                        {item.link && !on && (
                          <div className="pb-3 pl-8">
                            <LinkChip {...item.link} />
                          </div>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
