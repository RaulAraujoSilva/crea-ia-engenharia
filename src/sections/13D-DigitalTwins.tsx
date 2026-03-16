import { motion } from 'framer-motion'
import Section from '../components/Section'

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
      <div className="grid grid-cols-4 gap-3 mb-8">
        {marketStats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-gradient-to-br from-city-blue/5 to-city-cyan/5 rounded-xl border border-city-blue/10 p-3 text-center"
          >
            <p className="text-xl font-extrabold text-city-blue">{s.value}</p>
            <p className="text-[10px] text-gray-500 mt-1">{s.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Platform cards - compact 2-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {platforms.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="group block rounded-xl overflow-hidden border border-gray-200 hover:border-city-blue hover:shadow-lg transition-all"
          >
            <div className="h-28 overflow-hidden bg-gray-100">
              <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="p-3">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-bold text-sm text-city-navy">{p.name}</h4>
                <span className="text-[9px] font-bold text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded-full">{p.scale}</span>
              </div>
              <p className="text-xs text-city-blue font-semibold mb-1">{p.case}</p>
              <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">{p.desc}</p>
              <span className="text-sm font-extrabold mt-1 inline-block" style={{ color: p.metricColor }}>{p.metric}</span>
            </div>
          </motion.a>
        ))}
      </div>

    </Section>
  )
}
