
import { useEffect, useState } from 'react';
import './App.css';

function App() {
 
    let [data, setData] = useState([])
    let [selected, setSelect] = useState("")
    let [data2, setData2] = useState([])
    let [data3, setData3] = useState([])
    useEffect(()=>{
      fetch('https://swapi.dev/api/planets').then(res => res.json()).then(datos => setData(datos.results))
    }, [])
    
    useEffect(()=>{
      fetch(selected).then(res => res.json()).then(datos => setData2(datos.residents))
    }, [selected])
    
    useEffect(()=>{
      Promise.all(data2.map((url)=> fetch(url))).then((respuesta)=> Promise.all(respuesta.map((res)=> res.json()))).then((datos)=> { setData3(datos)

      })
    },[data2])
return (
  <>
<select onChange={(e) => setSelect(e.target.value)} >
  {data.map((planeta, index) => {
 return (

  <option value={planeta.url} key={index}>{planeta.name}</option>

  
    )})
 }
 </select>
<div>
{data3.map((personaje, index)=> {
  return (
    <li key={index}>{personaje.name}</li>
  )
})}
</div>
  </>
  );
}

export default App;
