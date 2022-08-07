
import './App.css';
import {useState, useEffect} from 'react'

function App() {
  let [data, setData] = useState([])
  let [data2, setData2] = useState([])
  let [selected, setSelected] = useState('')
  let [loading, setLoading] = useState(false)
  let [loading2, setLoading2] = useState(true)

  useEffect(()=>{
    setLoading(true)
    fetch('https://api.magicthegathering.io/v1/sets').then(respuesta => respuesta.json()).then((datos) => {setData(datos.sets), setLoading(false)})
  },[])

  useEffect (()=> {
    setLoading2(true)
    if (selected !== '') {
      fetch(`https://api.magicthegathering.io/v1/cards?set=${selected}`).then(respuesta => respuesta.json()).then((datos)=> {setData2(datos.cards), setLoading2(false)})
    }
   
  },[selected])

  if (loading) {
  return <h1>Cargando...</h1>
  }else{
  return(
<>


<select onChange={(e) => setSelected(e.target.value)}>
{data.map((sets, index)=> {
  return( <option value={sets.code} key={index}>{sets.name}</option>

)})}
 
</select>

<div className='catalogo'>
{data2.map((cards, index)=>{
    return (
      <div className='card' key={index}>
      <img src={cards.imageUrl} alt={cards.name} /> 
      <h3>{cards.name}</h3>
      <h4>{cards.manaCost}</h4>
      <p>{cards.text}</p>
      <h4>{cards.colors}</h4>
      <h4>{cards.rarity}</h4>
      </div>
    )})}
</div>
 
</>
  )
}
 
}

export default App;
