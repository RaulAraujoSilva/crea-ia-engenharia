import Section from '../components/Section'
import ToolCard from '../components/ToolCard'
import TimelineStep from '../components/TimelineStep'

const TOOLS = [
  {
    name: 'ChatGPT',
    url: 'https://chat.openai.com',
    icon: 'message-square',
    color: '#2DC653',
    priceLabel: 'Gratuito / Plus US$20',
    description: 'Assistente conversacional de uso geral da OpenAI.',
    useCase: 'Redigir memoriais descritivos, ANS, relatórios técnicos. Pedir para formatar em ABNT.',
    tip: 'Você é um engenheiro civil. Revise este memorial descritivo [cole o texto] e aponte inconsistências técnicas.',
  },
  {
    name: 'Claude (Anthropic)',
    url: 'https://claude.ai',
    icon: 'cpu',
    color: '#0047AB',
    priceLabel: 'Gratuito / Pro US$20',
    description: 'IA da Anthropic com foco em análise de documentos longos.',
    useCase: 'Análise de documentos longos (PDFs de normas, contratos). Upload de até 5 PDFs no plano gratuito.',
    tip: 'Leia esta norma e liste os requisitos aplicáveis a uma estrutura de concreto armado em zona urbana.',
  },
  {
    name: 'UpCodes',
    url: 'https://up.codes',
    icon: 'check-square',
    color: '#FF6B35',
    priceLabel: 'Trial gratuito',
    description: 'Plataforma de verificação de conformidade com códigos de construção.',
    useCase: 'Verificação de conformidade com Building Codes internacionais. Base: IBC, NFPA, ASHRAE.',
    tip: 'Pesquisar: "IRC 2021 - stair riser height" — resultado instantâneo com seção e texto original.',
  },
  {
    name: 'Togal.AI',
    url: 'https://togal.ai',
    icon: 'file-text',
    color: '#6B48FF',
    priceLabel: 'Trial 14 dias',
    description: 'IA para extração automática de quantitativos a partir de plantas.',
    useCase: 'Upload de planta em PDF — extração automática de áreas. 76% mais rápido que takeoff manual.',
    tip: 'Testar com uma planta simples primeiro. Compare o resultado com sua medição manual.',
  },
  {
    name: 'Perplexity AI',
    url: 'https://perplexity.ai',
    icon: 'search',
    color: '#00B4D8',
    priceLabel: 'Gratuito / Pro US$20',
    description: 'Motor de pesquisa com IA que cita as fontes.',
    useCase: 'Pesquisa técnica com fontes citadas. Busca em papers, normas e literatura técnica.',
    tip: 'Quais são os últimos estudos sobre corrosão em estruturas de aço em ambiente marinho?',
  },
  {
    name: 'Gamma.app',
    url: 'https://gamma.app',
    icon: 'monitor',
    color: '#FF6B35',
    priceLabel: 'Gratuito (40 créditos)',
    description: 'Criação de apresentações e documentos com IA.',
    useCase: 'Apresentações de projeto, relatórios de inspeção e propostas técnicas em minutos.',
    tip: 'Crie uma apresentação sobre os resultados da inspeção estrutural do edifício X com estes dados: [cole os dados].',
  },
]

const PLAN_STEPS = [
  {
    title: 'Escolha 1 ferramenta',
    period: 'Semana 1',
    items: ['Instale ou crie conta em uma das ferramentas acima', 'Use 30 minutos por dia para explorar', 'Comece com uma tarefa que você já sabe fazer manualmente'],
    color: '#2DC653',
  },
  {
    title: 'Aplique em projeto real',
    period: 'Semana 2',
    items: ['Use a ferramenta em um projeto real do seu escritório', 'Compare o resultado com o método manual', 'Documente erros e acertos'],
    color: '#00B4D8',
  },
  {
    title: 'Compartilhe com a equipe',
    period: 'Semana 3',
    items: ['Apresente os resultados para colegas', 'Identifique outros processos que podem ser otimizados', 'Estabeleça regras de verificação'],
    color: '#6B48FF',
  },
  {
    title: 'Automatize 1 processo',
    period: 'Semana 4',
    items: ['Defina 1 processo que será automatizado permanentemente', 'Crie um fluxo padrão com IA como ferramenta auxiliar', 'Documente o antes e depois com métricas'],
    color: '#0047AB',
  },
]

export default function ToolsToTry() {
  return (
    <Section id="tools-to-try" title="Ferramentas para Testar Hoje" subtitle="Seu kit de início — todas com plano gratuito ou trial">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {TOOLS.map(tool => <ToolCard key={tool.name} {...tool} />)}
      </div>

      <div className="bg-city-navy/5 rounded-2xl p-8">
        <h3 className="text-xl font-bold text-city-navy mb-6">Plano de 30 Dias para Integrar IA</h3>
        {PLAN_STEPS.map((step, i) => (
          <TimelineStep key={i} step={i} {...step} isLast={i === PLAN_STEPS.length - 1} />
        ))}
      </div>
    </Section>
  )
}
