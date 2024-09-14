import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting/Greeting';
import TemperatureConverter from './components/TemperatureConverter/TemperatureConverter.jsx';
import TodoListMaterial from './components/TodoListMaterial/TodoListMaterial.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Greeting name="Максим" />
        <TemperatureConverter />
        <TodoListMaterial />

        <div className='boxPS'>
        <p className='ps'>Интуиция и настойчивость (методом тыка) - наше все. </p>
        <p className='ps'>Ибо память и знания ну очень хромают.</p>
        </div>
      </header>
    </div>
  );
}

export default App;
