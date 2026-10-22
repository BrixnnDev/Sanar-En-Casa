import {
  FaBedPulse,
  FaHandHoldingHeart,
  FaHeartPulse,
  FaHouseMedical,
  FaPeopleGroup,
  FaUserNurse,
} from 'react-icons/fa6'

export const site = {
  url: 'https://sanarencasa.vercel.app',
  name: 'Sanar en Casa',
  title: 'Sanar en Casa | Enfermería domiciliaria en Bogotá',
  description:
    'Sanar en Casa es un servicio de enfermería domiciliaria en Bogotá. Acompañamiento, apoyo en actividades diarias, signos vitales y cuidados básicos de enfermería.',
}

export const contact = {
  phone: '+57 300 189 4746',
  phoneHref: 'tel:+573001894746',
  whatsapp: 'https://wa.me/573001894746',
  email: 'sanarencasa51@gmail.com',
  address: 'Bogotá D.C., Colombia',
  hours: 'Lunes a sábado · 7:00 a.m. a 7:00 p.m.',
  schedule: 'Atención coordinada con anticipación',
}

export const mission = {
  title: 'Misión',
  text: 'Brindar enfermería y acompañamiento domiciliario con calidez, responsabilidad y rigor, apoyando las actividades de la vida diaria y el bienestar de cada paciente y su familia en Bogotá.',
}

export const vision = {
  title: 'Visión',
  text: 'Ser el servicio de enfermería domiciliaria de referencia en Bogotá, reconocido por el trato humano, la seguridad de sus cuidados y la tranquilidad que lleva a cada hogar.',
}

export const rating = {
  value: 4.9,
  count: 137,
}

export const testimonials = [
  {
    name: 'María C.',
    zone: 'Suba, Bogotá',
    service: 'Acompañamiento domiciliario',
    rating: 5,
    text: 'El trato con mi mamá fue muy respetuoso y paciente. Nos mantuvieron informados de todo y se nota que aman lo que hacen.',
  },
  {
    name: 'Andrés P.',
    zone: 'Chapinero, Bogotá',
    service: 'Cuidados básicos de enfermería',
    rating: 5,
    text: 'Llegaron puntuales, con todo lo necesario y nos explicaron cada cuidado. Sentimos que mi papá estaba en buenas manos.',
  },
  {
    name: 'Luz D.',
    zone: 'Kennedy, Bogotá',
    service: 'Movilización y signos vitales',
    rating: 5,
    text: 'Después de la cirugía necesitábamos apoyo para movilizarlo. Fueron muy cuidadosos y siempre disponibles para resolver dudas.',
  },
]

export const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/confianza', label: 'Confianza' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/talento-humano', label: 'Talento humano' },
  { to: '/pqr', label: 'PQR' },
  { to: '/contacto', label: 'Contacto' },
]

export const services = [
  {
    icon: FaHouseMedical,
    title: 'Cuidado y acompañamiento domiciliario',
    summary:
      'Presencia constante y apoyo en el hogar para que el paciente se sienta seguro, acompañado y atendido.',
    points: [
      'Acompañamiento por horas o por jornadas',
      'Supervisión del bienestar general',
      'Comunicación permanente con la familia',
    ],
  },
  {
    icon: FaHandHoldingHeart,
    title: 'Apoyo en actividades de la vida diaria',
    summary:
      'Ayuda respetuosa en las rutinas personales, promoviendo la autonomía y la dignidad del paciente.',
    points: [
      'Apoyo en aseo e higiene personal',
      'Colaboración en vestido y alimentación',
      'Organización de rutinas diarias',
    ],
  },
  {
    icon: FaBedPulse,
    title: 'Movilización y cambios de posición',
    summary:
      'Técnicas seguras de movilización para prevenir lesiones y cuidado de la piel de quien permanece en cama.',
    points: [
      'Cambios de posición programados',
      'Apoyo en desplazamientos dentro del hogar',
      'Prevención de úlceras por presión',
    ],
  },
  {
    icon: FaPeopleGroup,
    title: 'Acompañamiento al paciente y la familia',
    summary:
      'Escucha, orientación y apoyo emocional para el paciente y para quienes cuidan de él todos los días.',
    points: [
      'Acompañamiento emocional cercano',
      'Orientación a la familia y cuidadores',
      'Alivio para el cuidador principal',
    ],
  },
  {
    icon: FaHeartPulse,
    title: 'Control y registro de signos vitales',
    summary:
      'Seguimiento ordenado de los signos vitales y reporte claro de la evolución del paciente.',
    points: [
      'Toma de presión, pulso y temperatura',
      'Registro organizado de las mediciones',
      'Alertas ante cambios importantes',
    ],
  },
  {
    icon: FaUserNurse,
    title: 'Cuidados básicos de enfermería',
    summary:
      'Procedimientos básicos realizados con técnica, higiene y responsabilidad, siempre con trato humano.',
    points: [
      'Curación de heridas sencillas',
      'Apoyo en la administración de medicamentos',
      'Cuidado general del paciente',
    ],
  },
]

export const values = [
  {
    title: 'Calidez',
    text: 'Tratamos a cada persona como nos gustaría que trataran a nuestra propia familia.',
  },
  {
    title: 'Responsabilidad',
    text: 'Cumplimos los horarios, los acuerdos y los protocolos de cuidado con seriedad.',
  },
  {
    title: 'Respeto',
    text: 'Reconocemos la dignidad, la privacidad y las decisiones de cada paciente.',
  },
  {
    title: 'Confianza',
    text: 'Comunicamos con transparencia y mantenemos informada a la familia.',
  },
]

export const steps = [
  {
    title: 'Nos contactas',
    text: 'Escríbenos por WhatsApp o llámanos y cuéntanos qué necesita tu ser querido.',
  },
  {
    title: 'Valoramos la necesidad',
    text: 'Conocemos la situación del paciente, su rutina y las necesidades de la familia.',
  },
  {
    title: 'Diseñamos el plan de cuidado',
    text: 'Acordamos los servicios, los horarios y la frecuencia del acompañamiento.',
  },
  {
    title: 'Acompañamos en casa',
    text: 'Nuestro personal llega al hogar y mantenemos comunicación constante contigo.',
  },
]

export const faqs = [
  {
    question: '¿En qué zonas de Bogotá prestan el servicio?',
    answer:
      'Coordinamos la atención en Bogotá según la disponibilidad del personal y la zona. Escríbenos con tu dirección para confirmar la cobertura y los horarios disponibles.',
  },
  {
    question: '¿Cómo se elige al cuidador o cuidadora?',
    answer:
      'Conocemos las necesidades del paciente y las características del hogar. Luego asignamos a la persona con el perfil adecuado y verificamos su experiencia y referencias.',
  },
  {
    question: '¿Puedo contratar el servicio por horas o por jornadas?',
    answer:
      'Sí. El plan de cuidado se ajusta a lo que necesite la familia: acompañamiento por algunas horas, jornadas completas o varios días a la semana.',
  },
  {
    question: '¿Qué ocurre si el paciente requiere atención médica urgente?',
    answer:
      'Nuestro servicio es de cuidado y acompañamiento, no reemplaza la atención médica. Ante una emergencia activamos la línea de emergencias y contactamos de inmediato a la familia.',
  },
  {
    question: '¿El personal está capacitado para cuidar a un paciente en cama?',
    answer:
      'Sí. Contamos con personal con formación en cuidado y enfermería básica, entrenado en movilización, cambios de posición, higiene y control de signos vitales.',
  },
  {
    question: '¿Cómo se maneja la información del paciente?',
    answer:
      'La información clínica y personal se trata de forma confidencial y solo se comparte con las personas autorizadas por el paciente o su familia.',
  },
]
