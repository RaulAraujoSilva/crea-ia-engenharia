import { useState } from 'react'
import { motion } from 'framer-motion'
import Section from '../components/Section'
import Icon from '../components/Icon'
import ImageLightbox from '../components/ImageLightbox'

const MODELS = [
  {
    icon: 'globe',
    color: '#6B48FF',
    title: 'Genie 2 / Genie 3 (Google DeepMind)',
    tag: 'World Model',
    description:
      'Modelo foundation que gera mundos 3D interativos e navegaveis a partir de uma unica imagem. '
      + 'O usuario controla a navegacao em tempo real — a IA gera cada frame com fisica, iluminacao e consistencia 3D.',
    specs: [
      { label: 'Resolucao', value: '720p / 24fps' },
      { label: 'Duracao', value: '2-5 min coerentes' },
      { label: 'Entrada', value: 'Imagem ou texto' },
      { label: 'Modelo', value: 'Autoregressive Latent Diffusion' },
    ],
    url: 'https://deepmind.google/blog/genie-2-a-large-scale-foundation-world-model/',
  },
  {
    icon: 'eye',
    color: '#00B4D8',
    title: 'World Labs — Marble (Fei-Fei Li)',
    tag: 'Spatial AI',
    description:
      'Transforma imagens 2D em ambientes 3D navegaveis usando Gaussian Splatting. '
      + 'Foco em arquitetura: arquitetos podem "caminhar" por um conceito antes de desenhar a planta. '
      + 'Recebeu US$200M da Autodesk em 2026.',
    specs: [
      { label: 'Funding', value: 'US$ 1 bilhao' },
      { label: 'Investidor AEC', value: 'Autodesk (US$ 200M)' },
      { label: 'Tecnologia', value: 'Gaussian Splatting' },
      { label: 'Uso', value: 'Prototipacao espacial' },
    ],
    url: 'https://www.worldlabs.ai/case-studies/2-architecture-design',
  },
]

const FLOOR_PLAN_TOOLS = [
  { name: 'Planner 5D', desc: 'Upload PDF/2D, converte em 3D editavel', url: 'https://planner5d.com/ai' },
  { name: 'Rendair AI', desc: 'Planta 2D para walkthrough 3D navegavel', url: 'https://www.blog.rendair.ai/turn-2d-floor-plans-into-3d-walkthroughs/' },
  { name: 'ArchiLabs', desc: 'Planta 2D para 3D direto no Revit', url: 'https://archilabs.ai/' },
  { name: 'Maket', desc: 'Design generativo + renders + zoneamento', url: 'https://www.maket.ai/' },
]

export default function WorldModels() {
  const [lightbox, setLightbox] = useState(false)

  return (
    <Section id="world-models" title="Modelos de Mundo" subtitle="Da imagem ao ambiente 3D navegavel — Genie 2 e alem" dark>
      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mb-10 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
        onClick={() => setLightbox(true)}
      >
        <img
          src="./img/pratica/worldmodels-hero.png"
          alt="Modelos de Mundo: da planta a navegacao 3D"
          className="w-full h-64 object-cover"
          loading="lazy"
        />
      </motion.div>

      {/* Main models */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {MODELS.map((m, i) => (
          <motion.a
            key={i}
            href={m.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -4, boxShadow: '0 20px 40px -12px rgba(0,0,0,0.25)' }}
            className="block bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-6 transition-all group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${m.color}25` }}>
                  <Icon name={m.icon} size={24} style={{ color: m.color }} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-city-cyan transition-colors">{m.title}</h3>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold text-white" style={{ backgroundColor: m.color }}>
                {m.tag}
              </span>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed mb-4">{m.description}</p>

            {/* Specs grid */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              {m.specs.map((s, j) => (
                <div key={j} className="bg-white/5 rounded-lg px-3 py-2">
                  <p className="text-xs text-gray-400">{s.label}</p>
                  <p className="text-sm font-bold text-white">{s.value}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-1 text-xs font-semibold" style={{ color: m.color }}>
              <Icon name="external-link" size={12} />
              Ver mais
            </div>
          </motion.a>
        ))}
      </div>

      {/* How it works explainer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 mb-10"
      >
        <h3 className="text-lg font-bold text-white mb-3">
          <Icon name="cpu" size={18} className="inline mr-2 text-city-cyan" />
          Como funciona o Genie
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { step: '1', title: 'Imagem seed', desc: 'Foto, render, concept art ou planta', color: '#6B48FF' },
            { step: '2', title: 'Encoder de video', desc: 'Comprime em representacao latente', color: '#0047AB' },
            { step: '3', title: 'Transformer + acao', desc: 'Prediz proximo frame com input do usuario', color: '#00B4D8' },
            { step: '4', title: 'Diffusion decoder', desc: 'Gera frame realista navegavel', color: '#2DC653' },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold text-sm" style={{ backgroundColor: s.color }}>
                {s.step}
              </div>
              <p className="text-sm font-bold text-white">{s.title}</p>
              <p className="text-xs text-gray-400 mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Floor plan tools */}
      <h3 className="text-lg font-bold text-white mb-4">
        <Icon name="map-pin" size={18} className="inline mr-2 text-city-cyan" />
        Ferramentas para planta → 3D (ja funcionam hoje)
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {FLOOR_PLAN_TOOLS.map((t, i) => (
          <motion.a
            key={i}
            href={t.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all group"
          >
            <p className="text-sm font-bold text-white group-hover:text-city-cyan transition-colors">{t.name}</p>
            <p className="text-xs text-gray-400 mt-1">{t.desc}</p>
            <Icon name="external-link" size={11} className="text-gray-500 mt-2" />
          </motion.a>
        ))}
      </div>

      {/* Honest caveat */}
      <div className="bg-city-orange/10 border border-city-orange/20 rounded-xl p-5">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-city-orange/20">
            <Icon name="alert-triangle" size={16} className="text-city-orange" />
          </div>
          <div>
            <p className="font-bold text-white text-sm">Limitacao importante</p>
            <p className="text-sm text-gray-300 mt-1">
              Genie gera <strong className="text-white">simulacao em pixels</strong>, nao geometria 3D real.
              Nao exporta para CAD/BIM/Revit. E uma ferramenta de <strong className="text-white">prototipacao e visualizacao</strong>,
              nao de producao. Para modelos editaveis, use as ferramentas dedicadas acima.
            </p>
          </div>
        </div>
      </div>

      {lightbox && (
        <ImageLightbox
          src="./img/pratica/worldmodels-hero.png"
          alt="Modelos de Mundo"
          onClose={() => setLightbox(false)}
        />
      )}
    </Section>
  )
}
