import Section from '../components/Section'
import SimpleImageLightbox from '../components/SimpleImageLightbox'

const timeline = [
  { year: '2022', event: 'ChatGPT lançado', detail: 'GPT-3.5 inicia era dos chatbots' },
  { year: '2023', event: 'GPT-4 + Gemini', detail: 'Multimodalidade e raciocínio avançado' },
  { year: '2024', event: 'Agentes + Claude 3.5', detail: 'Coding assistants e agentes autônomos' },
  { year: '2025', event: 'GPT-5 + Gemini 3', detail: 'Deep Research, 1M+ tokens, ARC-AGI' },
  { year: '2026', event: 'Era dos Agentes', detail: 'GPT-5.3-Codex, Gemini 3.1, Claude Opus 4.6, Grok 4.20' },
]

export default function Evolution() {
  return (
    <Section id="evolution" title="A IA Evoluiu — E Continua Acelerando" subtitle="De chatbots simples a agentes autônomos que resolvem problemas reais">
      {/* Timeline */}
      <div className="flex overflow-x-auto gap-4 pb-4 mb-8 scrollbar-thin">
        {timeline.map((t, i) => (
          <div key={i} className="flex-shrink-0 w-52">
            <div className="relative pl-6 border-l-3 border-city-blue pb-6">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-city-blue border-2 border-white" />
              <span className="text-2xl font-extrabold text-city-navy">{t.year}</span>
              <p className="font-semibold text-city-dark mt-1">{t.event}</p>
              <p className="text-sm text-gray-500">{t.detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Carrossel dos LLMs */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-200">
        <h3 className="text-xl font-bold text-city-navy mb-1">O Carrossel dos LLMs</h3>
        <p className="text-gray-600 mb-4 max-w-3xl text-sm">
          Cada empresa anuncia <strong>"o modelo mais poderoso do mundo"</strong> — e semanas depois
          é ultrapassada. Ciclos: 2023 <strong>~6 meses</strong>, 2024 <strong>~3 meses</strong>,
          2025/26 a cada <strong>2–4 semanas</strong>.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="flex justify-center">
            <SimpleImageLightbox
              src="./img/llm_carousel_race.png"
              alt="Carrossel dos modelos LLM"
              className="rounded-xl shadow-lg max-w-full h-auto max-h-[320px] border border-gray-200"
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-white rounded-xl shadow-sm border border-gray-100">
              <span className="text-xl shrink-0">🔄</span>
              <div>
                <p className="font-semibold text-sm text-city-navy">Ciclo contínuo de superação</p>
                <p className="text-xs text-gray-600">Gemini → Grok → DeepSeek → Qwen → OpenAI → Claude — e volta</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-white rounded-xl shadow-sm border border-gray-100">
              <span className="text-xl shrink-0">⏱️</span>
              <div>
                <p className="font-semibold text-sm text-city-navy">Aceleração exponencial</p>
                <p className="text-xs text-gray-600">A "liderança" dura cada vez menos — semanas, não meses</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-white rounded-xl shadow-sm border border-gray-100">
              <span className="text-xl shrink-0">🌍</span>
              <div>
                <p className="font-semibold text-sm text-city-navy">Competição global</p>
                <p className="text-xs text-gray-600">DeepSeek, Qwen, Kimi (China) também disputam o topo</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Section>
  )
}
