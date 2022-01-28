import router from "./router.js";

import HomePage from "../pages/home.js";
import Profile from "../pages/profile.js";
import AddCard from "../pages/add.js";

//import Nav from "../components/nav.js";

const app = document.querySelector("#app");
//const nav = new Nav(app);
//nav.render();
const pages = document.querySelector("#pages");

const homePage = new HomePage(pages);
const addCardPage = new AddCard(pages);
const profilePage = new Profile(pages);

router.initRouter();