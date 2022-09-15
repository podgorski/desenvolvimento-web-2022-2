import {words} from './words.js'
import Card from "./Card.js";

export default class Game {
    quantity;
    cards = [];
    constructor(quantity, level){
        this.quantity = quantity
        this.level = level

    }

    setQuantity(quantity){
        this.quantity = quantity
    }

    getCards(){
        return this.cards
    }

    chooseCards(){
        for(let i=0;i<this.quantity;i++){
            this.cards.push(new Card(words[i]))
        }
    }


    
}