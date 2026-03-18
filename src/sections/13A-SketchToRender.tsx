import { motion } from 'framer-motion'
import Section from '../components/Section'
import CaseCard from '../components/CaseCard'

const stats = [
  { value: 'US$ 1,5 bi', label: 'Mercado IA generativa em arquitetura (2025)' },
  { value: 'US$ 5,9 bi', label: 'Projeção 2029 — CAGR 41%' },
  { value: '< 30s', label: 'Tempo médio sketch → render' },
  { value: '80-90%', label: 'Redução de trabalho manual (Autodesk)' },
]

const CASES = [
  {
    city: 'Veras (Chaos)',
    country: 'Plugin AI para Revit, SketchUp e Rhino',
    color: '#0047AB',
    highlight: 'Integração BIM nativa',
    image: './img/frontier/sketch-veras.png',
    sourceUrl: 'https://www.chaos.com/veras',
    sourceLabel: 'chaos.com/veras',
    metrics: [
      { value: 'Revit/SketchUp', label: 'plugins nativos' },
      { value: '< 30s', label: 'tempo por render' },
      { value: 'Chaos', label: 'adquirido fev/2025' },
      { value: 'BIM', label: 'integração nativa' },
    ],
    description: 'Primeiro plugin a integrar IA diretamente no fluxo BIM. Adquirido pela Chaos em fevereiro de 2025.',
  },
  {
    city: 'PromeAI',
    country: 'Sketch-to-render especializado em arquitetura',
    color: '#2DC653',
    highlight: 'Gratuito para começar',
    image: './img/frontier/sketch-promeai.jpg',
    sourceUrl: 'https://www.promeai.pro',
    sourceLabel: 'promeai.pro',
    metrics: [
      { value: 'Gratuito', label: 'plano free' },
      { value: '20+', label: 'estilos arquitetônicos' },
      { value: 'iluminação', label: 'entende contexto' },
      { value: '< 10s', label: 'render instantâneo' },
    ],
    description: 'Entende espaços, iluminação e materiais. Plano gratuito generoso para experimentar.',
  },
  {
    city: 'Rendair AI',
    country: 'Esboço → Render fotorrealístico',
    color: '#FF6B35',
    highlight: 'Esboço → Render em segundos',
    image: './img/frontier/sketch-rendair.jpg',
    sourceUrl: 'https://rendair.ai',
    sourceLabel: 'rendair.ai',
    metrics: [
      { value: 'segundos', label: 'sketch → render' },
      { value: 'HD', label: 'resolução fotorrealista' },
      { value: 'fachadas', label: 'especialização arq.' },
      { value: 'batch', label: 'múltiplos renders' },
    ],
    description: 'Transforma esboços manuais em renders fotorrealísticos em segundos. Foco total em arquitetura.',
  },
  {
    city: 'mnml.ai',
    country: 'CGI sem motor de render',
    color: '#6B48FF',
    highlight: 'Sem motor de render',
    image: './img/frontier/sketch-mnml.jpg',
    sourceUrl: 'https://mnml.ai',
    sourceLabel: 'mnml.ai',
    metrics: [
      { value: 'sem motor', label: 'render sem engine' },
      { value: 'SketchUp', label: 'importa direto' },
      { value: 'CGI', label: 'qualidade cinema' },
      { value: 'Revit/Blender', label: 'compatível' },
    ],
    description: 'Converte modelos SketchUp, Revit ou Blender em CGI fotorrealista sem necessidade de motor de render.',
  },
]

export default function SketchToRender() {
  return (
    <Section id="sketch-to-render" title="Sketch-to-Render com IA" subtitle="De esboço a visualização fotorrealística em segundos">
      {/* Stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-gradient-to-br from-city-blue/5 to-city-cyan/5 rounded-xl border border-city-blue/10 p-4 text-center"
          >
            <p className="text-2xl font-extrabold text-city-blue">{s.value}</p>
            <p className="text-xs text-gray-500 mt-1">{s.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Tools grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {CASES.map(c => <CaseCard key={c.city} {...c} />)}
      </div>
    </Section>
  )
}
