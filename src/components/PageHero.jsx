import Reveal from './Reveal.jsx'

export default function PageHero({ eyebrow, title, text, center = false, children }) {
  return (
    <section className={`page-hero${center ? ' page-hero--center' : ''}`}>
      <div className="container">
        <div className="page-hero__inner">
          <Reveal>
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            <h1>{title}</h1>
            {text && <p>{text}</p>}
            {children}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
