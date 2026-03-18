import { useRef, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Section from '../components/Section'
import SimpleImageLightbox from '../components/SimpleImageLightbox'

export default function AIIQEvolution() {
  const imgRef = useRef<HTMLImageElement>(null)
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  // Force GIF restart when it enters viewport
  useEffect(() => {
    if (inView && imgRef.current) {
      const src = imgRef.current.src
      imgRef.current.src = ''
      imgRef.current.src = src
    }
  }, [inView])

  return (
    <Section
      id="ai-iq-evolution"
      title="Como a IA se Compara aos Humanos"
      subtitle="QI dos modelos de fronteira e desempenho em tarefas de trabalho intelectual"
      dark
    >
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Left: GIF QI */}
        <div>
          <h3 className="text-base font-bold text-white mb-3">Evolução do QI da IA</h3>
          <a
            href="https://trackingai.org"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl overflow-hidden border-2 border-white/10 hover:border-city-cyan/40 transition-all shadow-xl"
          >
            {inView && (
              <img
                ref={imgRef}
                src="/img/TrackingAI-Historical-IQ.gif"
                alt="AI IQ Test Results — evolução histórica dos modelos de fronteira em teste de QI (TrackingAI.org / Maximum Truth)"
                className="w-full h-auto"
              />
            )}
          </a>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Fonte:{' '}
            <a href="https://trackingai.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-city-cyan transition-colors">
              TrackingAI.org
            </a>
            {' / Maximum Truth'}
          </p>
        </div>

        {/* Right: GDP-Eval */}
        <div>
          <h3 className="text-base font-bold text-white mb-3">Tarefas de Trabalho Intelectual</h3>
          <div className="rounded-xl overflow-hidden border-2 border-white/10 hover:border-city-cyan/40 transition-all shadow-xl bg-white">
            <SimpleImageLightbox
              src="/img/GDPval_tarefas_intelectuais.svg"
              alt="GDP-Eval — Desempenho de modelos de IA em tarefas de trabalho intelectual"
              className="w-full h-auto"
            />
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Fonte: GDP-Eval Benchmark
          </p>
        </div>
      </div>
    </Section>
  )
}
