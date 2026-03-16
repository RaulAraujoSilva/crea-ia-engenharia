import Section from '../components/Section'
import CaseCard from '../components/CaseCard'


const CASES = [
  {
    city: 'Beam AI (iBeam)',
    country: 'Orçamentos Estruturais — Global',
    color: '#00B4D8',
    highlight: '±1% de precisão',
    image: './img/sources/beam-ai.png',
    sourceUrl: 'https://www.ibeam.ai/',
    sourceLabel: 'ibeam.ai',
    metrics: [
      { value: '±1%', label: 'margem de erro' },
      { value: '90%', label: 'redução de tempo' },
      { value: '24-72h', label: 'entrega' },
      { value: 'aço/concreto', label: 'materiais' },
    ],
    description: 'IA para estimativa automática de quantitativos de aço e concreto. Precisão de ±1% comparada com métodos manuais, com 90% de redução no tempo de estimativa.',
  },
  {
    city: 'Togal.AI',
    country: 'Takeoff de Quantitativos — EUA',
    color: '#FF6B35',
    highlight: '76% mais rápido',
    image: './img/sources/togal-ai.png',
    sourceUrl: 'https://www.togal.ai/case-study/ku-study-togal-vs-ost',
    sourceLabel: 'Estudo Univ. Kansas',
    metrics: [
      { value: '76%', label: 'mais rápido (Univ. Kansas)' },
      { value: '98%+', label: 'precisão' },
      { value: '< 30min', label: 'por planta completa' },
      { value: 'PDF/CAD', label: 'formatos aceitos' },
    ],
    description: 'Estudo independente da Universidade do Kansas comprovou 76% de ganho de velocidade. Processa plantas em PDF e CAD para extração automática de áreas e quantidades.',
  },
  {
    city: 'DPR Construction',
    country: 'Construtora — EUA',
    color: '#2DC653',
    highlight: '90% menos tempo em takeoffs',
    sourceUrl: 'https://www.autodesk.com/blogs/construction/top-2025-ai-construction-trends-according-to-the-experts/',
    sourceLabel: 'Autodesk Blog',
    metrics: [
      { value: '90%', label: 'redução tempo takeoff' },
      { value: '2x', label: 'volume de licitações' },
      { value: 'ENR 20', label: 'Top construtoras EUA' },
      { value: '2023-25', label: 'implementação' },
    ],
    description: 'Uma das primeiras grandes construtoras a adotar IA em toda a cadeia. Redução de 90% no tempo de takeoff, volume de licitações dobrou após adoção.',
  },
]


export default function CasesTakeoff() {
  return (
    <Section id="cases-takeoff" title="Cases: Orçamentos e Takeoff" subtitle="IA que mede, quantifica e estima com precisão comprovada">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CASES.map(c => <CaseCard key={c.city} {...c} />)}
      </div>
    </Section>
  )
}
