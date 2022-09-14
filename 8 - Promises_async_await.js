import fetch from 'node-fetch';

let cep = '20270-320'
const buscaCEP = `https://brasilapi.com.br/api/cep/v1/${cep}`

// Promise
// fetch(buscaCEP).then(function(response){
//     return response.json()
// }).then(function(json){
//     console.log(json)
// })

// Async/ Await
const resultado = await fetch(buscaCEP)
const resultadoJSON = await resultado.json()
console.log(resultadoJSON)