import { motion } from 'framer-motion'
import Section from '../components/Section'
import Icon from '../components/Icon'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell, ReferenceLine, Tooltip } from 'recharts'

/* Vectara Hallucination Leaderboard — novo dataset (docs longos, até 32K tokens)
   Mais realista para uso profissional/engenharia */
const VECTARA_DATA = [
  { model: 'GPT-4.1', rate: 5.6, safe: true },
  { model: 'Gemini 3.1 Pro', rate: 10.4, safe: false },
  { model: 'Claude Sonnet 4.6', rate: 10.6, safe: false },
  { model: 'GPT-5.2', rate: 10.8, safe: false },
  { model: 'Claude Opus 4.6', rate: 12.2, safe: false },
  { model: 'Gemini 3 Pro', rate: 13.6, safe: false },
  { model: 'o4-mini', rate: 18.6, safe: false },
  { model: 'Grok 4.1 Fast', rate: 20.2, safe: false },
]

/* AA-Omniscience — benchmark de conhecimento factual (6.000 perguntas, 42 tópicos)
   Taxa de alucinação = respostas incorretas / (incorretas + parciais + não tentadas)
   Fonte: artificialanalysis.ai/evaluations/omniscience */
const OMNISCIENCE_DATA = [
  { model: 'Grok 4.20', rate: 22, safe: true },
  { model: 'Claude 4.5 Haiku', rate: 25, safe: true },
  { model: 'Claude Sonnet 4.6', rate: 38, safe: false },
  { model: 'Claude 4.5 Sonnet', rate: 48, safe: false },
  { model: 'Gemini 3.1 Pro', rate: 50, safe: false },
  { model: 'GPT-5.1 (high)', rate: 51, safe: false },
  { model: 'Grok 4', rate: 64, safe: false },
  { model: 'DeepSeek R1', rate: 83, safe: false },
  { model: 'Gemini 2.5 Pro', rate: 89, safe: false },
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
  {
    icon: 'scale',
    color: '#FF6B35',
    title: '206+ casos judiciais (até jul/2025)',
    authors: 'LawNext / American Bar Association',
    finding: 'Advogados multados em US$ 3.000–31.100 por citações falsas geradas por IA. 90% dos casos ocorreram em 2025. Ferramentas afetadas: ChatGPT, CoCounsel, Gemini.',
    url: 'https://www.lawnext.com/2025/05/ai-hallucinations-strike-again-two-more-cases-where-lawyers-face-judicial-wrath-for-fake-citations.html',
  },
]

export default function HallucinationRates() {
  return (
    <Section id="hallucination-rates" title="Alucinações: Os Números" subtitle="Benchmarks verificáveis e estudos científicos">
      {/* Charts side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        {/* Vectara — docs longos */}
        <div>
          <h3 className="text-lg font-bold text-city-navy mb-4">Vectara — Documentos Longos (2025)</h3>
          <div className="bg-city-navy/5 rounded-2xl p-6">
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={VECTARA_DATA} layout="vertical" margin={{ left: 120, right: 30 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis type="number" domain={[0, 25]} tick={{ fill: '#6b7280', fontSize: 12 }} unit="%" />
                <YAxis type="category" dataKey="model" tick={{ fill: '#0A1628', fontSize: 12, fontWeight: 500 }} width={110} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: 8 }}
                  formatter={(value) => [`${value}%`, 'Taxa de alucinação']}
                />
                <ReferenceLine x={5} stroke="#FF6B35" strokeDasharray="5 5" label={{ value: 'Limiar profissional', fill: '#FF6B35', fontSize: 10, position: 'top' }} />
                <Bar dataKey="rate" radius={[0, 6, 6, 0]}>
                  {VECTARA_DATA.map((entry, i) => (
                    <Cell key={i} fill={entry.safe ? '#2DC653' : '#C62828'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Fonte:{' '}
              <a href="https://huggingface.co/spaces/vectara/leaderboard" target="_blank" rel="noopener noreferrer" className="text-city-blue hover:text-city-cyan transition-colors underline">
                Vectara Leaderboard (novo dataset)
              </a>
            </p>
          </div>
        </div>

        {/* AA-Omniscience — conhecimento factual */}
        <div>
          <h3 className="text-lg font-bold text-city-navy mb-4">AA-Omniscience — Conhecimento Factual</h3>
          <div className="bg-city-navy/5 rounded-2xl p-6">
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={OMNISCIENCE_DATA} layout="vertical" margin={{ left: 120, right: 30 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis type="number" domain={[0, 100]} tick={{ fill: '#6b7280', fontSize: 12 }} unit="%" />
                <YAxis type="category" dataKey="model" tick={{ fill: '#0A1628', fontSize: 12, fontWeight: 500 }} width={110} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: 8 }}
                  formatter={(value) => [`${value}%`, 'Taxa de alucinação']}
                />
                <ReferenceLine x={30} stroke="#FF6B35" strokeDasharray="5 5" label={{ value: 'Limiar aceitável', fill: '#FF6B35', fontSize: 10, position: 'top' }} />
                <Bar dataKey="rate" radius={[0, 6, 6, 0]}>
                  {OMNISCIENCE_DATA.map((entry, i) => (
                    <Cell key={i} fill={entry.safe ? '#2DC653' : '#C62828'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Fonte:{' '}
              <a href="https://artificialanalysis.ai/evaluations/omniscience?omniscience-hallucination-rate=hallucination-rate" target="_blank" rel="noopener noreferrer" className="text-city-blue hover:text-city-cyan transition-colors underline">
                Artificial Analysis, AA-Omniscience
              </a>
            </p>
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-400 mb-8 italic text-center">
        Nota: a taxa de alucinação varia drasticamente conforme o benchmark. Um mesmo modelo pode ter 1% em sumarização e 80%+ em conhecimento factual.
        A escolha do benchmark importa tanto quanto o modelo.
      </p>

      {/* Studies */}
      <div className="mb-10">
        <h3 className="text-lg font-bold text-city-navy mb-4">Estudos e Dados Relevantes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                Abrir fonte
              </div>
            </motion.a>
          ))}
        </div>
      </div>

    </Section>
  )
}
