import { motion } from 'framer-motion'
import Section from '../components/Section'

const tools = [
  {
    name: 'Meshy AI',
    desc: 'Texto ou imagem → modelo 3D com topologia limpa em segundos. Exporta GLB, OBJ, FBX. Melhor ferramenta gratuita de 3D generativo.',
    url: 'https://www.meshy.ai',
    img: './img/frontier/3d-meshy.webp',
    tag: 'Gratuito',
    tagColor: '#2DC653',
  },
  {
    name: 'Tripo AI',
    desc: 'Pipeline completo: modelagem, texturização, retopologia e rigging automáticos. 50% mais rápido que concorrentes em benchmarks.',
    url: 'https://www.tripo3d.ai',
    img: './img/frontier/3d-tripo.webp',
    tag: 'Pipeline completo',
    tagColor: '#6B48FF',
  },
  {
    name: 'Luma AI (Genie)',
    desc: 'NeRF + Gaussian Splatting para captura 3D fotorrealista. Text-to-3D via Genie. Referência em realismo espacial.',
    url: 'https://lumalabs.ai',
    img: './img/frontier/3d-luma.png',
    tag: 'Fotorrealismo',
    tagColor: '#FF6B35',
  },
  {
    name: 'Autodesk Fusion AI',
    desc: 'Geometria BREP editável a partir de prompt. Diferente de mesh — gera CAD paramétrico real que engenheiros podem editar.',
    url: 'https://www.autodesk.com/products/fusion-360',
    img: './img/frontier/3d-autodesk-fusion.png',
    tag: 'CAD editável',
    tagColor: '#0047AB',
  },
]

const comparison = [
  { type: 'Mesh/NeRF (Meshy, Luma)', pros: 'Velocidade, fotorrealismo', cons: 'Não editável como CAD', use: 'Conceito, marketing' },
  { type: 'CAD/BREP (Fusion, MIT)', pros: 'Paramétrico, editável', cons: 'Menos realista visualmente', use: 'Engenharia, fabricação' },
]

export default function ImageTo3D() {
  return (
    <Section id="image-to-3d" title="Imagem e Texto para 3D" subtitle="De uma foto ou descrição para um modelo tridimensional">
      {/* Tools grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        {tools.map((tool, i) => (
          <motion.a
            key={tool.name}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group block rounded-2xl overflow-hidden border border-gray-200 hover:border-city-blue hover:shadow-xl transition-all"
          >
            <div className="h-32 overflow-hidden bg-gray-100">
              <img
                src={tool.img}
                alt={tool.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-city-navy">{tool.name}</h4>
                <span className="text-[10px] font-bold px-2 py-1 rounded-full text-white" style={{ backgroundColor: tool.tagColor }}>{tool.tag}</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{tool.desc}</p>
              <span className="inline-flex items-center mt-3 text-xs text-city-blue font-semibold group-hover:text-city-orange transition-colors">
                Visitar site <span className="ml-1">→</span>
              </span>
            </div>
          </motion.a>
        ))}
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
