import { FaQuoteLeft } from 'react-icons/fa6'
import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'
import RatingStars from './RatingStars.jsx'
import { rating, testimonials } from '../data/site.js'

export default function Testimonials() {
  return (
    <section className="section" id="testimonios">
      <div className="container">
        <SectionHead
          eyebrow="Clientes satisfechos"
          title={
            <>
              Familias que ya <span className="text-verde">confían en nosotros</span>
            </>
          }
          text="La tranquilidad de una familia es nuestra mejor carta de presentación."
        />

        <Reveal className="rating-summary">
          <RatingStars value={rating.value} size={1.35} />
          <strong>{rating.value.toFixed(1)} de 5</strong>
          <span>· {rating.count}+ familias satisfechas en Bogotá</span>
        </Reveal>

        <div className="grid grid--3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.08} className="testimonial">
              <span className="testimonial__quote" aria-hidden="true">
                <FaQuoteLeft />
              </span>
              <RatingStars value={testimonial.rating} size={0.95} />
              <p className="testimonial__text">{testimonial.text}</p>
              <div className="testimonial__person">
                <span className="testimonial__avatar" aria-hidden="true">
                  {testimonial.name.charAt(0)}
                </span>
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>
                    {testimonial.zone} · {testimonial.service}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
