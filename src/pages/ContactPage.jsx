import { contactPage } from '../data/content'
import { Icon, IconBadge } from '../components/Icons'
import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'

export default function ContactPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: contactPage.title },
  ]

  return (
    <>
      <PageHero
        title={contactPage.title}
        heroImage={contactPage.heroImage}
        breadcrumbs={breadcrumbs}
      />

      <section className="py-12 lg:py-16 bg-white">
        <div className="section-container">
          <div className="grid sm:grid-cols-3 gap-8 lg:gap-12 text-center">
            {contactPage.info.map((item) => (
              <div key={item.title}>
                <IconBadge name={item.icon} className="h-14 w-14 mb-4" iconClassName="w-7 h-7" />
                <h3 className="text-sm font-bold uppercase tracking-wide text-slate-800 mb-2">
                  {item.title}
                </h3>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-sm text-brand-dark hover:text-brand transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm text-slate-600">{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="section-container">
          <div className="mx-auto max-w-lg">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-800 text-center mb-8">
              {contactPage.formTitle}
            </h2>

            <ContactForm variant="page" requirePhone requireMessage={false} />
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white border-t border-slate-200">
        <div className="section-container">
          <div className="grid grid-cols-3 gap-2 sm:gap-6 text-center max-w-2xl mx-auto">
            {contactPage.social.map((item) => (
              <div key={item.platform}>
                <div className="inline-flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-brand text-white mb-2 sm:mb-3">
                  <Icon name={item.icon} className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-[10px] sm:text-sm font-bold uppercase tracking-wide text-slate-800 mb-0.5">
                  {item.platform}
                </h3>
                <p className="text-[10px] sm:text-sm text-brand-dark">{item.handle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
