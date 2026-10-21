import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  FaAward,
  FaCheck,
  FaClipboardCheck,
  FaComments,
  FaHandHoldingHeart,
  FaLock,
  FaPlus,
  FaUserCheck,
} from 'react-icons/fa6'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHead from '../components/SectionHead.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { faqs } from '../data/site.js'

const pillars = [
  {
    icon: FaUserCheck,
    title: 'Personal verificado',
    text: 'Conocemos la experiencia y las referencias de las personas que cuidan de tu familia.',
    tone: '',
  },
  {
    icon: FaClipboardCheck,
    title: 'Protocolos claros',
    text: 'Seguimos procedimientos de higiene, movilización y cuidado en cada visita.',
    tone: ' icon-badge--azul',
  },
  {
    icon: FaLock,
    title: 'Confidencialidad',
    text: 'La información del paciente se maneja con reserva y solo se comparte con autorización.',
    tone: ' icon-badge--gold',
  },
  {
    icon: FaComments,
    title: 'Comunicación constante',
    text: 'La familia conoce la evolución, las rutinas y cualquier cambio importante.',
    tone: ' icon-badge--gold',
  },
  {
    icon: FaAward,
    title: 'Mejora continua',
    text: 'Revisamos nuestro servicio y escuchamos a las familias para cuidar mejor.',
    tone: '',
  },
  {
    icon: FaHandHoldingHeart,
    title: 'Trato humano',
    text: 'Cuidamos con respeto, paciencia y calidez, como cuidaríamos a nuestra familia.',
    tone: ' icon-badge--azul',
  },
]

const standards = [
  'Verificación de experiencia y referencias del personal.',
  'Protocolos de higiene, movilización y prevención de lesiones.',
  'Registro organizado de signos vitales y novedades.',
  'Manejo confidencial de la información del paciente.',
  'Comunicación permanente con la familia.',
  'Atención centrada en la dignidad y la autonomía.',
]

export default function Confianza() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <>
      <PageHero
        eyebrow="Confianza"
        title="La confianza se construye con hechos"
        text="Sabemos que abrir las puertas de tu hogar es un acto de confianza. Por eso trabajamos con transparencia, protocolos claros y un trato profundamente respetuoso."
      />

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Nuestros pilares"
            title="Cuidado responsable en cada detalle"
            text="Estos son los compromisos que sostienen nuestro servicio y dan tranquilidad a las familias."
          />
          <div className="grid grid--3">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <Reveal key={pillar.title} delay={index * 0.06} className="card">
                  <span className={`icon-badge${pillar.tone}`}>
                    <Icon aria-hidden="true" />
                  </span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container split">
          <div>
            <span className="eyebrow">Nuestro estándar</span>
            <h2 className="section-title">
              Lo que puedes esperar <span className="text-verde">de nosotros</span>
            </h2>
            <p className="section-sub">
              Cada familia recibe información clara sobre el plan de cuidado, los horarios y los
              canales de comunicación. No prometemos más de lo que podemos cumplir; preferimos
              cuidar bien y mantener tu confianza.
            </p>
            <ul className="checklist">
              {standards.map((item) => (
                <li key={item}>
                  <FaCheck aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <Reveal delay={0.12} className="quote-card">
            <span className="quote-card__mark">“</span>
            <p>
              Cuidar es acompañar con respeto, escuchar con atención y estar presente cuando más se
              necesita.
            </p>
            <span className="quote-card__author">Equipo Sanar en Casa</span>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Preguntas frecuentes"
            title="Resolvemos tus dudas"
            text="Si tu pregunta no está aquí, escríbenos por WhatsApp y con gusto te orientamos."
          />
          <div className="faq">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <Reveal key={faq.question} delay={index * 0.04} className="faq__item">
                  <button
                    type="button"
                    className="faq__btn"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                  >
                    {faq.question}
                    <FaPlus aria-hidden="true" />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${index}`}
                        className="faq__panel"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: 'easeInOut' }}
                      >
                        <p>{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <CtaBand
        title="Tu tranquilidad también es parte del cuidado"
        text="Conversemos sobre las necesidades de tu ser querido y resolvamos juntos tus dudas."
      />
    </>
  )
}
