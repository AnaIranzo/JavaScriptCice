const { Link } = require("react-router-dom")

function Cabecera (props){
    return (
        <>
        <header>
        <h1>Inicio</h1>
        <nav>
<ul>
    <li><Link to= "/Meses">Meses</Link></li>
    <li><Link to= "/Dias">Dias</Link></li>
</ul>
        </nav>
        </header>
        </>
    )
}
export default Cabecera