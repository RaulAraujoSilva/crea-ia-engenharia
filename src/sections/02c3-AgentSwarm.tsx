import { motion } from 'framer-motion'
import Section from '../components/Section'
import Icon from '../components/Icon'

const COLORS = {
  orch: '#FFD700',
  spec: '#6B48FF',
  dev: '#2DC653',
  qa: '#FF6B35',
}

function AgentNode({ label, sub, color, icon, delay = 0 }: { label: string; sub: string; color: string; icon: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.3 }}
      className="flex flex-col items-center gap-1"
    >
      <div
        className="w-14 h-14 rounded-xl border-2 flex items-center justify-center shadow-lg"
        style={{ borderColor: color, backgroundColor: `${color}20` }}
      >
        <Icon name={icon} size={22} style={{ color }} />
      </div>
      <span className="text-xs font-bold text-white text-center leading-tight">{label}</span>
      <span className="text-[10px] text-gray-400 text-center leading-tight">{sub}</span>
    </motion.div>
  )
}

function Connector({ vertical = false, color = '#ffffff30', length = 32 }: { vertical?: boolean; color?: string; length?: number }) {
  return vertical ? (
    <div className="flex justify-center">
      <svg width="2" height={length}><line x1="1" y1="0" x2="1" y2={length} stroke={color} strokeWidth="2" strokeDasharray="4 3" /></svg>
    </div>
  ) : (
    <svg width={length} height="2" className="shrink-0"><line x1="0" y1="1" x2={length} y2="1" stroke={color} strokeWidth="2" strokeDasharray="4 3" /></svg>
  )
}

function ParallelBlock({ label, color, agents }: { label: string; color: string; agents: { icon: string; name: string; sub: string }[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-xl border-2 p-4"
      style={{ borderColor: `${color}40`, backgroundColor: `${color}08` }}
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
        <span className="text-xs font-bold uppercase tracking-wider" style={{ color }}>{label}</span>
        <span className="text-[10px] text-gray-500 ml-1">× múltiplos em paralelo</span>
      </div>
      <div className="flex justify-center gap-6">
        {agents.map((a, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-lg border flex items-center justify-center" style={{ borderColor: `${color}50`, backgroundColor: `${color}15` }}>
              <Icon name={a.icon} size={18} style={{ color }} />
            </div>
            <span className="text-[11px] font-semibold text-white">{a.name}</span>
            <span className="text-[9px] text-gray-400">{a.sub}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function AgentSwarm() {
  return (
    <Section id="agent-swarm" title="Enxame de Agentes: Orquestração" subtitle="Múltiplos agentes especializados trabalhando juntos em um projeto" dark>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8">
        {/* Left: Diagram */}
        <div className="flex flex-col items-center">
          {/* Orchestrator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-6 py-3 rounded-xl border-2 flex items-center gap-3 shadow-lg mb-1"
            style={{ borderColor: COLORS.orch, backgroundColor: `${COLORS.orch}15` }}
          >
            <Icon name="cpu" size={24} style={{ color: COLORS.orch }} />
            <div>
              <span className="text-base font-bold" style={{ color: COLORS.orch }}>ORQUESTRADOR</span>
              <p className="text-[10px] text-gray-400">Coordena, distribui tarefas, consolida</p>
            </div>
          </motion.div>

          <Connector vertical color={`${COLORS.orch}50`} length={24} />

          {/* Specialist row */}
          <div className="flex items-end gap-6 mb-1">
            <AgentNode label="Analista" sub="Requisitos" color={COLORS.spec} icon="file-text" delay={0.1} />
            <AgentNode label="Arquiteto" sub="Design" color={COLORS.spec} icon="layers" delay={0.15} />
            <AgentNode label="Docs" sub="Documentação" color={COLORS.spec} icon="book-open" delay={0.2} />
          </div>

          <Connector vertical color={`${COLORS.spec}40`} length={20} />

          {/* Dev block */}
          <ParallelBlock
            label="Desenvolvimento"
            color={COLORS.dev}
            agents={[
              { icon: 'lock', name: 'Dev 1', sub: 'Módulo Auth' },
              { icon: 'database', name: 'Dev 2', sub: 'Módulo API' },
              { icon: 'monitor', name: 'Dev 3', sub: 'Módulo Front' },
            ]}
          />

          <Connector vertical color={`${COLORS.dev}40`} length={20} />

          {/* QA block */}
          <ParallelBlock
            label="Teste & QA"
            color={COLORS.qa}
            agents={[
              { icon: 'check-circle', name: 'QA 1', sub: 'Unitários' },
              { icon: 'git-merge', name: 'QA 2', sub: 'Integração' },
              { icon: 'play', name: 'QA 3', sub: 'E2E' },
            ]}
          />

          {/* Feedback arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-2 mt-3 text-[10px] text-gray-500 italic"
          >
            <Icon name="refresh-cw" size={12} className="text-gray-500" />
            QA reporta bugs → Dev corrige → QA retesta (loop automático)
          </motion.div>
        </div>

        {/* Right: Key concepts */}
        <div className="flex flex-col gap-4 lg:max-w-xs">
          {[
            { icon: 'cpu', color: COLORS.orch, title: 'Orquestrador', desc: 'Decide qual agente ativar, distribui tarefas, consolida resultados. Mantém visão global do projeto.' },
            { icon: 'user', color: COLORS.spec, title: 'Especialização', desc: 'Cada agente tem prompt, ferramentas e contexto próprios. O analista não programa; o dev não documenta.' },
            { icon: 'copy', color: COLORS.dev, title: 'Paralelismo', desc: 'Múltiplos agentes trabalham simultaneamente em módulos diferentes. 3 devs codificam 3 módulos ao mesmo tempo.' },
            { icon: 'refresh-cw', color: COLORS.qa, title: 'Feedback Loop', desc: 'QA encontra bug → reporta ao orquestrador → Dev recebe e corrige → QA retesta. Ciclo automático.' },
          ].map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="rounded-lg border p-3 bg-white/5"
              style={{ borderColor: `${c.color}30` }}
            >
              <div className="flex items-center gap-2 mb-1">
                <Icon name={c.icon} size={14} style={{ color: c.color }} />
                <span className="text-sm font-bold text-white">{c.title}</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
