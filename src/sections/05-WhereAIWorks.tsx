import { motion } from 'framer-motion'
import Section from '../components/Section'
import Icon from '../components/Icon'

const CATEGORIES = [
  {
    icon: 'check-square',
    title: 'Conformidade e Normas',
    description: '93% de precisão na verificação automática de códigos de construção. UpCodes, CodeComply.AI e Blitz AI já atuam nos EUA.',
    color: '#2DC653',
    stat: '93%',
    statLabel: 'precisão',
  },
  {
    icon: 'file-text',
    title: 'Orçamentos e Takeoff',
    description: '76% mais rápido que métodos tradicionais. Beam AI com ±1% de precisão em medições.',
    color: '#00B4D8',
    stat: '76%',
    statLabel: 'mais rápido',
  },
  {
    icon: 'camera',
    title: 'Inspeção Estrutural',
    description: 'Detecção multiclasse de fissuras, corrosão e deformações. Doxel aumentou produtividade em 38%.',
    color: '#FF6B35',
    stat: '+38%',
    statLabel: 'produtividade',
  },
  {
    icon: 'zap',
    title: 'Eficiência Energética',
    description: 'DeepMind reduziu consumo de resfriamento em data centers em 40%. Gêmeos digitais para otimização contínua.',
    color: '#6B48FF',
    stat: '-40%',
    statLabel: 'energia cooling',
  },
  {
    icon: 'route',
    title: 'Cronogramas e Logística',
    description: 'ALICE Technologies economizou 42 dias de prazo em projeto Suffolk Construction.',
    color: '#0047AB',
    stat: '42 dias',
    statLabel: 'economizados',
  },
]

export default function WhereAIWorks() {
  return (
    <Section id="where-ai-works" title="Onde a IA JÁ Funciona na Engenharia" subtitle="5 categorias com resultados comprovados e dados verificáveis" dark>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CATEGORIES.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/5 rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${cat.color}20` }}>
                <Icon name={cat.icon} size={24} style={{ color: cat.color }} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{cat.title}</h3>
              </div>
            </div>

            <div className="mb-4">
              <span className="text-3xl font-extrabold" style={{ color: cat.color }}>{cat.stat}</span>
              <span className="text-sm text-gray-400 ml-2">{cat.statLabel}</span>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed">{cat.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
