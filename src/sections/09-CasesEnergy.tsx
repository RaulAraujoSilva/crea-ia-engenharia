import Section from '../components/Section'
import CaseCard from '../components/CaseCard'


const CASES = [
  {
    city: 'Google DeepMind',
    country: 'Eficiência Energética — Global',
    color: '#0047AB',
    highlight: '-40% custo de resfriamento',
    image: './img/sources/deepmind-cooling.png',
    sourceUrl: 'https://deepmind.google/blog/deepmind-ai-reduces-google-data-centre-cooling-bill-by-40/',
    sourceLabel: 'DeepMind Blog',
    metrics: [
      { value: '-40%', label: 'custo de cooling' },
      { value: '-15%', label: 'consumo total PUE' },
      { value: 'RL', label: 'Reinforcement Learning' },
      { value: '2016+', label: 'em produção' },
    ],
    description: 'Sistema de Reinforcement Learning controla resfriamento de data centers. Redução de 40% no custo de cooling e 15% no consumo total. Em produção autônoma desde 2016.',
  },
  {
    city: 'ALICE Technologies',
    country: 'Planejamento de Obras — EUA',
    color: '#2DC653',
    highlight: '42 dias economizados',
    image: './img/sources/alice-tech.png',
    sourceUrl: 'https://blog.alicetechnologies.com/case-studies/how-alice-helped-suffolk-construction-to-optimize-key-milestones-on-a-life-sciences-project',
    sourceLabel: 'ALICE Blog — Suffolk',
    metrics: [
      { value: '42 dias', label: 'economizados (Suffolk)' },
      { value: '600M+', label: 'cenários simulados' },
      { value: '-17%', label: 'duração do projeto' },
      { value: '4D BIM', label: 'integração' },
    ],
    description: 'Otimiza cronogramas simulando 600+ milhões de cenários. Case Suffolk Construction: 42 dias economizados em projeto de ciências da vida.',
  },
  {
    city: 'Autodesk Forma',
    country: 'Projeto Sustentável — Global',
    color: '#FF6B35',
    highlight: 'Prêmio Arch. Record 2025',
    image: './img/sources/autodesk-forma.png',
    sourceUrl: 'https://blogs.autodesk.com/forma/2025/09/16/introducing-forma-building-design/',
    sourceLabel: 'Autodesk Blog',
    metrics: [
      { value: '2025', label: 'Arch. Record Award' },
      { value: 'solar', label: 'análise automática' },
      { value: 'vento', label: 'simulação CFD' },
      { value: 'Neural CAD', label: 'plantas geradas' },
    ],
    description: 'Plataforma de projeto com análise automática de desempenho solar, vento e conforto. Neural CAD gera plantas com unidades a partir de estudo de massa.',
  },
]


export default function CasesEnergy() {
  return (
    <Section id="cases-energy" title="Cases: Energia, Cronogramas e Design" subtitle="Da otimização de data centers ao planejamento de obras">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CASES.map(c => <CaseCard key={c.city} {...c} />)}
      </div>
    </Section>
  )
}
