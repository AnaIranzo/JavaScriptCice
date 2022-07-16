
import './App.css';
import {useState} from 'react'

function App() {
  let [numero, setNumero] = useState(0)
  function sumar() {
    setNumero(++numero)
    }
    function restar() {
      setNumero(--numero)
      }

  return (
 <>
<h1>{numero}</h1>
<button onClick={sumar}>+</button>
<button onClick={restar}>-</button>
 </>
  );
}

export default App;
