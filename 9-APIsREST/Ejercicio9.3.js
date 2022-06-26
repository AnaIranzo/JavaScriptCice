//https://xkcd.com/614/info.0.json (comic #614)


function pedir (){
    let input = document.getElementById("input").value

    fetch(`https://xkcd.com/${input}/info.0.json`).then((respuesta)=> respuesta.json()).then((datos)=> array = datos)

   let newDiv= document.createElement("div")
   newDiv.innerHTML = ` <img src=${array.img} alt= ${array.tittle}/>
   <h3>${array.tittle}</h3>
   <p>${array.num}</p>
   <p>${array.year}/${array.day}/${array.month}</p> `
   
}




