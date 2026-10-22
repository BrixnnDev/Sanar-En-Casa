import {
  FaCheck,
  FaClipboardCheck,
  FaComments,
  FaHandHoldingHeart,
  FaPills,
  FaShieldHeart,
} from 'react-icons/fa6'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHead from '../components/SectionHead.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import CtaBand from '../components/CtaBand.jsx'
import useSeo from '../hooks/useSeo.js'
import { services } from '../data/site.js'

const included = [
  {
    icon: FaHandHoldingHeart,
    title: 'Trato respetuoso',
    text: 'Escucha, paciencia y calidez en cada momento del cuidado.',
  },
  {
    icon: FaClipboardCheck,
    title: 'Registro de novedades',
    text: 'Anotamos lo relevante de cada jornada para informar a la familia.',
  },
  {
    icon: FaComments,
    title: 'Comunicación cercana',
    text: 'Canales claros para resolver dudas y coordinar cambios.',
  },
  {
    icon: FaShieldHeart,
    title: 'Higiene y seguridad',
    text: 'Cuidado con protocolos para proteger al paciente y al cuidador.',
  },
]

export default function Servicios() {
  useSeo({
    title: 'Servicios de enfermería domiciliaria',
    description:
      'Cuidado y acompañamiento domiciliario en Bogotá: apoyo en actividades diarias, movilización, cambio de posición, control de signos vitales y cuidados básicos de enfermería.',
    path: '/servicios',
  })

  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Cuidado y acompañamiento a tu medida"
        text="Apoyamos a pacientes y familias en el hogar con servicios flexibles que se adaptan a las necesidades, los horarios y la rutina de cada persona."
      />

      <section className="section">
        <div className="container">
          <Reveal className="notice">
            <FaPills aria-hidden="true" />
            <p>
              Además del cuidado en casa, somos una droguería en Bogotá. Si necesitas apoyo con tus
              medicamentos, escríbenos y te orientamos sobre cómo acercarte a nuestro servicio.
            </p>
          </Reveal>

          <div className="grid grid--2 services-detailed">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.05}>
                <ServiceCard service={service} detailed index={index} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHead
            eyebrow="Siempre incluido"
            title="Lo que acompaña cada servicio"
            text="Independientemente del plan que elijas, estos principios están presentes en cada visita."
          />
          <div className="grid grid--4">
            {included.map((item, index) => {
              const Icon = item.icon
              return (
                <Reveal key={item.title} delay={index * 0.06} className="card">
                  <span className={`icon-badge${index === 1 ? ' icon-badge--gold' : index === 2 ? ' icon-badge--azul' : ''}`}>
                    <Icon aria-hidden="true" />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={0.1} className="services-note">
            <FaCheck aria-hidden="true" />
            <p>
              Los planes de cuidado se acuerdan después de conocer la situación del paciente. La
              disponibilidad depende de la zona de Bogotá y de los horarios requeridos.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Diseñemos juntos el plan de cuidado"
        text="Cuéntanos qué necesita tu ser querido y te propondremos un acompañamiento acorde a su situación."
      />
    </>
  )
}
