import { Link } from 'react-router-dom'

export default function PageHero({ title, heroImage, breadcrumbs }) {
  return (
    <section className="relative min-h-[18rem] sm:min-h-[20rem] lg:min-h-[26rem] flex items-center pt-20 lg:pt-24 pb-14 lg:pb-20">
      <div className="absolute inset-0">
        <img src={heroImage} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-brand-black/70" />
      </div>

      <div className="section-container relative z-10 text-center text-white">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-wide mb-3">
          {title}
        </h1>
        {breadcrumbs && breadcrumbs.length > 0 ? (
          <nav aria-label="Breadcrumb" className="text-sm sm:text-base text-white/80">
            {breadcrumbs.map((crumb, index) => (
              <span key={crumb.label}>
                {index > 0 && <span className="mx-2">/</span>}
                {crumb.href ? (
                  <Link to={crumb.href} className="hover:text-brand transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-brand-light">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        ) : (
          <nav aria-label="Breadcrumb" className="text-sm sm:text-base text-white/80">
            <Link to="/" className="hover:text-brand transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-brand-light">{title}</span>
          </nav>
        )}
      </div>
    </section>
  )
}
