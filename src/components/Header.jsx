import { useCallback, useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FaBars, FaChevronRight, FaWhatsapp, FaXmark } from 'react-icons/fa6'
import Logo from './Logo.jsx'
import CitaModal from './CitaModal.jsx'
import { navLinks } from '../data/site.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [citaOpen, setCitaOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  const openCita = () => {
    setOpen(false)
    setCitaOpen(true)
  }

  const closeCita = useCallback(() => setCitaOpen(false), [])

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
    if (citaOpen) return undefined
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open, citaOpen])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
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
          <button
            type="button"
            className="btn btn--primary btn--sm header__cta"
            onClick={openCita}
            aria-haspopup="dialog"
            title="Escríbenos por WhatsApp"
          >
            <FaWhatsapp aria-hidden="true" />
            <span>WhatsApp</span>
          </button>
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
            <button
              type="button"
              className="btn btn--primary btn--block"
              onClick={openCita}
              aria-haspopup="dialog"
            >
              <FaWhatsapp aria-hidden="true" />
              Escríbenos por WhatsApp
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <CitaModal open={citaOpen} onClose={closeCita} />
    </header>
  )
}
