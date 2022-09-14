# Aula 03 e Aula 04

Nesta aula, iremos conversar a respeito da APS e iremos começar a abordar algumas funcionalidades trazidas com o ES6 para a linguagem Javascript.

## Brainstorm e APS (AV1 e AV2)
Poderá ter até 06 integrantes e entrega deverá ocorrer até a data da AV1.

### O Problema
Sempre que estudamos um novo assunto, enfrentamos grandes desafios, tais como: o entendimento do assunto em questão, e principalmente a retenção deste conhecimento.

### Solução Proposta
Existem diversas abordagens que apresentam técnicas ou metodologias. Uma delas é a utilização de flashcards, um cartão com informações de ambos os lados, que se destina a ser usado como auxílio na memorização. Cada cartão de memória possui o item a ser memorizado de um lado, e a resposta do outro.

### MVP
Nesta primeira entrega é esperado do grupo:

 - Realizar um brainstorm com as funcionalidades que o produto irá possuir, e depois entre os integrantes definam o backlog do produto, lembre que é esperado que haja diferenciais neste produto a fim de torná-lo atrativo, o PDF com este documento deverá ser entregue.
 - Criar o Nome, e se possível a logo do produto.
 - Entregar a primeira versão: contendo o HTML e CSS: Sem Banco de dados, e sem utilizar frameworks e/ou bibliotecas.
 - As funcionalidades devem ser implementadas a fim de termos um MVP mockado.
 - Funcionalidades que devem ser comtempladas: a criação do flashcard, a criação do container do flashcard, e o usuário realizar uma rodada de estudo com os flashcards


## Introdução JS / ES6

O nome oficial da linguagem javascript é ECMAScript. E ES é simplesmente uma abreviação do mesmo. ES6 ou ES2015, foi a proposta do comite responsável pela linguagem a fim de se realizar um release anual, apresentando evoluções na linguagem.

O ES6 de certo foi uma das grandes mudanças que a linguagem Javascript recebeu, desde então a cada ano esta vem recebendo incrementos significativos a fim de tornar uma linguagem mais robusta, com características e comportamentos mais claros, e por vezes intuitivos.

Abaixo são listados algumas destas mudanças:

### Definindo variáveis

Em JavaScript, toda variável é “elevada” (hoisting) até o topo do seu contexto de execução. Esse mecanismo move as variáveis para o topo do seu escopo antes da execução do código. 

As variáveis utilizadas apenas dentro de um pequeno trecho do nosso código, e tiverem que lidar com o escopo de função das variáveis declaradas com **var** podem causar confusão devido a característica de hoisting.

O escopo de bloco que o ES6 destinou-se a disponibilizar essa mesma flexibilidade (e uniformidade) para a linguagem. Através da palavra-chave let podemos declarar variáveis com escopo de bloco. O que não conseguimos observar no escopo de um condicional quando utilizamos o var:


```js
if (true) { 
var variavelExemplo = 'escopoFuncao';
console.log('dentro escopo', variavelExemplo); 
} 
console.log('fora escopo', variavelExemplo);
```

Podemos observar que no exemplo acima, o escopo do condicional não é o suficiente para que o mesmo seja impresso no console fora do condicional.

O escopo de bloco que o ES6 destinou-se a disponibilizar essa mesma flexibilidade (e uniformidade) para a linguagem. Através da palavra-chave **let** podemos declarar variáveis com escopo de bloco.

### - Template literals

O template literals traz um "açucar sintático" para a formação de strings em que precisamos adicionar valores dinâmicos que estejam em variáveis.

```js
//Sem o uso de template literals

let nome = 'Antonio'
let sobrenome = 'Podgorski'
let nome_completo;
nome_completo = nome +' '+ sobrenome;
console.log(nome_completo)

// utilizando template literals
nome_completo = `${nome} ${sobrenome}`

console.log(nome_completo)
```

Em ambos consoles temos a mesma saída, outra vantagem é a possibilidade de criar strings em que necessitamos quebrar linhas, sem a necssidade de \n. Facilitando a leitura.

```js
let texto;
//Sem o uso de template literals
texto = 'Sou um texto com \n uma linha e \n outra linha'

// utilizando template literals
texto = `Sou um texto com
 uma linha e 
 outra linha`

nome_completo = `${nome} ${sobrenome}`

console.log(nome_completo)
```

### - Operadores rest e spread

Estes operadores auxiliam a lidar com múltiplos parâmetros dentro de funções. O Rest separa os parametros de interesse, e o resto dos parametros em 
uma única estrutura, enquanto o Spread serve para propagar uma estrutura para outra, e realizar possíveis alterações e/ou adições.

```js

const Aluno = {
 nome: 'Pedro Sales',
 idade: 19,
 periodo: 7
}
//REST
const { nome, ...resto } = Aluno;
console.log(nome);
//saída: Pedro Sales



console.log(resto);
//saída: { idade: 19, periodo: 7 }

// SPREAD
const aluno_ = { ...Aluno, periodo: "setimo", turno: "noite" };

console.log(aluno_);
//saída: { nome: 'Pedro Sales', idade: 19, periodo: 'setimo', turno: 'noite' }
```

### - Desestruturação Objetos e Arrays

Em JavaScript, uma notação muito comum são objetos, aos quais são representados utilizando JSON, sendo este, uma notação estruturada, similar ao XML no tocante a finalidade, no entanto sua sintaxe é menos verbosa. 

Um exemplo da notação de um objeto hipotético em javascript.

```js
const VideoGame = {
modelo: 'PlayStation',
fabricante: 'Sony',
midia: 'Blu-Ray',
armazenamento: '1TB',
controles: 2,
preco: 'R$ 2000.00'
}

```

Para acessarmos algum atributo deste objeto, a exemplo o preço do mesmo para utilizar em uma interface ao qual iria demonstrar o nome do produto, e o preço utilizando vírgula 
teríamos algo similar:

```js

const {preco, modelo} = VideoGame;
console.log(`${modelo} ${preco}`); 
```

### - Métodos auxliares para o array

Array, ou vetores, são amplamente utilizado em linguagens de programação, e de certo ao iterar sobre esta estrutura é possível interagir com cada elemento, sendo estruturas comumente utiliazadas:

```js
let numeros = [11,22,33,41,52,65,70]

for (let i=0; i<numeros.length;i++){
    console.log('for tradicional',numeros[i])
}
```

Nesta primeira estrutura podemos observar a utilização mais comum do for, em que se estabelece uma veriável de controle, e itera sobre a mesma para que esta sirva de indexador para a estrutura do array.

```js
let numeros = [11,22,33,41,52,65,70]
for (let i in numeros){
    console.log('for in',numeros[i])
}
```
Na segunda estrutura, for...in, temos a simplificação do for, fazendo que o processo de iteração da variável de controle seja abstraído.


```js
let numeros = [11,22,33,41,52,65,70]
for (let numero of numeros){
    console.log('for of',numero)
}
```
No terceiro exemplo, for...of, a iteração ocorre sem que haja a necessidade de iterarmos, sendo o acesso ao item do array direto, ou seja, sem a variável de controle de forma explícita.

No entanto o ES6 trouxe métodos para facilitar atividades comuns realizadas em arrays, sendo estes os métodos

```js
let numeros = [11,22,33,41,52,65,70]

//forEach - neste método temos o comportamento mais próximo de uma estrutura de for, em que não espera retorno.

numeros.forEach(function(numero,i){
    console.log('forEach',numero,i)
})

//map - neste método o retorno de cada iteração irá compor um novo array, sendo útil para padronizarmos uma estrutura recebida, em uma saída desejada.
numeros_frase = numeros.map(function(numero){
    return `este é o número ${numero}`
})
console.log('numeros_frase',numeros_frase)

//filter - neste método é retornado todos os itens do array que atendam a uma condição de teste, se a mesma for verdadeira, o item atual será considerado, em um novo array.
numeros_pares = numeros.filter(function(numero){
    return numero % 2 == 0
})
console.log('numeros_pares',numeros_pares)

//find - neste método temos o comportamento similar ao filter, no entanto após a primeira ocorrência verdadeira, a iteração é interrompida, retornando assim apenas um item.
numero_par = numeros.find(function(numero){
    return numero % 2 == 0
})
console.log('numero_par',numero_par)

//some - neste método  é retornado um valor boleano ao final como verdade ou falsidade se algum item atendam a uma condição de teste.
algum_numero_par = numeros.some(function(numero){
    return numero % 2 == 0
})
console.log('algum_numero_par',algum_numero_par)

//every - neste método  é retornado um valor boleano ao final como verdade ou falsidade apenas se todos items atendam uma condição de teste.
todos_numeros_pares = numeros.every(function(numero){
    return numero % 2 == 0
})
console.log('todos_numeros_pares',todos_numeros_pares)

//reduce - neste método podemos reduzir o array a partir de uma lógica estabelecida. Podemos observar sua utiliação em uma totalização dos itens, a exemplo em uma soma. Este método recebe dois parâmetros, a função que será realizada em cada iteração, e o segundo parâmetro é o inicialização da variável agregadora. E em cada nova execução esta variável agregadora é recebida no primeiro paramêtro da função que realiza a iteração, e esta função retorna o valor que servirá como valor da totalizalição atual para o próximo item.
let soma = numeros.reduce(function(numero,acc){ return numero + acc},0)
console.log('soma',soma)
```

### - Valores Default

O valor default é uma maneira de lidar com a não passagem de um parâmetro ao termos uma função invocada, que ao invés de receber o valor de undefined, ela assume um valor default.

```js
function soma(a,b=0){
    return a + b
}

soma(2,5)
//saída 7

// sem o valor default o resultado seria NAN (Not A Number) pois não teríamos o valor de b.
soma(10)
//saída 10
```

### - Arrow function

O ES6 trouxe uma nova forma de escrever funções, utilizando a sintaxe denominada arrow function, sendo seus principais benefícios:

- São menos verbosas do que as funções tradicionais;

```js
// função sem arrow function
function soma(a,b){
return a + b;
}

// função anônima, sem arrow function
let soma = function (a,b){
return a + b;
}

//Arrow function
const soma = (a,b) => {
    return a + b;
}

// Quando temos apenas uma linha no escopo da função, em que apenas temos o retorno, temos a possibilidade de remover as chaves, e omitir o termo return
const soma = (a,b) => a + b
```

- Seu valor de this é definido à partir das funções onde foram definidas. Ou seja, não é mais necessário fazer bind( ) ou armazenar o estado em that = this;

O valor de **this** em uma **arrow function** é o mesmo valor do **this** do **escopo encapsulado** ao invés de referenciar o contexto do objeto, ou seja, o objeto dentro do qual foi definida. Com isso, o escopo de uma **arrow function** pode ser tanto o escopo de **uma função** ou o **escopo global**, dentro de quaisquer que seja onde a **arrow function foi declarada**.

### - Promises / Async Await

É utilizado para realizarmos requisições Assíncronas, como uma requisição em uma API externa. Para este propósito temos a Promise. Antes do ES6 a sintaxe de um exemplo seria:

```js
new Promise((resolve, reject) => {
 
resolve(...);
reject(...);
 
})
```
Quem invocar esta promise irá aguardar o retorno da mesma, e 
esta define seus retornos a partir dos métodos resolve( ) e 
reject().

Vamos simular uma API que demora 3 segundos para enviar uma resposta, com o seguinte trecho de código.

```js
const fakeAPI = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resposta para requisição');
    }, 3000)
})

```

Ao ser chamada esta função fakeAPI, o retorno será apresentado a partir do método encadeado then( response => { } ) em caso de sucesso, apresentando o que está dentro do resolve, e em caso de falha, apresentará o conteúdo do reject, a partir do método encadeado catch(err => { })

Ao realizarmos 3 requisições a este recurso, que precisem aguardar o retorno da anterior para fazer uma nova chamada, teremos este trecho.

![Encadeamento de promises](https://files.fm/thumb_show.php?i=y2reyhg8z)

O async/await apesar de estar em desenvolvimento e testes desde o ES6, no entanto, foi disponibilizado apenas no ES8, sendo esta uma nova maneira de tratar Promises, evitando a criação de cascatas de then( ). Conforme visto na imagem acima, por trás continua utilizando Promises, mas elas ficam menos visíveis e verbosas.

Se parecendo muito com um código síncrono, como podemos ver abaixo:

```js
async function executarPromise() {
 console.log(await fakeAPI());
 console.log(await fakeAPI());
 console.log(await fakeAPI());
}

await executarPromise()
```

E para lidar com o catch( ), devem ser tratados utilizando o try/catch.

```js
async function executarPromise() {
    try {
        const response = await fakeApi();
        console.log(response);
    } catch (err) {
        console.log('Erro:', err);
    }
}

```

### - Classes



### - Modules Import / Export

Com o ES6, se tornou possível utilizar no Node.js a sintaxe 
largamente utilizada no front-end que utiliza JS, como React , 
Vue, Angular.

```js
//math_.js
export const sqrt = Math.sqrt;

export function square(x) {
 return x * x;
}

export function diag(x, y) {
 return sqrt(square(x) + square(y));
}
```
Devemos preceder com a palavra reservada export as variáveis, funções, classes, 
objetos javascript, entre outros, aos quais quisermos externalizar para o código que 
por ventura importe este módulo. 

Conforme descrito a seguir.

```js

import { square, diag,sqrt } from './math_.js';

console.log(square(11)); // 121
console.log(diag(4, 3)); // 5
console.log(sqrt(4)); //

```

Veja este exemplo:

```js
//math2.js
export default function diag(x, y) {
 return sqrt(square(x) + square(y));
}
```

Quando se tem por objetivo exportar apenas um método do nosso módulo pode se 
utilizar default export , cada modulo pode ter apenas uma ocorrência com default, 
esta forma de externalizar permite que o mesmo seja importado com o nome que for 
mais conveniente para quem utiliza.


```js
//math2.js
import xpto from './math2.js' default function diag(x, y) {
 return sqrt(square(x) + square(y));
}
```

