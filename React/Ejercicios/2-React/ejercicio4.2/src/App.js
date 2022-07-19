
import './App.css';
import videoclub from './videoclub';
import Pelicula from './Tarjeta';
import Main from './Main';
import { useState } from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
  const [catalogo] = useState(videoclub)
  return (
<BrowserRouter>
<Routes>
<Route path='/' element={<Main catalogo={catalogo}/>}/>
{catalogo.map((pelicula,index)=>{
  return <Route path={"/" + pelicula.titulo.replaceAll(" ","-")} element={<p>{pelicula.sinopsis}</p>}/>
})}

</Routes>
</BrowserRouter>
  );
}

export default App;

