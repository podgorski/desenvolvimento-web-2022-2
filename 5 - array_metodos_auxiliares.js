let numeros = [11,22,33,41,52,65,70]

for (let i=0; i<numeros.length;i++){
    console.log('for tradicional',numeros[i])
}

for (let i in numeros){
    console.log('for in',numeros[i])
}

for (let numero of numeros){
    console.log('for of',numero)
}
//forEach

numeros.forEach(function(numero,i){
    console.log('forEach',numero,i)
})
//map
numeros_frase = numeros.map(function(numero){
    return `este é o número ${numero}`
})
console.log('numeros_frase',numeros_frase)
//filter
numeros_pares = numeros.filter(function(numero){
    return numero % 2 == 0
})
console.log('numeros_pares',numeros_pares)

//find
numero_par = numeros.find(function(numero){
    return numero % 2 == 0
})
console.log('numero_par',numero_par)

//some
algum_numero_par = numeros.some(function(numero){
    return numero % 2 == 0
})
console.log('algum_numero_par',algum_numero_par)

//every
todos_numeros_pares = numeros.every(function(numero){
    return numero % 2 == 0
})
console.log('todos_numeros_pares',todos_numeros_pares)

//reduce
let soma = numeros.reduce(function(numero,acc){ return numero + acc},0)
console.log('soma',soma)