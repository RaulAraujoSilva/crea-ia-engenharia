import { motion } from 'framer-motion'
import Section from '../components/Section'
import Icon from '../components/Icon'

const EVENTS = [
  {
    year: '1943 / 1958',
    title: 'Rede Neural',
    era: 'Fundações',
    color: '#6B48FF',
    description: 'McCulloch & Pitts criaram o conceito matemático de rede neural (1943). Quinze anos depois, Rosenblatt construiu o Perceptron — a primeira máquina capaz de aprender empiricamente.',
    url: 'https://link.springer.com/article/10.1007/BF02478259',
    source: 'McCulloch & Pitts, 1943',
  },
  {
    year: '1986',
    title: 'Backpropagation',
    era: 'Fundações',
    color: '#6B48FF',
    description: 'Hinton e colegas provaram que redes de múltiplas camadas podiam corrigir seus próprios erros via retropropagação, viabilizando o Deep Learning moderno.',
    url: 'https://www.nature.com/articles/323533a0',
    source: 'Rumelhart, Hinton & Williams, Nature 1986',
  },
  {
    year: '1997',
    title: 'Deep Blue vs. Kasparov',
    era: 'IA Simbólica',
    color: '#0047AB',
    description: 'O supercomputador da IBM derrotou o campeão mundial de xadrez. O grande triunfo da computação de força bruta e da IA baseada em regras.',
    url: 'https://www.ibm.com/history/deep-blue',
    source: 'IBM, Maio de 1997',
  },
  {
    year: '2012',
    title: 'AlexNet — Explosão do Deep Learning',
    era: 'Deep Learning',
    color: '#2DC653',
    description: 'A AlexNet esmagou a concorrência no ImageNet, provando que redes profundas em GPUs superavam a engenharia de software tradicional.',
    url: 'https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks',
    source: 'Krizhevsky, Sutskever & Hinton, NIPS 2012',
  },
  {
    year: '2013',
    title: 'Atari por Reforço',
    era: 'Deep Learning',
    color: '#2DC653',
    description: 'A DeepMind combinou Deep Learning com Aprendizado por Reforço. A IA aprendeu sozinha a vencer jogos do Atari usando apenas pixels e pontuação.',
    url: 'https://arxiv.org/abs/1312.5602',
    source: 'Mnih et al., DeepMind 2013',
  },
  {
    year: '2016 / 2017',
    title: 'AlphaGo & AlphaZero',
    era: 'Domínio Estratégico',
    color: '#FF6B35',
    description: 'AlphaGo derrotou Lee Sedol no Go (2016). AlphaZero aprendeu Go e Xadrez do zero absoluto, jogando apenas contra si mesmo (2017).',
    url: 'https://www.nature.com/articles/nature16961',
    source: 'Silver et al., Nature 2016',
  },
  {
    year: '2017',
    title: 'Transformer — "Attention Is All You Need"',
    era: 'Domínio Estratégico',
    color: '#FF6B35',
    description: 'Pesquisadores do Google criaram a arquitetura baseada em "atenção", processando palavras em paralelo. Tornou-se a base de todos os LLMs.',
    url: 'https://arxiv.org/abs/1706.03762',
    source: 'Vaswani et al., NIPS 2017',
  },
  {
    year: '2020 / 2021',
    title: 'AlphaFold 2 — Proteínas Resolvidas',
    era: 'Revolução Científica',
    color: '#00B4D8',
    description: 'A DeepMind resolveu um desafio biológico de 50 anos: prever a estrutura 3D de proteínas a partir de suas cadeias de aminoácidos.',
    url: 'https://www.nature.com/articles/s41586-021-03819-2',
    source: 'Jumper et al., Nature 2021',
  },
  {
    year: '2020 / 2022',
    title: 'GPT-3 & ChatGPT',
    era: 'Era Generativa',
    color: '#C62828',
    description: 'GPT-3 (2020) mostrou que modelos massivos tinham capacidades emergentes. ChatGPT (nov/2022) democratizou a IA generativa para o público geral.',
    url: 'https://openai.com/index/chatgpt/',
    source: 'OpenAI, 2020/2022',
  },
  {
    year: '2024 (Mai)',
    title: 'GPT-4o — Multimodalidade Nativa',
    era: 'Era Generativa',
    color: '#C62828',
    description: 'Modelo projetado do zero para processar texto, áudio e imagem simultaneamente em tempo real, captando tom de voz e emoção quase sem latência.',
    url: 'https://openai.com/index/hello-gpt-4o/',
    source: 'OpenAI, Maio de 2024',
  },
  {
    year: '2024 (Jul)',
    title: 'AlphaProof — Medalha de Prata na IMO',
    era: 'Era Generativa',
    color: '#C62828',
    description: 'AlphaProof e AlphaGeometry 2 alcançaram nível de medalha de prata na Olimpíada Internacional de Matemática.',
    url: 'https://deepmind.google/blog/ai-solves-imo-problems-at-silver-medal-level/',
    source: 'Google DeepMind, Julho de 2024',
  },
  {
    year: '2024 (Set)',
    title: 'OpenAI o1 — Modelos que "Pensam"',
    era: 'Era Generativa',
    color: '#C62828',
    description: 'Família o1 usa "Cadeia de Pensamento" para planejar e corrigir erros antes de responder. Medalha de Ouro na IOI, superando 93% dos humanos.',
    url: 'https://openai.com/index/introducing-openai-o1-preview/',
    source: 'OpenAI, Setembro de 2024',
  },
  {
    year: '2025 (Fev)',
    title: 'Claude 3.7 Sonnet & Claude Code',
    era: 'Autonomia',
    color: '#00B4D8',
    description: 'A Anthropic impulsionou a era dos agentes: modelo híbrido que escolhe entre respostas rápidas ou raciocínio profundo, e CLI autônoma que codifica, testa e corrige software.',
    url: 'https://www.anthropic.com/news/claude-3-7-sonnet',
    source: 'Anthropic, Fevereiro de 2025',
  },
]

export default function AITimeline() {
  return (
    <Section
      id="ai-timeline"
      title="Linha do Tempo da IA"
      subtitle="Da teoria à autonomia — 80 anos em 13 marcos"
      dark
    >
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-white/20 hidden md:block" />
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-white/20 md:hidden" />

        <div className="flex flex-col gap-8 md:gap-6">
          {EVENTS.map((evt, i) => {
            const isLeft = i % 2 === 0

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="relative group"
              >
                {/* Mobile layout */}
                <div className="md:hidden flex gap-4">
                  {/* Node */}
                  <div className="relative z-10 shrink-0">
                    <div
                      className="w-12 h-12 rounded-full border-3 flex items-center justify-center text-xs font-bold text-white shadow-lg"
                      style={{ borderColor: evt.color, backgroundColor: `${evt.color}30` }}
                    >
                      {evt.year.slice(0, 4)}
                    </div>
                  </div>
                  {/* Card */}
                  <div
                    className="flex-1 rounded-xl border-2 p-4 transition-all"
                    style={{ borderColor: `${evt.color}40`, backgroundColor: `${evt.color}08` }}
                  >
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: evt.color }}>{evt.era}</span>
                    <h3 className="text-sm font-bold text-white mt-1">{evt.year} — {evt.title}</h3>
                    <p className="text-xs text-gray-300 mt-2 leading-relaxed">{evt.description}</p>
                    <a
                      href={evt.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-2 text-xs text-gray-400 hover:text-white transition-colors"
                    >
                      <Icon name="external-link" size={10} />
                      {evt.source}
                    </a>
                  </div>
                </div>

                {/* Desktop layout — alternating left/right */}
                <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] gap-4 items-start">
                  {/* Left content */}
                  <div className={isLeft ? '' : 'order-3'}>
                    <div
                      className={`rounded-xl border-2 p-4 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[${evt.color}15] ${isLeft ? 'text-right' : 'text-left'}`}
                      style={{ borderColor: `${evt.color}40`, backgroundColor: `${evt.color}08` }}
                    >
                      <span className="text-xs font-bold uppercase tracking-wider" style={{ color: evt.color }}>{evt.era}</span>
                      <h3 className="text-base font-bold text-white mt-1">{evt.year} — {evt.title}</h3>
                      <p className="text-sm text-gray-300 mt-2 leading-relaxed max-h-0 overflow-hidden opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500">
                        {evt.description}
                      </p>
                      <a
                        href={evt.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1 mt-2 text-xs text-gray-500 hover:text-white transition-colors max-h-0 overflow-hidden opacity-0 group-hover:max-h-8 group-hover:opacity-100 transition-all duration-500 ${isLeft ? 'flex-row-reverse' : ''}`}
                      >
                        <Icon name="external-link" size={10} />
                        {evt.source}
                      </a>
                    </div>
                  </div>

                  {/* Center node */}
                  <div className="relative z-10 flex items-center justify-center order-2">
                    <div
                      className="w-14 h-14 rounded-full border-3 flex items-center justify-center text-xs font-bold text-white shadow-lg group-hover:scale-110 transition-transform"
                      style={{ borderColor: evt.color, backgroundColor: `${evt.color}30` }}
                    >
                      {evt.year.slice(0, 4)}
                    </div>
                  </div>

                  {/* Empty side */}
                  <div className={isLeft ? 'order-3' : ''} />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
