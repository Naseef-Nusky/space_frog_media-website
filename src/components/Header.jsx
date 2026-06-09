import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navLinks, serviceDropdownLinks } from '../data/content'
import { Icon } from './Icons'

function isServicesActive(pathname) {
  return pathname === '/services' || pathname.startsWith('/services/')
}

function isLinkActive(link, pathname) {
  if (link.label === 'Services') {
    return isServicesActive(pathname)
  }
  if (link.href.includes('#')) {
    return false
  }
  return pathname === link.href || pathname === `${link.href}/`
}

function NavItem({ link, onClick }) {
  const location = useLocation()
  const isHashLink = link.href.includes('#')

  if (isHashLink) {
    return (
      <a
        href={link.href}
        onClick={onClick}
        className="px-4 py-2 text-sm font-semibold uppercase tracking-wide text-slate-700 hover:text-brand-dark transition-colors rounded-lg hover:bg-brand/10"
      >
        {link.label}
      </a>
    )
  }

  return (
    <NavLink
      to={link.href}
      onClick={onClick}
      end={link.href === '/'}
      className={() =>
        `px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors rounded-lg ${
          isLinkActive(link, location.pathname)
            ? 'bg-brand text-brand-black'
            : 'text-slate-700 hover:text-brand-dark hover:bg-brand/10'
        }`
      }
    >
      {link.label}
    </NavLink>
  )
}

function ServicesDropdown() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isActive = isServicesActive(location.pathname)

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <NavLink
        to="/services"
        className={() =>
          `inline-flex items-center px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors rounded-lg ${
            isActive ? 'bg-brand text-brand-black' : 'text-slate-700 hover:text-brand-dark hover:bg-brand/10'
          }`
        }
        aria-haspopup="true"
        aria-expanded={open}
      >
        Services
      </NavLink>

      {open && (
        <div className="absolute left-0 top-full z-50 pt-1">
          <div className="min-w-[17.5rem] bg-white py-2 shadow-lg ring-1 ring-slate-200/80">
            {serviceDropdownLinks.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`block px-5 py-2.5 text-sm normal-case font-medium transition-colors ${
                  location.pathname === item.href
                    ? 'text-brand-dark bg-brand/5'
                    : 'text-slate-700 hover:text-brand-dark hover:bg-slate-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </li>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="bg-white shadow-sm shadow-slate-900/5 border-b border-slate-200/80">
        <div className="section-container flex items-center justify-between py-3 lg:py-4">
          <Link to="/" className="shrink-0">
            <img
              src="/logo.png"
              alt="Digital Marketing Agency | Space Frog Media"
              className="h-10 lg:h-12 w-auto"
            />
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.label === 'Services' ? (
                <ServicesDropdown key={link.label} />
              ) : (
                <li key={link.label}>
                  <NavItem link={link} />
                </li>
              ),
            )}
          </ul>

          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-brand-black shadow-lg shadow-brand/25 hover:bg-brand-light transition-all hover:-translate-y-0.5"
          >
            Free Quote Today
          </Link>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-xl p-2 text-slate-700 hover:bg-brand/10"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <Icon name={open ? 'close' : 'menu'} className="w-6 h-6" />
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-slate-200/80 bg-white">
            <ul className="section-container py-4 space-y-1">
              {navLinks.map((link) =>
                link.label === 'Services' ? (
                  <li key={link.label}>
                    <button
                      type="button"
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-wide ${
                        isServicesActive(location.pathname)
                          ? 'bg-brand text-brand-black'
                          : 'text-slate-700 hover:bg-brand/10 hover:text-brand-dark'
                      }`}
                    >
                      Services
                      <Icon
                        name={servicesOpen ? 'chevronUp' : 'chevronDown'}
                        className="w-4 h-4"
                      />
                    </button>
                    {servicesOpen && (
                      <ul className="mt-1 ml-2 space-y-1 border-l-2 border-brand/20 pl-3">
                        <li>
                          <Link
                            to="/services"
                            onClick={() => setOpen(false)}
                            className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-brand/10 hover:text-brand-dark"
                          >
                            All Services
                          </Link>
                        </li>
                        {serviceDropdownLinks.map((item) => (
                          <li key={item.href}>
                            <Link
                              to={item.href}
                              onClick={() => setOpen(false)}
                              className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-brand/10 hover:text-brand-dark"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : link.href.includes('#') ? (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-wide text-slate-700 hover:bg-brand/10 hover:text-brand-dark"
                    >
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={link.label}>
                    <NavLink
                      to={link.href}
                      onClick={() => setOpen(false)}
                      end={link.href === '/'}
                      className={() =>
                        `block rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-wide ${
                          isLinkActive(link, location.pathname)
                            ? 'bg-brand text-brand-black'
                            : 'text-slate-700 hover:bg-brand/10 hover:text-brand-dark'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ),
              )}
              <li className="pt-2">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-brand px-4 py-3 text-center text-sm font-semibold text-brand-black"
                >
                  Free Quote Today
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
