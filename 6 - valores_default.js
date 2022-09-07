function calculoImposto(salario,dependentes = 0,impostoBase = 10){
    let fator = 1
    if(dependentes == 1){
        fator = 0.8
    }else if(dependentes == 2){
        fator = 0.7
    }else if(dependentes == 3){
        fator = 0.5
    }

    return salario - (salario * ((impostoBase/100)*fator))
}

console.log(calculoImposto(200))