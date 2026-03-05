import { motion } from 'framer-motion'
import Section from '../components/Section'
import Icon from '../components/Icon'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell, ReferenceLine, Tooltip } from 'recharts'

const LEADERBOARD_DATA = [
  { model: 'Gemini 2.0 Flash', rate: 0.7, safe: true },
  { model: 'OpenAI o3-mini', rate: 0.8, safe: true },
  { model: 'Claude 3.5 Sonnet', rate: 1.4, safe: true },
  { model: 'GPT-4o', rate: 3.0, safe: true },
  { model: 'Claude 3 Opus', rate: 10.1, safe: false },
  { model: 'GPT-3.5 Turbo', rate: 15.5, safe: false },
  { model: 'Gemma-1.1-2B', rate: 27.8, safe: false },
  { model: 'Falcon-7B', rate: 29.9, safe: false },
  { model: 'GPT-4.5', rate: 37.1, safe: false },
]

const STUDIES = [
  {
    icon: 'book-open',
    color: '#0047AB',
    title: 'Frontiers in Built Environment, 2025',
    authors: 'Plevris & Hosamo',
    finding: '"Responsible AI in Structural Engineering": datasets insuficientes, explicabilidade ausente, validação inadequada para aplicações críticas de segurança.',
    url: 'https://www.frontiersin.org/journals/built-environment/articles/10.3389/fbuil.2025.1612575/full',
  },
  {
    icon: 'book-open',
    color: '#6B48FF',
    title: 'Stanford HAI Report, 2024',
    authors: 'Stanford Human-Centered AI',
    finding: 'LLMs alucinam em mais de 75% das questões jurídicas específicas. Citações de jurisprudência e normas são sistematicamente incorretas.',
    url: 'https://hai.stanford.edu/news/hallucinating-law-legal-mistakes-large-language-models-are-pervasive',
  },
  {
    icon: 'book-open',
    color: '#C62828',
    title: 'KSCE Journal of Civil Eng., 2025',
    authors: 'Spencer, Sim, Kim & Yoon',
    finding: 'IA pode subestimar vulnerabilidades estruturais, ignorar danos e produzir previsões otimistas demais durante otimização.',
    url: 'https://www.sciencedirect.com/science/article/pii/S1226798825003186',
  },
]

export default function HallucinationRates() {
  return (
    <Section id="hallucination-rates" title="Alucinações: Os Números" subtitle="Benchmarks verificáveis e estudos científicos">
      {/* Chart */}
      <div className="mb-12">
        <h3 className="text-lg font-bold text-city-navy mb-4">Vectara Hallucination Leaderboard (2025)</h3>
        <div className="bg-city-navy/5 rounded-2xl p-6">
          <ResponsiveContainer width="100%" height={380}>
            <BarChart data={LEADERBOARD_DATA} layout="vertical" margin={{ left: 130, right: 30 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis type="number" domain={[0, 40]} tick={{ fill: '#6b7280', fontSize: 12 }} unit="%" />
              <YAxis type="category" dataKey="model" tick={{ fill: '#0A1628', fontSize: 13, fontWeight: 500 }} width={120} />
              <Tooltip
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: 8 }}
                formatter={(value) => [`${value}%`, 'Taxa de alucinação']}
              />
              <ReferenceLine x={5} stroke="#FF6B35" strokeDasharray="5 5" label={{ value: 'Limiar crítico para uso profissional', fill: '#FF6B35', fontSize: 11, position: 'top' }} />
              <Bar dataKey="rate" radius={[0, 6, 6, 0]}>
                {LEADERBOARD_DATA.map((entry, i) => (
                  <Cell key={i} fill={entry.safe ? '#2DC653' : '#C62828'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <p className="text-xs text-gray-500 mt-2 text-center">Fonte: Vectara Hallucination Leaderboard, abril 2025</p>
        </div>
      </div>

      {/* Studies */}
      <div className="mb-10">
        <h3 className="text-lg font-bold text-city-navy mb-4">Estudos Científicos Relevantes</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {STUDIES.map((study, i) => (
            <motion.a
              key={i}
              href={study.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="block bg-white rounded-xl border-2 p-5 shadow-sm hover:shadow-lg transition-all group"
              style={{ borderColor: `${study.color}30` }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${study.color}15` }}>
                  <Icon name={study.icon} size={16} style={{ color: study.color }} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-city-navy">{study.title}</h4>
                  <p className="text-xs text-gray-500">{study.authors}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">{study.finding}</p>
              <div className="flex items-center gap-1 text-xs font-semibold group-hover:text-city-cyan transition-colors" style={{ color: study.color }}>
                <Icon name="external-link" size={12} />
                Abrir estudo
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Impact quote */}
      <div className="bg-city-red/5 border-2 border-city-red/20 rounded-2xl p-8 text-center">
        <p className="text-2xl md:text-3xl font-bold text-city-navy mb-2">
          US$ 67,4 bilhões
        </p>
        <p className="text-gray-600">
          em perdas causadas por decisões baseadas em alucinações de IA em 2024
        </p>
        <p className="text-xs text-gray-400 mt-2">Fonte: AllAboutAI Industry Report, 2024</p>
      </div>
    </Section>
  )
}
