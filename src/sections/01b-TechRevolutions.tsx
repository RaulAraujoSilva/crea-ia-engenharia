import { motion } from 'framer-motion'
import Section from '../components/Section'

const PHASES = [
  {
    period: '1970–80s',
    title: 'Prancheta',
    subtitle: 'Máquina de escrever',
    desc: 'Projetos manuais, cálculos na mão, plantas em nanquim',
    color: '#6B48FF',
    img: '/img/revolutions/drafting.jpg',
  },
  {
    period: '1990s',
    title: 'Computador',
    subtitle: 'CAD / Planilhas',
    desc: 'AutoCAD, planilhas eletrônicas, início da digitalização',
    color: '#0047AB',
    img: '/img/revolutions/computer.jpg',
  },
  {
    period: '2000s',
    title: 'Internet',
    subtitle: 'E-mail / Nuvem',
    desc: 'Colaboração remota, documentos na nuvem, web',
    color: '#00B4D8',
    img: '/img/revolutions/internet.jpg',
  },
  {
    period: '2010s',
    title: 'Mobilidade',
    subtitle: 'Smartphones / Meeting',
    desc: 'Videoconferência, BIM na palma da mão, apps de campo',
    color: '#2DC653',
    img: '/img/revolutions/mobile.jpg',
  },
  {
    period: '2020s',
    title: 'Inteligência Artificial',
    subtitle: 'LLMs / Agentes',
    desc: 'Geração de código, projeto assistido, agentes autônomos',
    color: '#FFD700',
    img: '/img/revolutions/ai.jpg',
    highlight: true,
  },
]

export default function TechRevolutions() {
  return (
    <Section
      id="tech-revolutions"
      title="50 Anos de Revolução Tecnológica"
      subtitle="Cada década transformou como engenheiros trabalham — estamos na quinta onda"
    >
      <div className="flex items-stretch gap-3">
        {PHASES.map((phase, i) => {
          const isLast = phase.highlight
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className={`flex-1 rounded-2xl overflow-hidden border-2 transition-all flex flex-col ${isLast ? 'shadow-xl scale-[1.03] relative z-10' : 'hover:shadow-lg'}`}
              style={{
                borderColor: isLast ? phase.color : `${phase.color}30`,
                ...(isLast ? { boxShadow: `0 0 30px ${phase.color}25` } : {}),
              }}
            >
              {/* Image */}
              <div className="h-32 overflow-hidden relative">
                <img
                  src={phase.img}
                  alt={phase.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2 left-3">
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
                    style={{ backgroundColor: phase.color }}
                  >
                    {phase.period}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex-1 flex flex-col">
                <h3 className={`font-bold leading-tight ${isLast ? 'text-lg' : 'text-base'}`} style={{ color: phase.color }}>
                  {phase.title}
                </h3>
                <p className="text-xs text-gray-500 font-semibold mt-0.5">{phase.subtitle}</p>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed flex-1">{phase.desc}</p>
              </div>

              {/* Arrow connector (except last) */}
              {!isLast && (
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-gray-300 text-2xl font-light hidden lg:block">
                  →
                </div>
              )}
            </motion.div>
          )
        })}
      </div>

      <p className="text-center text-sm text-gray-400 mt-6 italic">
        A cada revolução, quem se adaptou primeiro liderou. A IA é a próxima — e está acontecendo agora.
      </p>
    </Section>
  )
}
