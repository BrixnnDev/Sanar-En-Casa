import Header from './Header.jsx'
import Footer from './Footer.jsx'
import ScrollToTop from './ScrollToTop.jsx'

export default function Layout({ children }) {
  return (
    <>
      <ScrollToTop />
      <a className="skip-link" href="#contenido">
        Ir al contenido
      </a>
      <Header />
      <main id="contenido">{children}</main>
      <Footer />
    </>
  )
}
