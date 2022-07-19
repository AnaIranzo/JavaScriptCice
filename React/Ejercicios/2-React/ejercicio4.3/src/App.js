
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import { useState } from 'react';
import videojuegos from './components/videojuegos';
import Videojuego from './components/Videojuego';
import Cabecera from './components/Cabecera';

function App() {
  const [catalogo] = useState(videojuegos)
  return (
  
 <BrowserRouter>
 <Cabecera/>
 <Routes>

  <Route path = '/'
    element=  {catalogo.map((videojuego , index)=>{
      return <Videojuego key={index} datos={videojuego} full={false}/>
    })}
    />


{catalogo.map((videojuego , index)=>{
      return (
      <Route path = {'/'+ videojuego.nombre.replaceAll(' ','-') }
        element= {<Videojuego key={index} datos={videojuego} full={true}/>}/>) 
})}
</Routes>
</BrowserRouter>


  );
}

export default App;
