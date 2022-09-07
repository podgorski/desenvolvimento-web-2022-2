
let turma_01 = ['alan','pedro','mariana']
let turma_02 = ['jorge','alicia','matheus']

let prova = [...turma_01,...turma_02]

console.log(prova)

function competidoresChegada(primeiro,segundo,...outros){
    console.log(`o vencedor foi ${primeiro}, 
    o vice ${segundo},
    e parabéns para ${outros} pela participação`)

}

competidoresChegada(...prova)


