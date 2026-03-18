import { motion } from 'framer-motion'
import Section from '../components/Section'
import Icon from '../components/Icon'

const FORMATION = [
  { icon: 'file-text', title: 'Mestre — COPPE/UFRJ', detail: 'Engenharia de Sistemas e Computação' },
  { icon: 'shield', title: 'MBA — FGV', detail: 'Gerenciamento de Projetos' },
  { icon: 'book-open', title: 'Bacharel em Direito — UERJ', detail: 'Formação jurídica' },
  { icon: 'cpu', title: 'TCE-RJ / AGENERSA', detail: 'Servidor de carreira há 25+ anos' },
]

const ACHIEVEMENTS = [
  'Implantação de processo eletrônico no Estado do RJ',
  'Auditoria contínua baseada em dados',
  'Gestão do conhecimento e metodologias BIM',
  'Modernização institucional e governança orientada a dados',
]

export default function Speaker() {
  return (
    <Section id="speaker" title="Palestrante">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Photo column */}
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="./img/raul-foto.jpg"
              alt="Raul Araújo da Silva"
              className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-xl ring-4 ring-city-blue/20"
            />
          </motion.div>
          <h3 className="mt-4 text-2xl font-bold text-city-navy">Raul Araújo da Silva</h3>
          <p className="text-city-blue font-medium">Professor · TCE-RJ / AGENERSA</p>

          <div className="mt-4 space-y-2 text-center">
            <a href="mailto:raularaujo@crie.ufrj.br" className="block text-sm text-city-blue hover:text-city-cyan transition-colors">
              raularaujo@crie.ufrj.br
            </a>
            <a href="tel:+5521996666456" className="block text-sm text-city-blue hover:text-city-cyan transition-colors">
              (21) 99666-6456
            </a>
          </div>

          {/* AI assistant note */}
          <div className="mt-4 bg-city-cyan/10 border border-city-cyan/20 rounded-xl p-3 text-center max-w-xs">
            <p className="text-xs text-gray-600">
              Tem dúvidas durante a palestra? Envie para o assistente virtual em{' '}
              <a href="mailto:raularaujo@crie.ufrj.br" className="font-bold text-city-blue hover:text-city-cyan transition-colors">
                raularaujo@crie.ufrj.br
              </a>
            </p>
            <p className="text-[10px] text-gray-400 mt-1">Respostas em tempo real por IA</p>
          </div>
        </div>

        {/* Bio columns */}
        <div className="lg:col-span-2 space-y-6">
          <p className="text-gray-600 leading-relaxed">
            Servidor de carreira do Tribunal de Contas do Estado do Rio de Janeiro há mais de 25 anos,
            atualmente cedido à AGENERSA. Professor da Escola de Contas e Gestão, IBMEC e Universidade
            Veiga de Almeida, com atuação em Inteligência Artificial aplicada ao setor público, gestão
            estratégica e transformação digital.
          </p>

          {/* Formation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {FORMATION.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 p-4 shadow-sm"
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: '#0047AB15' }}>
                  <Icon name={item.icon} size={18} className="text-city-blue" />
                </div>
                <div>
                  <p className="font-bold text-sm text-city-navy">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievements */}
          <div className="bg-city-navy/5 rounded-xl p-5">
            <h4 className="font-bold text-city-navy mb-3">Principais Realizações</h4>
            <ul className="space-y-2">
              {ACHIEVEMENTS.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-city-cyan mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}
