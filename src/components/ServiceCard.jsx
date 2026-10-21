import { Link } from 'react-router-dom'
import { FaArrowRight, FaCheck } from 'react-icons/fa6'

export default function ServiceCard({ service, detailed = false, index = 0 }) {
  const Icon = service.icon
  const tone = ['', ' icon-badge--gold', ' icon-badge--azul'][index % 3]

  return (
    <article className="card service-card">
      <span className={`icon-badge${tone}`}>
        <Icon aria-hidden="true" />
      </span>
      <h3>{service.title}</h3>
      <p>{service.summary}</p>
      {detailed && (
        <ul className="service-card__points">
          {service.points.map((point) => (
            <li key={point}>
              <FaCheck aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
      {!detailed && (
        <Link to="/servicios" className="service-card__link">
          Conocer más
          <FaArrowRight aria-hidden="true" />
        </Link>
      )}
    </article>
  )
}
