import Section from '../components/Section'
import CaseCard from '../components/CaseCard'


const CASES = [
  {
    city: 'UpCodes Copilot',
    country: 'Verificação de Normas — EUA',
    color: '#2DC653',
    highlight: '93% de precisão',
    image: './img/sources/upcodes.png',
    sourceUrl: 'https://up.codes/features/ai',
    sourceLabel: 'up.codes/features/ai',
    metrics: [
      { value: '93%', label: 'precisão verificação' },
      { value: '15h/mês', label: 'tempo economizado' },
      { value: '1.200%', label: 'ROI reportado' },
      { value: 'IBC/NEC', label: 'códigos suportados' },
    ],
    description: 'Assistente de IA para verificação de conformidade com International Building Code e 80+ outros códigos. Engenheiros e arquitetos ganham 15h/mês e reportam ROI de 1.200%.',
  },
  {
    city: 'CodeComply.AI',
    country: 'Análise Automática — EUA/UK',
    color: '#00B4D8',
    highlight: '98% de precisão',
    image: './img/sources/codecomply.png',
    sourceUrl: 'https://codecomply.ai/',
    sourceLabel: 'codecomply.ai',
    metrics: [
      { value: '98%', label: 'precisão' },
      { value: '60+', label: 'verificações automáticas' },
      { value: 'minutos', label: 'vs horas manuais' },
      { value: 'PDF', label: 'análise de plantas' },
    ],
    description: 'Analisa plantas em PDF e identifica automaticamente mais de 60 tipos de não conformidades contra IBC, IPC, IMC, NFPA 101 e ADA.',
  },
  {
    city: 'Blitz AI',
    country: 'Aprovação de Projetos — EUA',
    color: '#6B48FF',
    highlight: 'Minutos vs Semanas',
    image: './img/sources/blitz-ai.png',
    sourceUrl: 'https://blitzpermits.ai/news/naples-florida-building-plan-review',
    sourceLabel: 'blitzpermits.ai',
    metrics: [
      { value: '5 estados', label: 'cobertura EUA' },
      { value: 'minutos', label: 'vs dias para revisão' },
      { value: 'US$ 514K', label: 'contrato Naples, FL' },
      { value: 'IRC/IBC', label: 'códigos suportados' },
    ],
    description: 'Plataforma AI-native para revisão e aprovação de alvarás de construção. Gera relatórios com redlines sobre plantas em minutos. Adotada por 5 estados americanos.',
  },
]


export default function CasesCompliance() {
  return (
    <Section id="cases-compliance" title="Cases: Conformidade e Normas" subtitle="Ferramentas que já verificam códigos de construção com IA">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CASES.map(c => <CaseCard key={c.city} {...c} />)}
      </div>
    </Section>
  )
}
