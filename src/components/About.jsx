import { about } from '../data/content'

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-white via-slate-50 to-white" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-dark/5 rounded-full blur-3xl" />

      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="section-title text-brand-dark mb-6">
              {about.title}
            </h2>
            <h3 className="text-xl lg:text-2xl font-bold text-slate-900 leading-snug mb-8">
              {about.subtitle}
            </h3>
            <div className="space-y-5 text-slate-600 leading-relaxed">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-linear-to-br from-brand/20 to-brand-dark/20 rounded-3xl blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-brand/10">
              <img
                src={about.image}
                alt="SEO Agency London UK"
                className="w-full aspect-10/7 object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
