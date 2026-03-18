import Section from '../components/Section'
import CaseCard from '../components/CaseCard'

const comparison = [
  { type: 'Mesh/NeRF (Meshy, Luma)', pros: 'Velocidade, fotorrealismo', cons: 'Não editável como CAD', use: 'Conceito, marketing' },
  { type: 'CAD/BREP (Fusion, MIT)', pros: 'Paramétrico, editável', cons: 'Menos realista visualmente', use: 'Engenharia, fabricação' },
]

const CASES = [
  {
    city: 'Meshy AI',
    country: 'Texto/Imagem → Modelo 3D',
    color: '#2DC653',
    highlight: 'Gratuito · 2M+ criadores',
    image: './img/frontier/3d-meshy.webp',
    sourceUrl: 'https://www.meshy.ai',
    sourceLabel: 'meshy.ai',
    metrics: [
      { value: '2M+', label: 'criadores' },
      { value: '10x', label: 'mais rápido' },
      { value: 'GLB/OBJ/FBX', label: 'exportação' },
      { value: 'gratuito', label: 'plano free' },
    ],
    description: 'Texto ou imagem → modelo 3D com topologia limpa em segundos. Melhor ferramenta gratuita de 3D generativo.',
  },
  {
    city: 'Tripo AI',
    country: 'Pipeline completo de 3D',
    color: '#6B48FF',
    highlight: '10s para gerar · 100M+ modelos',
    image: './img/frontier/3d-tripo.webp',
    sourceUrl: 'https://www.tripo3d.ai',
    sourceLabel: 'tripo3d.ai',
    metrics: [
      { value: '10s', label: 'tempo geração' },
      { value: '6.5M+', label: 'criadores' },
      { value: '100M+', label: 'modelos gerados' },
      { value: 'rigging', label: 'pipeline completo' },
    ],
    description: 'Pipeline completo: modelagem, texturização, retopologia e rigging automáticos.',
  },
  {
    city: 'Luma AI (Genie)',
    country: 'NeRF + Gaussian Splatting',
    color: '#FF6B35',
    highlight: 'Fotorrealismo espacial',
    image: './img/frontier/3d-luma.png',
    sourceUrl: 'https://lumalabs.ai',
    sourceLabel: 'lumalabs.ai',
    metrics: [
      { value: 'NeRF', label: 'fotorrealismo' },
      { value: 'Gaussian', label: 'Splatting' },
      { value: 'text-to-3D', label: 'via Genie' },
      { value: 'gratuito', label: 'plano free' },
    ],
    description: 'NeRF + Gaussian Splatting para captura 3D fotorrealista. Text-to-3D via Genie.',
  },
  {
    city: 'Autodesk Fusion AI',
    country: 'CAD paramétrico via prompt',
    color: '#0047AB',
    highlight: 'CAD editável real',
    image: './img/frontier/3d-autodesk-fusion.png',
    sourceUrl: 'https://www.autodesk.com/products/fusion-360',
    sourceLabel: 'autodesk.com/fusion-360',
    metrics: [
      { value: 'BREP', label: 'editável CAD' },
      { value: 'paramétrico', label: 'geometria' },
      { value: 'Fusion 360', label: 'integrado' },
      { value: 'fabricação', label: 'pronto para CNC' },
    ],
    description: 'Geometria BREP editável a partir de prompt. Gera CAD paramétrico real para engenharia.',
  },
]

export default function ImageTo3D() {
  return (
    <Section id="image-to-3d" title="Imagem e Texto para 3D" subtitle="De uma foto ou descrição para um modelo tridimensional">
      {/* Tools grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {CASES.map(c => <CaseCard key={c.city} {...c} />)}
      </div>

      {/* Comparison table */}
      <h3 className="text-xl font-bold text-city-navy mb-4">Mesh vs CAD — Quando usar cada abordagem?</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-city-navy text-white">
              <th className="p-3 text-left rounded-tl-xl">Abordagem</th>
              <th className="p-3 text-left">Vantagens</th>
              <th className="p-3 text-left">Limitações</th>
              <th className="p-3 text-left rounded-tr-xl">Melhor para</th>
            </tr>
          </thead>
          <tbody>
            {comparison.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="p-3 font-semibold text-city-navy">{row.type}</td>
                <td className="p-3 text-green-700">{row.pros}</td>
                <td className="p-3 text-red-600">{row.cons}</td>
                <td className="p-3 text-city-blue font-medium">{row.use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  )
}
