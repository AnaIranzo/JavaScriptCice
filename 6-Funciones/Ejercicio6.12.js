/* 12. Escribe una función a la que le pasamos un año y devuelve true si es bisiesto. En el
programa principal, pídele al usuario un número y muestra en pantalla “El año … es
bisiesto” o “El año … no es bisiesto” y sigue pidiendo números y diciendo si es o no
bisiesto hasta que introduzca un 0. Un año es bisiesto si es divisible entre 4, pero no
si es divisible entre 100 pero si es divisible entre 400 sí lo es*/

let ano = 0

do {
ano = parseInt(window.prompt("Introduce un año"))
bisiesto(ano)
? window.alert("El año es bisiesto")
: window.alert("El año no es bisiesto")

} while (ano !== 0);



function bisiesto(arg1) {
    return ((arg1%4 === 0 && arg1%100 !== 0) || arg1%400 === 0)
}