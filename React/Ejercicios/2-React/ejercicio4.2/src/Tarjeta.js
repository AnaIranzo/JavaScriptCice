function Pelicula(props) {
    return(
      <div className="card">
        <div className="container">
            <img src={props.datos.cartel} alt={props.datos.titulo}/>
            <h2>{props.datos.titulo}</h2>
            
        </div>
      </div>
    )
}

export default Pelicula