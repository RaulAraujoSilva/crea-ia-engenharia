import { motion } from 'framer-motion'
import Section from '../components/Section'
import StatCounter from '../components/StatCounter'
import Icon from '../components/Icon'

const COMPARISONS = [
  {
    hype: '"IA substituiu o engenheiro"',
    reality: '96% dos cálculos estruturais com IA precisam de revisão humana',
    hypeIcon: 'trending-up',
    realityIcon: 'alert-triangle',
  },
  {
    hype: '"Economia de 90% do tempo"',
    reality: 'Tempo real inclui verificação, correção e validação',
    hypeIcon: 'trending-up',
    realityIcon: 'alert-triangle',
  },
  {
    hype: '"100% de precisão"',
    reality: 'Gemini: 0,7% de erro. GPT-4.5: 37,1% de erro',
    hypeIcon: 'trending-up',
    realityIcon: 'alert-triangle',
  },
  {
    hype: '"Qualquer IA faz cálculo estrutural"',
    reality: 'Nenhuma IA tem certificação para cálculo sem responsável técnico',
    hypeIcon: 'trending-up',
    realityIcon: 'alert-triangle',
  },
]

export default function HypeVsReality() {
  return (
    <Section id="hype-vs-reality" title="O Hype vs. a Realidade" subtitle="O que o LinkedIn não conta" dark>
      {/* Stat destaque */}
      <div className="mb-12 p-8 rounded-2xl border-2 border-city-red/30 bg-city-red/5 text-center">
        <StatCounter value={67.4} suffix=" bi" prefix="US$ " label="em perdas causadas por alucinações de IA em 2024 (AllAboutAI Report)" />
        <p className="mt-2 text-sm text-gray-400">47% dos usuários corporativos tomaram decisões baseadas em conteúdo alucinado</p>
      </div>

      {/* LinkedIn vs Realidade */}
      <div>
        <h3 className="text-xl font-bold text-white mb-6">LinkedIn vs. Realidade</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {COMPARISONS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="grid grid-cols-2 gap-px rounded-xl overflow-hidden border border-white/10"
            >
              <div className="bg-city-green/10 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded flex items-center justify-center" style={{ backgroundColor: '#2DC65320' }}>
                    <Icon name={item.hypeIcon} size={14} className="text-city-green" />
                  </div>
                  <span className="text-xs font-bold text-city-green">O HYPE</span>
                </div>
                <p className="text-sm text-gray-300">{item.hype}</p>
              </div>
              <div className="bg-city-red/10 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded flex items-center justify-center" style={{ backgroundColor: '#C6282820' }}>
                    <Icon name={item.realityIcon} size={14} className="text-city-red" />
                  </div>
                  <span className="text-xs font-bold text-city-red">A REALIDADE</span>
                </div>
                <p className="text-sm text-gray-300">{item.reality}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
