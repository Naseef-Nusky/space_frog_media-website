import { whyWork } from '../data/content'
import { Icon } from './Icons'

const principleIcons = ['star', 'chart', 'link', 'thumbs', 'document']

const accentColors = [
  'bg-brand text-brand-black',
  'bg-brand-dark text-white',
  'bg-brand-deep text-white',
  'bg-brand text-brand-black',
  'bg-brand-dark text-white',
]

export default function PrinciplesMobile() {
  return (
    <div className="space-y-3">
      {whyWork.principles.map((principle, index) => (
        <article
          key={principle.title}
          className="flex gap-4 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200/80 border-l-4 border-brand"
          style={{ animationDelay: `${index * 0.08}s` }}
        >
          <div className="shrink-0 pt-0.5">
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-full shadow-md ${accentColors[index]}`}
            >
              <Icon name={principleIcons[index]} className="w-5 h-5" />
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-bold uppercase tracking-wide text-brand-dark mb-1">
              Principle {index + 1}
            </p>
            <h3 className="text-base font-bold text-brand-deep mb-1.5 leading-snug">
              {principle.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {principle.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  )
}
