import { Link } from 'react-router-dom'

export default function PageBanner({ title, breadcrumbs }) {
  return (
    <section className="min-h-[16rem] sm:min-h-[18rem] lg:min-h-[22rem] flex flex-col justify-center pt-20 lg:pt-24 pb-14 lg:pb-20 bg-slate-100 border-b border-slate-200">
      <div className="section-container">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 mb-3">{title}</h1>
        <p className="text-sm text-slate-500 mb-1">You are here:</p>
        <nav aria-label="Breadcrumb" className="text-sm text-slate-600">
          {breadcrumbs.map((crumb, index) => (
            <span key={crumb.label}>
              {index > 0 && <span className="mx-2">/</span>}
              {crumb.href ? (
                <Link to={crumb.href} className="hover:text-brand-dark transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-slate-800">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  )
}
