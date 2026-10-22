import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import useSeo from '../hooks/useSeo.js'
import { contact } from '../data/site.js'

export default function Terminos() {
  useSeo({
    title: 'Términos y condiciones',
    description:
      'Condiciones de uso del sitio y de contratación de los servicios de enfermería domiciliaria de Sanar en Casa en Bogotá.',
    path: '/terminos',
  })

  return (
    <>
      <PageHero
        eyebrow="Términos y condiciones"
        title="Condiciones de uso y contratación del servicio"
        text="Al navegar este sitio y al contratar nuestros servicios aceptas las condiciones que enumeramos a continuación."
      />

      <section className="section">
        <div className="container prose">
          <Reveal>
            <p className="prose__updated">Última actualización: octubre de 2026</p>

            <h2>1. Identificación del prestador</h2>
            <p>
              <strong>Sanar en Casa</strong>, servicio de enfermería domiciliaria y/o hospitalaria con
              domicilio en Bogotá D.C., Colombia. Para cualquier asunto relacionado con estos términos
              puedes escribir a <a href={`mailto:${contact.email}`}>{contact.email}</a> o llamar al{' '}
              <a href={contact.phoneHref}>{contact.phone}</a>.
            </p>

            <h2>2. Objeto del sitio</h2>
            <p>
              Este sitio web tiene fines informativos: presenta los servicios de enfermería
              domiciliaria que ofrecemos, nuestro equipo de trabajo y los canales de atención. La
              información publicada no sustituye la valoración clínica ni el diagnóstico profesional.
            </p>

            <h2>3. Contratación del servicio</h2>
            <ul>
              <li>
                El servicio se contrata de forma directa con la familia o el representante del
                paciente, previo a un plan de cuidado acordado.
              </li>
              <li>
                Los horarios, la frecuencia, el alcance de las tareas y los honorarios quedan
                definidos por escrito antes de iniciar la atención.
              </li>
              <li>El plan de cuidado puede ajustarse según la evolución del paciente.</li>
              <li>
                Cualquier cambio de horario o cancelación debe avisarse con la antelación acordada.
              </li>
            </ul>

            <h2>4. Alcance de la atención</h2>
            <p>
              Nuestro equipo realiza cuidados básicos de enfermería, acompañamiento en actividades
              diarias, movilización, higiene, control y registro de signos vitales, y demás
              actividades pactadas. Los procedimientos se ejecutan con técnica, asepsia y
              responsabilidad del paciente.
            </p>
            <p>
              La atención domiciliaria <strong>no reemplaza</strong> la consulta médica, la hospitalización
              ni los tratamientos especializados de mayor complejidad. Ante una urgencia activamos la
              línea de emergencias y contactamos de inmediato a la familia.
            </p>

            <h2>5. Responsabilidades de la familia</h2>
            <ul>
              <li>Entregar la información clínica y de medicamentos del paciente.</li>
              <li>Garantizar un espacio seguro y adecuado para la atención.</li>
              <li>Designar un contacto disponible para la coordinación del servicio.</li>
              <li>Comunicar a tiempo cualquier cambio relevante en el estado de salud.</li>
            </ul>

            <h2>6. Personal</h2>
            <p>
              La atención se realiza por personal capacitado y con experiencia en cuidado y
              enfermería básica. Cada profesional se identifica, respeta los protocolos de higiene y
              guarda confidencialidad sobre la información a la que accede.
            </p>

            <h2>7. Confidencialidad</h2>
            <p>
              La información del paciente y de su familia se maneja de forma confidencial. El
              tratamiento de los datos personales se rige por nuestra{' '}
              <Link to="/privacidad">política de privacidad</Link> y por la normativa colombiana de
              protección de datos personales.
            </p>

            <h2>8. Pagos y facturación</h2>
            <ul>
              <li>La facturación se realiza según la modalidad contratada: por horas, por jornada o por paquete.</li>
              <li>Los medios de pago y la periodicidad se acuerdan por escrito.</li>
              <li>Las uniformidades y el material de asepsia los provee Sanar en Casa.</li>
              <li>Los servicios no cubiertos por el plan se cobran aparte, previa autorización.</li>
            </ul>

            <h2>9. Responsabilidad</h2>
            <p>
              Velamos por la calidad de la atención y por el cumplimiento de los protocolos. No somos
              responsables de los daños derivados del incumplimiento de las indicaciones médicas, de
              información incompleta o de condiciones del domicilio que impidan una atención segura.
            </p>

            <h2>10. Terminación del servicio</h2>
            <p>
              Cualquiera de las partes puede dar por terminado el servicio informando con la
              antelación pactada. El cierre del plan de cuidado incluye la entrega del registro de
              signos vitales y del reporte final de la atención.
            </p>

            <h2>11. Propiedad intelectual</h2>
            <p>
              El nombre, el logotipo, los textos, las imágenes y el diseño de este sitio son
              propiedad de Sanar en Casa. No está permitida su reproducción sin autorización previa.
            </p>

            <h2>12. Ley aplicable</h2>
            <p>
              Estos términos se rigen por la legislación colombiana. Cualquier controversia se
              somete a los jueces y tribunales de Bogotá D.C.
            </p>

            <div className="prose__box">
              <p>
                ¿Tienes dudas sobre los términos? Escríbenos desde la página de{' '}
                <Link to="/contacto">contacto</Link> o directamente a{' '}
                <a href={`mailto:${contact.email}`}>{contact.email}</a>.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
