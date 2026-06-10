import { Link } from 'react-router-dom'
import { whoWeArePage, whyWork } from '../data/content'
import { IconBadge } from '../components/Icons'
import PageHero from '../components/PageHero'
import PageCta from '../components/PageCta'

const principleIcons = ['star', 'chart', 'link', 'thumbs', 'document']

export default function WhoWeAre() {
  const { intro, principles } = whoWeArePage

  return (
    <>
      <PageHero title={whoWeArePage.title} heroImage={whoWeArePage.heroImage} />

      {/* Who We Are intro */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="section-container">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 text-center mb-12 lg:mb-16">
            {whoWeArePage.title}
          </h2>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <img
                src={intro.image}
                alt={intro.imageAlt}
                className="w-full rounded-sm shadow-lg object-cover aspect-10/7"
              />
            </div>

            <div className="space-y-5">
              <p className="text-base lg:text-lg font-bold text-slate-800 leading-relaxed">
                {intro.lead}
              </p>
              {intro.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-sm lg:text-base text-slate-600 leading-relaxed text-justify">
                  {paragraph}
                </p>
              ))}
              <Link
                to={intro.ctaHref}
                className="inline-flex items-center justify-center rounded-md bg-brand px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-brand-black shadow-lg shadow-brand/25 hover:bg-brand-light transition-all hover:-translate-y-0.5"
              >
                {intro.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Of Our Work */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="section-container">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 text-center mb-12 lg:mb-16">
            {principles.title}
          </h2>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-0">
              {whyWork.principles.map((principle, index) => (
                <div key={principle.title}>
                  <div className="flex gap-4 py-6">
                    <IconBadge
                      name={principleIcons[index]}
                      className="shrink-0 h-14 w-14"
                      iconClassName="w-7 h-7"
                    />
                    <div className="min-w-0">
                      <h3 className="text-base lg:text-lg font-bold text-slate-900 mb-2">
                        {principle.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                  {index < whyWork.principles.length - 1 && (
                    <div className="border-b border-slate-200" />
                  )}
                </div>
              ))}
            </div>

            <div className="order-1 lg:order-2">
              <img
                src={principles.image}
                alt={principles.imageAlt}
                className="w-full rounded-sm shadow-lg object-cover aspect-10/7"
              />
            </div>
          </div>
        </div>
      </section>

      <PageCta />
    </>
  )
}
