import './App.css';
import {Escena} from './components/escena/escena.js';
import {quotes} from './info/frases.js'

function App() {
  return (
    <div className="App">
      {quotes.map((item) => (
        <Escena key={item.id} frase={item.frase}/>
      ))}
    </div>
  );
}

export default App;
