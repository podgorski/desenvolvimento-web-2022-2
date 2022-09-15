export default class Card {
    opened = false;
    content;
    totalPoints = 0;
    
    constructor(content){
        this.content = content
    }

    open(html){
    
        this.opened = true
        setTimeout(function(){
            html.getElementsByClassName("front")[0].style.background = "#ccc"
            html.getElementsByClassName("front")[0].style.color = "#e6e6e6"
        },500)

    }
    
    render(id){
        let that = this;

        let root = document.createDocumentFragment();
        let caixaCards = document.createElement("div");
        caixaCards.setAttribute("class", "caixa-card");

        
        let card = document.createElement("div");
        card.addEventListener("click" ,function() { 
            if (!that.opened){

                Swal.fire({
                title: `Como se diz: ${that.content.open}, em Inglês?`,
                input: 'text',
                confirmButtonText:'responder',
                inputValidator: (value) => {
                    if (value) {
                        this.classList.toggle("card-open");
                        that.open(this); 
                        setTimeout(() => {
                            this.setAttribute("class", "card noHover")
                        }, 5000);
                    }
                }
                })
                
            }
        });
        card.addEventListener("mouseleave" ,function() { 
            if (that.opened){
                //this.setAttribute("class", "card noHover")
            }
            
        });
        card.setAttribute("class", "card");
        card.setAttribute("id", `card-${id}`);

        let content = document.createElement("div");
        content.setAttribute("class", "content");

        let front = document.createElement("div");
        front.setAttribute("class", "front");

        front.appendChild(document.createTextNode(`${that.content.open}`));        

        let back = document.createElement("div");
        back.setAttribute("class", "back");

        back.appendChild(document.createTextNode(`${that.content.hide}`));

        content.appendChild(front);
        content.appendChild(back);

        card.appendChild(content);

        caixaCards.appendChild(card);
        root.appendChild(caixaCards);

        return root
    }
}