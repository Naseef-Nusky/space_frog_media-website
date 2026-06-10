import { useState } from 'react'
import { contact, ctaSection } from '../data/content'
import { emptyContactForm, validateContactForm } from '../utils/validateContactForm'

const fieldConfig = {
  page: {
    input: 'w-full rounded-sm border bg-white px-5 py-4 text-slate-800 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand',
    inputError: 'border-red-400 focus:ring-red-400',
    inputOk: 'border-slate-200',
    button: 'w-full rounded-sm bg-brand px-8 py-4 text-base font-bold uppercase tracking-wide text-brand-black shadow-lg shadow-brand/30 hover:bg-brand-light transition-colors disabled:opacity-60',
    submitLabel: 'GET FREE PROPOSAL',
    showCallLink: false,
  },
  home: {
    input: 'w-full rounded-xl border-0 bg-white px-5 py-4 text-slate-800 placeholder:text-slate-400 shadow-lg focus:outline-none focus:ring-2 focus:ring-brand',
    inputError: 'ring-2 ring-red-400',
    inputOk: '',
    button: 'w-full rounded-xl bg-brand px-8 py-4 text-lg font-bold text-brand-black shadow-xl shadow-brand/30 hover:bg-brand-light transition-all hover:-translate-y-0.5 disabled:opacity-60',
    submitLabel: 'GET MY FREE PROPOSAL',
    showCallLink: true,
  },
}

function Field({ label, error, children }) {
  return (
    <div>
      {children}
      {error && <p className="mt-1.5 text-sm text-red-500">{error}</p>}
    </div>
  )
}

export default function ContactForm({ variant = 'home' }) {
  const styles = fieldConfig[variant]
  const [values, setValues] = useState(emptyContactForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const inputClass = (field) =>
    `${styles.input} ${errors[field] ? styles.inputError : styles.inputOk}`

  const handleChange = (field) => (e) => {
    setValues((prev) => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
    if (submitted) setSubmitted(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validateContactForm(values)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setSubmitted(true)
    setValues(emptyContactForm)
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
      <Field error={errors.name}>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange('name')}
          placeholder="Name*"
          className={inputClass('name')}
          aria-invalid={Boolean(errors.name)}
        />
      </Field>

      <Field error={errors.email}>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange('email')}
          placeholder="Email*"
          className={inputClass('email')}
          aria-invalid={Boolean(errors.email)}
        />
      </Field>

      <Field error={errors.phone}>
        <input
          type="tel"
          name="phone"
          value={values.phone}
          onChange={handleChange('phone')}
          placeholder="Phone number*"
          className={inputClass('phone')}
          aria-invalid={Boolean(errors.phone)}
        />
      </Field>

      <Field error={errors.website}>
        <input
          type="text"
          name="website"
          value={values.website}
          onChange={handleChange('website')}
          placeholder="Website URL (optional)"
          className={`${styles.input} ${styles.inputOk}`}
        />
      </Field>

      <Field error={errors.message}>
        <textarea
          name="message"
          rows={variant === 'page' ? 5 : 4}
          value={values.message}
          onChange={handleChange('message')}
          placeholder="Message*"
          className={`${inputClass('message')} resize-none`}
          aria-invalid={Boolean(errors.message)}
        />
      </Field>

      {submitted && (
        <p
          className={`rounded-sm px-4 py-3 text-sm font-medium text-center ${
            variant === 'home'
              ? 'bg-white/95 text-brand-deep'
              : 'bg-brand/10 text-brand-deep'
          }`}
        >
          Thank you! Your message has been sent. We will be in touch shortly.
        </p>
      )}

      <button type="submit" className={styles.button}>
        {styles.submitLabel}
      </button>

      {styles.showCallLink && (
        <a
          href={contact.phoneTel}
          className="flex w-full items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-bold text-brand-deep shadow-lg hover:bg-brand-light/20 transition-all"
        >
          {ctaSection.callButton}
        </a>
      )}
    </form>
  )
}
