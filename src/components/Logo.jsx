import { useId } from 'react'
import { Link } from 'react-router-dom'

export default function Logo({ footer = false }) {
  const uid = useId().replace(/:/g, '')
  const house = `${uid}-house`
  const leaf = `${uid}-leaf`
  const hand = `${uid}-hand`
  const blue = `${uid}-blue`

  return (
    <Link to="/" className={`brand${footer ? ' brand--footer' : ''}`} aria-label="Sanar en Casa, ir al inicio">
      <span className="brand__mark">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 650" width="100%" height="100%" aria-hidden="true">
          <defs>
            <linearGradient id={house} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00a887" />
              <stop offset="100%" stopColor="#007d65" />
            </linearGradient>

            <linearGradient id={leaf} x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#80db83" />
              <stop offset="100%" stopColor="#3cb371" />
            </linearGradient>

            <linearGradient id={hand} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f3d0a6" />
              <stop offset="100%" stopColor="#dca66d" />
            </linearGradient>

            <linearGradient id={blue} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a3d6f5" />
              <stop offset="100%" stopColor="#4fa3df" />
            </linearGradient>
          </defs>

          <g>
            <path d="M 610,100 C 670,150 710,250 640,360" fill="none" stroke={`url(#${blue})`} strokeWidth="6" strokeLinecap="round" opacity="0.8" />

            <path d="M 170,290 L 410,100 L 480,155 L 480,120 L 520,120 L 520,187 L 610,258 L 570,300 L 520,260 L 520,440 L 300,440 L 300,390 C 230,390 190,340 170,290 Z" fill={`url(#${house})`} />

            <path d="M 410,150 L 220,300 L 260,330 L 260,490 L 560,490 L 560,270 Z" fill="#ffffff" />

            <g fill="#43c5a5">
              <rect x="365" y="275" width="30" height="30" rx="6" />
              <rect x="405" y="275" width="30" height="30" rx="6" />
              <rect x="365" y="315" width="30" height="30" rx="6" />
              <rect x="405" y="315" width="30" height="30" rx="6" />
            </g>

            <path d="M 160,520 C 50,470 40,340 170,360 C 310,380 430,550 430,550 C 430,550 260,570 160,520 Z" fill={`url(#${leaf})`} />
            <path d="M 55,420 C 140,450 250,510 395,542" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" opacity="0.4" />

            <path d="M 430,550 C 430,550 560,510 650,440 C 740,370 790,290 690,320 C 620,340 560,410 490,410 C 450,410 430,460 410,480 C 390,500 400,530 430,550 Z" fill={`url(#${hand})`} />

            <path d="M 160,535 C 280,620 450,610 590,520 C 680,460 720,380 720,380 C 720,380 650,490 530,540 C 410,590 260,580 160,535 Z" fill={`url(#${blue})`} />
          </g>
        </svg>
      </span>
      <span className="brand__text">
        <strong>Sanar en Casa</strong>
        <small>Droguería y cuidado domiciliario</small>
      </span>
    </Link>
  )
}
