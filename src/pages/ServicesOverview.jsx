import { Link } from 'react-router-dom'
import { services, servicesOverview } from '../data/content'
import { Icon } from '../components/Icons'
import PageHero from '../components/PageHero'
import PageCta from '../components/PageCta'

function ServiceBlock({ service, reversed }) {
  return (
    <article className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
      {/* Desktop: text side — order follows reversed prop */}
      {/* Mobile: icon + title + subtitle always first, image second, description+button third */}

      <div className={`space-y-4 ${reversed ? 'lg:order-1' : 'lg:order-2'}`}>
        {/* Icon + heading — always top on mobile */}
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-brand to-brand-dark text-white shadow-lg shadow-brand/30">
          <Icon name={service.icon} className="w-8 h-8" strokeWidth={2} />
        </div>
        <div>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-800">{service.title}</h2>
          <p className="text-base font-bold text-brand-dark mt-1">{service.subtitle}</p>
        </div>

        {/* Image — visible only on mobile, sits between heading and description */}
        <div className="lg:hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full rounded-sm shadow-lg object-cover aspect-10/7"
          />
        </div>

        <p className="text-sm lg:text-base text-slate-600 leading-relaxed text-justify">
          {service.description}
        </p>
        <Link
          to={service.href}
          className="inline-flex items-center justify-center rounded-md bg-brand px-8 py-3 text-sm font-bold uppercase tracking-wide text-brand-black shadow-lg shadow-brand/25 hover:bg-brand-light transition-all hover:-translate-y-0.5"
        >
          Discover more
        </Link>
      </div>

      {/* Image — desktop only, alternates left/right */}
      <div className={`hidden lg:block ${reversed ? 'lg:order-2' : 'lg:order-1'}`}>
        <img
          src={service.image}
          alt={service.title}
          className="w-full rounded-sm shadow-lg object-cover aspect-10/7"
        />
      </div>
    </article>
  )
}

export default function ServicesOverview() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: servicesOverview.title },
  ]

  return (
    <>
      <PageHero
        title={servicesOverview.title}
        heroImage={servicesOverview.heroImage}
        breadcrumbs={breadcrumbs}
      />

      <section className="py-12 lg:py-20 bg-white">
        <div className="section-container space-y-16 lg:space-y-24">
          {services.map((service, index) => (
            <ServiceBlock key={service.title} service={service} reversed={index % 2 === 1} />
          ))}
        </div>
      </section>

      <PageCta />
    </>
  )
}
