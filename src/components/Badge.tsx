import type { Badge as BadgeType, BadgeKind } from '../data/types'
import { Icon, type IconName } from './Icon'

const style: Record<BadgeKind, { cls: string; icon: IconName }> = {
  food: { cls: 'bg-orange-50 text-orange-700 border-orange-200', icon: 'utensils' },
  reserve: { cls: 'bg-violet-50 text-violet-700 border-violet-200', icon: 'ticket' },
  warn: { cls: 'bg-rose-50 text-rose-700 border-rose-200', icon: 'warn' },
  info: { cls: 'bg-sky-50 text-sky-700 border-sky-200', icon: 'info' },
  tip: { cls: 'bg-brand-50 text-brand-800 border-brand-200', icon: 'sparkles' },
}

export function BadgePill({ badge }: { badge: BadgeType }) {
  const s = style[badge.kind]
  return (
    <span
      className={`inline-flex items-start gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border leading-snug ${s.cls}`}
    >
      <Icon name={s.icon} className="w-3.5 h-3.5 shrink-0 mt-0.5" />
      <span>{badge.text}</span>
    </span>
  )
}
