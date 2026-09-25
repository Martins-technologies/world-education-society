import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { HiOutlineClock } from 'react-icons/hi2'

const ComingSoonContext = createContext(null)

export function ComingSoonProvider({ children }) {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')

  const showComingSoon = useCallback((customMessage) => {
    setMessage(customMessage || 'This content is on the way. Check back soon.')
    setOpen(true)
  }, [])

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, close])

  return (
    <ComingSoonContext.Provider value={showComingSoon}>
      {children}
      {open ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="coming-soon-title"
        >
          <button
            type="button"
            className="absolute inset-0 bg-[#1B3A6B]/40 backdrop-blur-[2px]"
            aria-label="Close dialog"
            onClick={close}
          />
          <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-[#E6EEF4] bg-[#FBF9F4] shadow-[0_24px_60px_-20px_rgba(27,58,107,0.45)]">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#E7F3FB]/90 blur-2xl" />
            <div className="relative px-6 py-7 sm:px-8 sm:py-8">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#E7F1FB] text-[#1E4E8C]">
                <HiOutlineClock className="h-6 w-6" aria-hidden="true" />
              </span>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7B8C9C]">Coming soon</p>
              <h2 id="coming-soon-title" className="mt-2 font-sans text-xl font-bold tracking-tight text-[#1B3A6B] sm:text-2xl">
                We&apos;re still preparing this
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#5C6B7C]">{message}</p>
              <button
                type="button"
                onClick={close}
                className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-[#1E4E8C] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#183E72] sm:w-auto"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </ComingSoonContext.Provider>
  )
}

export function useComingSoon() {
  const ctx = useContext(ComingSoonContext)
  if (!ctx) {
    throw new Error('useComingSoon must be used within ComingSoonProvider')
  }
  return ctx
}
