import Endereco,{x as versao} from './9 - classes.js';


(async()=> {
    console.log(versao)
    let endereco = new Endereco('20270-320')
    console.log(await endereco.buscarCEP())
})()