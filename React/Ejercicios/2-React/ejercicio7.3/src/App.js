
import './App.css';
import {useState, useEffect} from 'react'


function App() {

let [data, setData] = useState([])
let [data2, setData2] = useState([])
let [selected, setSelected] = useState("")
let [pokemon, setPokemons] = useState([])

  useEffect(()=>{
    fetch('https://pokeapi.co/api/v2/type')
    .then(res => res.json())
    .then((datos) => {setData(datos.results)})
  },[])

  useEffect(()=>{
    fetch(selected)
    .then(res => res.json())
    .then((datos) => {setData2(datos.pokemon)})

    let pokemons = []
    for (let i = 0; i < data2.length; i++) {
     pokemons.push(data2[Math.floor(Math.random()*data2.length)].pokemon.name)
      
    }
    setPokemons(pokemons)
  },[selected])

return (
<>
<select onChange={(e) => setSelected(e.target.value)}>
{data.map((tipo, index) => {
  return <option value={tipo.url} key={index}>{tipo.name}</option>
  }

)}
 
</select>

<div>
<li>{pokemon[0]}</li>
<li>{pokemon[1]}</li>
<li>{pokemon[2]}</li>

</div>
</>

  );
}

export default App;
