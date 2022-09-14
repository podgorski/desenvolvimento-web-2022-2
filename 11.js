export default class Endereco{
    
    #cep;
    constructor(cep){
        this.#cep = cep

    }

    getCEP(){
        return this.#cep
    }

    setCEP(cep){
        this.#cep = cep
    }
}

//Invocando a Classe
// let endereco = new Endereco('200');
// endereco.setCEP('100')
// console.log(endereco.getCEP());
