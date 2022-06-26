let random = Math.floor(Math.random() *(500 -1)+1)

fetch(`https://api.disneyapi.dev/characters/${random}`).then((respuesta)=> respuesta.json()).then ((datos) => {
  
    let respuesta = document.createElement("div")
    respuesta.innerHTML = `
    <img src=${datos.imageUrl} alt="${datos.name}"/>
    <h3>${datos.name}</h3>
    <p>${datos._id}</p>
    <p></p>
   `

   let lista = ""
   if (datos.films.length > 0) {
    for (let i = 0; i < datos.films.length; i++) {
       lista += `<li>${datos.films[i]}<li/>`
        respuesta.innerHTML += `<ul>${lista}</ul>`
     
        
    }
    
   }
   document.body.appendChild(respuesta)

  

    
   
    
  
  
    
  

})