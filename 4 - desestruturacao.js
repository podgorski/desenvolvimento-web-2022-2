let pessoa = {
    nome: 'Antonio Podgorski',
    idade:37,
    endereco: {
        cep:'20270332',
        rua:'Rua da Feira'
    },
    formacao:{
        graduacao:'Unicarioca',
        mestrado:'IME'
    }
}

// 'xxx mora na rua xxx tem formacoes'

//let nome = pessoa.nome
//let rua = pessoa.endereco.cep
//let universidades = pessoa.formacao.graduacao + ',' + pessoa.formacao.mestrado

let {nome,endereco:{rua},formacao:{...universidades}} = pessoa
// console.log(JSON.stringify(universidades,null,2))
// console.log(`${nome} mora na rua ${rua} tem formacoes: ${Object.values(universidades)} `)

let coordenadas = [2,3]

// let latitude = coordenadas[0]
// let longitudade = coordenadas[1]

let [latitude,longitudade] = coordenadas

// console.log(latitude,longitudade)

let turmaA = ['pedro','joao','maria']
let turmaB = ['antonio','isadora','rosangela']

let candidatos = [...turmaA,...turmaB]



function resultadoProva([primeiro,segundo,...outros]){
    // let primeiro = candidatos[0];
    // let segundo = candidatos[1];
    // let outros = candidatos.slice(2,candidatos.lenght)

    console.log(primeiro,segundo,outros)
}

resultadoProva(candidatos)

let {idade:id,...dados} = pessoa;

console.log(id,dados)