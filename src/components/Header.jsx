import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FaBars, FaChevronRight, FaWhatsapp, FaXmark } from 'react-icons/fa6'
import Logo from './Logo.jsx'
import { contact, navLinks } from '../data/site.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`site-header${scrolled ? ' is-scrolled' : ''}${pathname === '/' ? ' site-header--over-hero' : ''}`}
    >
      <div className="container header__inner">
        <Logo />

        <nav className="nav" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `nav__link${isActive ? ' is-active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="header__actions">
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="btn btn--primary btn--sm header__cta"
          >
            <FaWhatsapp aria-hidden="true" />
            WhatsApp
          </a>
          <button
            type="button"
            className="nav-toggle"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          >
            {open ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-movil"
            className="mobile-nav"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <nav className="mobile-nav__list" aria-label="Navegación móvil">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `mobile-nav__link${isActive ? ' is-active' : ''}`
                  }
                >
                  {link.label}
                  <FaChevronRight aria-hidden="true" />
                </NavLink>
              ))}
            </nav>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="btn btn--primary btn--block"
            >
              <FaWhatsapp aria-hidden="true" />
              Escríbenos por WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
