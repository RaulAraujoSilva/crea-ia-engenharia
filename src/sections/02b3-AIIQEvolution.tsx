import { useRef, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Section from '../components/Section'

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
      title="Evolução do QI da IA"
      subtitle="Modelos de fronteira em teste de QI fora dos dados de treinamento — TrackingAI.org"
      dark
    >
      <div ref={ref} className="flex justify-center">
        <a
          href="https://trackingai.org"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-2xl overflow-hidden border-2 border-white/10 hover:border-city-cyan/40 transition-all shadow-2xl max-w-4xl w-full"
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
      </div>
      <p className="text-xs text-gray-400 mt-4 text-center">
        Fonte:{' '}
        <a
          href="https://trackingai.org"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-city-cyan transition-colors"
        >
          TrackingAI.org
        </a>
        {' / Maximum Truth'}
      </p>
    </Section>
  )
}
