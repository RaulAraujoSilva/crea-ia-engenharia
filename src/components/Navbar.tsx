import { useState, useEffect } from 'react'
import Icon from './Icon'

const sections = [
  { id: 'hero', label: 'Início', icon: 'home' },
  { id: 'speaker', label: 'Palestrante', icon: 'user' },
  { id: 'ai-timeline', label: 'Timeline IA', icon: 'clock' },
  { id: 'evolution', label: 'Carrossel LLMs', icon: 'trending-up' },
  { id: 'benchmarks', label: 'Benchmarks', icon: 'bar-chart' },
  { id: 'ai-iq-evolution', label: 'QI da IA', icon: 'trending-up' },
  // { id: 'timeline-llms', label: 'Timeline LLMs', icon: 'clock' },
  { id: 'chat-vs-agents', label: 'Chat→Agentes', icon: 'bot' },
  { id: 'tool-use', label: 'Tool Use', icon: 'server' },
  { id: 'agent-swarm', label: 'Swarm', icon: 'users' },
  // { id: 'quiz', label: 'Quiz', icon: 'bar-chart' },
  { id: 'where-ai-works', label: 'Onde Funciona', icon: 'check-circle' },
  { id: 'cases-compliance', label: 'Compliance', icon: 'check-square' },
  { id: 'cases-takeoff', label: 'Orçamentos', icon: 'file-text' },
  { id: 'cases-inspection', label: 'Inspeção', icon: 'camera' },
  { id: 'cases-energy', label: 'Energia', icon: 'zap' },
  { id: 'practical-examples', label: 'Na Prática', icon: 'play' },
  { id: 'practical-examples-2', label: 'Prática (2)', icon: 'play' },
  { id: 'sketch-to-render', label: 'Sketch→Render', icon: 'eye' },
  { id: 'image-to-3d', label: 'Image→3D', icon: 'globe' },
  { id: 'text-to-bim', label: 'Text-to-BIM', icon: 'file-text' },
  { id: 'text-to-bim-pipeline', label: 'BIM Pipeline', icon: 'layers' },
  { id: 'digital-twins', label: 'Digital Twins', icon: 'database' },
  { id: 'digital-twins-cities', label: 'DT Cidades', icon: 'map-pin' },
  // { id: 'poll', label: 'Poll', icon: 'message-circle' },
  { id: 'hype-vs-reality', label: 'O Hype', icon: 'alert-triangle' },
  { id: 'hallucination-rates', label: 'Alucinações', icon: 'eye-off' },
  { id: 'where-ai-fails', label: 'Onde Falha', icon: 'shield' },
  { id: 'agentic-frontier', label: 'Agentes', icon: 'bot' },
  // { id: 'tools-to-try', label: 'Ferramentas', icon: 'cpu' },
  // { id: 'live-demo', label: 'Demo', icon: 'play' },
  { id: 'crea-role', label: 'CREA', icon: 'scale' },
  { id: 'closing', label: 'Encerramento', icon: 'check-circle' },
]

export default function Navbar() {
  const [active, setActive] = useState('hero')
  const [collapsed, setCollapsed] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setCollapsed(true)
  }

  return (
    <>
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="fixed top-4 left-4 z-[60] lg:hidden bg-city-navy text-white p-2 rounded-lg shadow-lg"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d={collapsed ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"} />
        </svg>
      </button>

      <nav
        className={`fixed left-0 top-0 h-full z-50 bg-city-navy/95 backdrop-blur-sm text-white
          transition-transform duration-300 w-56
          ${collapsed ? '-translate-x-full lg:translate-x-0 lg:w-16 lg:hover:w-56' : 'translate-x-0'}
          group overflow-hidden`}
      >
        <div className="p-3 border-b border-white/10 flex items-center gap-2 h-[52px]">
          <Icon name="cpu" size={22} className="text-city-cyan shrink-0" />
          <span className="text-xs font-bold opacity-0 lg:group-hover:opacity-100 transition-opacity whitespace-nowrap text-city-cyan">IA na Prática</span>
        </div>

        <div className="overflow-y-auto h-[calc(100%-52px)] py-2">
          {sections.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`w-full flex items-center gap-3 px-4 py-2 text-left text-sm transition-all
                ${active === id ? 'bg-city-cyan/20 text-city-cyan border-r-3 border-city-cyan' : 'hover:bg-white/10 text-white/70 hover:text-white'}`}
            >
              <Icon name={icon} size={16} className="shrink-0" />
              <span className="whitespace-nowrap opacity-0 lg:group-hover:opacity-100 transition-opacity">{label}</span>
            </button>
          ))}
        </div>
      </nav>
    </>
  )
}
