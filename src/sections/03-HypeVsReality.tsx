import { motion } from 'framer-motion'
import Section from '../components/Section'
import StatCounter from '../components/StatCounter'
import Icon from '../components/Icon'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell, ReferenceLine, Tooltip } from 'recharts'

const HALLUCINATION_DATA = [
  { model: 'Gemini 2.0 Flash', rate: 0.7, safe: true },
  { model: 'Claude 3.5 Sonnet', rate: 1.4, safe: true },
  { model: 'GPT-4o', rate: 3.0, safe: true },
  { model: 'Llama 3.1 70B', rate: 5.5, safe: false },
  { model: 'GPT-3.5 Turbo', rate: 15.5, safe: false },
  { model: 'GPT-4.5', rate: 37.1, safe: false },
]

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

      {/* Gráfico de alucinações */}
      <div className="mb-12">
        <h3 className="text-xl font-bold text-white mb-6">Taxa de Alucinação por Modelo (Vectara Leaderboard, 2025)</h3>
        <div className="bg-white/5 rounded-2xl p-6">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={HALLUCINATION_DATA} layout="vertical" margin={{ left: 120, right: 30 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
              <XAxis type="number" domain={[0, 40]} tick={{ fill: '#9ca3af', fontSize: 12 }} unit="%" />
              <YAxis type="category" dataKey="model" tick={{ fill: '#e5e7eb', fontSize: 13 }} width={110} />
              <Tooltip
                contentStyle={{ backgroundColor: '#0D1B2A', border: '1px solid #ffffff20', borderRadius: 8, color: '#fff' }}
                formatter={(value) => [`${value}%`, 'Taxa de alucinação']}
              />
              <ReferenceLine x={5} stroke="#FF6B35" strokeDasharray="5 5" label={{ value: 'Limiar crítico', fill: '#FF6B35', fontSize: 11 }} />
              <Bar dataKey="rate" radius={[0, 6, 6, 0]}>
                {HALLUCINATION_DATA.map((entry, i) => (
                  <Cell key={i} fill={entry.safe ? '#2DC653' : '#C62828'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
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
