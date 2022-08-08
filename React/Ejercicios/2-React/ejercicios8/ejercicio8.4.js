
class Finanzas{
    constructor(dinero){
        this.dinero = dinero
    }

    dolaresToEuros(){
        let euros = 0
        return euros = this.dinero * 0.98
    }

    eurosToDolares(){
        let dolares = 0
        return dolares = this.dinero * 1.02
    }
}


let dinero1 = new Finanzas(20)

console.log(dinero1.dolaresToEuros(), dinero1.eurosToDolares())