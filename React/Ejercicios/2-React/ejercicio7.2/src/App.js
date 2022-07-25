
import { useEffect, useState } from 'react';
import './App.css';

function App() {
 
    let [data, setData]=useState([])
    let [select, setSelect] =('')
    useEffect(()=>{
      fetch('https://swapi.dev/api/planets').then(res => res.json()).then(datos => setData(datos.results))
    }, [])
    
    
    
return (
  <>
<select onChange={e=>setSelect(e.target.value)} >
  {data.map((planeta, index) => {
 return (

  <option value={planeta.name} key={index}>{planeta.name}</option>

  
    )})
 }
 </select>
 {select}
  </>
  );
}

export default App;
