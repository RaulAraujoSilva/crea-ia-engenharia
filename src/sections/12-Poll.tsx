import { useState } from 'react'
import { motion } from 'framer-motion'
import Section from '../components/Section'
import Icon from '../components/Icon'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from 'recharts'

const OPTIONS = [
  { key: 'A', text: 'Nunca usei', color: '#9ca3af' },
  { key: 'B', text: 'Já testei, mas não uso regularmente', color: '#FF6B35' },
  { key: 'C', text: 'Uso como assistente de texto (ChatGPT, Claude)', color: '#00B4D8' },
  { key: 'D', text: 'Uso para tarefas técnicas específicas', color: '#6B48FF' },
  { key: 'E', text: 'Uso diariamente e é parte do meu fluxo', color: '#2DC653' },
]

const STORAGE_KEY = 'crea-poll-voted'

export default function Poll() {
  const [voted, setVoted] = useState(() => localStorage.getItem(STORAGE_KEY) === 'true')
  const [results, setResults] = useState<Record<string, number>>({ A: 0, B: 0, C: 0, D: 0, E: 0 })
  const [total, setTotal] = useState(0)

  const vote = async (answer: string) => {
    if (voted) return
    try {
      const res = await fetch('/api/poll-ia', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answer }),
      })
      const data = await res.json()
      setResults(data.results)
      setTotal(data.total)
    } catch {
      setResults(prev => ({ ...prev, [answer]: (prev[answer] || 0) + 1 }))
      setTotal(prev => prev + 1)
    }
    setVoted(true)
    localStorage.setItem(STORAGE_KEY, 'true')
  }

  const chartData = OPTIONS.map(o => ({
    name: o.key,
    votes: results[o.key] || 0,
    color: o.color,
    label: o.text,
  }))

  return (
    <Section id="poll" title="Enquete" subtitle="Você já usou IA no seu trabalho de engenharia?" dark>
      {!voted ? (
        <div className="max-w-2xl mx-auto space-y-3">
          {OPTIONS.map((opt, i) => (
            <motion.button
              key={opt.key}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => vote(opt.key)}
              className="w-full flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-left group"
            >
              <span className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shrink-0" style={{ backgroundColor: opt.color }}>
                {opt.key}
              </span>
              <p className="text-white group-hover:text-city-cyan transition-colors">{opt.text}</p>
            </motion.button>
          ))}
        </div>
      ) : (
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#2DC65320' }}>
              <Icon name="check-circle" size={18} className="text-city-green" />
            </div>
            <p className="font-bold text-white">Obrigado pelo voto!</p>
          </div>

          <div className="bg-white/5 rounded-2xl p-6">
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={chartData} margin={{ left: 10 }}>
                <XAxis dataKey="name" tick={{ fill: '#e5e7eb', fontWeight: 600 }} />
                <YAxis tick={{ fill: '#9ca3af' }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0D1B2A', border: '1px solid #ffffff20', borderRadius: 8, color: '#fff' }}
                  labelFormatter={(label) => OPTIONS.find(o => o.key === label)?.text || label}
                />
                <Bar dataKey="votes" radius={[8, 8, 0, 0]}>
                  {chartData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-center text-sm text-gray-400 mt-3">{total} votos registrados</p>
        </div>
      )}
    </Section>
  )
}
