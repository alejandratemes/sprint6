import {useState} from "react";
import './App.css';
import {Escena} from './components/escena/escena.js';
import {quotes} from './info/frases.js'
import {Botones} from './components/botones/botones'
import {Fondo} from './components/globalStyles/imgFondo'
import {Inicio} from './components/inicio/Inicio'

function App() {
  const [inicio, setInicio] = useState(true);
  const [selected, setSelected] = useState(1);

  const eInici = () => setInicio(false);
  const next = () =>
    selected !== quotes.length && setSelected((selected) => selected + 1);
  const previous = () =>
    selected !== 1 && setSelected((selected) => selected - 1);
  
  return (
   <div className="App">
    { inicio ? (
      <>
      <Inicio eInici={eInici}/>
      </>
    ) : (
      <>
      <Fondo quotes={quotes} selected={selected}/>
      <Botones next={next} previous={previous}/>
      {quotes.map((item) => (<Escena key={item.id} txt={item.txt} isSelected={item.id === selected}/>))}
      </>
    )}
    </div>
  );
}

export default App;
