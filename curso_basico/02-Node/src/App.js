import logo from './logo.svg';
import './App.css';
import Coche from './componentes/Coche';
import Salario from './componentes/Salario';
import Caja from './componentes/Caja'
import Empleado from './componentes/Empleado'
import Temporizador from './componentes/Temporizador';

function App() {
  return (
    <div className="App">
      <h1>React</h1>
      <hr />
      <h2>Componentes</h2>
      <Coche matricula="asd123" precio={ 1000 } />
      <hr />
      <h2>Eventos</h2>
      <Salario salario_total={1000} impuestos={15}/>
      <hr />
      <div align="center">
        <Caja />
      </div>
      <hr />
      <h2>Hooks</h2>
      <div align="center">
        <Empleado />
      </div>
      <hr />
      <div align="center">
        <Temporizador />
      </div>
    </div>
  );
}

export default App;
