import { motion } from 'framer-motion'
import Section from '../components/Section'

const tools = [
  {
    name: 'Hypar',
    desc: 'Pioneiro em Text-to-BIM. Converte parâmetros textuais em modelos paramétricos, exporta direto para Revit. Templates reutilizáveis por escritório.',
    url: 'https://hypar.io',
    img: './img/frontier/bim-hypar.jpg',
    metric: 'Code-first + Revit export',
    color: '#6B48FF',
  },
  {
    name: 'Snaptrude',
    desc: 'De um RFP ou briefing textual para modelo BIM editável (LOD 300) em 7-10 minutos. Exporta RVT nativo.',
    url: 'https://www.snaptrude.com',
    img: './img/frontier/bim-snaptrude.jpg',
    metric: 'RFP → LOD 300 em 7-10 min',
    color: '#0047AB',
  },
  {
    name: 'TestFit',
    desc: 'IA generativa para viabilidade de terreno. Testa milhares de variações instantaneamente com contagem de unidades e custos.',
    url: 'https://testfit.io',
    img: './img/frontier/bim-testfit.jpg',
    metric: '3.000 planos em <10s',
    color: '#00B4D8',
  },
]

export default function TextToBIM() {
  return (
    <Section id="text-to-bim" title="Text-to-BIM: Ferramentas Comerciais" subtitle="De descrição textual a modelo BIM paramétrico — já é realidade">
      {/* Intro */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-6 mb-12 border border-indigo-100">
        <p className="text-gray-700 leading-relaxed">
          Diferente de IA generativa que cria imagens, estas ferramentas geram <strong>modelos paramétricos reais</strong> —
          com informação semântica BIM (paredes, lajes, aberturas), exportáveis em <strong>IFC e RVT</strong>,
          editáveis em Revit, ArchiCAD ou qualquer software BIM.
        </p>
      </div>

      {/* Tools grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, i) => (
          <motion.a
            key={tool.name}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group block rounded-2xl overflow-hidden border border-gray-200 hover:border-city-blue hover:shadow-xl transition-all"
          >
            <div className="h-40 overflow-hidden bg-gray-100">
              <img
                src={tool.img}
                alt={tool.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-city-navy">{tool.name}</h4>
                <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: tool.color }} />
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">{tool.desc}</p>
              <div className="bg-gray-50 rounded-lg px-3 py-2">
                <p className="text-xs font-bold" style={{ color: tool.color }}>{tool.metric}</p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  )
}
