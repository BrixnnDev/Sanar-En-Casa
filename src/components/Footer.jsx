import { Link } from 'react-router-dom'
import {
  FaClock,
  FaEnvelope,
  FaLocationDot,
  FaPhone,
  FaWhatsapp,
} from 'react-icons/fa6'
import Logo from './Logo.jsx'
import { contact } from '../data/site.js'

const supportLinks = [
  { to: '/pqr', label: 'PQR' },
  { to: '/contacto', label: 'Contacto' },
]

const legalLinks = [
  { to: '/terminos', label: 'Términos y condiciones' },
  { to: '/privacidad', label: 'Política de privacidad' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Logo footer />
            <p className="footer__desc">
              Enfermería domiciliaria y/o hospitalaria en Bogotá. Acompañamos a pacientes y familias
              con calidez, responsabilidad y respeto.
            </p>
            <div className="footer__social">
              <a href={contact.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href={`mailto:${contact.email}`} aria-label="Correo electrónico">
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="footer">
            <h4>Legal</h4>
            <ul className="footer__links">
              {legalLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer">
            <h4>Atención</h4>
            <ul className="footer__links">
              {supportLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer">
            <h4>Contacto</h4>
            <ul className="footer__contact">
              <li>
                <FaLocationDot aria-hidden="true" />
                <span>{contact.address}</span>
              </li>
              <li>
                <FaPhone aria-hidden="true" />
                <a href={contact.phoneHref}>{contact.phone}</a>
              </li>
              <li>
                <FaEnvelope aria-hidden="true" />
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>
                <FaClock aria-hidden="true" />
                <span>{contact.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {year} Sanar en Casa. Todos los derechos reservados.</p>
          <p>
            Creado por{' '}
            <a href="https://brixnndev.vercel.app/" target="_blank" rel="noreferrer">
              BRIXNNDEV
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
