
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Cabecera from './components/Cabecera';
import { useState } from 'react';
import videojuegos from './components/videojuegos';
import Videojuego from './components/Info';

function App() {
  const [catalogo] = useState(videojuegos)
  return (
    <>
{catalogo.map((videojuego,index)=>{
  return (<Videojuego key={index}/>)
})}
</>


  );
}

export default App;
