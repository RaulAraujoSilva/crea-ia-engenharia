import { motion } from 'framer-motion'
import Section from '../components/Section'
import Icon from '../components/Icon'

const FLOW_STEPS = [
  { step: 1, label: 'Prompt em linguagem natural', icon: 'message-square', color: '#6B48FF', detail: '"Crie um edifício residencial de 8 andares com 4 apartamentos por andar"' },
  { step: 2, label: 'LLM interpreta e gera código', icon: 'cpu', color: '#0047AB', detail: 'GPT-5, Claude Opus ou Gemini traduz texto em chamadas de API BIM' },
  { step: 3, label: 'API BIM cria geometria', icon: 'layers', color: '#00B4D8', detail: 'Paredes, lajes, aberturas com semântica IFC completa' },
  { step: 4, label: 'Model checker valida', icon: 'check-square', color: '#2DC653', detail: 'Verificação de consistência, colisões e normas' },
  { step: 5, label: 'Agentes corrigem iterativamente', icon: 'settings', color: '#FF6B35', detail: 'Multi-agente resolve problemas sem intervenção humana' },
  { step: 6, label: 'Modelo IFC exportado', icon: 'file-text', color: '#6B48FF', detail: 'Pronto para Revit, ArchiCAD ou qualquer viewer BIM' },
]

const research = [
  {
    name: 'Text2BIM (TU Munich)',
    desc: 'Framework multi-agente LLM integrado ao Vectorworks. Gera edifícios completos a partir de texto com layouts internos, envelopes e informação semântica IFC. Código aberto no GitHub.',
    metrics: 'GPT-5 mini: 83% acurácia | Claude Sonnet 4.5: 100% edição semântica',
    url: 'https://github.com/dcy0577/Text2BIM',
    color: '#6B48FF',
  },
  {
    name: 'Autodesk Neural CAD',
    desc: 'Modelo foundation 3D generativo para Forma e Fusion. Promete automatizar 80-90% das tarefas repetitivas de design. Analisa milhares de opções de terreno automaticamente.',
    metrics: '80-90% automação prometida | Modelo foundation 3D | Beta 2025-2026',
    url: 'https://adsknews.autodesk.com/en/news/upcoming-3d-generative-ai-foundation-models/',
    color: '#0047AB',
  },
  {
    name: 'Autodesk Forma',
    desc: 'Site planning com análise automática de ruído, vento, sol e carbono. IA sugere volumetria ideal baseada em restrições urbanísticas reais.',
    metrics: 'Análise ambiental em tempo real | Integrado ao ecossistema Autodesk',
    url: 'https://www.autodesk.com/products/forma',
    color: '#00B4D8',
  },
]

export default function TextToBIMPipeline() {
  return (
    <Section id="text-to-bim-pipeline" title="Text-to-BIM: Como Funciona" subtitle="Pipeline multi-agente e pesquisa de fronteira">
      {/* Pipeline flow */}
      <div className="mb-12">
        <h3 className="text-lg font-bold text-city-navy mb-6">Pipeline Text-to-BIM</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FLOW_STEPS.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${s.color}15` }}>
                  <Icon name={s.icon} size={18} style={{ color: s.color }} />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: s.color }}>Passo {s.step}</span>
                  <p className="text-sm font-bold text-city-navy">{s.label}</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 italic leading-relaxed">{s.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Research & frontier */}
      <h3 className="text-lg font-bold text-city-navy mb-4">Pesquisa e Fronteira</h3>
      <div className="space-y-4 mb-12">
        {research.map((r, i) => (
          <motion.a
            key={r.name}
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="block bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-lg hover:border-city-blue transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="w-1.5 h-full min-h-[60px] rounded-full shrink-0" style={{ backgroundColor: r.color }} />
              <div className="flex-1">
                <h4 className="font-bold text-city-navy group-hover:text-city-blue transition-colors">{r.name}</h4>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">{r.desc}</p>
                <div className="bg-gray-50 rounded-lg px-3 py-2 mt-3">
                  <p className="text-xs font-semibold text-gray-500">{r.metrics}</p>
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Caveat */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
        <div className="flex items-start gap-3">
          <Icon name="alert-triangle" size={20} className="text-amber-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-amber-800 mb-1">Realidade atual</h4>
            <p className="text-sm text-amber-700 leading-relaxed">
              Text-to-BIM ainda está em <strong>estágio inicial</strong>. Os modelos gerados requerem revisão humana significativa.
              Nenhuma ferramenta hoje substitui o projetista — elas <strong>aceleram a fase conceitual</strong> e permitem explorar
              mais alternativas em menos tempo. A supervisão profissional (e a ART) continuam indispensáveis.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
