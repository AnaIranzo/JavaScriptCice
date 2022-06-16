/*4. Escribe una función que devuelva el resultado de sumar los dos parámetros que le
pasamos. Pide al usuario 2 números. Usa esos 2 números como parámetros de la
función y después asigna el valor que devuelve la función a una tercera variable.
Finalmente, muestra el valor de la variable en la consola. */

let num1 = parseInt(window.prompt("Introduce un número"))
let num2 = parseInt(window.prompt("Introduce un número"))
suma(num1,num2)

function suma (arg1,arg2) {
   let num3 = arg1 + arg2
   console.log(num3)
}