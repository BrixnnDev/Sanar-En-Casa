import { Link } from 'react-router-dom'
import {
  FaArrowRight,
  FaBedPulse,
  FaCheck,
  FaComments,
  FaHeartPulse,
  FaHouseMedical,
  FaLeaf,
  FaShieldHeart,
  FaUserNurse,
  FaWhatsapp,
} from 'react-icons/fa6'
import Reveal from '../components/Reveal.jsx'
import SectionHead from '../components/SectionHead.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import CtaBand from '../components/CtaBand.jsx'
import useSeo from '../hooks/useSeo.js'
import { contact, services, steps } from '../data/site.js'

const heroChips = [
  'Atención en Bogotá',
  'Personal con vocación',
  'Acompañamiento humano',
]

const reasons = [
  {
    icon: FaUserNurse,
    title: 'Atención personalizada',
    text: 'Cada plan se adapta a la rutina, la salud y las necesidades del paciente.',
  },
  {
    icon: FaHeartPulse,
    title: 'Seguimiento responsable',
    text: 'Registramos signos vitales y comunicamos cambios importantes a la familia.',
  },
  {
    icon: FaComments,
    title: 'Familia informada',
    text: 'Mantenemos una comunicación cercana y transparente durante todo el servicio.',
  },
  {
    icon: FaShieldHeart,
    title: 'Cuidado con protocolos',
    text: 'Higiene, seguridad y respeto en cada visita y en cada actividad de cuidado.',
  },
]

const commitments = [
  {
    icon: FaUserNurse,
    title: 'Personal capacitado',
    text: 'Experiencia en cuidado y enfermería básica.',
  },
  {
    icon: FaShieldHeart,
    title: 'Cuidado seguro',
    text: 'Protocolos claros de higiene y movilización.',
  },
  {
    icon: FaComments,
    title: 'Comunicación constante',
    text: 'Reportes y contacto permanente con la familia.',
  },
  {
    icon: FaHeartPulse,
    title: 'Seguimiento cercano',
    text: 'Control y registro de signos vitales.',
  },
]

export default function Inicio() {
  useSeo({
    title: '',
    description:
      'Sanar en Casa es un servicio de enfermería domiciliaria en Bogotá. Acompañamiento en el hogar, apoyo en actividades diarias, movilización, signos vitales y cuidados básicos de enfermería.',
    path: '/',
  })

  return (
    <>
      <section className="hero">
        <img
          className="hero__fondo"
          src="/Img/FONDO.jpg"
          alt=""
          aria-hidden="true"
          loading="eager"
          decoding="async"
        />
        <div className="container hero__inner">
          <div className="hero__copy">
            <Reveal>
              <span className="pill">
                <FaLeaf aria-hidden="true" />
                Enfermería domiciliaria y/o hospitalaria · Bogotá y sus alrededores
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1>
                Sanar en casa es posible con <span className="text-verde">cuidado y compañía</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p>
                En Sanar en Casa acompañamos a pacientes y familias en su hogar. Brindamos apoyo en
                las actividades diarias, movilización, control de signos vitales y cuidados básicos
                de enfermería, siempre con calidez y respeto.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="hero__actions">
                <Link to="/servicios" className="btn btn--primary">
                  Conoce nuestros servicios
                  <FaArrowRight aria-hidden="true" />
                </Link>
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--ghost"
                >
                  <FaWhatsapp aria-hidden="true" />
                  Escríbenos
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <ul className="hero__chips">
                {heroChips.map((chip) => (
                  <li key={chip}>
                    <FaCheck aria-hidden="true" />
                    {chip}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.18} className="hero__visual">
            <div className="hero-card">
              <div className="hero-card__top">
                <span className="hero-card__icon">
                  <FaHouseMedical aria-hidden="true" />
                </span>
                <div>
                  <strong>Cuidado en casa</strong>
                  <span>Atención cercana y personalizada</span>
                </div>
              </div>
              <div className="hero-card__grid">
                <div className="hero-mini">
                  <FaHeartPulse aria-hidden="true" />
                  Signos vitales
                </div>
                <div className="hero-mini">
                  <FaUserNurse aria-hidden="true" />
                  Enfermería básica
                </div>
                <div className="hero-mini">
                  <FaBedPulse aria-hidden="true" />
                  Movilización
                </div>
                <div className="hero-mini">
                  <FaComments aria-hidden="true" />
                  Acompañamiento
                </div>
              </div>
            </div>
            <div className="hero-float hero-float--gold">
              <FaHeartPulse aria-hidden="true" />
              <div>
                <strong>6 servicios</strong>
                <span>de cuidado en casa</span>
              </div>
            </div>
            <div className="hero-float hero-float--azul">
              <FaUserNurse aria-hidden="true" />
              <div>
                <strong>Trato humano</strong>
                <span>en cada visita</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="stats-band">
        <div className="container">
          <Reveal className="stats">
            <div className="stat">
              <strong>6</strong>
              <span>Servicios de cuidado</span>
            </div>
            <div className="stat">
              <strong>100%</strong>
              <span>Atención humana</span>
            </div>
            <div className="stat">
              <strong>Bogotá</strong>
              <span>Nuestra ciudad</span>
            </div>
            <div className="stat">
              <strong>1 a 1</strong>
              <span>Acompañamiento</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Nuestros servicios"
            title="Cuidado pensado para cada necesidad"
            text="Acompañamos a personas que necesitan apoyo en casa, desde actividades sencillas del día a día hasta cuidados básicos de enfermería."
          />
          <div className="grid grid--3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.06}>
                <ServiceCard service={service} index={index} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container split">
          <div>
            <span className="eyebrow">¿Por qué elegirnos?</span>
            <h2 className="section-title">
              Cuidado con calidez, <span className="text-verde">responsabilidad y respeto</span>
            </h2>
            <p className="section-sub">
              Sabemos que confiar el cuidado de un ser querido no es fácil. Por eso trabajamos con
              protocolos claros, comunicación constante y un trato profundamente humano.
            </p>
            <ul className="checklist">
              <li>
                <FaCheck aria-hidden="true" />
                Atención centrada en la persona y su familia.
              </li>
              <li>
                <FaCheck aria-hidden="true" />
                Planes de cuidado flexibles según tus horarios.
              </li>
              <li>
                <FaCheck aria-hidden="true" />
                Personal con experiencia y vocación de servicio.
              </li>
              <li>
                <FaCheck aria-hidden="true" />
                Confidencialidad en el manejo de la información.
              </li>
            </ul>
            <Reveal delay={0.1}>
              <div className="hero__actions">
                <Link to="/nosotros" className="btn btn--primary">
                  Conoce a Sanar en Casa
                  <FaArrowRight aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="commit-card">
            <h3>Nuestro compromiso contigo</h3>
            <p className="commit-card__intro">
              Estos son los pilares que guían cada visita a tu hogar.
            </p>
            {commitments.map((item) => {
              const Icon = item.icon
              return (
                <div className="commit-card__row" key={item.title}>
                  <span className="commit-card__icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.text}</span>
                  </div>
                </div>
              )
            })}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Así trabajamos"
            title="Un proceso sencillo y cercano"
            text="Desde el primer contacto hasta el acompañamiento en casa, te explicamos cada paso con claridad."
          />
          <div className="steps">
            {steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.08} className="step">
                <span className="step__num">{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--azul">
        <div className="container">
          <div className="grid grid--4">
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <Reveal key={reason.title} delay={index * 0.06} className="card reason-card">
                  <span className="icon-badge icon-badge--azul">
                    <Icon aria-hidden="true" />
                  </span>
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
