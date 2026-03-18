import Section from '../components/Section'
import CaseCard from '../components/CaseCard'
import Icon from '../components/Icon'

const CASES = [
  {
    city: 'Finch 3D',
    country: 'Otimização paramétrica de plantas',
    color: '#2DC653',
    highlight: 'Otimização por adjacência',
    image: './img/frontier/bim-finch3d.jpg',
    sourceUrl: 'https://www.finch3d.com',
    sourceLabel: 'finch3d.com',
    metrics: [
      { value: 'adjacência', label: 'otimiza layout' },
      { value: 'Rhino', label: 'integra Grasshopper' },
      { value: 'iluminação', label: 'natural otimizada' },
      { value: 'Revit', label: 'exporta' },
    ],
    description: 'Plantas otimizadas por adjacência, circulação e iluminação natural. Integração Rhino/Grasshopper/Revit.',
  },
  {
    city: 'Swapp AI',
    country: 'Design → Documentação completa',
    color: '#FF6B35',
    highlight: '50% redução documentação',
    image: './img/frontier/bim-swapp.jpg',
    sourceUrl: 'https://swapp.ai',
    sourceLabel: 'swapp.ai',
    metrics: [
      { value: '50%', label: 'redução documentação' },
      { value: '8x', label: 'menos trabalho manual' },
      { value: '22.7M+ ft²', label: 'entregues' },
      { value: 'automática', label: 'conformidade códigos' },
    ],
    description: 'Do design esquemático à documentação completa. Conformidade automática com códigos de construção.',
  },
  {
    city: 'Architechtures',
    country: 'IA generativa residencial',
    color: '#E86D00',
    highlight: 'BIM em tempo real',
    image: './img/frontier/bim-architechtures.jpg',
    sourceUrl: 'https://architechtures.com',
    sourceLabel: 'architechtures.com',
    metrics: [
      { value: 'tempo real', label: 'BIM residencial' },
      { value: 'parâmetros', label: 'terreno como input' },
      { value: 'IA generativa', label: 'plantas otimizadas' },
      { value: 'sem CAD', label: 'direto do briefing' },
    ],
    description: 'Modelo BIM em tempo real a partir de parâmetros do terreno. IA generativa para projetos residenciais.',
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
        {CASES.map(c => <CaseCard key={c.city} {...c} />)}
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
