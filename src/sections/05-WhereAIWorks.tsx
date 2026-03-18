import { motion } from 'framer-motion'
import Section from '../components/Section'
import Icon from '../components/Icon'

const CATEGORIES = [
  {
    icon: 'eye',
    title: 'Design e Prototipação',
    description: 'De croqui a render fotorrealista em <30s. Mercado de IA generativa em arquitetura: US$ 1,5 bi (2025) → US$ 5,9 bi (2029).',
    color: '#00B4D8',
    stat: '<30s',
    statLabel: 'sketch → render',
    url: 'https://www.chaos.com/veras',
    source: 'Chaos/Veras, PromeAI, Rendair',
  },
  {
    icon: 'check-square',
    title: 'Conformidade e Normas',
    description: '93% de precisão na verificação automática de códigos de construção. UpCodes, CodeComply.AI e Blitz AI já atuam nos EUA.',
    color: '#2DC653',
    stat: '93%',
    statLabel: 'precisão',
    url: 'https://www.buildingenclosureonline.com/articles/94432-upcodes-unveils-copilot-intelligence',
    source: 'Building Enclosure Online, 2025',
  },
  {
    icon: 'file-text',
    title: 'Orçamentos e Takeoff',
    description: 'Até 90% de redução no tempo de medição. Beam AI com ±1% de precisão em quantitativos de aço e concreto.',
    color: '#FF6B35',
    stat: '90%',
    statLabel: 'redução tempo',
    url: 'https://www.ibeam.ai/ai-takeoff-software',
    source: 'Beam AI',
  },
  {
    icon: 'camera',
    title: 'Inspeção e Monitoramento',
    description: 'Drones + IA + LiDAR: detecção multiclasse de fissuras, corrosão e deformações. Doxel aumentou produtividade em 38%.',
    color: '#6B48FF',
    stat: '+38%',
    statLabel: 'produtividade',
    url: 'https://spectrum.ieee.org/doxel-ai-startup-using-lidar-equipped-robots-on-construction-sites',
    source: 'IEEE Spectrum / Doxel',
  },
  {
    icon: 'zap',
    title: 'Energia e Cronogramas',
    description: 'DeepMind reduziu cooling em -40%. ALICE Technologies economizou 42 dias em projeto Suffolk. Digital Twins para otimização contínua.',
    color: '#0047AB',
    stat: '-40%',
    statLabel: 'energia cooling',
    url: 'https://deepmind.google/discover/blog/deepmind-ai-reduces-google-data-centre-cooling-bill-by-40/',
    source: 'Google DeepMind, 2016',
  },
]

export default function WhereAIWorks() {
  return (
    <Section id="where-ai-works" title="Onde a IA JÁ Funciona na Engenharia" subtitle="Do design à operação — resultados comprovados com fontes verificáveis" dark>
      {/* Market stat */}
      <div className="mb-8 text-center">
        <span className="text-xs text-gray-500">Mercado IA em construção: </span>
        <span className="text-sm font-bold text-white">US$ 3,93 bi (2024) → US$ 22,68 bi (2032)</span>
        <span className="text-xs text-gray-500"> — </span>
        <a href="https://www.fortunebusinessinsights.com/ai-in-construction-market-109848" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 underline hover:text-city-cyan transition-colors">
          Fortune Business Insights
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CATEGORIES.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/5 rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-colors flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${cat.color}20` }}>
                <Icon name={cat.icon} size={24} style={{ color: cat.color }} />
              </div>
              <h3 className="text-lg font-bold text-white">{cat.title}</h3>
            </div>

            <div className="mb-4">
              <span className="text-3xl font-extrabold" style={{ color: cat.color }}>{cat.stat}</span>
              <span className="text-sm text-gray-400 ml-2">{cat.statLabel}</span>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed flex-1">{cat.description}</p>

            <a
              href={cat.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-3 text-xs text-gray-500 hover:text-city-cyan transition-colors"
            >
              <Icon name="external-link" size={10} />
              {cat.source}
            </a>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
