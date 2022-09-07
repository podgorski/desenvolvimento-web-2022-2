import fetch from 'node-fetch';

export let x = "1.2.2";

export default class Endereco {

    #cep;

    constructor(cep){
        this.#cep = cep
        Object.freeze(this);
    }

    setCEP(cep){
        this.#cep = cep
    }

    getCEP(){
        return this.#cep
    }

    async buscarCEP() {

        const buscaCEP = `https://brasilapi.com.br/api/cep/v1/${this.#cep}`


        const resultado = await fetch(buscaCEP)
        const resultadoJSON = await resultado.json()

        return resultadoJSON
    }
}

(async()=> {
let endereco = new Endereco('20270-320')

endereco.setCEP("20720-010")

console.log(await endereco.buscarCEP())
})()



