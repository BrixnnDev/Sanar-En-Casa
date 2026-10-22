import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FaCalendarCheck, FaCheck, FaWhatsapp, FaXmark } from 'react-icons/fa6'
import { contact } from '../data/site.js'

const ENDPOINT = `https://formsubmit.co/ajax/${contact.email}`

const initialForm = {
  cedula: '',
  nombre: '',
  telefono: '',
  correo: '',
  motivo: '',
}

function buildMessage(data) {
  return [
    'Nueva solicitud de cita - Sanar en Casa',
    `Cédula: ${data.cedula}`,
    `Nombre: ${data.nombre}`,
    `Teléfono: ${data.telefono}`,
    `Correo: ${data.correo}`,
    `Motivo: ${data.motivo}`,
  ].join('\n')
}

export default function CitaModal({ open, onClose }) {
  const [form, setForm] = useState(initialForm)
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState('idle')
  const [whatsappUrl, setWhatsappUrl] = useState('')
  const firstFieldRef = useRef(null)
  const previousFocus = useRef(null)

  const update = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }))
  }

  useEffect(() => {
    if (!open) return undefined

    previousFocus.current = document.activeElement
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    const timer = window.setTimeout(() => firstFieldRef.current?.focus(), 120)

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)

    return () => {
      window.clearTimeout(timer)
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = overflow
      if (previousFocus.current instanceof HTMLElement) previousFocus.current.focus()
    }
  }, [open, onClose])

  useEffect(() => {
    if (open) return
    const timer = window.setTimeout(() => {
      setStatus('idle')
      setForm(initialForm)
      setConsent(false)
      setWhatsappUrl('')
    }, 250)
    return () => window.clearTimeout(timer)
  }, [open])

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (status === 'sending') return

    const url = `${contact.whatsapp}?text=${encodeURIComponent(buildMessage(form))}`
    setWhatsappUrl(url)
    setStatus('sending')

    const whatsappWindow = window.open(url, '_blank', 'noopener,noreferrer')

    const controller = new AbortController()
    const timeout = window.setTimeout(() => controller.abort(), 15000)

    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          cedula: form.cedula,
          nombre: form.nombre,
          telefono: form.telefono,
          correo: form.correo,
          motivo: form.motivo,
          _subject: `Nueva solicitud de cita - ${form.nombre}`,
          _template: 'table',
          _captcha: 'false',
          _replyto: form.correo,
        }),
        signal: controller.signal,
      })

      if (!response.ok) throw new Error('No se pudo enviar el correo')
      setStatus('success')
    } catch {
      setStatus(whatsappWindow ? 'success' : 'whatsapp')
    } finally {
      window.clearTimeout(timeout)
    }
  }

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="cita-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            className="cita"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cita-title"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" className="cita__close" onClick={onClose} aria-label="Cerrar formulario">
              <FaXmark aria-hidden="true" />
            </button>

            {status === 'success' || status === 'whatsapp' ? (
              <div className="cita__success">
                <span className="cita__success-icon">
                  <FaCheck aria-hidden="true" />
                </span>
                <h2 id="cita-title">¡Solicitud enviada!</h2>
                <p>
                  {status === 'success'
                    ? 'Recibimos tus datos. Te contactaremos por WhatsApp y correo para confirmar tu cita.'
                    : 'Recibimos tus datos por WhatsApp. Envía el mensaje que abrimos para completar la solicitud y te responderemos por ese medio y por correo.'}
                </p>
                <div className="cita__success-actions">
                  <a
                    href={whatsappUrl || contact.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn--primary"
                  >
                    <FaWhatsapp aria-hidden="true" />
                    Abrir WhatsApp
                  </a>
                  <button type="button" className="btn btn--ghost" onClick={onClose}>
                    Cerrar
                  </button>
                </div>
                <p className="cita__success-note">
                  También puedes escribirnos a{' '}
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>.
                </p>
              </div>
            ) : (
              <>
                <header className="cita__head">
                  <span className="eyebrow">
                    <FaCalendarCheck aria-hidden="true" />
                    Agendar cita
                  </span>
                  <h2 id="cita-title">Solicita tu cita de enfermería domiciliaria</h2>
                  <p>
                    Déjanos tus datos y te contactamos por WhatsApp y correo para coordinar el
                    servicio.
                  </p>
                </header>

                <form className="cita__form" onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <div className="field">
                      <label htmlFor="cita-cedula">Cédula</label>
                      <input
                        id="cita-cedula"
                        ref={firstFieldRef}
                        name="cedula"
                        inputMode="numeric"
                        autoComplete="off"
                        pattern="[0-9]{5,15}"
                        title="Ingresa solo números, entre 5 y 15 dígitos"
                        placeholder="1234567890"
                        value={form.cedula}
                        onChange={update('cedula')}
                        required
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="cita-nombre">Nombre completo</label>
                      <input
                        id="cita-nombre"
                        name="nombre"
                        autoComplete="name"
                        placeholder="Nombre y apellidos"
                        value={form.nombre}
                        onChange={update('nombre')}
                        required
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="cita-telefono">Teléfono</label>
                      <input
                        id="cita-telefono"
                        name="telefono"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        pattern="[0-9+()\s-]{7,20}"
                        title="Ingresa un número de teléfono válido"
                        placeholder="300 000 0000"
                        value={form.telefono}
                        onChange={update('telefono')}
                        required
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="cita-correo">Correo electrónico</label>
                      <input
                        id="cita-correo"
                        name="correo"
                        type="email"
                        autoComplete="email"
                        placeholder="tucorreo@ejemplo.com"
                        value={form.correo}
                        onChange={update('correo')}
                        required
                      />
                    </div>
                    <div className="field field--full">
                      <label htmlFor="cita-motivo">¿Por qué necesitas la cita?</label>
                      <textarea
                        id="cita-motivo"
                        name="motivo"
                        rows="3"
                        maxLength="600"
                        placeholder="Cuéntanos qué necesita el paciente, la zona de Bogotá y los horarios que te sirven."
                        value={form.motivo}
                        onChange={update('motivo')}
                        required
                      />
                    </div>
                  </div>

                  <div className="field checkbox">
                    <input
                      id="cita-consent"
                      type="checkbox"
                      checked={consent}
                      onChange={(event) => setConsent(event.target.checked)}
                      required
                    />
                    <label htmlFor="cita-consent">
                      Autorizo el tratamiento de mis datos personales conforme a la{' '}
                      <Link to="/privacidad" onClick={onClose}>
                        política de privacidad
                      </Link>
                      .
                    </label>
                  </div>

                  <button type="submit" className="btn btn--primary btn--block" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Enviando…' : 'Enviar solicitud'}
                  </button>

                  <p className="form-note">
                    Al enviar, se abrirá WhatsApp con tu solicitud lista y recibiremos una copia por
                    correo.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
