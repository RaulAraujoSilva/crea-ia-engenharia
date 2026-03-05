import { motion } from 'framer-motion'
import Section from '../components/Section'
import Icon from '../components/Icon'

const DEBATES = [
  {
    icon: 'scale',
    color: '#FF6B35',
    title: 'Quem responde pela ART quando a IA erra?',
    description: 'O engenheiro que usou a IA assina a ART e é responsável pela verificação. A ferramenta é apenas um auxiliar. Resolução CONFEA 1.094/2017 já prevê uso de softwares como apoio — a responsabilidade não muda.',
  },
  {
    icon: 'shield',
    color: '#0047AB',
    title: 'Como criar um framework de IA seguro?',
    description: 'Auditoria obrigatória de resultados de IA antes de inclusão em projeto técnico. Declaração de uso de IA em laudos e memoriais. Treinamento e certificação de engenheiros em uso responsável.',
  },
  {
    icon: 'book-open',
    color: '#2DC653',
    title: 'CREA como certificador de ferramentas de IA',
    description: 'O CREA-RJ e o CONFEA têm posição privilegiada para criar selos de conformidade para ferramentas de IA usadas na engenharia. Referência: IEEE Ethically Aligned Design, ISO/IEC 42001.',
  },
]

const PRINCIPLES = [
  { number: '1', title: 'Humano no Loop', description: 'IA como ferramenta, engenheiro como responsável.', color: '#0047AB' },
  { number: '2', title: 'Rastreabilidade', description: 'Todo resultado de IA deve ser documentado e verificável.', color: '#6B48FF' },
  { number: '3', title: 'Competência', description: 'Usar IA sem entender o processo = negligência técnica.', color: '#C62828' },
]

const REFERENCES = [
  { text: 'Lei 6.496/77 — Anotação de Responsabilidade Técnica (ART)', url: '#' },
  { text: 'Resolução CONFEA 1.094/2017', url: '#' },
  { text: 'ISO/IEC 42001:2023 — AI Management Systems', url: '#' },
  { text: 'Conjur — Responsabilidade civil por falha em IA (2025)', url: 'https://www.conjur.com.br/2025-mar-05/perspectivas-sobre-a-responsabilidade-civil-do-fornecedor-de-sistema-de-ia/' },
]

export default function CREARole() {
  return (
    <Section id="crea-role" title="Regulamentação e o Papel do CREA" subtitle="A profissão evolui — a responsabilidade permanece">
      {/* Debate questions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        {DEBATES.map((d, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-xl border-2 p-5 shadow-sm"
            style={{ borderColor: `${d.color}30` }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${d.color}15` }}>
                <Icon name={d.icon} size={20} style={{ color: d.color }} />
              </div>
              <h3 className="text-base font-bold text-city-navy">{d.title}</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{d.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Framework */}
      <div className="bg-city-navy rounded-2xl p-8 mb-10">
        <h3 className="text-xl font-bold text-white mb-6">Framework Proposto: 3 Princípios</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white/10 rounded-xl p-5 border border-white/10"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg mb-3" style={{ backgroundColor: p.color }}>
                {p.number}
              </div>
              <h4 className="text-lg font-bold text-white mb-1">{p.title}</h4>
              <p className="text-sm text-gray-300">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* References */}
      <div className="bg-city-navy/5 rounded-xl p-6">
        <h3 className="text-sm font-bold text-city-navy mb-3">Referências Legais</h3>
        <ul className="space-y-2">
          {REFERENCES.map((ref, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-city-blue mt-1.5 shrink-0" />
              {ref.url !== '#' ? (
                <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-city-blue hover:text-city-cyan transition-colors">
                  {ref.text}
                </a>
              ) : (
                <span className="text-gray-600">{ref.text}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
