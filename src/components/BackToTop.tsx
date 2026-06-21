import { useEffect, useState } from 'react'
import { Icon } from './Icon'

export function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!show) return null

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="トップへ戻る"
      className="fixed right-4 bottom-20 z-40 w-11 h-11 rounded-full bg-slate-900/90 text-white shadow-lg flex items-center justify-center active:scale-95 transition-transform"
    >
      <Icon name="chevron" className="w-5 h-5 rotate-180" />
    </button>
  )
}
