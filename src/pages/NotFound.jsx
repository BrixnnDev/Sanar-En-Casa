import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa6'
import LogoMark from '../components/LogoMark.jsx'

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="container">
        <div className="notfound__logo">
          <LogoMark />
        </div>
        <strong>404</strong>
        <h1>No encontramos esta página</h1>
        <p>
          Puede que el enlace haya cambiado o que la página ya no exista. Volvamos a un lugar
          conocido.
        </p>
        <Link to="/" className="btn btn--primary">
          <FaArrowLeft aria-hidden="true" />
          Volver al inicio
        </Link>
      </div>
    </section>
  )
}
