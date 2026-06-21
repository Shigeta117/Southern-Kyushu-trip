import { Icon } from './Icon'

export function SectionHeading({ icon, title, sub }: { icon: string; title: string; sub?: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-100 text-brand-600 shrink-0">
        <Icon name={icon} className="w-5 h-5" />
      </span>
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">{title}</h2>
        {sub && <p className="text-xs text-slate-500">{sub}</p>}
      </div>
    </div>
  )
}
