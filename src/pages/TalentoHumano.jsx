import {
  FaArrowRight,
  FaCheck,
  FaComments,
  FaEnvelope,
  FaGraduationCap,
  FaHandHoldingHeart,
  FaPeopleGroup,
  FaShieldHeart,
} from 'react-icons/fa6'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHead from '../components/SectionHead.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { contact } from '../data/site.js'

const benefits = [
  {
    icon: FaShieldHeart,
    title: 'Condiciones claras',
    text: 'Acuerdos transparentes desde el primer día.',
  },
  {
    icon: FaGraduationCap,
    title: 'Capacitación',
    text: 'Acompañamiento y formación para cuidar mejor.',
  },
  {
    icon: FaPeopleGroup,
    title: 'Buen trato',
    text: 'Un equipo que respeta y valora a las personas.',
  },
  {
    icon: FaHandHoldingHeart,
    title: 'Propósito',
    text: 'Un trabajo que deja huella en las familias.',
  },
]

const profile = [
  'Experiencia en cuidado de pacientes o adultos mayores.',
  'Formación en salud o cuidado: auxiliar de enfermería, cuidador certificado o similar.',
  'Empatía, paciencia y vocación de servicio.',
  'Buena comunicación y trabajo en equipo.',
  'Puntualidad, responsabilidad y confidencialidad.',
  'Disponibilidad de horarios según la necesidad del servicio.',
]

const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(
  'Hoja de vida - Talento humano',
)}`

export default function TalentoHumano() {
  return (
    <>
      <PageHero
        eyebrow="Talento humano"
        title="Tu vocación de cuidar tiene un lugar aquí"
        text="Buscamos personas que amen lo que hacen, que escuchen con paciencia y que entiendan que acompañar también es una forma de sanar."
      />

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Trabaja con nosotros</span>
            <h2 className="section-title">
              Un equipo que cuida <span className="text-verde">con el corazón</span>
            </h2>
            <p className="section-sub">
              En Sanar en Casa creemos que el cuidado de calidad empieza por las personas que lo
              brindan. Si tienes experiencia en cuidado domiciliario, formación en salud y una
              verdadera vocación de servicio, queremos conocerte.
            </p>
            <p className="section-sub">
              Valoramos la responsabilidad, la empatía y el respeto. A cambio, ofrecemos un entorno
              de trabajo cercano, con acuerdos claros y acompañamiento constante.
            </p>
            <Reveal delay={0.1}>
              <div className="hero__actions">
                <a href={mailto} className="btn btn--primary">
                  <FaEnvelope aria-hidden="true" />
                  Enviar hoja de vida
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="commit-card">
            <h3>Lo que ofrecemos</h3>
            <p className="commit-card__intro">
              Un lugar para crecer y hacer la diferencia en la vida de otras personas.
            </p>
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div className="commit-card__row" key={benefit.title}>
                  <span className="commit-card__icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <div>
                    <strong>{benefit.title}</strong>
                    <span>{benefit.text}</span>
                  </div>
                </div>
              )
            })}
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHead
            eyebrow="Perfil que buscamos"
            title="Personas con experiencia y vocación"
            text="Más que un listado de requisitos, buscamos un compromiso genuino con el bienestar del paciente."
          />
          <div className="grid grid--2">
            {profile.map((item, index) => (
              <Reveal key={item} delay={index * 0.05} className="profile-item">
                <span className="profile-item__icon">
                  <FaCheck aria-hidden="true" />
                </span>
                <p>{item}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="notice notice--azul">
            <FaComments aria-hidden="true" />
            <p>
              Todo proceso de selección incluye entrevista y verificación de experiencia y
              referencias. La información de las personas aspirantes se trata de forma confidencial.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="apply-card">
            <div>
              <span className="eyebrow eyebrow--gold">Postúlate</span>
              <h2>¿Quieres hacer parte del equipo?</h2>
              <p>
                Envíanos tu hoja de vida con el asunto <strong>“Hoja de vida - Talento humano”</strong>{' '}
                y cuéntanos brevemente tu experiencia en cuidado de pacientes.
              </p>
            </div>
            <a href={mailto} className="btn btn--primary">
              Enviar mi hoja de vida
              <FaArrowRight aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Cuidar es un trabajo que transforma vidas"
        text="Si compartes nuestra forma de entender el cuidado, este puede ser tu próximo lugar."
      />
    </>
  )
}
