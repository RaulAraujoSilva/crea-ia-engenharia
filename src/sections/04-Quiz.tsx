import { useState } from 'react'
import { motion } from 'framer-motion'
import Section from '../components/Section'
import Icon from '../components/Icon'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from 'recharts'

const OPTIONS = [
  { key: 'A', text: 'Verificar conformidade de um projeto com a NBR 6118', color: '#2DC653' },
  { key: 'B', text: 'Calcular cargas estruturais com segurança certificável', color: '#C62828' },
  { key: 'C', text: 'Medir dimensões de uma planta em segundos (takeoff)', color: '#00B4D8' },
  { key: 'D', text: 'Assinar uma ART e assumir responsabilidade técnica', color: '#FF6B35' },
  { key: 'E', text: 'Detectar trincas em estruturas com câmera', color: '#6B48FF' },
]

const STORAGE_KEY = 'crea-quiz-voted'

export default function Quiz() {
  const [voted, setVoted] = useState(() => localStorage.getItem(STORAGE_KEY) === 'true')
  const [results, setResults] = useState<Record<string, number>>({ A: 0, B: 0, C: 0, D: 0, E: 0 })
  const [total, setTotal] = useState(0)

  const vote = async (answer: string) => {
    if (voted) return
    try {
      const res = await fetch('/api/quiz-ia', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answer }),
      })
      const data = await res.json()
      setResults(data.results)
      setTotal(data.total)
      setVoted(true)
      localStorage.setItem(STORAGE_KEY, 'true')
    } catch {
      // Fallback: local-only
      setResults(prev => ({ ...prev, [answer]: (prev[answer] || 0) + 1 }))
      setTotal(prev => prev + 1)
      setVoted(true)
      localStorage.setItem(STORAGE_KEY, 'true')
    }
  }

  const chartData = OPTIONS.map(o => ({
    name: o.key,
    votes: results[o.key] || 0,
    color: o.color,
  }))

  return (
    <Section id="quiz" title="Quiz Interativo" subtitle="Qual dessas tarefas a IA faz MELHOR que humanos hoje?">
      {!voted ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {OPTIONS.map((opt, i) => (
            <motion.button
              key={opt.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => vote(opt.key)}
              className="p-5 rounded-xl border-2 text-left hover:shadow-lg transition-all group"
              style={{ borderColor: `${opt.color}30` }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: opt.color }}>
                  {opt.key}
                </span>
                <p className="text-sm font-medium text-city-navy group-hover:text-city-blue transition-colors">{opt.text}</p>
              </div>
            </motion.button>
          ))}
        </div>
      ) : (
        <div className="max-w-3xl mx-auto">
          <div className="bg-city-navy/5 rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#2DC65315' }}>
                <Icon name="check-circle" size={18} className="text-city-green" />
              </div>
              <p className="font-bold text-city-navy">Respostas corretas: A, C e E</p>
            </div>
            <p className="text-sm text-gray-600">
              A IA já supera humanos em velocidade para verificação de normas (A), medição de plantas (C) e detecção visual de defeitos (E).
              Porém, cálculos certificáveis (B) exigem verificação humana, e a ART (D) é impossível por lei.
            </p>
          </div>

          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={chartData} margin={{ left: 10 }}>
              <XAxis dataKey="name" tick={{ fill: '#0A1628', fontWeight: 600 }} />
              <YAxis tick={{ fill: '#9ca3af' }} />
              <Tooltip />
              <Bar dataKey="votes" radius={[8, 8, 0, 0]}>
                {chartData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <p className="text-center text-sm text-gray-500 mt-2">{total} votos registrados</p>
        </div>
      )}
    </Section>
  )
}
