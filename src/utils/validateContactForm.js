export function validateContactForm(values, options = {}) {
  const { requirePhone = true, requireMessage = false } = options
  const errors = {}

  const name = values.name?.trim() ?? ''
  const email = values.email?.trim() ?? ''
  const phone = values.phone?.trim() ?? ''
  const website = values.website?.trim() ?? ''
  const message = values.message?.trim() ?? ''

  if (!name) {
    errors.name = 'Name is required'
  } else if (name.length < 2) {
    errors.name = 'Name must be at least 2 characters'
  }

  if (!email) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Enter a valid email address'
  }

  if (requirePhone) {
    if (!phone) {
      errors.phone = 'Phone number is required'
    } else if (!/^[\d\s+\-()]{7,20}$/.test(phone)) {
      errors.phone = 'Enter a valid phone number'
    }
  } else if (phone && !/^[\d\s+\-()]{7,20}$/.test(phone)) {
    errors.phone = 'Enter a valid phone number'
  }

  if (website) {
    const url = /^https?:\/\//i.test(website) ? website : `https://${website}`
    try {
      const parsed = new URL(url)
      if (!parsed.hostname.includes('.')) {
        errors.website = 'Enter a valid website URL'
      }
    } catch {
      errors.website = 'Enter a valid website URL'
    }
  }

  if (requireMessage) {
    if (!message) {
      errors.message = 'Message is required'
    } else if (message.length < 10) {
      errors.message = 'Message must be at least 10 characters'
    }
  } else if (message && message.length < 10) {
    errors.message = 'Message must be at least 10 characters if provided'
  }

  return errors
}

export const emptyContactForm = {
  name: '',
  email: '',
  phone: '',
  website: '',
  message: '',
}
