
class Rectangulo {
    constructor(largo, ancho){
        this.largo = largo
        this.ancho = ancho

    }

    calcularArea(){
        return this.largo * this.ancho
    }

    calcularPerimetro(){
        return (this.largo + this.ancho) * 2
    }
}

let rectangulo1 = new Rectangulo(9,4)

console.log(rectangulo1.calcularArea(), rectangulo1.calcularPerimetro())