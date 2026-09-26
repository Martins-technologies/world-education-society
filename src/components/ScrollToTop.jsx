import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      return
    }

    const id = decodeURIComponent(hash.replace(/^#/, ''))
    const scrollToTarget = () => document.getElementById(id)?.scrollIntoView({ behavior: 'instant', block: 'start' })

    scrollToTarget()
    const timer = window.setTimeout(scrollToTarget, 100)

    return () => window.clearTimeout(timer)
  }, [pathname, hash])

  return null
}
