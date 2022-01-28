export default class Nav {
    constructor(domElement){
        this.domElement = domElement;
        //this.render();
    }

    render(){
        this.domElement.innerHTML += `
            <nav class="nav">
                <a href="#/home" class="nav-link">Home</a>
                <a href="#/add" class="nav-link">Add</a>
                <a href="#/profile" class="nav-link">Profile</a>
            </nav>
        `;
    }
}