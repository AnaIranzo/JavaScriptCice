import {useParams} from 'react-router-dom'
function Operaciones() {
    let params = useParams()
    let num1 = parseInt(params.num1)
    let num2 = parseInt(params.num2)
    return(
       
        <>
        <h3>Suma:{num1 + num2}</h3>
        <h3>Resta:{num1 - num2}</h3>
        <h3>División:{num1 / num2}</h3>
        <h3>Multiplicación:{num1 * num2}</h3>
        <h3>Resto:{num1 % num2}</h3>
        </>
    )


}

export default Operaciones
