import { Link } from 'react-router-dom'
import { FaArrowLeft, FaHouseMedical } from 'react-icons/fa6'

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="container">
        <span className="notfound__icon">
          <FaHouseMedical aria-hidden="true" />
        </span>
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
