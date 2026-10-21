import { Link } from 'react-router-dom'
import LogoMark from './LogoMark.jsx'

export default function Logo({ footer = false }) {
  return (
    <Link to="/" className={`brand${footer ? ' brand--footer' : ''}`} aria-label="Sanar en Casa, ir al inicio">
      <span className="brand__mark">
        <LogoMark />
      </span>
      <span className="brand__text">
        <strong>Sanar en Casa</strong>
        <small>{footer ? 'Enfermería domiciliaria y/o hospitalaria' : 'Enfermería domiciliaria'}</small>
      </span>
    </Link>
  )
}
