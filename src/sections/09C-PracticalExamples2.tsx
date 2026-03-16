import { motion } from 'framer-motion'
import Section from '../components/Section'
import BeforeAfterCard from '../components/BeforeAfterCard'

const EXAMPLES = [
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
      + 'afastamentos, gabarito, taxa de ocupacao, permeabilidade e vagas.',
    promptUsed:
      'Com base na Lei Urbanistica de Niteroi (Lei 3905/2024), analise '
      + 'este projeto e verifique: afastamentos, gabarito, taxa de ocupacao, '
      + 'impermeabilizacao e vagas exigidas.',
    discussionPoint:
      'A IA identificou corretamente as exigencias municipais? '
      + 'Legislacao municipal brasileira e um ponto fraco de LLMs globais.',
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
      + 'Neste exemplo: as 6 etapas de um projeto de engenharia.',
    promptUsed:
      'Gere um infografico profissional em portugues brasileiro '
      + 'explicando as "Etapas de um Projeto de Engenharia". 6 etapas: '
      + 'Estudo Preliminar, Anteprojeto, Projeto Legal, Projeto Executivo, '
      + 'Execucao da Obra, As Built.',
    discussionPoint:
      'O infografico e tecnicamente correto ou so "bonito"? '
      + 'Para apresentacoes e material didatico, isso ja e util?',
  },
]

export default function PracticalExamples2() {
  return (
    <Section
      id="practical-examples-2"
      title="IA na Pratica (cont.)"
      subtitle="Conformidade e infograficos gerados por IA"
      dark
    >
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
