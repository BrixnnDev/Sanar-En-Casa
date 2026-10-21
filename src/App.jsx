import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Layout from './components/Layout.jsx'
import Inicio from './pages/Inicio.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Confianza from './pages/Confianza.jsx'
import Servicios from './pages/Servicios.jsx'
import TalentoHumano from './pages/TalentoHumano.jsx'
import Pqr from './pages/Pqr.jsx'
import Privacidad from './pages/Privacidad.jsx'
import Terminos from './pages/Terminos.jsx'
import Contacto from './pages/Contacto.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  const location = useLocation()
  const reduceMotion = useReducedMotion()

  return (
    <Layout>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
          transition={{ duration: 0.32, ease: 'easeOut' }}
        >
          <Routes location={location}>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/confianza" element={<Confianza />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/talento-humano" element={<TalentoHumano />} />
            <Route path="/pqr" element={<Pqr />} />
            <Route path="/privacidad" element={<Privacidad />} />
            <Route path="/terminos" element={<Terminos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </Layout>
  )
}
