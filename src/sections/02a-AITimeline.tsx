import { motion } from 'framer-motion'
import Section from '../components/Section'
import Icon from '../components/Icon'

/*  position: 'above' | 'below'
    offset: extra vertical spacing to stagger cards (0 = close, 1 = mid, 2 = far) */
const EVENTS = [
  {
    year: '1943',
    label: 'Rede Neural',
    color: '#6B48FF',
    desc: 'McCulloch & Pitts (1943) criaram o conceito. Rosenblatt (1958) construiu o Perceptron.',
    url: 'https://link.springer.com/article/10.1007/BF02478259',
    src: 'McCulloch & Pitts',
    pos: 'above' as const,
    offset: 1,
  },
  {
    year: '1986',
    label: 'Backpropagation',
    color: '#6B48FF',
    desc: 'Hinton viabilizou o Deep Learning com retropropagação de erros em redes multicamada.',
    url: 'https://www.nature.com/articles/323533a0',
    src: 'Nature 1986',
    pos: 'below' as const,
    offset: 0,
  },
  {
    year: '1997',
    label: 'Deep Blue',
    color: '#0047AB',
    desc: 'IBM derrotou Kasparov no xadrez. Triunfo da IA simbólica.',
    url: 'https://www.ibm.com/history/deep-blue',
    src: 'IBM',
    pos: 'above' as const,
    offset: 0,
  },
  {
    year: '2012',
    label: 'AlexNet',
    color: '#2DC653',
    desc: 'Redes profundas em GPUs esmagaram o ImageNet. Explosão do Deep Learning.',
    url: 'https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks',
    src: 'NIPS 2012',
    pos: 'below' as const,
    offset: 1,
  },
  {
    year: '2016',
    label: 'AlphaGo',
    color: '#FF6B35',
    desc: 'IA derrotou campeão de Go. AlphaZero (2017) aprendeu do zero.',
    url: 'https://www.nature.com/articles/nature16961',
    src: 'Nature 2016',
    pos: 'above' as const,
    offset: 1,
  },
  {
    year: '2017',
    label: 'Transformer',
    color: '#FF6B35',
    desc: '"Attention Is All You Need" — base de todos os LLMs modernos.',
    url: 'https://arxiv.org/abs/1706.03762',
    src: 'arXiv 2017',
    pos: 'below' as const,
    offset: 0,
  },
  {
    year: '2021',
    label: 'AlphaFold 2',
    color: '#00B4D8',
    desc: 'Resolveu desafio de 50 anos: estrutura 3D de proteínas.',
    url: 'https://www.nature.com/articles/s41586-021-03819-2',
    src: 'Nature 2021',
    pos: 'above' as const,
    offset: 0,
  },
  {
    year: '2022',
    label: 'ChatGPT',
    color: '#C62828',
    desc: 'Democratizou a IA generativa. 100M de usuários em 2 meses.',
    url: 'https://openai.com/index/chatgpt/',
    src: 'OpenAI',
    pos: 'below' as const,
    offset: 1,
  },
  {
    year: '2024',
    label: 'GPT-4o',
    color: '#C62828',
    desc: 'Multimodalidade nativa: texto, áudio e imagem em tempo real.',
    url: 'https://openai.com/index/hello-gpt-4o/',
    src: 'OpenAI',
    pos: 'above' as const,
    offset: 1,
  },
  {
    year: '2024',
    label: 'o1 "Pensa"',
    color: '#C62828',
    desc: 'Chain-of-Thought: planeja antes de responder. Ouro na IOI.',
    url: 'https://openai.com/index/introducing-openai-o1-preview/',
    src: 'OpenAI',
    pos: 'below' as const,
    offset: 0,
  },
  {
    year: '2025',
    label: '🥇 IMO',
    color: '#FFD700',
    desc: 'Gemini Deep Think: ouro na Olimpíada Internacional de Matemática.',
    url: 'https://deepmind.google/blog/advanced-version-of-gemini-with-deep-think-officially-achieves-gold-medal-standard-at-the-international-mathematical-olympiad/',
    src: 'DeepMind',
    pos: 'above' as const,
    offset: 0,
  },
  {
    year: '2025',
    label: '🥇 ICPC',
    color: '#FFD700',
    desc: 'Gemini: ouro no ICPC World Finals — elite da programação.',
    url: 'https://deepmind.google/blog/gemini-achieves-gold-medal-level-at-the-international-collegiate-programming-contest-world-finals/',
    src: 'DeepMind',
    pos: 'below' as const,
    offset: 1,
  },
  {
    year: '2025',
    label: 'Claude Code',
    color: '#00B4D8',
    desc: 'Agentes autônomos: Claude 3.7 Sonnet + CLI que codifica e corrige software.',
    url: 'https://www.anthropic.com/news/claude-3-7-sonnet',
    src: 'Anthropic',
    pos: 'above' as const,
    offset: 1,
  },
]

/* Height tiers for staggering (px from the timeline axis) */
const OFFSETS = [4, 24, 44]

export default function AITimeline() {
  return (
    <Section
      id="ai-timeline"
      title="Linha do Tempo da IA"
      subtitle="Da teoria à autonomia — 80 anos em 13 marcos"
      dark
    >
      {/* Container: fixed height to fit one viewport */}
      <div className="relative" style={{ height: 520 }}>
        {/* Central timeline line */}
        <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        {/* Events positioned absolutely */}
        {EVENTS.map((evt, i) => {
          const leftPct = (i / (EVENTS.length - 1)) * 94 + 3 // 3%–97% spread
          const isAbove = evt.pos === 'above'
          const stemH = 20 + OFFSETS[evt.offset]

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="absolute"
              style={{
                left: `${leftPct}%`,
                top: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              {/* Dot on the axis */}
              <div
                className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 z-10"
                style={{
                  borderColor: evt.color,
                  backgroundColor: evt.color,
                  top: -6,
                }}
              />

              {/* Vertical stem */}
              <div
                className="absolute left-1/2 -translate-x-1/2 w-px"
                style={{
                  backgroundColor: `${evt.color}50`,
                  ...(isAbove
                    ? { bottom: 6, height: stemH }
                    : { top: 6, height: stemH }),
                }}
              />

              {/* Card */}
              <a
                href={evt.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute left-1/2 -translate-x-1/2 w-[7.5rem] rounded-lg border p-2 hover:shadow-lg transition-all group"
                style={{
                  borderColor: `${evt.color}40`,
                  backgroundColor: `${evt.color}0c`,
                  ...(isAbove
                    ? { bottom: stemH + 8 }
                    : { top: stemH + 8 }),
                }}
              >
                <div className="flex items-center gap-1 mb-1">
                  <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: evt.color }} />
                  <span className="text-[10px] font-bold" style={{ color: evt.color }}>{evt.year}</span>
                </div>
                <h4 className="text-[11px] font-bold text-white leading-tight">{evt.label}</h4>
                <p className="text-[9px] text-gray-400 leading-snug mt-1">{evt.desc}</p>
                <span className="inline-flex items-center gap-0.5 mt-1 text-[8px] text-gray-500 group-hover:text-city-cyan transition-colors">
                  <Icon name="external-link" size={7} />
                  {evt.src}
                </span>
              </a>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
