import { ctaSection } from '../data/content'
import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/contactus.png"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-br from-brand-black/80 via-brand-deep/75 to-brand-black/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,209,193,0.12),transparent_60%)]" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-brand font-bold text-xl lg:text-2xl mb-4">{ctaSection.brand}</p>
          <h2 className="section-title text-white leading-tight text-balance">
            {ctaSection.title}
          </h2>
        </div>

        <div className="max-w-xl mx-auto">
          <ContactForm variant="home" />
        </div>
      </div>
    </section>
  )
}
