import { FaStar } from 'react-icons/fa6'

const STARS = [0, 1, 2, 3, 4]

export default function RatingStars({ value = 5, size = 1, className = '' }) {
  const percent = Math.max(0, Math.min(100, (value / 5) * 100))

  return (
    <span
      className={`rating-stars${className ? ` ${className}` : ''}`}
      style={{ '--star-size': `${size}rem` }}
      role="img"
      aria-label={`${value.toFixed(1)} de 5 estrellas`}
    >
      <span className="rating-stars__base" aria-hidden="true">
        {STARS.map((star) => (
          <FaStar key={star} />
        ))}
      </span>
      <span className="rating-stars__fill" style={{ width: `${percent}%` }} aria-hidden="true">
        <span className="rating-stars__row">
          {STARS.map((star) => (
            <FaStar key={star} />
          ))}
        </span>
      </span>
    </span>
  )
}
