import { useState, useEffect } from 'react'
import Section from '../components/Section'
import SimpleImageLightbox from '../components/SimpleImageLightbox'

/* ── Timeline LLMs data ── */
interface EventItem { id: number; date: string; model: string; maker: string }
interface MakerInfo { name: string; accent: string; dim: string; bg: string; track: string }

const EVENTS: EventItem[] = [
  { id:1,  date:"2025-03-25", model:"Gemini 2.5 Pro Exp", maker:"Google" },
  { id:2,  date:"2025-05-22", model:"Claude 4 Opus+Sonnet", maker:"Anthropic" },
  { id:3,  date:"2025-06-17", model:"Gemini 2.5 Pro GA", maker:"Google" },
  { id:4,  date:"2025-08-05", model:"Claude Opus 4.1", maker:"Anthropic" },
  { id:5,  date:"2025-08-07", model:"GPT-5", maker:"OpenAI" },
  { id:6,  date:"2025-09-15", model:"GPT-5-Codex", maker:"OpenAI" },
  { id:7,  date:"2025-09-29", model:"Claude Sonnet 4.5", maker:"Anthropic" },
  { id:8,  date:"2025-10-15", model:"Claude Haiku 4.5", maker:"Anthropic" },
  { id:9,  date:"2025-11-18", model:"Gemini 3 Pro", maker:"Google" },
  { id:10, date:"2025-11-19", model:"GPT-5.1-Codex-Max", maker:"OpenAI" },
  { id:11, date:"2025-11-24", model:"Claude Opus 4.5", maker:"Anthropic" },
  { id:12, date:"2025-12-11", model:"GPT-5.2", maker:"OpenAI" },
  { id:13, date:"2025-12-17", model:"Gemini 3 Flash", maker:"Google" },
  { id:14, date:"2026-02-05", model:"GPT-5.3-Codex", maker:"OpenAI" },
  { id:15, date:"2026-02-05", model:"Claude Opus 4.6", maker:"Anthropic" },
  { id:16, date:"2026-02-17", model:"Claude Sonnet 4.6", maker:"Anthropic" },
  { id:17, date:"2026-02-19", model:"Gemini 3.1 Pro", maker:"Google" },
  { id:18, date:"2026-03-03", model:"Gemini 3.1 Flash-Lite", maker:"Google" },
  { id:19, date:"2026-03-03", model:"GPT-5.3 Instant", maker:"OpenAI" },
  { id:20, date:"2026-03-05", model:"GPT-5.4 Thinking", maker:"OpenAI" },
].sort((a,b)=> new Date(a.date).getTime()-new Date(b.date).getTime())

const MAKERS: MakerInfo[] = [
  { name:"OpenAI",    accent:"#fb923c", dim:"#7c3010", bg:"#2c1306", track:"rgba(251,146,60,0.25)" },
  { name:"Google",    accent:"#60a5fa", dim:"#1e40af", bg:"#0d1f3c", track:"rgba(96,165,250,0.25)" },
  { name:"Anthropic", accent:"#4ade80", dim:"#166534", bg:"#0a2e19", track:"rgba(74,222,128,0.25)" },
]
const makerMap = Object.fromEntries(MAKERS.map(m=>[m.name,m]))

const TODAY = "2026-03-05"
const MIN_MS = new Date(EVENTS[0].date).getTime()
const MAX_MS = new Date(EVENTS[EVENTS.length-1].date).getTime()
const SPAN   = MAX_MS - MIN_MS

function toPct(d: string) { return ((new Date(d).getTime()-MIN_MS)/SPAN)*100 }
function fmtShort(d: string) {
  const [y,m,day]=d.split("-")
  const mo=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"]
  return `${parseInt(day)} ${mo[parseInt(m)-1]} ${y}`
}

function getMonthTicks() {
  const names=["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"]
  const ticks: {label: string, pct: number}[]=[]
  const d=new Date("2025-03-01")
  while(d<=new Date("2026-04-01")){
    const p=toPct(d.toISOString().slice(0,10))
    if(p>=0&&p<=100) ticks.push({label:`${names[d.getMonth()]} '${String(d.getFullYear()).slice(2)}`,pct:p})
    d.setMonth(d.getMonth()+1)
  }
  return ticks
}

/* ── Compact Lane ── */
function Lane({ maker }: { maker: string }) {
  const mk = makerMap[maker]
  const evs = EVENTS.filter(e=>e.maker===maker)

  return (
    <div style={{marginBottom:"4px"}}>
      <div style={{
        fontSize:"10px",fontWeight:700,letterSpacing:".14em",textTransform:"uppercase",
        color:mk.accent,fontFamily:"monospace",marginBottom:"4px",
        display:"flex",alignItems:"center",gap:"6px",
      }}>
        <div style={{width:"7px",height:"7px",borderRadius:"50%",background:mk.accent}}/>
        {maker}
      </div>
      <div style={{
        position:"relative",height:"70px",background:"#0d0d10",
        border:"1px solid #1e1e24",borderRadius:"8px",marginBottom:"12px",
      }}>
        <div style={{
          position:"absolute",top:"50%",left:"6px",right:"6px",
          height:"2px",transform:"translateY(-50%)",
          background:`linear-gradient(to right, transparent, ${mk.track} 6%, ${mk.track} 94%, transparent)`,
        }}/>
        {evs.map((ev,i)=>{
          const left = toPct(ev.date)
          const isToday = ev.date===TODAY
          const above = i%2===0
          return (
            <div key={ev.id} style={{
              position:"absolute",left:`${left}%`,top:"50%",
              transform:"translate(-50%,-50%)",zIndex:10,
            }} title={`${ev.model} — ${fmtShort(ev.date)}`}>
              {above && (
                <div style={{
                  position:"absolute",bottom:"calc(100% + 5px)",left:"50%",
                  transform:"translateX(-50%)",textAlign:"center",pointerEvents:"none",maxWidth:"80px",
                }}>
                  <div style={{fontSize:"9px",fontWeight:700,color:isToday?"#fb923c":"#e2e8f0",lineHeight:1.2}}>{ev.model}</div>
                </div>
              )}
              <div style={{
                width:"16px",height:"16px",borderRadius:"50%",
                background:isToday?"#2c1306":mk.bg,
                border:`2px solid ${isToday?"#fb923c":mk.accent}`,
                display:"flex",alignItems:"center",justifyContent:"center",
                position:"relative",zIndex:2,
                animation:isToday?"todayPulse 2s ease infinite":"none",
              }}>
                <div style={{width:"5px",height:"5px",borderRadius:"50%",background:isToday?"#fb923c":mk.accent}}/>
              </div>
              {!above && (
                <div style={{
                  position:"absolute",top:"calc(100% + 5px)",left:"50%",
                  transform:"translateX(-50%)",textAlign:"center",pointerEvents:"none",maxWidth:"80px",
                }}>
                  <div style={{fontSize:"9px",fontWeight:700,color:isToday?"#fb923c":"#e2e8f0",lineHeight:1.2}}>{ev.model}</div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ── Main Component ── */
export default function Evolution() {
  const [filter, setFilter] = useState("all")
  const ticks = getMonthTicks()
  const visibleMakers = filter==="all" ? MAKERS : MAKERS.filter(m=>m.name===filter)

  useEffect(()=>{
    // inject keyframes once
    if (!document.getElementById('timeline-keyframes')) {
      const style = document.createElement('style')
      style.id = 'timeline-keyframes'
      style.textContent = `@keyframes todayPulse{0%,100%{box-shadow:0 0 0 0 rgba(251,146,60,.4)}50%{box-shadow:0 0 0 8px rgba(251,146,60,0)}}`
      document.head.appendChild(style)
    }
  },[])

  return (
    <Section id="evolution" title="O Carrossel dos LLMs" subtitle="A corrida dos modelos: cada semana um novo 'mais poderoso do mundo'" dark>
      {/* Top: Carrossel visual + info — compact row */}
      <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-5 mb-8">
        {/* Image */}
        <div className="flex justify-center">
          <SimpleImageLightbox
            src="./img/llm_carousel_race.png"
            alt="Carrossel dos modelos LLM"
            className="rounded-xl shadow-lg max-h-[180px] w-auto border border-white/10"
          />
        </div>
        {/* Info cards — horizontal */}
        <div className="flex flex-col gap-2 justify-center">
          {[
            { icon: '🔄', title: 'Ciclo contínuo de superação', detail: 'Gemini → Grok → DeepSeek → Qwen → OpenAI → Claude — e volta' },
            { icon: '⏱️', title: 'Aceleração exponencial', detail: '2023: ~6 meses de liderança · 2025/26: 2–4 semanas' },
            { icon: '🌍', title: 'Competição global', detail: 'DeepSeek, Qwen, Kimi (China) também disputam o topo' },
          ].map((c, i) => (
            <div key={i} className="flex items-center gap-3 px-3 py-2 bg-white/5 rounded-lg border border-white/10">
              <span className="text-lg shrink-0">{c.icon}</span>
              <div>
                <p className="font-semibold text-sm text-white">{c.title}</p>
                <p className="text-xs text-gray-400">{c.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom: Timeline LLMs — compact */}
      <div style={{ color:"#e2e8f0" }}>
        {/* Controls + legend */}
        <div style={{display:"flex",alignItems:"center",gap:"16px",flexWrap:"wrap",marginBottom:"12px"}}>
          <div style={{display:"flex",gap:"14px"}}>
            {MAKERS.map(m=>(
              <div key={m.name} style={{display:"flex",alignItems:"center",gap:"5px"}}>
                <div style={{width:"8px",height:"8px",borderRadius:"50%",background:m.accent}}/>
                <span style={{fontSize:"11px",color:"#cbd5e1",fontWeight:600}}>{m.name}</span>
              </div>
            ))}
          </div>
          <div style={{display:"flex",gap:"2px",background:"#111115",border:"1px solid #222228",borderRadius:"8px",padding:"2px"}}>
            {["all","OpenAI","Google","Anthropic"].map(k=>(
              <button key={k} onClick={()=>setFilter(k)} style={{
                background:filter===k?"#222228":"none",
                border:filter===k?"1px solid #333338":"1px solid transparent",
                cursor:"pointer",color:filter===k?"#f8fafc":"#94a3b8",
                fontFamily:"monospace",fontSize:"9px",letterSpacing:".08em",textTransform:"uppercase",
                padding:"4px 10px",borderRadius:"6px",transition:"all .15s",fontWeight:600,
              }}>{k==="all"?"Todos":k}</button>
            ))}
          </div>
          <span style={{fontSize:"10px",color:"#475569",fontFamily:"monospace",marginLeft:"auto"}}>
            {EVENTS.filter(e=>filter==="all"||e.maker===filter).length} lançamentos · Mar 2025 → Mar 2026
          </span>
        </div>

        {/* Board */}
        <div style={{
          background:"#0c0c0f",border:"1px solid #1e1e28",borderRadius:"12px",
          padding:"16px 12px 12px",overflow:"hidden",
        }}>
          {/* Month ticks */}
          <div style={{position:"relative",height:"16px",marginBottom:"12px",borderBottom:"1px solid #1e1e28"}}>
            {ticks.map((t,i)=>(
              <div key={i} style={{
                position:"absolute",left:`${t.pct}%`,transform:"translateX(-50%)",
                fontSize:"8px",fontFamily:"monospace",color:"#64748b",
                letterSpacing:".1em",textTransform:"uppercase",whiteSpace:"nowrap",fontWeight:600,
              }}>{t.label}</div>
            ))}
          </div>
          {/* Lanes */}
          {visibleMakers.map(m=>(
            <Lane key={m.name} maker={m.name} />
          ))}
        </div>
      </div>
    </Section>
  )
}
