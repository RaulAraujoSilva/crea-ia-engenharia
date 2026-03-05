import Section from '../components/Section'
import DemoStep from '../components/DemoStep'

const DEMOS = [
  {
    tool: 'Claude.ai',
    instruction: 'Abrir claude.ai, colar um trecho da NBR 6118 (Projeto de estruturas de concreto) e perguntar: "Quais são os requisitos de cobrimento mínimo para armaduras em ambiente urbano de agressividade moderada?"',
    expectedResult: 'Claude identifica corretamente a classe de agressividade ambiental e os cobrimentos nominais das tabelas 7.1 e 7.2 da NBR 6118.',
    discussionPoint: 'A resposta está correta? Confere com a sua edição da norma? Note que a IA pode citar versões desatualizadas.',
    color: '#0047AB',
    icon: 'cpu',
  },
  {
    tool: 'Togal.AI',
    instruction: 'Fazer upload de uma planta baixa simples em PDF no Togal.AI e observar a extração automática de áreas por cômodo.',
    expectedResult: 'A IA identifica automaticamente os ambientes, calcula áreas e gera uma tabela de quantitativos em menos de 2 minutos.',
    discussionPoint: 'Compare com sua medição manual. A precisão é aceitável para uma estimativa preliminar? Onde falha?',
    color: '#6B48FF',
    icon: 'file-text',
  },
  {
    tool: 'ChatGPT',
    instruction: 'Pedir ao ChatGPT: "Calcule o momento fletor máximo de uma viga biapoiada de 6m de vão com carga distribuída de 15 kN/m. Depois dimensione a armadura usando NBR 6118."',
    expectedResult: 'O cálculo do momento (q*L²/8 = 67,5 kN.m) estará correto. Porém, o dimensionamento da armadura pode conter erros em parâmetros como fcd, fyd ou largura efetiva.',
    discussionPoint: 'Este é o ponto crítico: a IA acerta a física básica mas erra detalhes normativos. É por isso que cálculo estrutural EXIGE verificação do engenheiro.',
    color: '#2DC653',
    icon: 'message-square',
  },
]

export default function LiveDemo() {
  return (
    <Section id="live-demo" title="Demo ao Vivo" subtitle="3 demonstrações práticas — acerto, velocidade e erro" dark>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {DEMOS.map((demo, i) => (
          <DemoStep key={i} step={i} {...demo} />
        ))}
      </div>
    </Section>
  )
}
