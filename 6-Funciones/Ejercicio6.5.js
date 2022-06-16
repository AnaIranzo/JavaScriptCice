/*5. Escribe una función a la que le damos dos números y que devuelva true si el primer
número es más grande que el segundo número y false en el caso contrario. Pide dos
números al usuario, y pasalos a la función. Muestra en consola “El primer número es
más grande” o “El primer número no es más grande”. */

let num1 = parseInt(window.prompt("Introduce un número"))
let num2 = parseInt(window.prompt("Introduce otro número"))

mayor (num1,num2)

function mayor(arg1,arg2) {
    arg1 > arg2
    ? console.log("El primer número es más grande")
    : console.log("El primer número no es más grande")
}