import { motion } from 'framer-motion'
import Section from '../components/Section'
import Icon from '../components/Icon'

const tools = [
  {
    name: 'Veras (Chaos)',
    desc: 'Plugin AI para Revit, SketchUp e Rhino — o primeiro a integrar IA diretamente no fluxo BIM. Adquirido pela Chaos em fev/2025.',
    url: 'https://www.chaos.com/veras',
    img: './img/frontier/sketch-veras.png',
    highlight: 'Integração BIM nativa',
  },
  {
    name: 'PromeAI',
    desc: 'Sketch-to-render especializado em arquitetura. Entende espaços, iluminação e materiais. Plano gratuito generoso.',
    url: 'https://www.promeai.pro',
    img: './img/frontier/sketch-promeai.jpg',
    highlight: 'Gratuito para começar',
  },
  {
    name: 'Rendair AI',
    desc: 'Transforma esboços manuais em renders fotorrealísticos em segundos. Foco total em arquitetura.',
    url: 'https://rendair.ai',
    img: './img/frontier/sketch-rendair.jpg',
    highlight: 'Esboço → Render em segundos',
  },
  {
    name: 'mnml.ai',
    desc: 'Converte modelos SketchUp, Revit ou Blender em CGI fotorrealista sem necessidade de motor de render.',
    url: 'https://mnml.ai',
    img: './img/frontier/sketch-mnml.jpg',
    highlight: 'Sem motor de render',
  },
]

const stats = [
  { value: 'US$ 1,5 bi', label: 'Mercado IA generativa em arquitetura (2025)' },
  { value: 'US$ 5,9 bi', label: 'Projeção 2029 — CAGR 41%' },
  { value: '< 30s', label: 'Tempo médio sketch → render' },
  { value: '80-90%', label: 'Redução de trabalho manual (Autodesk)' },
]

export default function SketchToRender() {
  return (
    <Section id="sketch-to-render" title="Sketch-to-Render com IA" subtitle="De esboço a visualização fotorrealística em segundos">
      {/* Stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
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

      {/* Concept */}
      <div className="bg-gradient-to-r from-city-navy/5 to-city-blue/5 rounded-2xl p-6 mb-12 border border-city-navy/10">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: '#0047AB15' }}>
            <Icon name="eye" size={24} className="text-city-blue" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-city-navy mb-2">Como funciona?</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Modelos de difusão (Stable Diffusion, SDXL) treinados com datasets arquitetônicos transformam
              esboços de 30 segundos em visualizações que antes levariam horas no V-Ray ou Lumion.
              O arquiteto mantém o controle criativo — a IA cuida da renderização.
            </p>
          </div>
        </div>
      </div>

      {/* Tools grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tools.map((tool, i) => (
          <motion.a
            key={tool.name}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group block rounded-2xl overflow-hidden border border-gray-200 hover:border-city-blue hover:shadow-xl transition-all"
          >
            <div className="h-48 overflow-hidden bg-gray-100">
              <img
                src={tool.img}
                alt={tool.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-city-navy">{tool.name}</h4>
                <span className="text-[10px] font-bold text-city-blue bg-city-blue/10 px-2 py-1 rounded-full">{tool.highlight}</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{tool.desc}</p>
              <span className="inline-flex items-center mt-3 text-xs text-city-blue font-semibold group-hover:text-city-orange transition-colors">
                Visitar site <span className="ml-1">→</span>
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  )
}
