import { Link } from 'react-router-dom'
import { whyWork } from '../data/content'
import { IconBadge } from './Icons'
import PageHero from './PageHero'
import PageCta from './PageCta'

export default function ServiceDetail({ page }) {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: page.title },
  ]

  return (
    <>
      <PageHero title={page.title} heroImage={page.heroImage} breadcrumbs={breadcrumbs} />

      <section className="py-16 lg:py-24 bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <img
                src={page.image}
                alt={page.imageAlt}
                className="w-full rounded-sm shadow-lg object-cover aspect-10/7"
              />
            </div>

            <div className="space-y-5">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-800">{page.heading}</h2>
              {page.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-sm lg:text-base text-slate-600 leading-relaxed text-justify"
                >
                  {paragraph}
                </p>
              ))}
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md bg-brand px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-brand-black shadow-lg shadow-brand/25 hover:bg-brand-light transition-all hover:-translate-y-0.5"
              >
                {whyWork.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {page.features && page.features.length > 0 && (
        <section className="py-16 lg:py-24 bg-slate-50">
          <div className="section-container">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 text-center mb-12 lg:mb-16">
              {page.featuresTitle}
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {page.features.map((feature) => (
                <div key={feature.title} className="text-center sm:text-left">
                  <IconBadge
                    name={feature.icon}
                    className="h-16 w-16 mb-4"
                    iconClassName="w-8 h-8"
                  />
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <PageCta />
    </>
  )
}
