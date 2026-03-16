import Navbar from './components/Navbar'
import Hero from './sections/01-Hero'
import Speaker from './sections/02-Speaker'
import Evolution from './sections/02b-Evolution'
import TimelineLLMs from './sections/02d-TimelineLLMs'
import ChatVsAgents from './sections/02c-ChatVsAgents'
import HypeVsReality from './sections/03-HypeVsReality'
import Quiz from './sections/04-Quiz'
import WhereAIWorks from './sections/05-WhereAIWorks'
import CasesCompliance from './sections/06-CasesCompliance'
import CasesTakeoff from './sections/07-CasesTakeoff'
import CasesInspection from './sections/08-CasesInspection'
import CasesEnergy from './sections/09-CasesEnergy'
import PracticalExamples from './sections/09B-PracticalExamples'
import WhereAIFails from './sections/10-WhereAIFails'
import HallucinationRates from './sections/11-HallucinationRates'
import Poll from './sections/12-Poll'
import AgenticFrontier from './sections/13-AgenticFrontier'
import SketchToRender from './sections/13A-SketchToRender'
import ImageTo3D from './sections/13A2-ImageTo3D'
import TextToBIM from './sections/13B-TextToBIM'
import TextToBIMPipeline from './sections/13B2-TextToBIMPipeline'
import DigitalTwins from './sections/13D-DigitalTwins'
import DigitalTwinsCities from './sections/13D2-DigitalTwinsCities'
import ToolsToTry from './sections/14-ToolsToTry'
import LiveDemo from './sections/15-LiveDemo'
import CREARole from './sections/16-CREARole'
import Closing from './sections/17-Closing'

function App() {
  return (
    <div className="relative">
      <Navbar />
      <main className="lg:ml-16">
        {/* Abertura */}
        <Hero />
        <Speaker />

        {/* A IA Hoje */}
        <Evolution />
        <TimelineLLMs />
        <ChatVsAgents />

        {/* O Hype vs A Realidade */}
        <HypeVsReality />
        <Quiz />

        {/* Onde Funciona */}
        <WhereAIWorks />
        <CasesCompliance />
        <CasesTakeoff />
        <CasesInspection />
        <CasesEnergy />

        {/* Exemplos Práticos */}
        <PracticalExamples />

        {/* Onde Não Funciona */}
        <WhereAIFails />
        <HallucinationRates />

        {/* Interação */}
        <Poll />

        {/* A Fronteira */}
        <AgenticFrontier />
        <SketchToRender />
        <ImageTo3D />
        <TextToBIM />
        <TextToBIMPipeline />
        <DigitalTwins />
        <DigitalTwinsCities />

        {/* Ferramentas */}
        <ToolsToTry />
        <LiveDemo />

        {/* Regulação e Encerramento */}
        <CREARole />
        <Closing />
      </main>
    </div>
  )
}

export default App
