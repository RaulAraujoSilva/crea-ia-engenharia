import Section from '../components/Section'
import CaseCard from '../components/CaseCard'

const CASES = [
  {
    city: 'Hypar',
    country: 'Pioneiro em Text-to-BIM',
    color: '#6B48FF',
    highlight: 'Code-first + Revit export',
    image: './img/frontier/bim-hypar.jpg',
    sourceUrl: 'https://hypar.io',
    sourceLabel: 'hypar.io',
    metrics: [
      { value: 'pioneiro', label: 'Text-to-BIM' },
      { value: 'Revit', label: 'exporta nativo' },
      { value: 'templates', label: 'reutilizáveis' },
      { value: 'paramétrico', label: 'modelos editáveis' },
    ],
    description: 'Converte parâmetros textuais em modelos paramétricos, exporta direto para Revit. Templates reutilizáveis por escritório.',
  },
  {
    city: 'Snaptrude',
    country: 'RFP → Modelo BIM editável',
    color: '#0047AB',
    highlight: '~90% redução de tempo',
    image: './img/frontier/bim-snaptrude.jpg',
    sourceUrl: 'https://www.snaptrude.com',
    sourceLabel: 'snaptrude.com',
    metrics: [
      { value: '~90%', label: 'redução tempo' },
      { value: 'LOD 300', label: 'em 7-10 min' },
      { value: 'RVT', label: 'exporta nativo' },
      { value: 'AI', label: 'layout automático' },
    ],
    description: 'De um RFP ou briefing textual para modelo BIM editável (LOD 300) em 7-10 minutos. 4 dias reduzidos a 4 horas.',
  },
  {
    city: 'TestFit',
    country: 'IA generativa para viabilidade',
    color: '#00B4D8',
    highlight: '3.000 planos em <10s',
    image: './img/frontier/bim-testfit.jpg',
    sourceUrl: 'https://testfit.io',
    sourceLabel: 'testfit.io',
    metrics: [
      { value: '3.000', label: 'variações em <10s' },
      { value: '4x', label: 'mais rápido' },
      { value: 'US$ 90K/ano', label: 'economia' },
      { value: '30x', label: 'viabilidade terreno' },
    ],
    description: 'Testa milhares de variações de viabilidade instantaneamente com contagem de unidades e custos.',
  },
]

export default function TextToBIM() {
  return (
    <Section id="text-to-bim" title="Text-to-BIM: Ferramentas Comerciais" subtitle="De descrição textual a modelo BIM paramétrico — já é realidade">
      {/* Intro */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-6 mb-8 border border-indigo-100">
        <p className="text-gray-700 leading-relaxed">
          Diferente de IA generativa que cria imagens, estas ferramentas geram <strong>modelos paramétricos reais</strong> —
          com informação semântica BIM (paredes, lajes, aberturas), exportáveis em <strong>IFC e RVT</strong>,
          editáveis em Revit, ArchiCAD ou qualquer software BIM.
        </p>
      </div>

      {/* Tools grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CASES.map(c => <CaseCard key={c.city} {...c} />)}
      </div>
    </Section>
  )
}
