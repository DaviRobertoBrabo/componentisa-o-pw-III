import Cartao from './componentes/layouts/Cartao';
import Contador from './componentes/Contador';
import ContadorComponentizado from './componentes/ContadorIncompleto';

function App() {
  return (
    <div className="app">
      <h1>Contador</h1>

      <div className="cards">
        <Cartao titulo="Contador em um componente único" cor="#02044f">
          <Contador />
        </Cartao>
        <Cartao titulo="Contador componentizado" cor="#0d3024">
          <ContadorComponentizado />
        </Cartao>
      </div>
    </div>
  );
}

export default App;
