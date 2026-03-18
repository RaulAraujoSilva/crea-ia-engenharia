import { motion } from 'framer-motion'
import Section from '../components/Section'
import Icon from '../components/Icon'

const cities = [
  {
    name: 'Virtual Singapore',
    country: 'Singapura',
    desc: 'Primeiro digital twin de um país inteiro. Modelo 3D semântico com dados de tráfego, clima, energia e população em tempo real.',
    img: './img/frontier/dt-singapore.jpg',
    color: '#6B48FF',
    url: 'https://www.3ds.com/insights/customer-stories/virtual-singapore',
    source: '3ds.com/customer-stories',
    metrics: [
      { value: '45M', label: 'usuários' },
      { value: 'país', label: 'escala nacional' },
      { value: 'tempo real', label: 'tráfego/clima/energia' },
      { value: 'Dassault', label: 'plataforma' },
    ],
  },
  {
    name: 'Helsinki 3D',
    country: 'Finlândia',
    desc: 'Meta de carbono zero até 2035. Digital twin aberto ao público (CC BY 4.0). Simula impacto de novas construções.',
    img: './img/frontier/dt-helsinki.jpg',
    color: '#00B4D8',
    url: 'https://www.hel.fi/en/decision-making/information-on-helsinki/maps-and-geospatial-data/helsinki-3d',
    source: 'hel.fi/helsinki-3d',
    metrics: [
      { value: '2035', label: 'meta carbono zero' },
      { value: 'público', label: 'twin aberto' },
      { value: 'sombra/vento', label: 'simulação' },
      { value: 'construção', label: 'impacto previsto' },
    ],
  },
  {
    name: 'Zurique Digital Twin',
    country: 'Suíça',
    desc: 'Integra 25 departamentos municipais. 548 geodatasets abertos. Foco em clima urbano e infraestrutura verde.',
    img: './img/frontier/dt-zurich.jpg',
    color: '#2DC653',
    url: 'https://www.stadt-zuerich.ch/geodaten/',
    source: 'stadt-zuerich.ch/geodaten',
    metrics: [
      { value: '25', label: 'departamentos' },
      { value: '548', label: 'geodatasets abertos' },
      { value: 'clima', label: 'urbano' },
      { value: 'verde', label: 'infraestrutura' },
    ],
  },
  {
    name: 'Barcelona Supercomputing',
    country: 'Espanha',
    desc: 'Usa o supercomputador MareNostrum 5 para simulações urbanas de qualidade do ar e resiliência climática.',
    img: './img/frontier/dt-barcelona.jpg',
    color: '#FF6B35',
    url: 'https://www.bsc.es/news/bsc-news/bsc-develops-database-advance-towards-digital-twin-air-quality-barcelona',
    source: 'bsc.es/news',
    metrics: [
      { value: 'MareNostrum 5', label: 'supercomputador' },
      { value: '260 PFlops', label: 'GPU acelerado' },
      { value: 'qualidade ar', label: 'IA + sensores' },
      { value: 'resiliência', label: 'simulação urbana' },
    ],
  },
]

const useCases = [
  { icon: 'zap', label: 'Energia', desc: 'Otimizar consumo em tempo real com dados de sensores IoT', color: '#FF6B35' },
  { icon: 'shield', label: 'Resiliência', desc: 'Simular enchentes, incêndios e evacuações antes que aconteçam', color: '#C62828' },
  { icon: 'trending-up', label: 'Mobilidade', desc: 'Prever congestionamento e otimizar rotas de transporte público', color: '#0047AB' },
  { icon: 'globe', label: 'Sustentabilidade', desc: 'Medir pegada de carbono e planejar infraestrutura verde', color: '#2DC653' },
]

export default function DigitalTwinsCities() {
  return (
    <Section id="digital-twins-cities" title="Digital Twins: Cidades" subtitle="Do edifício à metrópole — o futuro do planejamento urbano" dark>
      {/* Use cases */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {useCases.map((uc, i) => (
          <motion.div
            key={uc.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/5 border border-white/10 rounded-xl p-4 text-center"
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-2" style={{ backgroundColor: `${uc.color}20` }}>
              <Icon name={uc.icon} size={20} style={{ color: uc.color }} />
            </div>
            <p className="font-bold text-sm text-white mb-1">{uc.label}</p>
            <p className="text-xs text-gray-400">{uc.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* City cards with metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cities.map((city, i) => (
          <motion.div
            key={city.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
          >
            <div className="h-36 overflow-hidden">
              <img src={city.img} alt={city.name} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: city.color }} />
                <h4 className="font-bold text-white text-lg">{city.name}</h4>
                <span className="text-[10px] font-bold text-gray-400 bg-white/10 px-2 py-0.5 rounded-full">{city.country}</span>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed mb-3">{city.desc}</p>

              {/* Metrics grid */}
              <div className="grid grid-cols-4 gap-2 mb-3">
                {city.metrics.map((m, j) => (
                  <div key={j} className="text-center rounded-lg py-1.5 px-1" style={{ backgroundColor: `${city.color}10` }}>
                    <div className="text-sm font-extrabold" style={{ color: city.color }}>{m.value}</div>
                    <p className="text-[9px] text-gray-400 mt-0.5">{m.label}</p>
                  </div>
                ))}
              </div>

              {/* Source link */}
              <a
                href={city.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-city-cyan transition-colors"
              >
                <Icon name="external-link" size={10} />
                {city.source}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
