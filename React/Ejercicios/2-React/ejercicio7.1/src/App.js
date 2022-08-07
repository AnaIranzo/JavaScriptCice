
import './App.css';
import {useEffect, useState} from 'react'


function App() {
  let [data, setData] = useState([])
  let [url, setUrl] = useState('https://rickandmortyapi.com/api/character/')
  let [next, setNext] = useState([])
  let [prev, setPrev] = useState([])

  useEffect(()=> {
    fetch(url).then(res => res.json()).then(datos => {
      setData(datos.results)
      setNext(datos.info.next)
      setPrev(datos.info.prev)})
  }, [url])


  return (
 <>

 {data.map((personaje, index)=> {
  return (
        <div className="catalogo">
          <div className='card'>
            <h2>{personaje.name}</h2>
            <img src={personaje.image} alt={personaje.name}/>
            </div>
        </div>
  )
 })}
 <button onClick={()=>setUrl(prev)}>Anterior</button>
 <button onClick={()=>setUrl(next)}>Siguiente</button>

 
 </>
  );
}

export default App;
