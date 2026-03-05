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
  {
    title: 'Analise vs Codigo de Postura',
    subtitle: 'Projeto → Verificacao de conformidade Niteroi',
    icon: 'shield',
    color: '#2DC653',
    aiTool: 'Claude + RAG',
    timeEstimate: '~3 minutos',
    beforeImage: './img/pratica/03-projeto-entrada.png',
    beforeLabel: 'Projeto arquitetonico',
    afterImage: './img/pratica/03-analise-saida.png',
    afterLabel: 'Relatorio de conformidade',
    description:
      'Alimentamos a IA com a Lei Urbanistica de Niteroi (Lei 3905/2024) '
      + 'e pedimos para analisar um projeto contra os requisitos municipais: '
      + 'afastamentos, gabarito, taxa de ocupacao, permeabilidade e vagas. '
      + 'O resultado mostra conformidades e nao-conformidades.',
    promptUsed:
      'Com base na Lei Urbanistica de Niteroi (Lei 3905/2024), analise '
      + 'este projeto e verifique: 1) Afastamentos frontais e laterais, '
      + '2) Gabarito maximo, 3) Taxa de ocupacao, 4) Taxa de '
      + 'impermeabilizacao, 5) Numero de vagas exigidas. Liste '
      + 'conformidades e nao-conformidades encontradas.',
    discussionPoint:
      'A IA identificou corretamente as exigencias municipais? '
      + 'Confundiu algum parametro? Lembre-se: legislacao municipal '
      + 'brasileira e um ponto fraco de LLMs treinados em dados globais.',
  },
  {
    title: 'Infograficos com IA',
    subtitle: 'Conceito tecnico → Diagrama explicativo',
    icon: 'layers',
    color: '#FF6B35',
    aiTool: 'Google Gemini',
    timeEstimate: '~15 segundos',
    beforeImage: './img/pratica/04-conceito-entrada.png',
    beforeLabel: 'Descricao do conceito',
    afterImage: './img/pratica/04-infografico-saida.png',
    afterLabel: 'Infografico gerado',
    description:
      'Usando o gerador de imagens do Google Gemini, criamos '
      + 'infograficos explicativos sobre conceitos de engenharia. '
      + 'Neste exemplo: as 6 etapas de um projeto de engenharia, '
      + 'do estudo preliminar ao as-built.',
    promptUsed:
      'Gere um infografico profissional em portugues brasileiro '
      + 'explicando as "Etapas de um Projeto de Engenharia". Mostre 6 '
      + 'etapas numeradas: Estudo Preliminar, Anteprojeto, Projeto Legal, '
      + 'Projeto Executivo, Execucao da Obra, As Built. Design moderno '
      + 'flat, cores azul e cinza, fundo branco.',
    discussionPoint:
      'O infografico e tecnicamente correto ou so "bonito"? '
      + 'Os rotulos em portugues estao certos? '
      + 'Para apresentacoes e material didatico, isso ja e util?',
  },
]

export default function PracticalExamples() {
  return (
    <Section
      id="practical-examples"
      title="IA na Pratica"
      subtitle="4 exemplos reais, feitos agora, com ferramentas acessiveis"
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
