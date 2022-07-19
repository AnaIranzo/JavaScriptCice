import {Link} from 'react-router-dom'

function Videojuego({datos, full}) {
    if (!full) {
        return (
        <div className="card">
            <div className="container">
            <img src={datos.img} alt={datos.nombre}/>
            <Link to={'/' + datos.nombre.replaceAll(' ', '-')} ><h2>{datos.nombre}</h2></Link>
           
            </div>
        </div>
            )
        
    }else{
        return (
        <div className="card">
            <div className="container">
            <img src={datos.img} alt={datos.nombre}/>
            <Link to={'/' + datos.nombre.replaceAll(' ', '-')} ><h2>{datos.nombre}</h2></Link>
            <p>{datos.sinopsis}</p>
            </div>
        </div>
        )
    }

    
}

export default Videojuego