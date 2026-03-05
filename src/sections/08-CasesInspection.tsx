import { motion } from 'framer-motion'
import Section from '../components/Section'
import CaseCard from '../components/CaseCard'
import SourceCard from '../components/SourceCard'
import Icon from '../components/Icon'

const CASES = [
  {
    city: 'Inspekt AI',
    country: 'Inspeção Estrutural — Global',
    color: '#FF6B35',
    highlight: 'Gêmeo Digital + Detecção',
    image: './img/sources/inspekt-ai.png',
    sourceUrl: 'https://inspektai.com/defect-analysis-dashboard/',
    sourceLabel: 'inspektai.com',
    metrics: [
      { value: 'multi', label: 'tipos de defeito' },
      { value: '3D', label: 'gêmeo digital' },
      { value: 'drones', label: 'inspeção aérea' },
      { value: 'auto', label: 'relatório gerado' },
    ],
    description: 'Combina drones com IA para detecção de múltiplas classes de defeitos (fissuras, corrosão, eflorescência) e gera gêmeo digital 3D com defeitos mapeados por localização.',
  },
  {
    city: 'Doxel',
    country: 'Monitoramento de Obra — EUA',
    color: '#6B48FF',
    highlight: '+38% produtividade',
    image: './img/sources/doxel-ieee.png',
    sourceUrl: 'https://spectrum.ieee.org/doxel-ai-startup-using-lidar-equipped-robots-on-construction-sites',
    sourceLabel: 'IEEE Spectrum',
    metrics: [
      { value: '+38%', label: 'produtividade' },
      { value: '-11%', label: 'desvio orçamento' },
      { value: 'Kaiser', label: 'Permanente (case)' },
      { value: 'LiDAR', label: 'tecnologia' },
    ],
    description: 'Robôs com LiDAR percorrem obras diariamente, comparando progresso real com modelo BIM. Case Kaiser Permanente: +38% de produtividade e 11% abaixo do orçamento.',
  },
]

const FLOW_STEPS = [
  { icon: 'camera', label: 'Drone / Robô', color: '#FF6B35' },
  { icon: 'cpu', label: 'IA processa', color: '#6B48FF' },
  { icon: 'file-text', label: 'Relatório', color: '#00B4D8' },
  { icon: 'layers', label: 'BIM atualizado', color: '#2DC653' },
]

export default function CasesInspection() {
  return (
    <Section id="cases-inspection" title="Cases: Inspeção Estrutural" subtitle="Drones + IA + LiDAR: o futuro da inspeção já chegou">
      {/* Flow diagram */}
      <div className="flex items-center justify-center gap-2 md:gap-4 mb-10 flex-wrap">
        {FLOW_STEPS.map((step, i) => (
          <div key={i} className="flex items-center gap-2 md:gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${step.color}15` }}>
                <Icon name={step.icon} size={24} style={{ color: step.color }} />
              </div>
              <p className="text-xs font-semibold mt-2 text-city-navy">{step.label}</p>
            </motion.div>
            {i < FLOW_STEPS.length - 1 && (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" className="shrink-0">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {CASES.map(c => <CaseCard key={c.city} {...c} />)}
      </div>

      <h3 className="text-lg font-bold text-city-navy mb-4">Fontes</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SourceCard title="Inspekt AI — Dashboard" url="https://inspektai.com/defect-analysis-dashboard/" type="platform" description="Dashboard de análise de defeitos com IA" />
        <SourceCard title="IEEE Spectrum — Doxel" url="https://spectrum.ieee.org/doxel-ai-startup-using-lidar-equipped-robots-on-construction-sites" type="news" description="Robôs com IA em canteiros de obra" />
      </div>
    </Section>
  )
}
