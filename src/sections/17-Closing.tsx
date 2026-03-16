import { motion } from 'framer-motion'
import Icon from '../components/Icon'
import QRAccess from '../components/QRAccess'

const NEXT_STEPS = [
  { icon: 'cpu', title: 'Instale 1 ferramenta hoje', description: 'ChatGPT, Claude ou UpCodes — comece pelo mais simples', color: '#2DC653' },
  { icon: 'book-open', title: 'Leia 1 paper esta semana', description: 'Frontiers 2025: IA Responsável na Engenharia Estrutural', color: '#0047AB' },
  { icon: 'message-circle', title: 'Compartilhe com sua equipe', description: 'Discuta os cases e identifique oportunidades', color: '#6B48FF' },
  { icon: 'user', title: 'Entre em contato', description: 'Para consultoria ou colaboração em pesquisa', color: '#FF6B35' },
]

export default function Closing() {
  return (
    <section
      id="closing"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
      style={{ background: 'linear-gradient(135deg, #0047AB 0%, #1a2744 40%, #0D1B2A 100%)' }}
    >
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #00B4D8 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8"
          style={{ backgroundColor: '#00B4D820' }}
        >
          <Icon name="cpu" size={36} className="text-city-cyan" />
        </motion.div>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-10"
        >
          A melhor ferramenta não é a que substitui o engenheiro —
          <span className="text-city-cyan"> é a que o torna insubstituível.</span>
        </motion.p>

        {/* Contact card + QR */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 max-w-md"
          >
            <img
              src="./img/raul-foto.jpg"
              alt="Raul Araújo"
              className="w-20 h-20 rounded-full object-cover border-2 border-white/30 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-white">Raul Araújo</h3>
            <p className="text-city-cyan text-sm font-medium mb-1">Pesquisador COPPE/UFRJ</p>
            <p className="text-gray-400 text-xs mb-4">CREA Aqui 2026 — 19 de Março, Píer Mauá</p>

            <div className="space-y-2">
              <a href="mailto:raularaujo@crie.coppe.ufrj.br" className="flex items-center justify-center gap-2 text-white hover:text-city-cyan transition-colors text-sm">
                <Icon name="message-circle" size={14} />
                raularaujo@crie.coppe.ufrj.br
              </a>
              <a href="tel:+5521996666456" className="flex items-center justify-center gap-2 text-white hover:text-city-cyan transition-colors text-sm">
                <Icon name="message-square" size={14} />
                (21) 99666-6456
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="w-64 shrink-0"
          >
            <QRAccess sectionId="hero" label="Apresentação interativa disponível em:" />
          </motion.div>
        </div>

        {/* Next steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {NEXT_STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-xl p-4 text-left"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${step.color}20` }}>
                  <Icon name={step.icon} size={16} style={{ color: step.color }} />
                </div>
                <h4 className="text-sm font-bold text-white">{step.title}</h4>
              </div>
              <p className="text-xs text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
