import { useState } from 'react'
import {
  FaCheck,
  FaCircleInfo,
  FaClock,
  FaEnvelope,
  FaLocationDot,
  FaPaperPlane,
  FaPhone,
  FaWhatsapp,
} from 'react-icons/fa6'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import { contact } from '../data/site.js'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

export default function Contacto() {
  const [form, setForm] = useState(initialForm)
  const [sent, setSent] = useState(false)

  const update = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }))
    setSent(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const body = [
      `Nombre: ${form.name}`,
      `Correo: ${form.email}`,
      `Teléfono: ${form.phone || 'No indicado'}`,
      '',
      'Mensaje:',
      form.message,
    ].join('\n')

    const subject = `Contacto web - ${form.name}`
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Estamos para escucharte"
        text="Cuéntanos qué necesita tu ser querido o resuelve tus dudas sobre nuestros servicios. Te responderemos lo antes posible."
      />

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-info">
            <Reveal>
              <div className="contact-card">
                <span className="icon-badge">
                  <FaPhone aria-hidden="true" />
                </span>
                <div>
                  <h3>Llámanos</h3>
                  <a href={contact.phoneHref}>{contact.phone}</a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="contact-card">
                <span className="icon-badge icon-badge--gold">
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

            <Reveal delay={0.12}>
              <div className="contact-card">
                <span className="icon-badge icon-badge--azul">
                  <FaEnvelope aria-hidden="true" />
                </span>
                <div>
                  <h3>Correo electrónico</h3>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="contact-card">
                <span className="icon-badge">
                  <FaLocationDot aria-hidden="true" />
                </span>
                <div>
                  <h3>Ubicación</h3>
                  <p>{contact.address}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.24} className="hours-card">
              <span className="hours-card__icon">
                <FaClock aria-hidden="true" />
              </span>
              <div>
                <h3>Horario de atención</h3>
                <p>{contact.hours}</p>
                <span>{contact.schedule}</span>
              </div>
            </Reveal>

            <Reveal delay={0.3} className="notice">
              <FaCircleInfo aria-hidden="true" />
              <p>
                Si tu ser querido requiere atención médica urgente, llama primero a la línea de
                emergencias 123.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="form-card">
            <h2 className="form-card__title">Escríbenos</h2>
            <p className="form-card__text">
              Déjanos tus datos y tu mensaje. Se abrirá tu aplicación de correo con todo listo para
              enviar.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="contact-name">Nombre completo *</label>
                  <input
                    id="contact-name"
                    type="text"
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Tu nombre"
                    required
                  />
                </div>

                <div className="field">
                  <label htmlFor="contact-email">Correo electrónico *</label>
                  <input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    placeholder="tucorreo@ejemplo.com"
                    required
                  />
                </div>

                <div className="field field--full">
                  <label htmlFor="contact-phone">Teléfono</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={form.phone}
                    onChange={update('phone')}
                    placeholder="Ej. 300 000 0000"
                  />
                </div>

                <div className="field field--full">
                  <label htmlFor="contact-message">Mensaje *</label>
                  <textarea
                    id="contact-message"
                    value={form.message}
                    onChange={update('message')}
                    placeholder="Cuéntanos qué necesitas"
                    required
                  />
                </div>

                <div className="field field--full">
                  <button type="submit" className="btn btn--primary btn--block">
                    Enviar mensaje
                    <FaPaperPlane aria-hidden="true" />
                  </button>
                  <p className="form-note">
                    También puedes escribirnos a <a href={`mailto:${contact.email}`}>{contact.email}</a>.
                  </p>
                </div>
              </div>

              {sent && (
                <div className="form-success">
                  <FaCheck aria-hidden="true" />
                  <p>
                    Se abrió tu aplicación de correo con el mensaje. Revísalo y envíalo para que
                    podamos responderte.
                  </p>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}
