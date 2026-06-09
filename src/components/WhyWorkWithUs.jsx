import { whyWork } from '../data/content'
import PrinciplesCircle from './PrinciplesCircle'
import PrinciplesMobile from './PrinciplesMobile'

export default function WhyWorkWithUs() {
  return (
    <section className="py-20 lg:py-28 bg-slate-100">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="min-w-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight mb-3">
              {whyWork.title}
            </h2>
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 mb-6 lg:mb-8">
              {whyWork.subtitle}
            </p>

            {/* Mobile: principles list between subtitle and body copy */}
            <div className="lg:hidden mb-8">
              <PrinciplesMobile />
            </div>

            <div className="space-y-5 text-slate-600 leading-relaxed mb-8 lg:mb-10 text-justify">
              {whyWork.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-md bg-brand px-8 py-3.5 text-base font-bold text-brand-black shadow-lg shadow-brand/25 hover:bg-brand-light transition-all hover:-translate-y-0.5"
            >
              {whyWork.cta}
            </a>
          </div>

          <div className="hidden lg:flex min-w-0 w-full justify-center">
            <PrinciplesCircle />
          </div>
        </div>
      </div>
    </section>
  )
}
