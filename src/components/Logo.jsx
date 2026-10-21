import { Link } from 'react-router-dom'
import { FaLeaf } from 'react-icons/fa6'

export default function Logo({ footer = false }) {
  return (
    <Link to="/" className={`brand${footer ? ' brand--footer' : ''}`} aria-label="Sanar en Casa, ir al inicio">
      <span className="brand__mark">
        <FaLeaf aria-hidden="true" />
      </span>
      <span className="brand__text">
        <strong>Sanar en Casa</strong>
        <small>Droguería y cuidado domiciliario</small>
      </span>
    </Link>
  )
}
