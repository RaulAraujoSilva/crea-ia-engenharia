import { useState } from 'react'
import { motion } from 'framer-motion'
import Icon from './Icon'
import ImageLightbox from './ImageLightbox'

interface Metric {
  value: string
  label: string
}

interface CaseCardProps {
  city: string
  country: string
  metrics: Metric[]
  highlight: string
  description: string
  color?: string
  image?: string
  sourceUrl?: string
  sourceLabel?: string
}

export default function CaseCard({ city, country, metrics, highlight, description, color = '#0047AB', image, sourceUrl, sourceLabel }: CaseCardProps) {
  const [lightbox, setLightbox] = useState(false)

  return (
    <>
      <motion.div
        whileHover={{ y: -4, boxShadow: '0 20px 40px -12px rgba(0,0,0,0.15)' }}
        className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-md transition-all"
      >
        {image && (
          <button
            onClick={() => setLightbox(true)}
            className="w-full h-44 overflow-hidden bg-gray-100 relative group cursor-pointer"
          >
            <img
              src={image}
              alt={`${city} — ${highlight}`}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm font-semibold flex items-center gap-2 bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                <Icon name="eye" size={16} className="text-white" />
                Ver em tela cheia
              </span>
            </div>
          </button>
        )}

        <div className="px-6 pt-5 pb-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${color}20` }}>
              <Icon name="cpu" size={20} style={{ color }} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-city-navy">{city}</h3>
              <p className="text-sm text-gray-500">{country}</p>
            </div>
          </div>
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white"
            style={{ backgroundColor: color }}
          >
            {highlight}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-px bg-gray-100">
          {metrics.map((m, i) => (
            <div key={i} className="bg-white px-4 py-3 text-center">
              <div className="text-lg font-extrabold" style={{ color }}>{m.value}</div>
              <p className="text-xs text-gray-500 mt-0.5">{m.label}</p>
            </div>
          ))}
        </div>

        <div className="px-6 py-4">
          <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>

        {sourceUrl && (
          <div className="px-6 pb-4 pt-0">
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-city-blue hover:text-city-cyan transition-colors"
            >
              <Icon name="external-link" size={13} />
              {sourceLabel || 'Abrir fonte'}
            </a>
          </div>
        )}
      </motion.div>

      {lightbox && image && (
        <ImageLightbox
          src={image}
          alt={`${city} — ${highlight}`}
          sourceUrl={sourceUrl}
          sourceLabel={sourceLabel}
          onClose={() => setLightbox(false)}
        />
      )}
    </>
  )
}
