import { Icon } from './Icon'

const tabs = [
  { id: 'todo', label: '準備', icon: 'clock' },
  { id: 'itinerary', label: '日程', icon: 'calendar' },
  { id: 'map', label: '地図', icon: 'map' },
  { id: 'budget', label: '費用', icon: 'wallet' },
  { id: 'transport', label: '情報', icon: 'info' },
] as const

export function BottomNav({ active, onJump }: { active: string; onJump: (id: string) => void }) {
  return (
    <nav
      className="fixed bottom-0 inset-x-0 z-40 bg-paper/95 backdrop-blur border-t border-slate-300"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      aria-label="セクションナビ"
    >
      <div className="max-w-3xl mx-auto grid grid-cols-5">
        {tabs.map((t) => {
          const on = active === t.id
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => onJump(t.id)}
              aria-current={on ? 'true' : undefined}
              className={`relative flex flex-col items-center justify-center gap-0.5 py-2.5 transition-colors ${
                on ? 'text-brand-700' : 'text-slate-500'
            }`}
            >
              {/* 現在地は上端の罫線で示す（色の差だけに頼らない） */}
              <span
                aria-hidden="true"
                className={`absolute top-0 inset-x-3.5 h-0.5 rounded-full transition-opacity ${
                  on ? 'bg-brand-600 opacity-100' : 'opacity-0'
                }`}
              />
              <Icon name={t.icon} className="w-5 h-5" />
              <span className="text-[11px] font-bold tracking-wide">{t.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
