import {useState} from "react";
import './App.css';
import {Escena} from './components/escena/escena.js';
import {quotes} from './info/frases.js'
import {Botones} from './components/botones/botones'
import {Fondo} from './components/globalStyles/imgFondo'

function App() {

  const [selected, setSelected] = useState(1);
  const next = () =>
    selected !== quotes.length && setSelected((selected) => selected + 1);
  const previous = () =>
    selected !== 1 && setSelected((selected) => selected - 1);
  
  return (
   <div className="App">
    <Fondo quotes={quotes} selected={selected}/>
    <Botones next={next} previous={previous}/>
    {quotes.map((item) => (<Escena id={item.id} txt={item.txt} isSelected={item.id === selected}/>))}
    </div>
  );
}

export default App;
