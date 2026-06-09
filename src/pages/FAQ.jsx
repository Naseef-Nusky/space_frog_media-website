import { useState } from 'react'
import { faqPage } from '../data/content'
import { Icon } from '../components/Icons'
import PageHero from '../components/PageHero'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: faqPage.title },
  ]

  return (
    <>
      <PageHero title={faqPage.title} heroImage={faqPage.heroImage} breadcrumbs={breadcrumbs} />

      <section className="py-12 lg:py-16 bg-white">
        <div className="section-container max-w-4xl">
          <h2 className="text-2xl font-extrabold text-slate-800 mb-6">{faqPage.sectionTitle}</h2>

          <div className="divide-y divide-slate-200 border-t border-slate-200">
            {faqPage.questions.map((item, index) => {
              const isOpen = openIndex === index

              return (
                <div key={item.question}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-bold text-slate-800">{item.question}</span>
                    <Icon
                      name={isOpen ? 'chevronUp' : 'chevronDown'}
                      className="w-5 h-5 shrink-0 text-slate-500"
                    />
                  </button>
                  {isOpen && (
                    <p className="pb-5 text-sm text-slate-600 leading-relaxed">{item.answer}</p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
