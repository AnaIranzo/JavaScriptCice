
fetch(`https://rickandmortyapi.com/api/location`).then((respuesta)=>respuesta.json()).then((datos)=> {
    
    let planetas = `<option selected = "selected" >Selecciona una opcion</option>`
for (let i = 0; i < datos.results.length; i++) {
   
    if (datos.results[i].type === "Planet") {
    planetas += `<option>${datos.results[i].name}</option>`
    }
}

document.getElementById("selector").innerHTML = planetas
})


function seleccionar (event){
   // window.alert(event.target.value)      
fetch(`https://rickandmortyapi.com/api/location`, {location: event.target.value}).then((respuesta)=> respuesta.json())
.then((datos)=> {
let arrayRespuesta = datos.residents
   
Promise.all(arrayRespuesta.map(url => fetch(url)))
.then(jsonRecibidos =>
    Promise.all(jsonRecibidos.map(jsonRecibido => jsonRecibido.json())))
    .then(datosS => {
        let lista = ""
        datosS.forEach(
            (objeto)=>{
                lista += `<li>${objeto.name}</li>`
            }
        ) 
        document.getElementById("respuesta").innerHTML = `<ul>${lista}</ul>`
    })
    
    
    
})


}
