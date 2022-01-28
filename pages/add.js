import router from "../src/router.js";

class AddCard{
    constructor(domElement){
        this.domElement = domElement;
        this.render();
    }
    render(){
        this.domElement.innerHTML += /*html*/ `
            <section id="add" class="page">
                <h1>Add Page</h1>
            </section>
        `;
    }
}

export default AddCard;