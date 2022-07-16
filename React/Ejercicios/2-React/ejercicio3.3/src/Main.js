function Casa(props) {
    return(
        <div>
            <p>Metros:{props.datos.metros}</p>
            <p>Habitaciones:{props.datos.habitaciones}</p>
            <p>Baños:{props.datos.baños}</p>
            <p>Trastero:{props.datos.trastero ? "Si": "No"}</p>
            <p>Garaje:{props.datos.garaje ? "Si": "No"}</p>
        </div>
    )
}







export default Casa