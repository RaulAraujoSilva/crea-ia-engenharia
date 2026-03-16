import { motion } from 'framer-motion'
import Section from '../components/Section'
import Icon from '../components/Icon'

const platforms = [
  {
    name: 'NVIDIA Omniverse',
    case: 'BMW — Fábricas digitais',
    desc: 'BMW usa Omniverse para simular fábricas inteiras (>1M m²) antes da construção. 30% de redução nos custos de planejamento.',
    metric: '-30% custos',
    metricColor: '#2DC653',
    img: './img/frontier/dt-nvidia-bmw.jpg',
    url: 'https://www.nvidia.com/en-us/omniverse/',
    scale: 'Fábrica',
  },
  {
    name: 'Bentley iTwin',
    case: 'Infraestrutura global',
    desc: 'Precisão milimétrica para pontes, rodovias e redes de utilidades. Integração com Omniverse para visualização imersiva.',
    metric: 'Precisão mm',
    metricColor: '#0047AB',
    img: './img/frontier/dt-bentley.jpg',
    url: 'https://www.bentley.com/software/itwin-platform/',
    scale: 'Infraestrutura',
  },
  {
    name: 'Siemens Xcelerator',
    case: 'Usinas de energia',
    desc: 'Manutenção preditiva de turbinas e usinas. Detecta anomalias semanas antes de falhas, reduzindo paradas não programadas.',
    metric: '-40% paradas',
    metricColor: '#FF6B35',
    img: './img/frontier/dt-siemens.jpg',
    url: 'https://xcelerator.siemens.com/',
    scale: 'Indústria',
  },
  {
    name: 'Azure Digital Twins',
    case: 'Microsoft Campus',
    desc: 'Campus inteiro modelado com sensores IoT. 20-30% de economia em energia com otimização por IA. Integração com Copilot.',
    metric: '-30% energia',
    metricColor: '#00B4D8',
    img: './img/frontier/dt-azure.jpg',
    url: 'https://azure.microsoft.com/en-us/products/digital-twins',
    scale: 'Edifício',
  },
  {
    name: 'Dassault 3DEXPERIENCity',
    case: 'Virtual Singapore',
    desc: 'Primeiro digital twin de um país inteiro. 45M de usuários na plataforma. Usado para planejamento urbano, defesa civil e sustentabilidade.',
    metric: '45M usuários',
    metricColor: '#6B48FF',
    img: './img/frontier/dt-dassault-singapore.jpg',
    url: 'https://www.3ds.com/industries/cities-territories-communities',
    scale: 'Cidade/País',
  },
]

const comparison = [
  { aspect: 'Dados', traditional: 'Estáticos (modelos 3D)', ai: 'Tempo real (IoT + sensores)' },
  { aspect: 'Análise', traditional: 'Manual, periódica', ai: 'Contínua, preditiva' },
  { aspect: 'Manutenção', traditional: 'Corretiva ou preventiva', ai: 'Preditiva (semanas antes)' },
  { aspect: 'Otimização', traditional: 'Trial and error', ai: 'Automática por ML/RL' },
  { aspect: 'Escala', traditional: 'Edifício individual', ai: 'Fábrica → cidade → país' },
]

const marketStats = [
  { value: 'US$ 4 bi', label: 'Mercado global 2024' },
  { value: 'US$ 35+ bi', label: 'Projeção 2028' },
  { value: '20-40%', label: 'Redução custos manutenção' },
  { value: '15-25%', label: 'Melhoria uptime' },
]

export default function DigitalTwins() {
  return (
    <Section id="digital-twins" title="Digital Twins: Plataformas" subtitle="Do edifício à fábrica — monitoramento e simulação em tempo real">
      {/* Market stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {marketStats.map((s, i) => (
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

      {/* Platform cards */}
      <div className="space-y-4 mb-12">
        {platforms.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group flex flex-col md:flex-row gap-4 bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-city-blue hover:shadow-xl transition-all"
          >
            <div className="md:w-56 h-40 md:h-auto overflow-hidden bg-gray-100 shrink-0">
              <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="p-5 flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h4 className="font-bold text-city-navy text-lg">{p.name}</h4>
                <span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">{p.scale}</span>
              </div>
              <p className="text-sm font-semibold text-city-blue mb-2">{p.case}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
              <div className="mt-3 inline-flex items-center gap-2">
                <span className="text-lg font-extrabold" style={{ color: p.metricColor }}>{p.metric}</span>
                <Icon name="external-link" size={12} className="text-gray-400 group-hover:text-city-blue transition-colors" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Comparison table */}
      <h3 className="text-xl font-bold text-city-navy mb-4">Digital Twin Tradicional vs com IA</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-city-navy text-white">
              <th className="p-3 text-left rounded-tl-xl">Aspecto</th>
              <th className="p-3 text-left">Tradicional</th>
              <th className="p-3 text-left rounded-tr-xl">Com IA</th>
            </tr>
          </thead>
          <tbody>
            {comparison.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="p-3 font-semibold text-city-navy">{row.aspect}</td>
                <td className="p-3 text-gray-600">{row.traditional}</td>
                <td className="p-3 text-city-blue font-medium">{row.ai}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  )
}
