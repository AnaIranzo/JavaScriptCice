import {Link} from 'react-router-dom'

function Pelicula(props) {
    return(
      
      <div className="card">
        <div className="container">
            <img src={props.movie.cartel} alt={props.movie.titulo}/>
            <Link to={"/" + props.movie.titulo.replaceAll(" ","-")}><h2>{props.movie.titulo}</h2></Link>
            
        </div>
      </div>
    )
}

export default Pelicula