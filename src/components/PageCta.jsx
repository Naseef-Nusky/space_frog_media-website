import { Link } from 'react-router-dom'
import { contact, ctaSection } from '../data/content'

export default function PageCta() {
  return (
    <section className="relative py-16 lg:py-20 overflow-hidden cta-pattern">
      <div className="section-container relative z-10 text-center">
        <p className="text-brand font-bold text-lg sm:text-xl mb-3">{ctaSection.brand}</p>
        <h2 className="section-title text-white leading-tight text-balance max-w-3xl mx-auto mb-8">
          {ctaSection.title}
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="w-full sm:w-auto min-w-[220px] inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-sm font-bold uppercase tracking-wide text-brand-deep shadow-lg hover:bg-brand-light transition-colors"
          >
            {ctaSection.proposalButton}
          </Link>
          <a
            href={contact.phoneTel}
            className="w-full sm:w-auto min-w-[220px] inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-sm font-bold uppercase tracking-wide text-brand-deep shadow-lg hover:bg-brand-light transition-colors"
          >
            {ctaSection.callButton}
          </a>
        </div>
      </div>
    </section>
  )
}
