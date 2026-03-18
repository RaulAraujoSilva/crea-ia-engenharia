import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section from '../components/Section'
import Icon from '../components/Icon'

const EVENTS = [
  {
    year: '1943',
    label: 'Rede Neural',
    color: '#6B48FF',
    desc: 'McCulloch & Pitts criaram o conceito matemático (1943). Rosenblatt construiu o Perceptron (1958) — primeira máquina que aprende.',
    url: 'https://link.springer.com/article/10.1007/BF02478259',
    src: 'McCulloch & Pitts, 1943',
  },
  {
    year: '1986',
    label: 'Backprop',
    color: '#6B48FF',
    desc: 'Hinton provou que redes multicamada podiam corrigir seus erros via retropropagação, viabilizando o Deep Learning.',
    url: 'https://www.nature.com/articles/323533a0',
    src: 'Hinton et al., Nature 1986',
  },
  {
    year: '1997',
    label: 'Deep Blue',
    color: '#0047AB',
    desc: 'IBM Deep Blue derrotou Kasparov no xadrez. Triunfo da IA simbólica e força bruta.',
    url: 'https://www.ibm.com/history/deep-blue',
    src: 'IBM, 1997',
  },
  {
    year: '2012',
    label: 'AlexNet',
    color: '#2DC653',
    desc: 'Deep Learning esmagou o ImageNet. Redes profundas em GPUs superaram engenharia de software tradicional.',
    url: 'https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks',
    src: 'Krizhevsky et al., NIPS 2012',
  },
  {
    year: '2016',
    label: 'AlphaGo',
    color: '#FF6B35',
    desc: 'DeepMind derrotou Lee Sedol no Go. AlphaZero (2017) aprendeu Go e Xadrez do zero absoluto.',
    url: 'https://www.nature.com/articles/nature16961',
    src: 'Silver et al., Nature 2016',
  },
  {
    year: '2017',
    label: 'Transformer',
    color: '#FF6B35',
    desc: '"Attention Is All You Need" — arquitetura que processa palavras em paralelo. Base de todos os LLMs.',
    url: 'https://arxiv.org/abs/1706.03762',
    src: 'Vaswani et al., NIPS 2017',
  },
  {
    year: '2021',
    label: 'AlphaFold 2',
    color: '#00B4D8',
    desc: 'DeepMind resolveu desafio biológico de 50 anos: prever estrutura 3D de proteínas.',
    url: 'https://www.nature.com/articles/s41586-021-03819-2',
    src: 'Jumper et al., Nature 2021',
  },
  {
    year: '2022',
    label: 'ChatGPT',
    color: '#C62828',
    desc: 'GPT-3 (2020) mostrou capacidades emergentes. ChatGPT democratizou a IA generativa para o mundo.',
    url: 'https://openai.com/index/chatgpt/',
    src: 'OpenAI, Nov 2022',
  },
  {
    year: '2024',
    label: 'GPT-4o',
    color: '#C62828',
    desc: 'Multimodalidade nativa: texto, áudio e imagem em tempo real, captando tom de voz e emoção.',
    url: 'https://openai.com/index/hello-gpt-4o/',
    src: 'OpenAI, Mai 2024',
  },
  {
    year: '2024',
    label: 'o1 — "Pensa"',
    color: '#C62828',
    desc: 'Modelos que planejam antes de responder (Chain-of-Thought). Ouro na IOI, superando 93% dos humanos.',
    url: 'https://openai.com/index/introducing-openai-o1-preview/',
    src: 'OpenAI, Set 2024',
  },
  {
    year: '2025',
    label: 'Ouro IMO',
    color: '#FFD700',
    desc: 'Gemini com Deep Think alcançou padrão de medalha de ouro na Olimpíada Internacional de Matemática.',
    url: 'https://deepmind.google/blog/advanced-version-of-gemini-with-deep-think-officially-achieves-gold-medal-standard-at-the-international-mathematical-olympiad/',
    src: 'DeepMind, 2025 · arXiv:2507.15855',
  },
  {
    year: '2025',
    label: 'Ouro ICPC',
    color: '#FFD700',
    desc: 'Gemini alcançou nível de medalha de ouro no ICPC World Finals — competição de elite em programação.',
    url: 'https://deepmind.google/blog/gemini-achieves-gold-medal-level-at-the-international-collegiate-programming-contest-world-finals/',
    src: 'Google DeepMind, 2025',
  },
  {
    year: '2025',
    label: 'Claude Code',
    color: '#00B4D8',
    desc: 'Anthropic lançou agentes autônomos: Claude 3.7 Sonnet (híbrido rápido/profundo) e Claude Code (CLI que codifica, testa e corrige).',
    url: 'https://www.anthropic.com/news/claude-3-7-sonnet',
    src: 'Anthropic, Fev 2025',
  },
]

export default function AITimeline() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <Section
      id="ai-timeline"
      title="Linha do Tempo da IA"
      subtitle="Da teoria à autonomia — 80 anos em 15 marcos"
      dark
    >
      {/* Horizontal timeline bar */}
      <div className="relative mt-2">
        {/* Main line */}
        <div className="absolute top-6 left-0 right-0 h-0.5 bg-white/20" />

        {/* Events */}
        <div className="flex justify-between items-start relative">
          {EVENTS.map((evt, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="relative flex flex-col items-center group cursor-pointer"
              style={{ flex: '1 1 0', minWidth: 0 }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              {/* Node */}
              <div
                className="w-12 h-12 rounded-full border-2 flex items-center justify-center text-[10px] font-bold text-white z-10 shrink-0 transition-transform group-hover:scale-125"
                style={{ borderColor: evt.color, backgroundColor: `${evt.color}30` }}
              >
                {evt.year}
              </div>

              {/* Label below */}
              <span className="mt-2 text-[9px] md:text-[10px] font-semibold text-center leading-tight text-gray-300 group-hover:text-white transition-colors px-0.5" style={{ maxWidth: '5rem' }}>
                {evt.label}
              </span>

              {/* Tooltip card */}
              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-20 z-50 w-64 rounded-xl border-2 p-4 shadow-2xl backdrop-blur-sm"
                    style={{
                      borderColor: `${evt.color}60`,
                      backgroundColor: '#0D1B2Af0',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      ...(i <= 1 ? { left: 0, transform: 'none' } : {}),
                      ...(i >= EVENTS.length - 2 ? { left: 'auto', right: 0, transform: 'none' } : {}),
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: evt.color }} />
                      <span className="text-xs font-bold text-white">{evt.year} — {evt.label}</span>
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">{evt.desc}</p>
                    <a
                      href={evt.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-2 text-[10px] text-gray-400 hover:text-city-cyan transition-colors"
                    >
                      <Icon name="external-link" size={9} />
                      {evt.src}
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-16 text-center italic">
        Passe o mouse sobre cada marco para ver detalhes e fonte
      </p>
    </Section>
  )
}
