console.log('teste')

function colocarExclamacao(msg){
    return msg + "!!"
}

function handleEnvio(){
    var nome = document.querySelector("#nome").value || null;
    var senha = document.querySelector("#senha").value ||null;

    console.log(nome,senha)

    if(!nome || !senha){
        alert("preencha os campos")
    }else {
        console.log('enviando para o backend')
    }
    
}