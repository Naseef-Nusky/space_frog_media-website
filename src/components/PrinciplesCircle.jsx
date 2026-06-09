import { useEffect, useState } from 'react'
import { whyWork } from '../data/content'
import { Icon } from './Icons'

const principleIcons = ['star', 'chart', 'link', 'thumbs', 'document']
const ORBIT_RADIUS = 198

export default function PrinciplesCircle() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % whyWork.principles.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [paused])

  const current = whyWork.principles[active]

  return (
    <div
      className="relative mx-auto flex h-[36rem] w-[36rem] items-center justify-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-12 rounded-full border-2 border-dashed border-slate-300 animate-spin-slow" />

      <div className="absolute inset-0">
        {whyWork.principles.map((principle, index) => {
          const angle = (index * 360) / whyWork.principles.length - 90
          const x = Math.cos((angle * Math.PI) / 180) * ORBIT_RADIUS
          const y = Math.sin((angle * Math.PI) / 180) * ORBIT_RADIUS
          const isActive = active === index

          return (
            <button
              key={principle.title}
              type="button"
              onClick={() => setActive(index)}
              className={`absolute flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-all duration-500 ${
                isActive
                  ? 'bg-brand scale-125 ring-4 ring-brand/30 shadow-brand/40'
                  : 'bg-brand-dark hover:bg-brand hover:scale-110'
              }`}
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)',
              }}
              aria-label={principle.title}
              aria-pressed={isActive}
            >
              <Icon name={principleIcons[index]} className="w-5 h-5" />
            </button>
          )
        })}
      </div>

      <div className="relative z-10 flex h-80 w-80 flex-col items-center justify-center rounded-full bg-white/80 px-8 text-center shadow-inner ring-1 ring-slate-200/80 backdrop-blur-sm">
        <div key={active} className="animate-principle-content">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center text-brand-deep">
            <Icon name={principleIcons[active]} className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-brand-deep mb-2 leading-snug">
            {current.title}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            {current.description}
          </p>
        </div>
      </div>
    </div>
  )
}
