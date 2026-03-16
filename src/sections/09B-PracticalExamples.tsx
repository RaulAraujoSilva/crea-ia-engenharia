import { motion } from 'framer-motion'
import Section from '../components/Section'
import BeforeAfterCard from '../components/BeforeAfterCard'
import Icon from '../components/Icon'

const EXAMPLES = [
  {
    title: 'Prototipacao Rapida',
    subtitle: 'Croqui a lapis → Render fotorrealista',
    icon: 'camera',
    color: '#6B48FF',
    aiTool: 'Gemini + GPT',
    timeEstimate: '~30 segundos',
    beforeImage: './img/pratica/01-croqui-entrada.png',
    beforeLabel: 'Croqui a mao livre',
    afterImage: './img/pratica/01-render-gemini.png',
    afterLabel: 'Render via Gemini',
    afterImage2: './img/pratica/01-render-gpt.png',
    afterLabel2: 'Render via GPT-4o',
    description:
      'A partir de um simples croqui a lapis, a IA gera uma visualizacao '
      + 'arquitetonica fotorrealista em segundos. Comparamos dois modelos: '
      + 'Gemini Image Generation e GPT Image, ambos partindo do mesmo rascunho.',
    promptUsed:
      'Transform this pencil architectural sketch into a photorealistic '
      + 'rendering. Maintain the exact proportions, add realistic materials '
      + '(concrete, glass, wood), natural lighting (golden hour), and '
      + 'surrounding urban landscape with tropical vegetation.',
    discussionPoint:
      'A IA inventou detalhes que nao estavam no croqui? '
      + 'Compare as interpretacoes dos dois modelos. '
      + 'Isso substitui um renderista ou acelera o briefing inicial?',
  },
  {
    title: 'Planta → Estudo PGE',
    subtitle: 'Planta baixa → Estudo tecnico preliminar',
    icon: 'file-text',
    color: '#0047AB',
    aiTool: 'Claude + Vision',
    timeEstimate: '~2 minutos',
    beforeImage: './img/pratica/02-planta-entrada.png',
    beforeLabel: 'Planta baixa residencial',
    afterImage: './img/pratica/02-pge-saida.png',
    afterLabel: 'Relatorio PGE gerado',
    description:
      'A IA analisa uma planta baixa em imagem, extrai areas, '
      + 'identifica ambientes e gera um estudo tecnico preliminar no formato '
      + 'Projeto Legal (NBR 6492:2021) usado no Rio de Janeiro, incluindo '
      + 'quadro de areas, taxa de ocupacao e classificacao de uso.',
    promptUsed:
      'Analise esta planta baixa residencial. Identifique todos os '
      + 'ambientes, calcule areas aproximadas, e gere um estudo tecnico '
      + 'preliminar no formato PGE do Rio de Janeiro, incluindo: quadro de '
      + 'areas, taxa de ocupacao, coeficiente de aproveitamento e '
      + 'classificacao de uso.',
    discussionPoint:
      'As areas calculadas pela IA conferem com a medicao manual? '
      + 'O formato PGE esta correto? Isso serve como primeira versao '
      + 'para o engenheiro refinar ou e perigoso confiar?',
  },
]

export default function PracticalExamples() {
  return (
    <Section
      id="practical-examples"
      title="IA na Pratica"
      subtitle="Exemplos reais, feitos ao vivo, com ferramentas acessiveis"
      dark
    >
      {/* Intro pill */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-10 flex items-center gap-3 bg-white/10 rounded-full px-5 py-3 w-fit backdrop-blur-sm"
      >
        <Icon name="play" size={18} className="text-city-cyan" />
        <p className="text-sm text-gray-300">
          Todos os exemplos abaixo foram gerados ao vivo com IA — entrada real, saida real, sem edicao.
        </p>
      </motion.div>

      {/* Cards grid: 2x2 on desktop, 1 col on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {EXAMPLES.map((ex, i) => (
          <motion.div
            key={ex.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <BeforeAfterCard {...ex} />
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
