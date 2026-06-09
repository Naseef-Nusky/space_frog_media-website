import { contact, footer } from '../data/content'

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="bg-white text-slate-600 border-t border-slate-200 relative">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <img src="/logo.png" alt="space frog media" className="h-12 w-auto mb-5" />
            <p className="text-sm leading-relaxed">{footer.about}</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-brand-dark mb-5">Services</h3>
            <ul className="space-y-3">
              {footer.services.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm hover:text-brand-dark transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-brand-dark mb-5">Contact</h3>
            <div className="text-sm space-y-2 leading-relaxed">
              <p>
                <a href={contact.phoneTel} className="hover:text-brand-dark transition-colors">
                  {contact.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${contact.email}`} className="hover:text-brand-dark transition-colors">
                  {contact.email}
                </a>
              </p>
              <p>{contact.address}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-slate-50">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>© {footer.copyright}</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footer.bottomLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-brand-dark transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 flex h-10 w-10 items-center justify-center rounded-sm bg-slate-400 text-white shadow-lg hover:bg-brand transition-colors"
        aria-label="Back to top"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>
    </footer>
  )
}
