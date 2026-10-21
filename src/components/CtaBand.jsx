import { Link } from 'react-router-dom'
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa6'
import Reveal from './Reveal.jsx'
import { contact } from '../data/site.js'

export default function CtaBand({
  title = '¿Necesitas compañía y cuidado en casa?',
  text = 'Cuéntanos qué necesita tu ser querido. Coordinamos una valoración y te acompañamos en cada paso.',
}) {
  return (
    <section className="section section--tight">
      <div className="container">
        <Reveal className="cta-band">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="cta-band__actions">
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="btn btn--gold"
            >
              <FaWhatsapp aria-hidden="true" />
              WhatsApp
            </a>
            <Link to="/contacto" className="btn btn--outline-white">
              Contacto
              <FaArrowRight aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
