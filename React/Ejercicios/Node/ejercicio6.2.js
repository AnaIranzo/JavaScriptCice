
let factorial = require("ejercicio6.1")

let supervillians = require ("supervillains")

let supervillanos = supervillians.all

for (let i = 0; i < 4; i++) {
    console.log(supervillanos[factorial(Math.floor((Math.random()*(5-1)+1)))])
    
}