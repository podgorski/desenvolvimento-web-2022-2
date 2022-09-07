let aluno = {
    nome: 'Antonio Podgorski',
    idade:37,
    cpf:'111.111.111-11',
    formacao:{
        graduacao:'Unicarioca',
        mestrado:'IME'
    },
    
}

// let cpf = aluno.cpf
// let nome = aluno.nome
// let universidades = formacao.graduacao +','+formacao.mestrado
let {nome,cpf,formacao: {...universidades}} = aluno

console.log(`O CPF do ${nome} é ${cpf}, e se formou em: ${Object.values(universidades)} `)