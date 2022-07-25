
import './App.css';
import {useState} from 'react'
import Compositores from './Compositores';
import Eliminar from './Eliminar';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
   const [input, setInput] = useState("")
  
   const [init, setInit] = useState([
    
        { 
          nombre: 'Wolfgang Amadeus Mozart',
          fecha: 1756,
          canciones: ['Symphonie Nr 40', 'Don Giovanni']
        },
        {
          nombre: 'Ludwig van Beethoven',
          fecha: 1770,
          canciones: ['Symphonie No.5', 'Piano Sonata No.32']
        }, 
        {
          nombre: 'Johann Sebastian Bach',
          fecha: 1685,
          canciones: ['Vivace', 'Largo ma non tanto']
        },])
        
   
  
  
  
  return ( 
    <BrowserRouter>
   <header>
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/eliminar">Eliminar</Link></li>
      </ul>
    </nav>
   </header>
    <Routes>
      <Route path='/' element={
      <>
      <Compositores compositores={init}/>
     

      <input type="text" value={input} onChange={e => setInput(e.target.value)}/>

      <button type='button' onClick={()=> {
        let arrayNew=[...init, {nombre: input}]
        
        setInit(arrayNew)
        setInput("")
        }}>Enviar</button>
        </>}/>
    <Route path='/eliminar' element={
     <Eliminar init={init} setInit={setInit}/>}
     />
     </Routes>
  </BrowserRouter>
  );

}


export default App;
