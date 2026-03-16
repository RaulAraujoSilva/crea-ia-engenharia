import { motion } from 'framer-motion'
import Section from '../components/Section'
import Icon from '../components/Icon'

const tools = [
  {
    name: 'Finch 3D',
    desc: 'Plantas otimizadas por adjacência, circulação e iluminação natural. Integração Rhino/Grasshopper/Revit.',
    url: 'https://www.finch3d.com',
    img: './img/frontier/bim-finch3d.jpg',
    metric: 'Otimização paramétrica',
    color: '#2DC653',
  },
  {
    name: 'Swapp AI',
    desc: 'Do design esquemático à documentação completa. Conformidade automática com códigos. 70% redução.',
    url: 'https://swapp.ai',
    img: './img/frontier/bim-swapp.jpg',
    metric: '70% redução documentação',
    color: '#FF6B35',
  },
  {
    name: 'Architechtures',
    desc: 'IA generativa residencial. Modelo BIM em tempo real a partir de parâmetros do terreno.',
    url: 'https://architechtures.com',
    img: './img/frontier/bim-architechtures.jpg',
    metric: 'BIM residencial em tempo real',
    color: '#E86D00',
  },
]

const FLOW_STEPS = [
  { label: 'Prompt → LLM', icon: 'message-square', color: '#6B48FF' },
  { label: 'Geometria IFC', icon: 'layers', color: '#0047AB' },
  { label: 'Validação + Agentes', icon: 'check-square', color: '#2DC653' },
  { label: 'Modelo editável', icon: 'file-text', color: '#FF6B35' },
]

export default function TextToBIMPipeline() {
  return (
    <Section id="text-to-bim-pipeline" title="Text-to-BIM: Mais Ferramentas" subtitle="Documentação, otimização e o pipeline multi-agente">
      {/* Tools grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {tools.map((tool, i) => (
          <motion.a
            key={tool.name}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group block rounded-xl overflow-hidden border border-gray-200 hover:border-city-blue hover:shadow-lg transition-all"
          >
            <div className="h-32 overflow-hidden bg-gray-100">
              <img src={tool.img} alt={tool.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="p-3">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-bold text-sm text-city-navy">{tool.name}</h4>
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: tool.color }} />
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mb-2">{tool.desc}</p>
              <p className="text-xs font-bold" style={{ color: tool.color }}>{tool.metric}</p>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Pipeline flow inline */}
      <div className="bg-city-navy/5 rounded-xl p-5 mb-6">
        <h3 className="text-sm font-bold text-city-navy mb-3">Pipeline Text-to-BIM (Text2BIM — TU Munich)</h3>
        <div className="flex items-center gap-2 flex-wrap">
          {FLOW_STEPS.map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 border border-gray-100">
                <Icon name={s.icon} size={14} style={{ color: s.color }} />
                <span className="text-xs font-semibold text-city-navy">{s.label}</span>
              </div>
              {i < FLOW_STEPS.length - 1 && <span className="text-gray-300 text-lg">→</span>}
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-2">GPT-5 mini: 83% acurácia | Claude Sonnet 4.5: 100% edição semântica | Código aberto no GitHub</p>
      </div>

      {/* Caveat */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <Icon name="alert-triangle" size={18} className="text-amber-600 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-700 leading-relaxed">
            Text-to-BIM ainda está em <strong>estágio inicial</strong>. Acelera a fase conceitual, mas a
            supervisão profissional e a ART continuam indispensáveis.
          </p>
        </div>
      </div>
    </Section>
  )
}
