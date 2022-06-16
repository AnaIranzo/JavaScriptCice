/* 12. Escribe una función a la que le pasamos un año y devuelve true si es bisiesto. En el
programa principal, pídele al usuario un número y muestra en pantalla “El año … es
bisiesto” o “El año … no es bisiesto” y sigue pidiendo números y diciendo si es o no
bisiesto hasta que introduzca un 0. Un año es bisiesto si es divisible entre 4, pero no
si es divisible entre 100 pero si es divisible entre 400 sí lo es*/

let año = 0

do {
año = parseInt(window.prompt("Introduce un año"))
bisiesto(año)
? window.alert("El año es bisiesto")
: window.alert("El año no es bisiesto")

} while (año !== 0);



function bisiesto(arg1) {
    if (arg1%4 === 0 && ( arg1%100=== 0 && arg1%400 === 0)) {
        return true
    } 
    
  
}