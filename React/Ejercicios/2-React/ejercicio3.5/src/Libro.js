import { useState } from "react"

function Libro(props) {
    let [stock, setStock] = useState(3);
  
   
    return(
        
        <div className="card">
            
            <img src={props.datos.formats['image/jpeg']} alt={props.datos.title}/>
            <div className="container">
            <h3>{props.datos.title}</h3>
            <p>{props.datos.authors.map((libro)=>libro.name)}</p>
            </div>
            <div>
                <p>{stock >0 ? "Stock: " + stock : "No queda Stock" }</p>
                
                <button onClick={()=>( setStock(stock -1) )}>Comprar</button>
            </div>
         </div>
        
    )
}



export default Libro

