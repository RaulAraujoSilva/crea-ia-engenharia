import { motion } from 'framer-motion'
import Section from '../components/Section'
import Icon from '../components/Icon'

const FAILURES = [
  {
    icon: 'alert-triangle',
    color: '#C62828',
    title: 'Cálculo Estrutural Certificável',
    description: 'Nenhuma IA atual produz cálculos que dispensam revisão de engenheiro responsável. Springer 2025: o problema da "caixa-preta" impede validação formal de resultados em estruturas críticas.',
  },
  {
    icon: 'scale',
    color: '#FF6B35',
    title: 'Responsabilidade Técnica (ART)',
    description: 'A Lei 6.496/77 e resoluções CONFEA/CREA exigem ART assinada por profissional habilitado. IA não é "profissional" reconhecido. Quem assina a ART responde — a IA não.',
  },
  {
    icon: 'eye-off',
    color: '#6B48FF',
    title: 'Caixa-Preta em Segurança Crítica',
    description: 'Modelos não explicam seu raciocínio. Em estruturas, pontes e barragens, reguladores exigem rastreabilidade total de cada decisão de projeto. IA não fornece isso hoje.',
  },
  {
    icon: 'trending-down',
    color: '#0047AB',
    title: 'Overfitting em Saúde Estrutural',
    description: 'ScienceDirect 2024: modelos de monitoramento estrutural com overfitting performam mal em condições reais. Dados de treinamento raramente cobrem todos os cenários de falha.',
  },
  {
    icon: 'file-text',
    color: '#FF6B35',
    title: 'Normas Brasileiras (NBR)',
    description: 'LLMs têm pouco treinamento em normas NBR em português. Alucinações são comuns ao citar numeração de itens e valores de tabelas. Stanford HAI: mais de 75% de erro em questões legais específicas.',
  },
  {
    icon: 'shield',
    color: '#C62828',
    title: 'Dados Escassos e Viés',
    description: 'Plevris e Hosamo (Frontiers 2025): datasets de engenharia estrutural são insuficientes para treinar modelos robustos. IA treinada em construção americana não generaliza para o Brasil.',
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
            className="bg-white/5 rounded-xl border-2 p-5"
            style={{ borderColor: `${f.color}30` }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${f.color}20` }}>
                <Icon name={f.icon} size={20} style={{ color: f.color }} />
              </div>
              <h3 className="text-base font-bold text-white">{f.title}</h3>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">{f.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
