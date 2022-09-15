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

        let tree = document.createDocumentFragment();
        let link = document.createElement("div");
        link.setAttribute("class", "caixa-card");

        
        let div = document.createElement("div");
        div.addEventListener("click" ,function() { 
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
        div.addEventListener("mouseleave" ,function() { 
            if (that.opened){
                //this.setAttribute("class", "card noHover")
            }
            
        });
        div.setAttribute("class", "card");
        div.setAttribute("id", `card-${id}`);

        let content = document.createElement("div");
        content.setAttribute("class", "content");

        let open = document.createElement("div");
        open.setAttribute("class", "front");

        open.appendChild(document.createTextNode(`${that.content.open}`));        

        let hide = document.createElement("div");
        hide.setAttribute("class", "back");

        hide.appendChild(document.createTextNode(`${that.content.hide}`));

        content.appendChild(open);
        content.appendChild(hide);

        div.appendChild(content);

        link.appendChild(div);
        tree.appendChild(link);

        return tree
    }
}