import { services } from '../data/content'
import { Icon } from './Icons'

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50">
      <div className="section-container">
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200/80 hover:shadow-2xl hover:shadow-brand/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-brand-black">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-brand-deep/50 via-brand/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
                  <h3 className="text-xl font-bold text-white drop-shadow-md">{service.title}</h3>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm leading-relaxed text-slate-600 flex-1 text-justify">
                  {service.description}
                </p>

                <a
                  href={service.href}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-brand-black hover:bg-brand-light transition-colors"
                >
                  Learn more
                  <Icon name="arrow" className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
