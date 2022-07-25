
import './App.css';
import {useEffect, useState} from 'react'


function App() {
  let [data, setData] = useState([])
  useEffect(()=> {
    fetch('https://rickandmortyapi.com/api/character/').then(res => res.json()).then(datos => setData(datos.results))
  }, [])


  return (
 <>

 {data.map((personaje, index)=> {
  return (
<div className="container">
            <h2>{personaje.name}</h2>
            <img src={personaje.image} alt={personaje.name}/>
        </div>
  )
 })}

 
 </>
  );
}

export default App;
