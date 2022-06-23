let manzana = 0
let pescado = 0
let leche = 0
let carne = 0

function modificar(direccion,producto){
    if (producto === "carne") {
        direccion === "+"
        ? carne++
        : carne --
    } else if (producto === "manzana") {
        direccion === "+"
        ? manzana++
        : manzana --
    }   else if (producto === "leche") {
        direccion === "+"
        ? leche++
        : leche --
    } else {
        direccion === "+"
        ? pescado++
        : pescado --
    }
  cesta()
}
function cesta() {
    let impresion = "" //reseteamos impresion
    if (manzana >0){
        let manzanaPic = ""
        for (let i = 0; i < manzana; i++) {
           manzanaPic += `<img src = "/Users/AnaE/Desktop/JavaScriptCice/8-Eventos/9_-_Ejercicios_JavaScript_Eventos/iconos/manzana.png" width="50px" `
             }
             impresion += `<h5>Manzana</h5><p>${manzana}${manzanaPic}</p>`}
    if (carne >0){
        let carnePic = ""
        for (let i = 0; i < carne; i++) {
           carnePic += `<img src ="/Users/AnaE/Desktop/JavaScriptCice/8-Eventos/9_-_Ejercicios_JavaScript_Eventos/iconos/carne.png" width="50px" `
             }
        impresion += `<h5>Carne</h5><p>${carne}${carnePic}</p>`}
    if (leche >0){
        let lechePic = ""
        for (let i = 0; i < leche; i++) {
           lechePic += `<img src ="/Users/AnaE/Desktop/JavaScriptCice/8-Eventos/9_-_Ejercicios_JavaScript_Eventos/iconos/leche.png" width="50px" `
             }
        impresion += `<h5>Leche</h5><p>${leche}${lechePic}</p>`}
    if (pescado > 0){
        let pescadoPic = ""
        for (let i = 0; i < pescado; i++) {
           pescadoPic += `<img src ="/Users/AnaE/Desktop/JavaScriptCice/8-Eventos/9_-_Ejercicios_JavaScript_Eventos/iconos/pescado.png" width="50px" `
             }
        impresion += `<h5>Pescado</h5><p>${pescado}${pescadoPic} </p>`}



    document.getElementById("cesta").innerHTML = impresion
    
}