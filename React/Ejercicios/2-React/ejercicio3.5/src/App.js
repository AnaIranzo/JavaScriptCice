

import './App.css';
import { useState } from 'react';
import biblioteca from './biblioteca';
import Cabecera from './Cabecera';

import Libro from './Libro';

function App() {
  return (
    <> 
    <Cabecera usuario={biblioteca.usuario}/>
    <main className='catalogo'>
       {biblioteca.libros.map((datosLibro,index)=> {
        return (
        <Libro datos={datosLibro}
        key= {index}
       
      
        />
        )
       })}
        </main>
       
    </>
  

  );
}

export default App;
