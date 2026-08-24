import { Fragment } from 'react'
import { stays } from '../data/lodging'
import type { Stay } from '../data/types'
import { SectionHeading } from './SectionHeading'
import { Icon } from './Icon'

/* 電話は tap-to-call。電波の弱い島でオフラインでも引けることがこの章の役目。 */
function TelButton({ tel }: { tel: string }) {
  return (
    <a
      href={`tel:${tel.replace(/-/g, '')}`}
      className="inline-flex items-center gap-2 rounded-xl bg-brand-700 text-white px-3.5 py-2.5 active:scale-95 transition-transform shrink-0"
    >
      <Icon name="phone" className="w-4 h-4 shrink-0" />
      <span className="tabular text-[0.9375rem] font-bold tracking-wide">{tel}</span>
    </a>
  )
}

function StayCard({ stay }: { stay: Stay }) {
  const backup = stay.status === 'backup'
  return (
    <div
      className={`rounded-xl border p-4 ${
        backup ? 'bg-slate-50 border-slate-200' : 'bg-white border-slate-300'
      }`}
    >
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            {stay.day && (
              <span className="tabular text-[11px] font-black text-white bg-sea-600 rounded px-1.5 py-0.5">
                {stay.day}
              </span>
            )}
            <h3 className="font-display text-slate-900 text-[1.0625rem] leading-tight">{stay.name}</h3>
          </div>
          <p className="text-xs text-slate-500 mt-1">{stay.area}</p>
        </div>
        {stay.tel && <TelButton tel={stay.tel} />}
      </div>

      {stay.address && <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">{stay.address}</p>}

      {(stay.checkIn || stay.checkOut || stay.price) && (
        <dl className="mt-3 grid grid-cols-[5.5rem_1fr] gap-x-3 gap-y-1.5 text-sm">
          {stay.checkIn && (
            <>
              <dt className="text-slate-500 text-xs pt-0.5">チェックイン</dt>
              <dd className="text-slate-800 tabular">{stay.checkIn}</dd>
            </>
          )}
          {stay.checkOut && (
            <>
              <dt className="text-slate-500 text-xs pt-0.5">チェックアウト</dt>
              <dd className="text-slate-800 tabular">{stay.checkOut}</dd>
            </>
          )}
          {stay.price && (
            <>
              <dt className="text-slate-500 text-xs pt-0.5">料金</dt>
              <dd className="text-slate-800">{stay.price}</dd>
            </>
          )}
          {stay.rows?.map((r) => (
            <Fragment key={r.label}>
              <dt className="text-slate-500 text-xs pt-0.5">{r.label}</dt>
              <dd className="text-slate-800">{r.value}</dd>
            </Fragment>
          ))}
        </dl>
      )}

      {stay.warn && (
        <p className="mt-3 flex items-start gap-1.5 rounded-md border border-ember-200 bg-ember-50 px-2.5 py-2 text-xs font-bold leading-snug text-ember-700">
          <Icon name="warn" className="w-3.5 h-3.5 shrink-0 mt-0.5" />
          <span>{stay.warn}</span>
        </p>
      )}

      {stay.notes && stay.notes.length > 0 && (
        <ul className="mt-2.5 space-y-1">
          {stay.notes.map((n) => (
            <li key={n} className="text-xs text-slate-600 leading-relaxed pl-3 -indent-3">
              <span aria-hidden="true">・</span>
              {n}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export function Lodging() {
  const confirmed = stays.filter((s) => s.status === 'confirmed')

  return (
    <section id="lodging" className="section-anchor">
      <SectionHeading icon="moon" title="宿と連絡先" sub="2泊とも確定" />

      <div className="space-y-3">
        {confirmed.map((s) => (
          <StayCard key={s.id} stay={s} />
        ))}
      </div>

    </section>
  )
}
