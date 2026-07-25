import type { Badge as BadgeType, BadgeKind } from '../data/types'
import { Icon, type IconName } from './Icon'

/* バッジの色は本文パレット（朱・藍・黄土・苔・墨）の中だけで組む。
   Tailwind 既定の violet / sky / rose を混ぜると一気に汎用の見た目になる。 */
const style: Record<BadgeKind, { cls: string; icon: IconName }> = {
  warn: { cls: 'bg-ember-50 text-ember-700 border-ember-200', icon: 'warn' },
  food: { cls: 'bg-ochre-50 text-ochre-700 border-ochre-200', icon: 'utensils' },
  reserve: { cls: 'bg-sea-50 text-sea-700 border-sea-200', icon: 'ticket' },
  tip: { cls: 'bg-brand-50 text-brand-800 border-brand-200', icon: 'sparkles' },
  info: { cls: 'bg-slate-100 text-slate-700 border-slate-300', icon: 'info' },
}

export function BadgePill({ badge }: { badge: BadgeType }) {
  const s = style[badge.kind]
  return (
    <span
      className={`inline-flex items-start gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold border leading-snug ${s.cls}`}
    >
      <Icon name={s.icon} className="w-3.5 h-3.5 shrink-0 mt-0.5" />
      <span>{badge.text}</span>
    </span>
  )
}
