import { Icon, type IconName } from './Icon'

export function SectionHeading({ icon, title, sub }: { icon: IconName; title: string; sub?: string }) {
  return (
    <div className="mb-5">
      <div className="flex items-center gap-2.5">
        <Icon name={icon} className="w-[1.05rem] h-[1.05rem] text-brand-600 shrink-0" />
        <h2 className="font-display text-xl sm:text-2xl text-slate-900 leading-tight whitespace-nowrap">
          {title}
        </h2>
        {/* 見出しから右へ抜ける罫線。紙面の区切りとして効かせる */}
        <span className="flex-1 h-px bg-slate-300" aria-hidden="true" />
      </div>
      {sub && <p className="text-xs text-slate-500 mt-1.5 pl-[1.8rem]">{sub}</p>}
    </div>
  )
}
