import router from "../src/router.js";

class Profile{
    constructor(domElement){
        this.domElement = domElement;
        this.render();
    }

    render(){
        this.domElement.innerHTML += /*html*/ `
            <section id="profile" class="page">
                <h1>Profile Page</h1>
            </section>
        `;
    }
}

export default Profile;