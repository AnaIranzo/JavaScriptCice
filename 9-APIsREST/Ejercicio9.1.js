
let array = []
fetch(`https://gutendex.com/books`).then((respuesta)=> respuesta.json()).then((datos) =>{
  array = datos.results 

  let impresion = ""

  for (let i = 0; i < array.length; i++) {
      impresion += `<div id="${array[i].title}" class = "card">
     <img src="${array[i].formats["image/jpeg"]}"  heigh = "350px" alewidth ="150px" alt="${array[i].title}"/>
     <h3>${array[i].title}</h3>
     <p>${array[i].authors[0].name}</p>
    `
  
  } 

  let respuesta = document.createElement("div")
  respuesta.setAttribute("class","container")
  document.body.appendChild(respuesta)


  respuesta.innerHTML = impresion 

})









