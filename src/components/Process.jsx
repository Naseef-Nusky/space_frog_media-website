import { process } from '../data/content'
import { Icon } from './Icons'
import ProcessMobile from './ProcessMobile'

const stepIcons = ['search', 'display', 'mobile', 'cart', 'video']

const stepColors = [
  { accent: '#00d1c1', bg: 'bg-brand', text: 'text-brand-dark', ring: 'border-brand', numberText: 'text-brand-black' },
  { accent: '#00a89c', bg: 'bg-brand-dark', text: 'text-brand-deep', ring: 'border-brand-dark', numberText: 'text-white' },
  { accent: '#006b63', bg: 'bg-brand-deep', text: 'text-brand-deep', ring: 'border-brand-deep', numberText: 'text-white' },
  { accent: '#00d1c1', bg: 'bg-brand', text: 'text-brand-dark', ring: 'border-brand', numberText: 'text-brand-black' },
  { accent: '#00a89c', bg: 'bg-brand-dark', text: 'text-brand-deep', ring: 'border-brand-dark', numberText: 'text-white' },
]

const wavePath =
  'M 0 40 C 83 40, 167 12, 250 12 C 333 12, 417 68, 500 68 C 583 68, 667 12, 750 12 C 833 12, 917 40, 1000 40'

const waveOffsets = ['translate-y-0', '-translate-y-5', 'translate-y-5', '-translate-y-5', 'translate-y-0']

function StepCard({ step, index, color }) {
  return (
    <div className="bg-white px-4 py-4 shadow-sm ring-1 ring-slate-200/80 h-full rounded-lg w-full">
      <div className={`inline-flex items-center justify-center h-9 w-9 rounded-xl bg-white ring-1 ring-slate-200/80 shadow-sm mb-2 ${color.text}`}>
        <Icon name={stepIcons[index]} className="w-5 h-5" strokeWidth={2} />
      </div>
      <h3 className={`text-sm font-extrabold uppercase tracking-wide mb-2 ${color.text}`}>
        {step.number}. {step.title}
      </h3>
      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
        {step.description}
      </p>
    </div>
  )
}

function StepCircle({ step, color, className = '' }) {
  return (
    <div
      className={`relative flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-full border-[5px] border-white bg-white shadow-lg ${color.ring} z-10 ${className}`}
      style={{ boxShadow: `0 0 0 4px ${color.accent}` }}
    >
      <div className={`flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full ${color.bg} ${color.numberText} text-2xl font-extrabold`}>
        {step.number}
      </div>
    </div>
  )
}

export default function Process() {
  return (
    <section id="process" className="relative py-20 lg:py-28 bg-slate-50 overflow-hidden">
      <div className="section-container relative">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="section-title text-brand-dark">
            {process.title}
          </h2>
          <div className="mx-auto mt-4 h-1 w-48 rounded-full bg-linear-to-r from-brand via-brand-dark to-brand-deep" />
        </div>

        {/* Desktop: wave timeline */}
        <div className="hidden lg:block relative min-h-[520px]">
          <svg
            className="absolute left-[4%] right-[4%] top-1/2 -translate-y-1/2 w-[92%] h-28 pointer-events-none"
            viewBox="0 0 1000 80"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d={wavePath}
              fill="none"
              stroke="#00a89c"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.15"
            />
            <path
              d={wavePath}
              fill="none"
              stroke="#00a89c"
              strokeWidth="4"
              strokeLinecap="round"
              pathLength="1"
              className="animate-wave-draw"
            />
            <path
              d={wavePath}
              fill="none"
              stroke="#00d1c1"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.7"
              className="animate-wave-flow"
            />
          </svg>

          <div className="grid grid-cols-5 gap-3 relative z-10 h-[520px]">
            {process.steps.map((step, index) => {
              const color = stepColors[index]
              const cardAbove = index % 2 === 1

              return (
                <article
                  key={step.title}
                  className="relative flex flex-col h-full animate-process-step"
                  style={{ animationDelay: `${0.4 + index * 0.18}s` }}
                >
                  <div className={`flex-1 flex px-1 ${cardAbove ? 'items-start' : 'items-end'}`}>
                    {cardAbove && <StepCard step={step} index={index} color={color} />}
                  </div>

                  <div className={`flex justify-center py-3 shrink-0 ${waveOffsets[index]}`}>
                    <div
                      className="animate-wave-float"
                      style={{ animationDelay: `${index * 0.4}s` }}
                    >
                      <StepCircle step={step} color={color} />
                    </div>
                  </div>

                  <div className={`flex-1 flex px-1 ${cardAbove ? 'items-end' : 'items-start'}`}>
                    {!cardAbove && <StepCard step={step} index={index} color={color} />}
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden">
          <ProcessMobile />
        </div>
      </div>
    </section>
  )
}
