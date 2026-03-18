import { motion } from 'framer-motion'
import Section from '../components/Section'
import Icon from '../components/Icon'

const FAILURES = [
  {
    icon: 'alert-triangle',
    color: '#C62828',
    title: 'Cálculo Estrutural Certificável',
    description: 'Nenhuma IA atual produz cálculos que dispensam revisão de engenheiro responsável. O problema da "caixa-preta" impede validação formal de resultados em estruturas críticas.',
    source: 'Plevris & Hosamo, Frontiers 2025',
    url: 'https://www.frontiersin.org/journals/built-environment/articles/10.3389/fbuil.2025.1612575/full',
  },
  {
    icon: 'scale',
    color: '#FF6B35',
    title: 'Responsabilidade Técnica (ART)',
    description: 'A Lei 6.496/77 e resoluções CONFEA/CREA exigem ART assinada por profissional habilitado. IA não é "profissional" reconhecido. Quem assina a ART responde — a IA não.',
    source: 'Lei 6.496/77 · Resoluções CONFEA/CREA',
    url: null,
  },
  {
    icon: 'eye-off',
    color: '#6B48FF',
    title: 'Caixa-Preta em Segurança Crítica',
    description: 'Modelos não explicam seu raciocínio. Em estruturas, pontes e barragens, reguladores exigem rastreabilidade total de cada decisão de projeto. IA não fornece isso hoje.',
    source: 'ASCE, Civil Engineering Magazine 2025',
    url: 'https://www.asce.org/publications-and-news/civil-engineering-source/civil-engineering-magazine/issues/magazine-issue/article/2025/03/mishandling-ai-tools-puts-civil-engineers-at-risk-for-ethical-violations',
  },
  {
    icon: 'trending-down',
    color: '#0047AB',
    title: 'Overfitting em Saúde Estrutural',
    description: 'Modelos de monitoramento estrutural com overfitting performam mal em condições reais. Dados de treinamento raramente cobrem todos os cenários de falha.',
    source: 'Spencer et al., KSCE Journal 2025',
    url: 'https://www.sciencedirect.com/science/article/pii/S1226798825003186',
  },
  {
    icon: 'file-text',
    color: '#FF6B35',
    title: 'Normas Brasileiras (NBR)',
    description: 'LLMs têm pouco treinamento em normas NBR em português. Alucinações são comuns ao citar numeração de itens e valores de tabelas. Mais de 75% de erro em questões legais específicas.',
    source: 'Stanford HAI Report, 2024',
    url: 'https://hai.stanford.edu/news/hallucinating-law-legal-mistakes-large-language-models-are-pervasive',
  },
  {
    icon: 'shield',
    color: '#C62828',
    title: 'Dados Escassos e Viés',
    description: 'Datasets de engenharia estrutural são insuficientes para treinar modelos robustos. IA treinada em construção americana não generaliza para o Brasil.',
    source: 'Plevris & Hosamo, Frontiers 2025',
    url: 'https://www.frontiersin.org/journals/built-environment/articles/10.3389/fbuil.2025.1612575/full',
  },
]

export default function WhereAIFails() {
  return (
    <Section id="where-ai-fails" title="Onde a IA NÃO Funciona — Ainda" subtitle="O que a ciência diz, não o LinkedIn" dark>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {FAILURES.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/5 rounded-xl border-2 p-5 flex flex-col"
            style={{ borderColor: `${f.color}30` }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${f.color}20` }}>
                <Icon name={f.icon} size={20} style={{ color: f.color }} />
              </div>
              <h3 className="text-base font-bold text-white">{f.title}</h3>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed flex-1">{f.description}</p>
            {f.url ? (
              <a
                href={f.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-3 text-xs text-gray-400 hover:text-white/80 transition-colors"
              >
                <Icon name="external-link" size={10} />
                {f.source}
              </a>
            ) : (
              <span className="inline-flex items-center gap-1 mt-3 text-xs text-gray-500">
                <Icon name="file-text" size={10} />
                {f.source}
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
