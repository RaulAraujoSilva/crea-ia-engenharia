import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Icon from './Icon'
import ImageLightbox from './ImageLightbox'

interface BeforeAfterCardProps {
  title: string
  subtitle: string
  icon: string
  color: string
  aiTool: string
  timeEstimate: string
  beforeImage: string
  beforeLabel: string
  afterImage: string
  afterLabel: string
  afterImage2?: string
  afterLabel2?: string
  description: string
  promptUsed: string
  discussionPoint: string
}

export default function BeforeAfterCard({
  title, subtitle, icon, color, aiTool, timeEstimate,
  beforeImage, beforeLabel, afterImage, afterLabel,
  afterImage2, afterLabel2,
  description, promptUsed, discussionPoint,
}: BeforeAfterCardProps) {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })
  const [lightbox, setLightbox] = useState<string | null>(null)

  const hasComparison = !!afterImage2

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -4, boxShadow: '0 20px 40px -12px rgba(0,0,0,0.15)' }}
        className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-md"
      >
        {/* Header */}
        <div className="px-6 pt-5 pb-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: `${color}15` }}
            >
              <Icon name={icon} size={20} style={{ color }} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-city-navy">{title}</h3>
              <p className="text-sm text-gray-500">{subtitle}</p>
            </div>
          </div>
          <div className="text-right">
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white"
              style={{ backgroundColor: color }}
            >
              {aiTool}
            </span>
            <p className="text-xs text-gray-400 mt-1">
              <Icon name="clock" size={11} className="inline mr-1" />
              {timeEstimate}
            </p>
          </div>
        </div>

        {/* Before / After images */}
        <div className={`grid ${hasComparison ? 'grid-cols-3' : 'grid-cols-2'} gap-px bg-gray-100`}>
          <button
            onClick={() => setLightbox(beforeImage)}
            className="relative group bg-white p-3"
          >
            <p className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">Antes</p>
            <img
              src={beforeImage}
              alt={beforeLabel}
              className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <p className="text-xs text-gray-500 mt-2 text-center">{beforeLabel}</p>
          </button>

          <button
            onClick={() => setLightbox(afterImage)}
            className="relative group bg-white p-3"
          >
            <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color }}>
              Depois
            </p>
            <img
              src={afterImage}
              alt={afterLabel}
              className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <p className="text-xs text-gray-500 mt-2 text-center">{afterLabel}</p>
          </button>

          {hasComparison && (
            <button
              onClick={() => setLightbox(afterImage2!)}
              className="relative group bg-white p-3"
            >
              <p className="text-xs font-bold text-city-orange uppercase tracking-wider mb-2">
                Alternativa
              </p>
              <img
                src={afterImage2}
                alt={afterLabel2}
                className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <p className="text-xs text-gray-500 mt-2 text-center">{afterLabel2}</p>
            </button>
          )}
        </div>

        {/* Description */}
        <div className="px-6 py-4">
          <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>

        {/* Prompt used */}
        <div className="px-6 pb-3">
          <div className="rounded-lg p-3" style={{ backgroundColor: `${color}08` }}>
            <p className="text-xs font-semibold mb-1" style={{ color }}>
              <Icon name="terminal" size={12} className="inline mr-1" style={{ color }} />
              Prompt utilizado:
            </p>
            <p className="text-xs text-gray-600 italic leading-relaxed">{promptUsed}</p>
          </div>
        </div>

        {/* Discussion point */}
        <div className="px-6 pb-5">
          <div className="bg-city-orange/5 rounded-lg p-3">
            <p className="text-xs font-semibold text-city-orange mb-1">
              <Icon name="message-circle" size={12} className="inline mr-1" />
              Ponto de reflexao:
            </p>
            <p className="text-xs text-gray-600 leading-relaxed">{discussionPoint}</p>
          </div>
        </div>
      </motion.div>

      {lightbox && (
        <ImageLightbox
          src={lightbox}
          alt={title}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  )
}
