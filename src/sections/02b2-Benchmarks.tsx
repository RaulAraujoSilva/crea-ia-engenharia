import Section from '../components/Section'

const benchmarks = [
  { name: 'TRACKING AI', url: 'https://trackingai.org/home', img: './img/benchmarks/benchmark_trackingai_home.png' },
  { name: 'SWE-Bench', url: 'https://swebench.com', img: './img/benchmarks/benchmark_swebench.png' },
  { name: 'Arena AI (Chatbot Arena)', url: 'https://arena.ai/leaderboard', img: './img/benchmarks/benchmark_chatbot_arena.png' },
  { name: 'ARC-AGI', url: 'https://arcprize.org/leaderboard', img: './img/benchmarks/benchmark_arc_agi.png' },
  { name: 'FrontierMath', url: 'https://epoch.ai/frontiermath', img: './img/benchmarks/benchmark_frontiermath.png' },
  { name: "Humanity's Last Exam", url: 'https://lastexam.ai', img: './img/benchmarks/benchmark_humanitys_last_exam.png' },
  { name: 'Artificial Analysis', url: 'https://artificialanalysis.ai/', img: './img/benchmarks/benchmark_artificialanalysis_intelligence.png' },
  { name: 'IMO 2025', url: 'https://imo-official.org', img: './img/benchmarks/benchmark_imo_2025.png' },
]

export default function Benchmarks() {
  return (
    <Section id="benchmarks" title="Benchmarks — Como Medimos a Inteligência" subtitle="Os rankings que definem quem lidera a corrida da IA">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {benchmarks.map(b => (
          <a key={b.name} href={b.url} target="_blank" rel="noopener noreferrer"
            className="group block rounded-xl overflow-hidden border border-gray-200 hover:border-city-blue hover:shadow-lg transition-all">
            <div className="h-32 overflow-hidden bg-gray-50">
              <img src={b.img} alt={b.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            </div>
            <div className="p-3 flex items-center justify-between">
              <span className="font-semibold text-sm text-city-dark">{b.name}</span>
              <span className="text-city-blue text-xs font-semibold">Abrir →</span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  )
}
