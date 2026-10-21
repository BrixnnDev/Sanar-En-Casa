import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import { contact } from '../data/site.js'

export default function Privacidad() {
  return (
    <>
      <PageHero
        eyebrow="Privacidad"
        title="Política de tratamiento de datos personales"
        text="En Sanar en Casa cuidamos tu información con el mismo respeto con el que cuidamos a las personas. Aquí te explicamos cómo tratamos tus datos."
      />

      <section className="section">
        <div className="container prose">
          <Reveal>
            <p className="prose__updated">Última actualización: octubre de 2026</p>

            <h2>1. Responsable del tratamiento</h2>
            <p>
              El responsable del tratamiento de los datos personales es <strong>Sanar en Casa</strong>,
              droguería y servicio de cuidado domiciliario con domicilio en Bogotá D.C., Colombia.
              Para asuntos relacionados con esta política puedes escribir a{' '}
              <a href={`mailto:${contact.email}`}>{contact.email}</a> o llamar al{' '}
              <a href={contact.phoneHref}>{contact.phone}</a>.
            </p>

            <h2>2. Datos que tratamos</h2>
            <p>
              Podemos tratar los siguientes datos, según la relación que tengas con nosotros:
            </p>
            <ul>
              <li>Datos de identificación: nombre, documento, fecha de nacimiento.</li>
              <li>Datos de contacto: teléfono, correo electrónico, dirección.</li>
              <li>
                Datos necesarios para la prestación del servicio de cuidado: información básica de
                salud, rutinas, medicamentos y requerimientos de atención.
              </li>
              <li>Información suministrada en peticiones, quejas, reclamos o sugerencias.</li>
              <li>Datos de personas aspirantes a vincularse laboralmente con nosotros.</li>
            </ul>

            <h2>3. Finalidades del tratamiento</h2>
            <ul>
              <li>Coordinar, prestar y hacer seguimiento a los servicios de cuidado domiciliario.</li>
              <li>Comunicarnos contigo o con la familia del paciente para gestionar la atención.</li>
              <li>Atender peticiones, quejas, reclamos, sugerencias y solicitudes de información.</li>
              <li>Gestionar procesos de selección de talento humano.</li>
              <li>Cumplir obligaciones legales, contables y regulatorias aplicables.</li>
              <li>Mantener la seguridad de nuestras instalaciones y de la información.</li>
            </ul>

            <h2>4. Derechos del titular</h2>
            <p>Como titular de los datos personales tienes derecho a:</p>
            <ul>
              <li>Conocer, actualizar y rectificar tus datos personales.</li>
              <li>Solicitar prueba de la autorización otorgada para el tratamiento.</li>
              <li>Ser informado sobre el uso que se ha dado a tus datos.</li>
              <li>
                Presentar quejas ante la Superintendencia de Industria y Comercio por infracciones a
                la normatividad de protección de datos.
              </li>
              <li>Revocar la autorización y solicitar la supresión de los datos, cuando sea procedente.</li>
              <li>Acceder gratuitamente a tus datos personales.</li>
            </ul>

            <h2>5. Cómo ejercer tus derechos</h2>
            <p>
              Puedes ejercer tus derechos enviando una solicitud al correo{' '}
              <a href={`mailto:${contact.email}`}>{contact.email}</a> con el asunto{' '}
              <strong>“Protección de datos personales”</strong>, indicando tu nombre, documento de
              identidad, el derecho que deseas ejercer y los hechos que motivan la solicitud.
              También puedes comunicarte al teléfono <a href={contact.phoneHref}>{contact.phone}</a>.
            </p>
            <p>
              Atenderemos las consultas y reclamos dentro de los términos establecidos por la Ley
              1581 de 2012 y demás normas que la modifiquen o complementen.
            </p>

            <h2>6. Seguridad de la información</h2>
            <p>
              Implementamos medidas razonables de seguridad administrativas, técnicas y humanas para
              proteger la información contra acceso no autorizado, pérdida, alteración o uso
              indebido. El acceso a los datos se limita a las personas que lo necesitan para cumplir
              con las finalidades descritas.
            </p>

            <h2>7. Confidencialidad</h2>
            <p>
              Nuestro personal se compromete a mantener la confidencialidad de la información a la
              que accede en el desarrollo de sus funciones, incluso después de finalizada la
              relación con Sanar en Casa.
            </p>

            <h2>8. Enlaces a terceros</h2>
            <p>
              Nuestro sitio puede incluir enlaces a servicios de terceros, como WhatsApp. El
              tratamiento de datos que estos servicios realicen se rige por sus propias políticas de
              privacidad, sobre las cuales no tenemos control.
            </p>

            <h2>9. Vigencia</h2>
            <p>
              Esta política rige desde su publicación y puede ser actualizada en cualquier momento.
              Las modificaciones serán publicadas en esta misma página. El marco legal de referencia
              es la Ley 1581 de 2012, el Decreto 1377 de 2013 y las normas que los modifiquen o
              complementen.
            </p>

            <div className="prose__box">
              <p>
                ¿Tienes dudas sobre tus datos? Escríbenos desde la página de{' '}
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
