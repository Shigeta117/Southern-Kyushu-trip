import type { LinkItem } from '../data/types'
import { Icon } from './Icon'

export function LinkChip({ label, url }: LinkItem) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-700 bg-brand-50 border border-brand-200 rounded-lg px-2.5 py-1.5 active:scale-95 transition-transform"
    >
      <Icon name="external" className="w-3.5 h-3.5 shrink-0" />
      <span>{label}</span>
    </a>
  )
}
