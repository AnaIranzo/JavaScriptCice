import {useState} from 'react'

function Eliminar(props) {
  const [erase,setErase] = useState("")

  function eliminarCompositor(nombre) {
   
    let array = props.init.filter(compositor => {return compositor.nombre !== nombre})
    props.setInit(array)
    setErase("")
  }
    return (
    <>
    <input type="text" value={erase} onChange={(e)=> {setErase(e.target.value)}}/>

    <button type='button' onClick={()=>{eliminarCompositor(erase)}}>Borrar</button>
    </>)
      
}

export default Eliminar