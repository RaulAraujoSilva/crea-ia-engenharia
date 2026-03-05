import { useState } from 'react'
import { motion } from 'framer-motion'
import Section from '../components/Section'
import Icon from '../components/Icon'
import StatCounter from '../components/StatCounter'
import ImageLightbox from '../components/ImageLightbox'

const TOOLS = [
  {
    icon: 'cpu',
    color: '#6B48FF',
    title: 'Text2BIM (TU Munich)',
    description: 'Framework multi-agente LLM integrado ao Vectorworks. Gera edificios completos a partir de texto: layouts internos, envelopes, informacao semantica IFC. Codigo aberto no GitHub.',
    metrics: 'GPT-5 mini: 83% acuracia | Claude Sonnet 4.5: 100% edicao semantica',
    url: 'https://github.com/dcy0577/Text2BIM',
  },
  {
    icon: 'layers',
    color: '#0047AB',
    title: 'TestFit',
    description: 'Gera 3.000 site plans validos em menos de 10 segundos. Usado por Perkins & Will, WATG e DLR Group para viabilidade imobiliaria e otimizacao de terrenos.',
    metrics: '3.000 planos em <10s | Usado por Top 20 firmas de arquitetura',
    url: 'https://www.testfit.io/',
  },
  {
    icon: 'globe',
    color: '#00B4D8',
    title: 'Digital Blue Foam',
    description: 'Geracao de volumetria + fachadas + analises ambientais (sol, vento, energia). Exporta IFC nativo e sincroniza com ArchiCAD em tempo real. 90% mais rapido que modelagem manual.',
    metrics: '90% reducao de tempo | Exporta IFC | Integra ArchiCAD/Revit',
    url: 'https://www.digitalbluefoam.com/',
  },
  {
    icon: 'settings',
    color: '#2DC653',
    title: 'Autodesk Neural CAD',
    description: 'Modelo foundation 3D generativo para Forma e Fusion. Promete automatizar 80-90% das tarefas repetitivas de design. Analisa milhares de opcoes de terreno automaticamente.',
    metrics: '80-90% automacao | Foundation model 3D | Integrado ao Forma',
    url: 'https://adsknews.autodesk.com/en/news/upcoming-3d-generative-ai-foundation-models/',
  },
]

const FLOW_STEPS = [
  { step: 1, label: 'Prompt em linguagem natural', icon: 'message-square', color: '#6B48FF' },
  { step: 2, label: 'LLM interpreta e gera codigo', icon: 'cpu', color: '#0047AB' },
  { step: 3, label: 'API BIM cria geometria e semantica', icon: 'layers', color: '#00B4D8' },
  { step: 4, label: 'Model checker valida', icon: 'check-square', color: '#2DC653' },
  { step: 5, label: 'Agentes corrigem iterativamente', icon: 'settings', color: '#FF6B35' },
  { step: 6, label: 'Modelo IFC editavel exportado', icon: 'file-text', color: '#6B48FF' },
]

export default function TextToBIM() {
  const [lightbox, setLightbox] = useState(false)

  return (
    <Section id="text-to-bim" title="Text-to-BIM" subtitle="Do texto ao modelo 3D — a nova fronteira da modelagem">
      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mb-10 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
        onClick={() => setLightbox(true)}
      >
        <img
          src="./img/pratica/text2bim-hero.png"
          alt="Text-to-BIM: do texto ao modelo"
          className="w-full h-64 object-cover"
          loading="lazy"
        />
      </motion.div>

      {/* Flow diagram */}
      <div className="mb-10">
        <h3 className="text-lg font-bold text-city-navy mb-4">Como funciona</h3>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {FLOW_STEPS.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-2"
            >
              <div className="flex items-center gap-2 bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${s.color}15` }}>
                  <Icon name={s.icon} size={16} style={{ color: s.color }} />
                </div>
                <div>
                  <span className="text-xs font-bold" style={{ color: s.color }}>Passo {s.step}</span>
                  <p className="text-xs text-gray-600">{s.label}</p>
                </div>
              </div>
              {i < FLOW_STEPS.length - 1 && (
                <Icon name="arrow-up-right" size={16} className="text-gray-300 rotate-45 shrink-0 hidden md:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tool cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {TOOLS.map((tool, i) => (
          <motion.a
            key={i}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4, boxShadow: '0 20px 40px -12px rgba(0,0,0,0.15)' }}
            className="block bg-white rounded-2xl border border-gray-100 p-6 shadow-sm transition-all group"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${tool.color}15` }}>
                <Icon name={tool.icon} size={20} style={{ color: tool.color }} />
              </div>
              <h3 className="text-lg font-bold text-city-navy group-hover:text-city-blue transition-colors">{tool.title}</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">{tool.description}</p>
            <div className="bg-gray-50 rounded-lg px-3 py-2 mb-3">
              <p className="text-xs font-semibold text-gray-500">{tool.metrics}</p>
            </div>
            <div className="flex items-center gap-1 text-xs font-semibold group-hover:text-city-cyan transition-colors" style={{ color: tool.color }}>
              <Icon name="external-link" size={12} />
              Ver mais
            </div>
          </motion.a>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-city-navy/5 rounded-2xl p-8">
        <StatCounter value={83} suffix="%" label="acuracia de querying BIM com GPT-5 mini (MCP4IFC, 2025)" />
        <StatCounter value={3000} label="site plans gerados em menos de 10 segundos (TestFit)" />
        <StatCounter value={90} suffix="%" label="reducao de tempo com Digital Blue Foam + ArchiCAD" />
      </div>

      {lightbox && (
        <ImageLightbox
          src="./img/pratica/text2bim-hero.png"
          alt="Text-to-BIM"
          onClose={() => setLightbox(false)}
        />
      )}
    </Section>
  )
}
