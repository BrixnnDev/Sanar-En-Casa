import { Link, useLocation } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa6'
import LogoMark from '../components/LogoMark.jsx'
import useSeo from '../hooks/useSeo.js'

export default function NotFound() {
  const { pathname } = useLocation()

  useSeo({
    title: 'Página no encontrada',
    description:
      'La página que buscas no existe o cambió de dirección. Vuelve al inicio de Sanar en Casa o escríbenos para orientarte.',
    path: pathname,
  })

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
