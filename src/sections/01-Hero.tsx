import { motion } from 'framer-motion'
import QRAccess from '../components/QRAccess'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* CREA template background */}
      <img
        src="/img/crea-template/bg-blue.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gear wireframe — top left (flipped, rotated like template) */}
      <img
        src="/img/crea-template/gear-wire-big.png"
        alt=""
        className="absolute -top-20 -left-32 w-[500px] opacity-40 -scale-x-100 rotate-[20deg] pointer-events-none"
      />

      {/* Gear wireframe — bottom right (rotated like template) */}
      <img
        src="/img/crea-template/gear-wire-right.png"
        alt=""
        className="absolute -bottom-24 -right-20 w-[450px] opacity-30 -rotate-[60deg] pointer-events-none"
      />

      {/* Title bar — dark rounded strip across center */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[200px] rounded-full mx-[-40px]" style={{ backgroundColor: '#073763' }} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
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
              <span className="w-2 h-2 rounded-full bg-[#00B4D8] animate-pulse" />
              CREA Aqui 2026 — Espaço Progredir | 19 de Março, Píer Mauá
            </motion.div>

            {/* Title — Righteous font style */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-wide"
              style={{ fontFamily: "'Righteous', 'Inter', sans-serif" }}
            >
              O QUE FUNCIONA DE VERDADE
              <br />
              <span className="text-[#00B4D8]">
                IA NA PRÁTICA DA ENGENHARIA
              </span>
            </motion.h1>

            {/* Subtitle — Montserrat style */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed"
            >
              O que funciona, o que não funciona e por quê — com dados reais, casos comprovados e ferramentas para testar hoje.
            </motion.p>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12"
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

        {/* CREA logo banner — bottom right */}
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          src="/img/crea-template/logo-crea-banner.png"
          alt="CREA Aqui 2026"
          className="absolute bottom-[-80px] right-0 h-20 lg:h-24 object-contain"
        />
      </div>
    </section>
  )
}
