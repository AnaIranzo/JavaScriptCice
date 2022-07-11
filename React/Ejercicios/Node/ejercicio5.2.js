let favoritoAntonio = require("./ejercicio5.1")

let array = favoritoAntonio.paises.a.concat(favoritoAntonio.paises.b)
array = array.concat(favoritoAntonio.paises.c)

console.log(array)
console.log(array[favoritoAntonio.favoritos[0]])
console.log(array[favoritoAntonio.favoritos[1]])
console.log(array[favoritoAntonio.favoritos[2]])
