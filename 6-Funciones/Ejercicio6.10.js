/*10. Crea una aplicación que nos calcule el área de un círculo, cuadrado o triángulo.
Pediremos de qué figura queremos calcular su área y según lo introducido pedirá los
valores necesarios para calcular el área. Crea un método por cada figura para
calcular cada área, este devolverá un número entero(sin decimales). Muestra el
resultado por pantalla
a. Circulo: (radio^2)*PI
b. Triángulo: (base * altura) / 2
c. Cuadrado: lado * lado */


//area
//circulo, cuadrado o triangulo


let figura = window.prompt("Elige la figura para calcular su área").toLowerCase()
let radio = 0
let base = 0
let altura = 0
let lado = 0

if (figura === "circulo" || figura === "círculo") {
    radio = parseInt(window.prompt("Introduce el radio del círculo"))
    window.alert(aCirculo(radio))
} else if (figura === "triangulo" || figura === "triángulo"){
    base = parseInt(window.prompt("Introduce la base del triángulo"))
    altura = parseInt(window.prompt("Introduce la altura del triángulo"))
    window.alert(aTriangulo(base,altura))
} else if (figura === "cuadrado"){
    lado = parseInt(window.prompt("Introduce el lado del cuadrado"))
    window.alert(aCuadrado(lado))
} else {
    window.alert("Esa opción no es válida")
}

function aCirculo(arg1) {
    return parseInt((arg1**2)* Math.PI)
}


function aTriangulo(arg2,arg3) {
    return parseInt((arg2 * arg3)/2)
}


function aCuadrado(arg4) {
    return parseInt(arg4 * arg4)
}
