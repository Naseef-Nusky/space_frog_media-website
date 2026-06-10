import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

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
        window.scrollTo(0, 0)
      }, 150)
      return () => clearTimeout(timer)
    }

    window.scrollTo(0, 0)
  }, [hash, pathname])

  return null
}
