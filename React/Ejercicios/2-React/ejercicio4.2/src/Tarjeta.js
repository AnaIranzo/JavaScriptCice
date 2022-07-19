import {Link} from 'react-router-dom'

function Pelicula(props) {
    if (props.full) {
      return(
      
        <div className="card">
          <div className="container">
              <img src={props.cartel} alt={props.titulo}/>
              <Link to={"/" + props.titulo.replaceAll(" ","-")}><h2>{props.titulo}</h2></Link>
              <p>{props.sinopsis}</p>
              
          </div>
        </div>
      )
    }else{
      return(
      
        <div className="card">
          <div className="container">
              <img src={props.movie.cartel} alt={props.movie.titulo}/>
              <Link to={"/" + props.movie.titulo.replaceAll(" ","-")}><h2>{props.movie.titulo}</h2></Link>
              
          </div>
        </div>
      )
    }
  
  
  
  
}

export default Pelicula