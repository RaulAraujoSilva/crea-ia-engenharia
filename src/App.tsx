import Navbar from './components/Navbar'
import Hero from './sections/01-Hero'
import Speaker from './sections/02-Speaker'
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

        {/* A Fronteira e Ferramentas */}
        <AgenticFrontier />
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
