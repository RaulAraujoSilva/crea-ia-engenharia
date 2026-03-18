import { motion } from 'framer-motion'
import Section from '../components/Section'
import Icon from '../components/Icon'

const TOOLS = [
  {
    name: 'MCP (Model Context Protocol)',
    icon: 'server',
    color: '#0047AB',
    desc: 'Protocolo aberto que conecta LLMs a ferramentas e dados. O modelo "pede" para usar uma ferramenta, o sistema executa e retorna o resultado.',
    examples: 'Banco de dados, sistemas internos, sensores IoT',
  },
  {
    name: 'Skills',
    icon: 'zap',
    color: '#2DC653',
    desc: 'Capacidades pré-configuradas que o LLM ativa por contexto: gerar PDF, consultar planilha, enviar email, criar gráfico.',
    examples: 'Relatórios automáticos, análise de documentos, cálculos',
  },
  {
    name: 'APIs Externas',
    icon: 'globe',
    color: '#FF6B35',
    desc: 'Chamadas HTTP a serviços externos. O modelo formata a requisição, o sistema executa e devolve o resultado.',
    examples: 'Google Maps, SAP, ERPs, serviços de cálculo estrutural',
  },
]

export default function ToolUse() {
  return (
    <Section id="tool-use" title="IA com Ferramentas: Tool Use" subtitle="Como o LLM age no mundo real — não apenas conversa">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 items-start">
        {/* Left: Diagram */}
        <div className="flex flex-col items-center">
          {/* LLM central node */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-32 h-16 rounded-xl bg-gradient-to-r from-city-blue to-city-cyan flex items-center justify-center text-white font-bold text-lg shadow-lg mb-2"
          >
            LLM
          </motion.div>
          <div className="text-xs text-gray-400 mb-3 italic">"Preciso calcular isso..."</div>

          {/* Arrows down */}
          <div className="flex gap-16 mb-2">
            {['#0047AB', '#2DC653', '#FF6B35'].map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <svg width="24" height="32" viewBox="0 0 24 32">
                  <line x1="12" y1="0" x2="12" y2="24" stroke={c} strokeWidth="2" />
                  <polygon points="6,24 18,24 12,32" fill={c} />
                </svg>
              </motion.div>
            ))}
          </div>

          {/* Tool boxes */}
          <div className="flex gap-4 mb-2">
            {[
              { label: 'MCP Server', color: '#0047AB', icon: 'server' },
              { label: 'Skills', color: '#2DC653', icon: 'zap' },
              { label: 'APIs', color: '#FF6B35', icon: 'globe' },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="w-24 h-14 rounded-lg border-2 flex flex-col items-center justify-center gap-1"
                style={{ borderColor: t.color, backgroundColor: `${t.color}15` }}
              >
                <Icon name={t.icon} size={16} style={{ color: t.color }} />
                <span className="text-xs font-bold" style={{ color: t.color }}>{t.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Arrows down to resources */}
          <div className="flex gap-16 mb-2">
            {['#0047AB', '#2DC653', '#FF6B35'].map((c, i) => (
              <div key={i}>
                <svg width="24" height="20" viewBox="0 0 24 20">
                  <line x1="12" y1="0" x2="12" y2="14" stroke={c} strokeWidth="1.5" strokeDasharray="4 2" />
                  <polygon points="8,14 16,14 12,20" fill={c} opacity="0.6" />
                </svg>
              </div>
            ))}
          </div>

          {/* Resource labels */}
          <div className="flex gap-4">
            {['Banco de\nDados', 'Código\nLocal', 'Serviços\nExternos'].map((label, i) => (
              <div key={i} className="w-24 text-center text-[10px] text-gray-500 font-medium whitespace-pre-line">
                {label}
              </div>
            ))}
          </div>

          {/* Example flow */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-6 p-4 rounded-xl bg-city-blue/5 border border-city-blue/20 max-w-sm"
          >
            <p className="text-xs text-gray-500 font-bold mb-2">Exemplo de fluxo:</p>
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <span className="px-2 py-1 bg-white rounded border border-gray-200 font-medium shrink-0">"Calcule a estrutura"</span>
              <span className="text-city-blue">→</span>
              <span className="px-2 py-1 bg-blue-50 rounded border border-blue-200 font-medium shrink-0">API Cálculo</span>
              <span className="text-city-blue">→</span>
              <span className="px-2 py-1 bg-green-50 rounded border border-green-200 font-medium shrink-0">Relatório</span>
            </div>
          </motion.div>
        </div>

        {/* Right: Explanation cards */}
        <div className="flex flex-col gap-4">
          {TOOLS.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="rounded-xl border-2 p-5"
              style={{ borderColor: `${tool.color}30`, backgroundColor: `${tool.color}05` }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${tool.color}15` }}>
                  <Icon name={tool.icon} size={20} style={{ color: tool.color }} />
                </div>
                <h3 className="text-base font-bold text-city-navy">{tool.name}</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{tool.desc}</p>
              <p className="text-xs text-gray-400 mt-2">
                <span className="font-semibold">Ex.:</span> {tool.examples}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
