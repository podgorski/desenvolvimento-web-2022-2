import Box from "./Box.js";

let box = new Box(4,1)

box.chooseCards()

console.log(box)

let caixaCards = document.getElementById("caixa-cards")

for (let [i, card] of box.getCards().entries()){
    let tree = card.render(i,card)
    caixaCards.appendChild(tree);
}




