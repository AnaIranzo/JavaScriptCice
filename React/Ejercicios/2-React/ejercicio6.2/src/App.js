
import { useState } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Operaciones from './Operaciones';

function App() {
  let [num1, setNum1] = useState(0)
  let [num2, setNum2] = useState(0)


  return (
<BrowserRouter>

<div>
  <h3>{num1}</h3>
  <button type='button' onClick={()=> setNum1(++ num1)}>+</button>
  <button type='button' onClick={()=> setNum1(-- num1)}>-</button>
  <h3>{num2}</h3>
  <button type='button' onClick={()=> setNum2(++ num2)}>+</button>
  <button type='button' onClick={()=> setNum2(-- num2)}>-</button>
</div>
<Routes>
<Route path='/operaciones/:num1/:num2' element={<Operaciones/>} />
</Routes>
<div>
<Link to={'/operaciones/'+ num1 +'/'+ num2} element={<Operaciones/>} >Operaciones</Link>
</div>
<div>
<Link to='/'>Inicio</Link>
</div>
<div>
<button typeof='button' onClick={()=> {
  setNum1(0) 
  setNum2(0)}}>Resetear</button>
</div>
</BrowserRouter>
  );
}

export default App;
