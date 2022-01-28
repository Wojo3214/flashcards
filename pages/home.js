import router from "../src/router.js";

class HomePage {
    constructor(domElement){
        this.domElement = domElement;
        this.currentCard = 0;
        this.render();
        
        this.attachEvent();
    }
    render(){
        this.domElement.innerHTML += /*html*/ `
            <section id="home" class="page">
                <h1>Home Page</h1>
                <div class="container">
                </div>
                <div class="btn-container">
                    <button class="button-rounded button-rounded--false" onclick="correctFalseCard(-1)">No</button>
                    <button class="button-rounded button-rounded--correct" onclick="correctFalseCard(1)">Yes</button>
                </div>
            </section>
        `;
        this.appendCards();
    }


    attachEvent(){
        window.correctFalseCard = (cardNum) => this.correctFalseCard(cardNum);
    }

    async appendCards(){
        const response = await fetch("http://localhost:3000/backend/service.php?action=getCards");
        const data = await response.json();

        let cards = data.cards;
        let cardTemplate = "";

        for (const card of cards) {
            cardTemplate += /*html*/`
                <div class="card">
                    <div class="original">${card.originalWord}</div>
                    <div class="translation">${card.translation}</div>
                </div>
            `;
        }
        document.querySelector(".container").innerHTML += cardTemplate;
        console.log(cardTemplate);
        this.showCard(this.currentCard);
    }

    showCard(n){
        let cards = document.getElementsByClassName("card");
        console.log(cards[n]);
        cards[n].style.display="block";

        if(n == (cards.length - 1)){
            console.log("Finish");
        }
    }

    correctFalseCard(n){
        let cards = document.querySelectorAll(".card");
        cards[this.currentCard].style.display="none";
        this.currentCard = this.currentCard + n;

        this.showCard(this.currentCard);
    }

}

export default HomePage;