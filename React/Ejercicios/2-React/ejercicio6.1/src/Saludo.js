import {useParams} from 'react-router-dom'

function Saludo() {
    let params = useParams()
    return(
        <h1>Hola {params.nombre}</h1>
    )
}
export default Saludo