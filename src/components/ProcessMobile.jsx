import { process } from '../data/content'
import { Icon } from './Icons'

const stepIcons = ['search', 'display', 'mobile', 'cart', 'video']

const stepColors = [
  { accent: '#00d1c1', bg: 'bg-brand', text: 'text-brand-dark', ring: 'border-brand', numberText: 'text-brand-black' },
  { accent: '#00a89c', bg: 'bg-brand-dark', text: 'text-brand-deep', ring: 'border-brand-dark', numberText: 'text-white' },
  { accent: '#006b63', bg: 'bg-brand-deep', text: 'text-brand-deep', ring: 'border-brand-deep', numberText: 'text-white' },
  { accent: '#00d1c1', bg: 'bg-brand', text: 'text-brand-dark', ring: 'border-brand', numberText: 'text-brand-black' },
  { accent: '#00a89c', bg: 'bg-brand-dark', text: 'text-brand-deep', ring: 'border-brand-dark', numberText: 'text-white' },
]

export default function ProcessMobile() {
  return (
    <div className="relative">
      <div
        className="absolute left-[1.125rem] top-6 bottom-6 w-0.5 bg-linear-to-b from-brand via-brand-dark to-brand-deep opacity-30"
        aria-hidden="true"
      />

      <div className="space-y-4">
        {process.steps.map((step, index) => {
          const color = stepColors[index]

          return (
            <article
              key={step.title}
              className="relative flex gap-3 animate-process-step"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative z-10 shrink-0">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-white shadow-sm ${color.ring}`}
                  style={{ boxShadow: `0 0 0 2px ${color.accent}` }}
                >
                  <div className={`flex h-7 w-7 items-center justify-center rounded-full ${color.bg} ${color.numberText} text-xs font-extrabold`}>
                    {step.number}
                  </div>
                </div>
              </div>

              <div
                className="min-w-0 flex-1 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200/80 border-l-4"
                style={{ borderLeftColor: color.accent }}
              >
                <div className={`inline-flex items-center justify-center h-9 w-9 rounded-xl bg-slate-50 ring-1 ring-slate-200/80 mb-2 ${color.text}`}>
                  <Icon name={stepIcons[index]} className="w-5 h-5" strokeWidth={2} />
                </div>
                <h3 className={`text-sm font-extrabold uppercase tracking-wide mb-2 ${color.text}`}>
                  {step.number}. {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed text-justify">
                  {step.description}
                </p>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
