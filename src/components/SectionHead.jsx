import Reveal from './Reveal.jsx'

export default function SectionHead({ eyebrow, title, text, left = false, gold = false }) {
  return (
    <Reveal className={`section-head${left ? ' section-head--left' : ''}`}>
      {eyebrow && (
        <span className={`eyebrow${gold ? ' eyebrow--gold' : ''}`}>{eyebrow}</span>
      )}
      <h2 className="section-title">{title}</h2>
      {text && <p className="section-sub">{text}</p>}
    </Reveal>
  )
}
