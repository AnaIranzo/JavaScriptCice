/*11. Crea un aplicación que nos convierta una cantidad de euros introducida por teclado
a otra moneda, estas pueden ser a dólares, yenes o libras. El método tendrá como
parámetros, la cantidad de euros y la moneda a pasar que será una cadena, este no
devolverá ningún valor, mostrará un mensaje indicando el cambio.
a. 0.86 libras es un 1 €
b. 1.28611 $ es un 1 €
c. 129.852 yenes es un 1 € */

// parametros cantidad y moneda 

let euros = parseInt(window.prompt("Introduce la cantidad de euros que quieres convertir"))

let moneda = (window.prompt("Introduce la moneda a la que quieres convertir: libras, dolares o yenes")).toLowerCase()

if (moneda === "libras") {
    window.alert(libras(euros))
} else if (moneda === "dolares" || moneda === "dólares") {
    window.alert(dolares(euros))
} else if (moneda === "yenes") {
    window.alert(yenes(euros))
} 



function libras(arg1) {
    return arg1 * 0.86
}

function dolares(arg2) {
    return arg2 * 1.28611
}

function yenes(arg3) {
    return arg3 * 129.852
}