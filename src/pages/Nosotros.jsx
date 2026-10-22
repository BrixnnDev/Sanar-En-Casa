import { Link } from 'react-router-dom'
import {
  FaArrowRight,
  FaCheck,
  FaCompass,
  FaHandHoldingHeart,
  FaHouseMedical,
  FaLocationDot,
  FaPills,
  FaUserNurse,
} from 'react-icons/fa6'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHead from '../components/SectionHead.jsx'
import CtaBand from '../components/CtaBand.jsx'
import useSeo from '../hooks/useSeo.js'
import { mission, values, vision } from '../data/site.js'

const essence = [
  {
    icon: FaHouseMedical,
    title: 'Cuidado en casa',
    text: 'Atención en el entorno donde el paciente se siente seguro.',
  },
  {
    icon: FaPills,
    title: 'Droguería en Bogotá',
    text: 'Un espacio cercano para acompañar también tu salud.',
  },
  {
    icon: FaLocationDot,
    title: 'Atención local',
    text: 'Coordinamos el servicio en Bogotá según zona y disponibilidad.',
  },
]

export default function Nosotros() {
  useSeo({
    title: 'Nosotros',
    description:
      'Conoce Sanar en Casa, servicio de enfermería domiciliaria en Bogotá: quiénes somos, nuestra misión, visión y los valores con los que cuidamos a cada familia.',
    path: '/nosotros',
  })

  return (
    <>
      <PageHero
        eyebrow="Nosotros"
        title="Una mano amiga en el lugar donde más se necesita"
        text="Sanar en Casa nace en Bogotá con una convicción sencilla: el cuidado de una persona debe sentirse cercano, respetuoso y humano, especialmente cuando ocurre en su propio hogar."
      />

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Quiénes somos</span>
            <h2 className="section-title">
              Cuidado que se siente <span className="text-verde">como en casa</span>
            </h2>
            <p className="section-sub">
              Somos una droguería bogotana que complementa su servicio con cuidado y acompañamiento
              domiciliario. Trabajamos con pacientes que necesitan apoyo en sus actividades diarias,
              movilización, control de signos vitales y cuidados básicos de enfermería.
            </p>
            <p className="section-sub">
              Nuestra labor no termina en el paciente: acompañamos también a la familia, escuchamos
              sus inquietudes y mantenemos una comunicación clara para que todos se sientan
              tranquilos y bien informados.
            </p>
            <ul className="checklist">
              <li>
                <FaCheck aria-hidden="true" />
                Atención con calidez y vocación de servicio.
              </li>
              <li>
                <FaCheck aria-hidden="true" />
                Respeto por la autonomía y la privacidad del paciente.
              </li>
              <li>
                <FaCheck aria-hidden="true" />
                Comunicación transparente con la familia.
              </li>
            </ul>
            <Reveal delay={0.1}>
              <div className="hero__actions">
                <Link to="/servicios" className="btn btn--primary">
                  Ver nuestros servicios
                  <FaArrowRight aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="essence-card">
            <span className="essence-card__mark">
              <FaHandHoldingHeart aria-hidden="true" />
            </span>
            <h3>Nuestra esencia</h3>
            <p>
              Creemos que sanar también es sentirse acompañado. Por eso ponemos el corazón en cada
              detalle del cuidado, sin perder la rigurosidad que la salud requiere.
            </p>
            <div className="essence-card__list">
              {essence.map((item) => {
                const Icon = item.icon
                return (
                  <div className="essence-card__item" key={item.title}>
                    <span>
                      <Icon aria-hidden="true" />
                    </span>
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.text}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHead
            eyebrow="Nuestro propósito"
            title="Misión y visión"
            text="Dos brújulas que nos ayudan a mantener el rumbo y a cuidar lo que más importa."
          />
          <div className="grid grid--2">
            <Reveal className="card purpose-card">
              <span className="icon-badge">
                <FaUserNurse aria-hidden="true" />
              </span>
              <h3>Misión</h3>
              <p>{mission.text}</p>
            </Reveal>
            <Reveal delay={0.1} className="card purpose-card">
              <span className="icon-badge icon-badge--gold">
                <FaCompass aria-hidden="true" />
              </span>
              <h3>Visión</h3>
              <p>{vision.text}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Lo que nos define"
            title="Nuestros valores"
            text="No son solo palabras: son la forma en que tratamos a cada paciente y a cada familia."
          />
          <div className="grid grid--4">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.07} className="card value-card">
                <span className="value-card__num">{String(index + 1).padStart(2, '0')}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Hablemos de lo que necesita tu familia"
        text="Estamos para escucharte y ayudarte a encontrar el cuidado adecuado para tu ser querido."
      />
    </>
  )
}
