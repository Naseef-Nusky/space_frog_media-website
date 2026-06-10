import { Link } from 'react-router-dom'
import { contact, hero } from '../data/content'
import HeroAnimatedTitle from './HeroAnimatedTitle'

export default function Hero() {
  const titleLines = hero.title.split('\n')

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 lg:pt-24">
      <div className="absolute inset-0">
        <img
          src={hero.image}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-brand/30 via-brand-deep/40 to-brand-black/60" />
      </div>

      <div className="section-container relative z-10 w-full py-12 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-sans inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm mb-6">
            <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
            {hero.brand} · {hero.subtitle}
          </p>

          <h1
            className="font-sans! text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight text-balance mx-auto"
            aria-label={titleLines.join(' ')}
          >
            <HeroAnimatedTitle lines={titleLines} />
          </h1>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={contact.phoneTel}
              className="font-sans inline-flex items-center justify-center rounded-full bg-brand px-8 py-4 text-base font-bold text-brand-black shadow-lg shadow-brand/25 hover:bg-brand-light transition-all hover:-translate-y-1"
            >
              {hero.ctaPrimary}
            </a>
            <Link
              to="/contact"
              className="font-sans inline-flex items-center justify-center rounded-full border-2 border-white/50 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm hover:bg-white/20 transition-all hover:-translate-y-1"
            >
              {hero.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
