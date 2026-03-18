import { motion } from 'framer-motion'
import Section from '../components/Section'
import CaseCard from '../components/CaseCard'

const marketStats = [
  { value: 'US$ 4 bi', label: 'Mercado global 2024' },
  { value: 'US$ 35+ bi', label: 'Projeção 2028' },
  { value: '20-40%', label: 'Redução custos manutenção' },
  { value: '15-25%', label: 'Melhoria uptime' },
]

const CASES = [
  {
    city: 'NVIDIA Omniverse',
    country: 'Fábricas digitais — BMW',
    color: '#2DC653',
    highlight: '-30% custos planejamento',
    image: './img/frontier/dt-nvidia-bmw.jpg',
    sourceUrl: 'https://www.nvidia.com/en-us/omniverse/',
    sourceLabel: 'nvidia.com/omniverse',
    metrics: [
      { value: 'BMW', label: 'fábricas digitais' },
      { value: '1M+ m²', label: 'área modelada' },
      { value: '-30%', label: 'custos planejamento' },
      { value: 'USD/PhysX', label: 'simulação física' },
    ],
    description: 'BMW usa Omniverse para simular fábricas inteiras antes da construção.',
  },
  {
    city: 'Bentley iTwin',
    country: 'Infraestrutura global',
    color: '#0047AB',
    highlight: 'Precisão milimétrica',
    image: './img/frontier/dt-bentley.jpg',
    sourceUrl: 'https://www.bentley.com/software/itwin-platform/',
    sourceLabel: 'bentley.com/itwin',
    metrics: [
      { value: 'mm', label: 'precisão milimétrica' },
      { value: 'infraestrutura', label: 'pontes/estradas' },
      { value: 'Omniverse', label: 'integração' },
      { value: 'IFC', label: 'padrão aberto' },
    ],
    description: 'Precisão milimétrica para pontes, rodovias e redes de utilidades. Integração com Omniverse.',
  },
  {
    city: 'Siemens Xcelerator',
    country: 'Usinas de energia',
    color: '#FF6B35',
    highlight: '-40% paradas não programadas',
    image: './img/frontier/dt-siemens.jpg',
    sourceUrl: 'https://xcelerator.siemens.com/',
    sourceLabel: 'xcelerator.siemens.com',
    metrics: [
      { value: 'turbinas', label: 'manutenção preditiva' },
      { value: '-40%', label: 'paradas não programadas' },
      { value: 'usinas', label: 'energia' },
      { value: 'IoT', label: 'sensores integrados' },
    ],
    description: 'Manutenção preditiva de turbinas. Detecta anomalias semanas antes de falhas.',
  },
  {
    city: 'Azure Digital Twins',
    country: 'Microsoft Campus',
    color: '#00B4D8',
    highlight: '-30% energia',
    image: './img/frontier/dt-azure.jpg',
    sourceUrl: 'https://azure.microsoft.com/en-us/products/digital-twins',
    sourceLabel: 'azure.microsoft.com',
    metrics: [
      { value: 'Microsoft', label: 'campus inteligente' },
      { value: '-30%', label: 'economia energia' },
      { value: 'IoT', label: 'sensores conectados' },
      { value: 'Copilot', label: 'integração' },
    ],
    description: 'Campus inteiro modelado com sensores IoT. Otimização por IA com integração Copilot.',
  },
  {
    city: 'Dassault 3DEXPERIENCity',
    country: 'Virtual Singapore',
    color: '#6B48FF',
    highlight: '45M usuários',
    image: './img/frontier/dt-dassault-singapore.jpg',
    sourceUrl: 'https://www.3ds.com/industries/cities-territories-communities',
    sourceLabel: '3ds.com',
    metrics: [
      { value: '45M', label: 'usuários (Singapore)' },
      { value: 'país', label: 'escala nacional' },
      { value: 'defesa civil', label: 'simulação' },
      { value: 'carbono', label: 'sustentabilidade' },
    ],
    description: 'Primeiro digital twin de país inteiro. Planejamento urbano, defesa civil e sustentabilidade.',
  },
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

      {/* Platform cards with CaseCard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {CASES.map(c => <CaseCard key={c.city} {...c} />)}
      </div>
    </Section>
  )
}
