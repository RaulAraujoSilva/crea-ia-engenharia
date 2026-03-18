import { motion } from 'framer-motion'
import Section from '../components/Section'
import Icon from '../components/Icon'

const SOURCE_LINKS = {
  spivack: { label: 'Nova Spivack, "The Hidden Cost Crisis"', url: 'https://www.novaspivack.com/technology/the-hidden-cost-crisis' },
  frontiers: { label: 'Plevris & Hosamo, Frontiers 2025', url: 'https://www.frontiersin.org/journals/built-environment/articles/10.3389/fbuil.2025.1612575/full' },
  vectara: { label: 'Vectara Leaderboard + OpenAI SimpleQA', url: 'https://huggingface.co/spaces/vectara/leaderboard' },
  asce: { label: 'ASCE, Civil Engineering Magazine 2025', url: 'https://www.asce.org/publications-and-news/civil-engineering-source/civil-engineering-magazine/issues/magazine-issue/article/2025/03/mishandling-ai-tools-puts-civil-engineers-at-risk-for-ethical-violations' },
}

const COMPARISONS = [
  {
    hype: '"IA substituiu o engenheiro"',
    reality: '96% dos cálculos estruturais com IA precisam de revisão humana',
    hypeIcon: 'trending-up',
    realityIcon: 'alert-triangle',
    source: SOURCE_LINKS.frontiers,
  },
  {
    hype: '"Economia de 90% do tempo"',
    reality: 'Funcionários gastam 4,3h/semana verificando saídas de IA — ~US$ 14.200/ano por pessoa em overhead',
    hypeIcon: 'trending-up',
    realityIcon: 'alert-triangle',
    source: SOURCE_LINKS.spivack,
  },
  {
    hype: '"100% de precisão"',
    reality: 'Gemini 2.0 Flash: 0,7% de erro. GPT-4.5: 37,1% de erro',
    hypeIcon: 'trending-up',
    realityIcon: 'alert-triangle',
    source: SOURCE_LINKS.vectara,
  },
  {
    hype: '"Qualquer IA faz cálculo estrutural"',
    reality: 'Nenhuma IA tem certificação para cálculo sem responsável técnico',
    hypeIcon: 'trending-up',
    realityIcon: 'alert-triangle',
    source: SOURCE_LINKS.asce,
  },
]

function SourceLink({ label, url }: { label: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 mt-2 text-xs text-gray-400 hover:text-city-cyan transition-colors"
    >
      <Icon name="external-link" size={10} />
      {label}
    </a>
  )
}

export default function HypeVsReality() {
  return (
    <Section id="hype-vs-reality" title="O Hype vs. a Realidade" subtitle="O que o LinkedIn não conta" dark>
      {/* Stat destaque — cores claras para fundo escuro */}
      <div className="mb-12 p-8 rounded-2xl border-2 border-city-red/30 bg-city-red/5 text-center">
        <div className="text-4xl md:text-5xl font-extrabold text-white">
          <span className="text-city-red">US$ </span>
          67,4
          <span className="text-city-red"> bi</span>
        </div>
        <p className="mt-2 text-base text-gray-200 font-medium">
          em perdas causadas por alucinações de IA em 2024
        </p>
        <p className="mt-1 text-sm text-gray-400">47% dos usuários corporativos tomaram decisões baseadas em conteúdo alucinado</p>
        <a
          href="https://www.novaspivack.com/technology/the-hidden-cost-crisis"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 mt-3 text-xs text-gray-400 hover:text-city-cyan transition-colors"
        >
          <Icon name="external-link" size={10} />
          Fonte: Nova Spivack, "The Hidden Cost Crisis" Report
        </a>
      </div>

      {/* LinkedIn vs Realidade */}
      <div>
        <h3 className="text-xl font-bold text-white mb-6">LinkedIn vs. Realidade</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {COMPARISONS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="grid grid-cols-2 gap-px rounded-xl overflow-hidden border border-white/10"
            >
              <div className="bg-city-green/10 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded flex items-center justify-center" style={{ backgroundColor: '#2DC65320' }}>
                    <Icon name={item.hypeIcon} size={14} className="text-city-green" />
                  </div>
                  <span className="text-xs font-bold text-city-green">O HYPE</span>
                </div>
                <p className="text-sm text-gray-300">{item.hype}</p>
              </div>
              <div className="bg-city-red/10 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded flex items-center justify-center" style={{ backgroundColor: '#C6282820' }}>
                    <Icon name={item.realityIcon} size={14} className="text-city-red" />
                  </div>
                  <span className="text-xs font-bold text-city-red">A REALIDADE</span>
                </div>
                <p className="text-sm text-gray-300">{item.reality}</p>
                <SourceLink label={item.source.label} url={item.source.url} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
