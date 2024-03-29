
function Tarjeta(props) {
    return (
        <div className="card">
            <img scr={props.cartel} alt={props.titulo}/>
            <div className="container">
                <h4>{props.titulo}</h4>
                <p>{props.sinopsis}</p>

            </div>
        </div>
    )
}



function Main(props) {
    
    return (
        <main className="catalogo">
        {props.peliculas.map((pelicula, index) => {
            return (
                <Tarjeta
                key={index}
                cartel={pelicula.cartel}
                titulo={pelicula.titulo}
                sinopsis={pelicula.sinopsis}
                />
            )
        })}
        </main>
    )
}

export default Main