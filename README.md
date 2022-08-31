# Aula 02

## Objetivo
Nesta aula o aluno será apresentado ao JavaScript no contexto do HTML, e fará algumas manipulações básicas da DOM (Document Object Model).

### Elemento Script no HTML

Para que seja possível executarmos um script em nossa página HTML, se faz necessário a utilização do elemento **\<script/>**, ao colocar um trecho de código dentro deste elemento ele irá ser interpretado como não sendo html

```html
<script>
        alert('sou um alerta!');
</script>
```

os atributos comumente utilizados neste elementos são: 
- lang: neste atributo informamos a linguagem em questão que o navegador irá utilizar para interpretar os comandos
- src: neste atque informamos o caminho do arquivo em que nosso script foi escrito, com esta abordagem fica mais fácil o entendimento, e separação do código em uma outra página.

```html
    <script lang="javascript" src="main.js"></script>
```

### Introdução ao JavaScript

O Javascript é uma linguagem de programação interpretada, e inicialmente foi desenvolvida para viabilizar interações em páginas estáticas, e prover uma maneira de realizar validações do lado do cliente. Quando dizemos lado do cliente, nos referimos em utilizar o poder computacional da máquina do usuário para processar estes comandos que chamamos de scripts, a exemplo, uma abordagem como validar os campos de um formulário antes de submeter ao servidor pode ser bem interessante evitando requisições, e/ou preenchimentos indevidos submetidos ao servidor.

No entanto, o horizonte da linguagem JS foi se desenvolvendo, evoluindo e amadurecendo a partir de algumas iniciativas, e hoje é uma linguagem largamente utilizada em organizações, de startups à bigtechs. Para saber um pouco mais da história veja este link: <https://pt.wikipedia.org/wiki/JavaScript>


### Interagindo com a DOM

O DOM (Document Object Model), é uma convenção independente de linguagem de programação que permite a interação com os elementos em documentos HTML.

![](https://arquivo.devmedia.com.br/artigos/Higor_Medeiros/JSDOM/DocumentObjectLanguage01.jpg)

*Exemplo de uma árvore DOM de uma página Web. fonte:DevMedia*

No javascript, em páginas HTML temos a implementação do objeto **document** e serve como um ponto de entrada, acessando a raiz de nossa árvore HTML.

Como podemos ver neste trecho:

```html showLineNumbers

<html>
<head>
    <title>Exemplo</title>
</head>
<body>
    <p>Texto interno no elemento P</p>
    <script>
        var p = document.querySelector('p');
        p.innerHTML = 'Texto adicionado pelo JS.' 
    </script>
</body>
</html>

```


Ao abrirmos este trecho de código em um navegador, iremos perceber que estará escrito na página, Texto adicionado pelo JS. Isso ocorre pois após o carregamento da página, o código do script através do objeto document utilizando o método queryselector busca o elemento p, e através da propriedade innerHTML, faz a alteração do conteúdo interno deste elemento p, que anteriormente tinha em seu conteúdo, Texto interno no elemento P.

Para ter acesso a API deste Objeto consulte este link <https://developer.mozilla.org/pt-BR/docs/Web/API/Document> 

## Explicando o trecho de Código da Aula 02

Ao acessarmos o HTML, visualizamos dois campos de inputs, caixas de texto, e um botão escrito enviar. Ao clicar neste botão com os inputs vazios recebemos a mensagem, preencha os campos. E ao preencher ambos esta mensagem não aparece, e no console temos a sequinte mensagem, enviando para o backend. Neste exemplo, temos uma abordagem simples, para fins didáticos de uma página de login, que estaria impedindo que fosse enviado para o servidor estes campos vazios.

Na implementação do elemento de Button tem uma propriedade onclick, em que é passado uma função que será executada ao clicarmos neste elemento, a implementação desta função está no arquivo **main.js**, esta referÊncia só funciona pois dentro da tag script, no início do código, foi adicionado a referência no elemento \<script> localizado no head do documento HTML.

Dentro da main.js, nesta função temos:

```js
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
```

Neste trecho utilizamos o queryselector do document para recuperar os elementos com os ids específicos #nome e #senha, e em sequência, através do value, é recuperado o conteúdo que foi escrito no input. E no condicional é realizado um teste para identificar se algum destes ainda não estão preenchidos, para decidir se lança o alert, ou "enviará para o backend"

