
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
{catalogo.map((pelicula,inde)=>{
  return <Route path={"/" + pelicula.titulo.replaceAll(" ","-")} element={<Pelicula full={true} cartel={pelicula.cartel} titulo={pelicula.titulo} sinopsis={pelicula.sinopsis}/>}/>
})}

</Routes>
</BrowserRouter>
  );
}

export default App;

