import Pelicula from "./Tarjeta"

function Main(props) {
    return(
      <main className='catalogo'>
        {props.catalogo.map((datos,index)=> { 
        return <Pelicula movie={datos} key={index}/>
      })}
    </main>
    )
}

export default Main