import { useState } from 'react'
import { motion } from 'framer-motion'
import Section from '../components/Section'
import Icon from '../components/Icon'
import StatCounter from '../components/StatCounter'
import ImageLightbox from '../components/ImageLightbox'

const PLATFORMS = [
  {
    icon: 'cpu',
    color: '#76B900',
    title: 'NVIDIA Omniverse',
    focus: 'Fabricas & industria',
    description:
      'Simulacao 3D fisicamente precisa com OpenUSD. BMW planejou e validou fabrica inteira '
      + 'virtualmente 2 anos antes da operacao — 30% de reducao nos custos de planejamento.',
    caseStudy: 'BMW iFACTORY: colisoes verificadas em 3 dias (antes: 4 semanas)',
    url: 'https://www.nvidia.com/en-us/use-cases/industrial-facility-digital-twins/',
  },
  {
    icon: 'cloud',
    color: '#0078D4',
    title: 'Azure Digital Twins',
    focus: 'Edificios & cidades',
    description:
      'Modelagem baseada em grafos com integracao IoT Hub. Vasakronan (Suecia) reduziu '
      + 'aquecimento e resfriamento em 10%, economizando 6 milhoes SEK/ano (~R$ 3.5M).',
    caseStudy: 'Vasakronan: 10% reducao em energia de climatizacao',
    url: 'https://azure.microsoft.com/en-us/products/digital-twins',
  },
  {
    icon: 'layers',
    color: '#009A44',
    title: 'Bentley iTwin',
    focus: 'Infraestrutura',
    description:
      'Ingere 50+ formatos de engenharia. Collins Engineers reduziu tempo de inspecao de pontes '
      + 'em 20% e fechamento de ponte de semanas para 4 dias. Busca por IA em ProjectWise.',
    caseStudy: 'Collins Engineers: inspecao de pontes 20% mais rapida',
    url: 'https://www.bentley.com/software/itwin-platform/',
  },
  {
    icon: 'settings',
    color: '#009999',
    title: 'Siemens Xcelerator',
    focus: 'Manufatura end-to-end',
    description:
      'Gemeo digital do design a producao. Parceria com NVIDIA (CES 2025) para stack industrial '
      + 'unificada. JetZero e Freyr Battery usam para fabricas greenfield totalmente digitais.',
    caseStudy: 'JetZero: fabrica aeronautica "Factory of the Future" 100% digital',
    url: 'https://www.siemens.com/global/en/products/xcelerator.html',
  },
]

const COMPARISON = [
  { aspect: 'Visualizacao', traditional: 'Modelo 3D estatico', ai: 'Simulacao preditiva em tempo real' },
  { aspect: 'Analise de dados', traditional: 'Manual, periodica', ai: 'Deteccao automatica de anomalias' },
  { aspect: 'Manutencao', traditional: 'Reativa (quebrou, conserta)', ai: 'Preditiva (preve antes de quebrar)' },
  { aspect: 'Decisoes', traditional: 'Baseadas em experiencia humana', ai: 'Otimizacao autonoma por RL' },
  { aspect: 'Simulacao', traditional: 'Cenario unico', ai: 'IA generativa explora milhares de opcoes' },
]

export default function DigitalTwins() {
  const [lightbox, setLightbox] = useState(false)

  return (
    <Section id="digital-twins" title="Gemeos Digitais com IA" subtitle="Replicas virtuais inteligentes de fabricas e edificacoes">
      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mb-10 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
        onClick={() => setLightbox(true)}
      >
        <img
          src="./img/pratica/digitaltwins-hero.png"
          alt="Gemeos Digitais com IA"
          className="w-full h-64 object-cover"
          loading="lazy"
        />
      </motion.div>

      {/* Platform cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {PLATFORMS.map((p, i) => (
          <motion.a
            key={i}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4, boxShadow: '0 20px 40px -12px rgba(0,0,0,0.15)' }}
            className="block bg-white rounded-2xl border border-gray-100 p-6 shadow-sm transition-all group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${p.color}15` }}>
                  <Icon name={p.icon} size={20} style={{ color: p.color }} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-city-navy group-hover:text-city-blue transition-colors">{p.title}</h3>
                  <span className="text-xs text-gray-400">{p.focus}</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">{p.description}</p>
            <div className="bg-gray-50 rounded-lg px-3 py-2 mb-3">
              <p className="text-xs font-semibold" style={{ color: p.color }}>
                <Icon name="check-circle" size={11} className="inline mr-1" />
                {p.caseStudy}
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs font-semibold group-hover:text-city-cyan transition-colors" style={{ color: p.color }}>
              <Icon name="external-link" size={12} />
              Ver mais
            </div>
          </motion.a>
        ))}
      </div>

      {/* Comparison table */}
      <div className="mb-10">
        <h3 className="text-lg font-bold text-city-navy mb-4">Gemeo Digital Tradicional vs com IA</h3>
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
          <div className="grid grid-cols-3 bg-city-navy text-white text-xs font-bold">
            <div className="px-4 py-3">Aspecto</div>
            <div className="px-4 py-3">Tradicional</div>
            <div className="px-4 py-3">Com IA</div>
          </div>
          {COMPARISON.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
            >
              <div className="px-4 py-3 font-semibold text-city-navy">{row.aspect}</div>
              <div className="px-4 py-3 text-gray-500">{row.traditional}</div>
              <div className="px-4 py-3 text-city-blue font-medium">{row.ai}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-city-navy/5 rounded-2xl p-8 mb-8">
        <StatCounter value={30} suffix="%" label="reducao nos custos de planejamento (BMW Omniverse)" />
        <StatCounter value={50} suffix="%" label="reducao de paradas nao planejadas (manutencao preditiva)" />
        <StatCounter value={40} suffix="%" label="economia de energia em edificios (IES + DT)" />
        <StatCounter value={60} suffix="%" label="reducao no tempo de comissionamento (fabricas com DT)" />
      </div>

      {/* Market context */}
      <div className="bg-city-cyan/5 border border-city-cyan/20 rounded-xl p-5">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-city-cyan/15">
            <Icon name="trending-up" size={16} className="text-city-cyan" />
          </div>
          <div>
            <p className="font-bold text-city-navy text-sm">Mercado em explosao</p>
            <p className="text-sm text-gray-600 mt-1">
              O mercado de gemeos digitais deve crescer de <strong>US$ 21-36 bilhoes</strong> (2025)
              para <strong>US$ 100-330 bilhoes</strong> ate 2030-2033 (CAGR 31-48%).
              Primeiros adotantes reportam <strong>15% de reducao de custos</strong> e
              <strong> 25%+ de ganho de eficiencia operacional</strong> ja no primeiro ano.
            </p>
          </div>
        </div>
      </div>

      {lightbox && (
        <ImageLightbox
          src="./img/pratica/digitaltwins-hero.png"
          alt="Gemeos Digitais"
          onClose={() => setLightbox(false)}
        />
      )}
    </Section>
  )
}
