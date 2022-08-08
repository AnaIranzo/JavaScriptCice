class Cifras {
    constructor(num){
        this.num = num
    }

    esPar(){
        return this.num %2 === 0
    }

    sumaDigitos(){
        let suma = 0
        let num = this.num.toString()

        for (let i = 0; i < num.length; i++) {
            suma += parseInt(num[i])
            
        }

        return suma

    }
}

let num1 = new Cifras(921)
console.log(num1.esPar(), num1.sumaDigitos())