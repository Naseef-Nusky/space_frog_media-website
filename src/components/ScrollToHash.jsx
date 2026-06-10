import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

export default function ScrollToHash() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
          return
        }
        window.scrollTo({ top: 0, behavior: 'instant' })
      }, 150)
      return () => clearTimeout(timer)
    }

    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}
