class Router{
    constructor(app){
        this.defaultPage = "#/home";;
        this.basePath = location.pathname.replace("index.html", "");

        this.routes = {
            "#/home": "home",
            "#/profile" : "profile",
            "#/add" : "add"
        };
    }
    initRouter(){
        this.pages = app.querySelectorAll(".page");
        this.navLinks = app.querySelectorAll(".nav-link");
        this.attachNavLinkEvents();
        window.addEventListener("popstate", () => this.showPage(location.hash));
    }
    
    attachNavLinkEvents(){
        for (const link of this.navLinks) {
            link.addEventListener("click", event => {
                const path = link.getAttribute("href");
                this.navigateTo(path);
                event.preventDefault();
            })
        }
    }

    navigateTo(path){
        window.history.pushState({}, path, this.basePath + path);
        this.showPage(path);
    }

    showPage(path){
        this.hideAllPages();
        document.querySelector(`#${this.routes[path]}`).style.display = "flex";
    }

    hideAllPages(){
        for (const page of this.pages) {
            page.style.display = "none";
        }
    }

}

const app = document.querySelector("#app");
const router = new Router(app);

export default router;