class Distancia {
    constructor(millas){
        this.millas = millas //las clases no tienen por que tener constructor
    }

    millasAMetros(){ //le puedo pasar millas por argumento directamente
        let metros = 0
        return metros = this.millas * 1609.34
    }

    millasAKilometros(){
        let kilometros = 0
        return kilometros = this.millas * 1.60934
    }
}


let distancia1 = new Distancia(23)

console.log(distancia1.millasAMetros())