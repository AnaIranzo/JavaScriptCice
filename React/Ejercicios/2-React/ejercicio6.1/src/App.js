
import './App.css';
import { useState } from 'react';
import {BrowserRouter, Routes, Route, Link, useParams} from 'react-router-dom'
import Saludo from './Saludo'

function App() {
  let [input,setInput] = useState('')
 
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={
      <>
    <input type='text' onChange={(e=> setInput(e.target.value))} value={input}/>
    <Link to={'/saludo/' + input}><button type='button' >Enviar</button></Link></>}/>
    <Route path='/saludo/:nombre' element={<Saludo/>}/>
    
    </Routes>
   </BrowserRouter>
  );
}

export default App;
