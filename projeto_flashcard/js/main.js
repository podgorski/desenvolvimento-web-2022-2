import Game from "./Game.js";

let box = new Game(4,1)

box.chooseCards()

console.log(box)

let caixaCards = document.getElementById("caixa-cards")

for (let [i, card] of box.getCards().entries()){
    let root = card.render(i)
    caixaCards.appendChild(root);
}




