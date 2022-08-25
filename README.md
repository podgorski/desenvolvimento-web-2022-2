# Aula 01

## Objetivo

Nesta aula iremos dar início a nossa jornada conhecendo um pouco mais a respeito de HTML e CSS,
sendo necessário entender de forma geral o propósito de ambos, bem mais do que esgotar o conhecimento
e "decorar" todos seus elementos, atributos. No entanto é esperado de maneira macro contextualizar e
tangibilizar sua aplicabilidade.

## O que é HTML

O HTML tem como objetivo criar estruturas com propósitos e funcionalidades bem claras, de forma não dúbia 
para que possa ser entendido pelos navegadores. Sendo uma linguagem de marcação, em que utiliza de elementos (tags)
e atributos para atingir seu objetivo.

### Elementos básicos

Toda página HTML, é formada por três elementos, sendo estes: **html**, **head** e **body**

```html
<html>
    <head></head>
    <body></body>
</html>
```
- HTML

Elemento mais externo que tem o objetivo de ser uma espécie de container, e elemento pai dos demais itens,
ou seja, os demais elementos estarão contidos dentro dele.

- HEAD

Elemento em que são definidos características e comportamentos daquela página HTML, tais como:
    - definir o título da página
    - informar configurações em relação a charset, a SEO, entre outras
    - informar as dependências de arquivos CSS e JS que devem ser previamente carregados

- BODY

Elemento que reflete o que será renderizado no navegador, ou seja, o que o usuário irá ver como resultado final.

### Outros elementos

A lista de elementos é extensa, e de forma alguma, esta deve ser decorada, havendo divesas fontes de consulta, 
como <https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element>

Podemos tirar desta referência alguns como:

#### **\<p>\</p>**
Representa um parágrafo. Em mídias visuais, parágrafos são representados como blocos indentados de texto com a primeira letra avançada e separados por linhas em branco. Já em HTML, parágrafos são usados para agrupar conteúdos relacionados de qualquer tipo, como imagens e campos de um formulário. [fonte](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/p)

#### **\<a>\</a>**
Elemento âncora, com o atributo href cria-se um hiperligação nas páginas web, arquivos, endereços de emails, ligações na mesma página ou endereços na URL. O conteúdo dentro de cada \<a> precisará indicar o destino do link. [fonte](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/a)

#### **\<img\\>**
Este elemento representa a inserção de imagem no documento. [fonte](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/img)

#### **\<link\\>**
Este elemento especifica as relações entre o documento atual e um recurso externo. Possíveis usos para este elemento incluem a definição de uma estrutura relacional para navegação. Este elemento é mais usado para vincular as folhas de estilo. [fonte](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/link)

> **_ATENÇÃO:_**  Todo elemento HTML deve ser aberto, e devidamente fechado, a fim de delimitar seu escopo.

```html
<html> 
    ...
</html>
```
em elementos em que vemos a notação com a barra ao final, como \<img/> significa que o mesmo com esta representação está abrindo e fechando, também são denominados como elementos vazios.

## O que é CSS
O pricipal objetivo do CSS é estilizar o conteúdo presente dentro do HTML, aplicando cores, estilos, espaçamentos,margins, entre outras características visuais. Sua sintaxe é relativamente simples, de forma geral podemos representar como

```css
seletor{

    atributo:valor;

}
```

### Seletor
Seletor representa o item que desejamos atingir com nossa estilização, podendo ser referenciado através de um elemento html, de uma classe ou através de um id.

- elemento seria através de alguma tag HTML, tais como: p, div, body, entre outras
- class é um atributo que um elemento html pode ter a fim de agrupar elementos mesmo que diferentes terem características a serem atribuídas a eles, devem ser prefixado no css utilando um ponto(.)
- id é um atributo que um elemento html pode ter para demonstrar que o mesmo tem uma identidade única através de um identificador, deve ser prefixado no css utilando o sinal de cerquilha(#)

##### **Elemento**

```css
p{

    color:#FFFFFF;

}
```

##### **Classe**

```css
.cor-branca{

    color:#FFFFFF;

}
```

##### **ID**

```css
item-unico{

    color:#FFFFFF;

}
```

> **_CSS EM RESUMO:_** <https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web/CSS_basics>