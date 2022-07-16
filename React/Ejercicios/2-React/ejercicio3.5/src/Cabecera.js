function Cabecera(props) {
    return (
        <header>
            <h1>Biblioteca </h1>
            <p>{props.usuario.vip ? "Bienvenido, " : ""}</p>
            <p>{props.usuario.nombre}</p>
            <img scr={props.usuario.imagen} alt={props.usuario.nombre}/>
        </header>
    )
}

export default Cabecera