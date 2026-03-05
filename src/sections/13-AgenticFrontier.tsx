import { motion } from 'framer-motion'
import Section from '../components/Section'
import Icon from '../components/Icon'
import StatCounter from '../components/StatCounter'

const FRONTIER = [
  {
    icon: 'bot',
    color: '#6B48FF',
    title: 'ALICE Insights Agent',
    description: 'Agente conversacional para otimização de cronogramas. "O que acontece se atrasar 2 semanas na fundação?" — resposta em segundos com reotimização completa do cronograma.',
    url: 'https://www.alicetechnologies.com/construction-schedule-insights-agent',
  },
  {
    icon: 'layers',
    color: '#00B4D8',
    title: 'Autodesk AI Assistant',
    description: 'Multi-agente com protocolo MCP (Model Context Protocol). Agentes especializados se comunicam entre si: agente BIM + agente normas + agente orçamento.',
    url: 'https://www.autodesk.com/solutions/autodesk-ai/autodesk-assistant',
  },
  {
    icon: 'cpu',
    color: '#FF6B35',
    title: 'AI BIM Coordinator',
    description: 'ScienceDirect 2025: framework AutoGen + Revit API com 5 agentes LLM que coordenam tarefas BIM complexas. Clash detection, documentação e atualização de modelos.',
    url: 'https://www.sciencedirect.com/science/article/abs/pii/S092658052500603X',
  },
  {
    icon: 'globe',
    color: '#2DC653',
    title: 'ETH Zurich ConvoAI',
    description: 'Agente multimodal para projeto arquitetônico. Conversa natural sobre modelo 3D: sugere alterações de fachada, verifica normas em tempo real, gera variantes.',
    url: 'https://www.tandfonline.com/doi/full/10.1080/00038628.2025.2586655',
  },
]

export default function AgenticFrontier() {
  return (
    <Section id="agentic-frontier" title="A Fronteira: IA Agêntica" subtitle="Sistemas que agem, não apenas respondem">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {FRONTIER.map((item, i) => (
          <motion.a
            key={i}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="block bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg transition-all group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${item.color}15` }}>
                <Icon name={item.icon} size={24} style={{ color: item.color }} />
              </div>
              <h3 className="text-lg font-bold text-city-navy group-hover:text-city-blue transition-colors">{item.title}</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.description}</p>
            <div className="flex items-center gap-1 text-xs font-semibold group-hover:text-city-cyan transition-colors" style={{ color: item.color }}>
              <Icon name="external-link" size={12} />
              Ver mais
            </div>
          </motion.a>
        ))}
      </div>

      {/* Context stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-city-navy/5 rounded-2xl p-8">
        <StatCounter value={1445} suffix="%" prefix="+" label="aumento em consultas sobre multi-agent AI (Gartner, 2024-2025)" />
        <StatCounter value={77.2} suffix="%" label="Claude 4.5 Sonnet no SWE-bench Verified (tarefas de programação autônoma)" />
        <StatCounter value={30} suffix="+ h" label="operação autônoma documentada de Claude 4.5 em tarefas complexas" />
      </div>

      {/* Honest caveat */}
      <div className="mt-8 bg-city-orange/5 border border-city-orange/20 rounded-xl p-5">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: '#FF6B3515' }}>
            <Icon name="alert-triangle" size={16} className="text-city-orange" />
          </div>
          <div>
            <p className="font-bold text-city-navy text-sm">Nota de honestidade</p>
            <p className="text-sm text-gray-600 mt-1">
              "Most agents are far from agentic. This is the future and does not yet exist." — Craig Le Clair, Forrester (Construction Dive, 2025).
              A maioria das soluções "agênticas" hoje são protótipos ou estão em fase inicial de adoção.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
