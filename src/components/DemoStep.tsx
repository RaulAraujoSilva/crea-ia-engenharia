import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Icon from './Icon'

interface DemoStepProps {
  step: number
  tool: string
  instruction: string
  expectedResult: string
  discussionPoint: string
  color: string
  icon: string
}

export default function DemoStep({ step, tool, instruction, expectedResult, discussionPoint, color, icon }: DemoStepProps) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: step * 0.15 }}
      className="bg-white rounded-2xl border-2 p-6 shadow-sm"
      style={{ borderColor: `${color}30` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: color }}>
          {step + 1}
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${color}15` }}>
            <Icon name={icon} size={18} style={{ color }} />
          </div>
          <h3 className="text-lg font-bold text-city-navy">{tool}</h3>
        </div>
      </div>

      <div className="space-y-3">
        <div className="bg-city-navy/5 rounded-lg p-3">
          <p className="text-xs font-semibold text-city-navy mb-1">
            <Icon name="terminal" size={12} className="inline mr-1" />
            Instrução:
          </p>
          <p className="text-sm text-gray-700">{instruction}</p>
        </div>

        <div className="rounded-lg p-3" style={{ backgroundColor: `${color}08` }}>
          <p className="text-xs font-semibold mb-1" style={{ color }}>
            <Icon name="check-circle" size={12} className="inline mr-1" style={{ color }} />
            Resultado esperado:
          </p>
          <p className="text-sm text-gray-600">{expectedResult}</p>
        </div>

        <div className="bg-city-orange/5 rounded-lg p-3">
          <p className="text-xs font-semibold text-city-orange mb-1">
            <Icon name="message-circle" size={12} className="inline mr-1" />
            Ponto de discussão:
          </p>
          <p className="text-sm text-gray-600">{discussionPoint}</p>
        </div>
      </div>
    </motion.div>
  )
}
