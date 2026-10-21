import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FaCheck,
  FaCircleInfo,
  FaClock,
  FaEnvelope,
  FaPaperPlane,
  FaPhone,
  FaWhatsapp,
} from 'react-icons/fa6'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import { contact } from '../data/site.js'

const initialForm = {
  type: 'Petición',
  name: '',
  document: '',
  email: '',
  phone: '',
  message: '',
}

export default function Pqr() {
  const [form, setForm] = useState(initialForm)
  const [sent, setSent] = useState(false)

  const update = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }))
    setSent(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const body = [
      `Tipo de solicitud: ${form.type}`,
      `Nombre completo: ${form.name}`,
      `Documento de identidad: ${form.document || 'No indicado'}`,
      `Correo electrónico: ${form.email}`,
      `Teléfono: ${form.phone || 'No indicado'}`,
      '',
      'Mensaje:',
      form.message,
    ].join('\n')

    const subject = `PQR - ${form.type} - ${form.name}`
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <>
      <PageHero
        eyebrow="PQR"
        title="Peticiones, quejas, reclamos y sugerencias"
        text="Tu opinión nos ayuda a cuidar mejor. Cuéntanos qué pasó, qué necesitas o qué podemos mejorar. Escuchamos con atención y respondemos con responsabilidad."
      />

      <section className="section">
        <div className="container pqr-layout">
          <Reveal className="form-card">
            <h2 className="form-card__title">Radica tu solicitud</h2>
            <p className="form-card__text">
              Completa los datos y tu aplicación de correo se abrirá con la información lista para
              enviar.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="pqr-type">Tipo de solicitud *</label>
                  <select id="pqr-type" value={form.type} onChange={update('type')} required>
                    <option value="Petición">Petición</option>
                    <option value="Queja">Queja</option>
                    <option value="Reclamo">Reclamo</option>
                    <option value="Sugerencia">Sugerencia</option>
                    <option value="Felicitación">Felicitación</option>
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="pqr-name">Nombre completo *</label>
                  <input
                    id="pqr-name"
                    type="text"
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Tu nombre"
                    required
                  />
                </div>

                <div className="field">
                  <label htmlFor="pqr-document">Documento de identidad</label>
                  <input
                    id="pqr-document"
                    type="text"
                    value={form.document}
                    onChange={update('document')}
                    placeholder="Cédula o NIT"
                  />
                </div>

                <div className="field">
                  <label htmlFor="pqr-email">Correo electrónico *</label>
                  <input
                    id="pqr-email"
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    placeholder="tucorreo@ejemplo.com"
                    required
                  />
                </div>

                <div className="field field--full">
                  <label htmlFor="pqr-phone">Teléfono de contacto</label>
                  <input
                    id="pqr-phone"
                    type="tel"
                    value={form.phone}
                    onChange={update('phone')}
                    placeholder="Ej. 300 000 0000"
                  />
                </div>

                <div className="field field--full">
                  <label htmlFor="pqr-message">Mensaje *</label>
                  <textarea
                    id="pqr-message"
                    value={form.message}
                    onChange={update('message')}
                    placeholder="Cuéntanos con detalle tu solicitud"
                    required
                  />
                </div>

                <div className="field field--full checkbox">
                  <input id="pqr-accept" type="checkbox" required />
                  <label htmlFor="pqr-accept">
                    Acepto la <Link to="/privacidad">política de privacidad</Link> y el tratamiento
                    de mis datos personales.
                  </label>
                </div>

                <div className="field field--full">
                  <button type="submit" className="btn btn--primary btn--block">
                    Enviar PQR
                    <FaPaperPlane aria-hidden="true" />
                  </button>
                  <p className="form-note">
                    Al enviar se abrirá tu aplicación de correo. También puedes escribirnos
                    directamente a <a href={`mailto:${contact.email}`}>{contact.email}</a>.
                  </p>
                </div>
              </div>

              {sent && (
                <div className="form-success">
                  <FaCheck aria-hidden="true" />
                  <p>
                    Se abrió tu aplicación de correo con la solicitud. Revisa el mensaje y envíalo
                    para que podamos gestionarlo.
                  </p>
                </div>
              )}
            </form>
          </Reveal>

          <div className="pqr-aside">
            <Reveal>
              <div className="contact-card">
                <span className="icon-badge">
                  <FaEnvelope aria-hidden="true" />
                </span>
                <div>
                  <h3>Correo electrónico</h3>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="contact-card">
                <span className="icon-badge icon-badge--gold">
                  <FaPhone aria-hidden="true" />
                </span>
                <div>
                  <h3>Teléfono</h3>
                  <a href={contact.phoneHref}>{contact.phone}</a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="contact-card">
                <span className="icon-badge icon-badge--azul">
                  <FaWhatsapp aria-hidden="true" />
                </span>
                <div>
                  <h3>WhatsApp</h3>
                  <a href={contact.whatsapp} target="_blank" rel="noreferrer">
                    Escribir ahora
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.18} className="notice">
              <FaClock aria-hidden="true" />
              <p>
                Respondemos en un plazo máximo de 15 días hábiles. Si tu caso es urgente, escríbenos
                por WhatsApp para orientarte.
              </p>
            </Reveal>

            <Reveal delay={0.24} className="aside-card">
              <h3>Antes de enviar</h3>
              <ul className="checklist">
                <li>
                  <FaCheck aria-hidden="true" />
                  Describe lo sucedido con fechas y nombres.
                </li>
                <li>
                  <FaCheck aria-hidden="true" />
                  Incluye un correo o teléfono de contacto.
                </li>
                <li>
                  <FaCheck aria-hidden="true" />
                  Adjunta soportes en el correo si los tienes.
                </li>
              </ul>
            </Reveal>

            <Reveal delay={0.3} className="notice notice--azul">
              <FaCircleInfo aria-hidden="true" />
              <p>
                Tratamos tus datos de forma confidencial. Consulta nuestra{' '}
                <Link to="/privacidad">política de privacidad</Link>.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
