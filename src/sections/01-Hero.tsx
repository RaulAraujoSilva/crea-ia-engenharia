import { motion } from 'framer-motion'
import QRAccess from '../components/QRAccess'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #1a2744 40%, #0047AB 100%)' }}
    >
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle, #00B4D8 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left: content */}
          <div className="text-center lg:text-left flex-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-sm text-white mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-city-cyan animate-pulse" />
              CREA Aqui 2026 — Espaço Progredir | 19 de Março, Píer Mauá
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight"
            >
              IA na Engenharia
              <br />
              <span className="bg-gradient-to-r from-city-cyan to-city-blue bg-clip-text text-transparent">
                Do Hype à Realidade
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed"
            >
              O que funciona, o que não funciona e por quê — com dados reais, casos comprovados e ferramentas para testar hoje.
            </motion.p>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-16"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="mx-auto lg:mx-0 opacity-50">
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: QR Code */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="hidden md:block w-64 shrink-0"
          >
            <QRAccess sectionId="hero" label="Acesse a apresentação pelo celular" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
