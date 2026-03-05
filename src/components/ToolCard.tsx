import { motion } from 'framer-motion'
import Icon from './Icon'

interface ToolCardProps {
  name: string
  url: string
  description: string
  priceLabel: string
  useCase: string
  tip: string
  color: string
  icon: string
}

export default function ToolCard({ name, url, description, priceLabel, useCase, tip, color, icon }: ToolCardProps) {
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=${encodeURIComponent(url)}`

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden"
    >
      <div className="px-6 pt-5 pb-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${color}15` }}>
              <Icon name={icon} size={20} style={{ color }} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-city-navy">{name}</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: color }}>
                {priceLabel}
              </span>
            </div>
          </div>
          <img src={qrUrl} alt={`QR ${name}`} className="w-16 h-16 rounded-lg border border-gray-200" loading="lazy" />
        </div>

        <p className="text-sm text-gray-600 mb-3">{description}</p>

        <div className="bg-gray-50 rounded-lg p-3 mb-3">
          <p className="text-xs font-semibold text-city-navy mb-1">Caso de uso:</p>
          <p className="text-sm text-gray-600">{useCase}</p>
        </div>

        <div className="rounded-lg p-3 mb-3" style={{ backgroundColor: `${color}08` }}>
          <p className="text-xs font-semibold mb-1" style={{ color }}>
            <Icon name="terminal" size={12} className="inline mr-1" style={{ color }} />
            Prompt sugerido:
          </p>
          <p className="text-xs text-gray-600 italic">{tip}</p>
        </div>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
          style={{ color }}
        >
          <Icon name="external-link" size={14} />
          Abrir {name}
        </a>
      </div>
    </motion.div>
  )
}
