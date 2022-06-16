/*8. Crea una aplicación que nos calcule el factorial de un número pedido por teclado, lo
realizará mediante una función al que le pasamos el número como parámetro. Para
calcular el factorial, se multiplica los números anteriores hasta llegar a uno. Por
ejemplo, si introducimos un 5, realizará esta operación 5*4*3*2*1=120. Mostrar el
resultado en un alert. */

let num = parseInt(window.prompt("Introduce un número"))

factorial(num)

function factorial(arg1) {
    for (let i = 0; i < num; i++) {
     arg1 *= arg1   
        }
    window.alert(arg1)
}
