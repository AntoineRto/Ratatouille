import App from "./App.js";
import HomeScreen from "./screens/HomeScreen.js";
import MenuScreen from "./screens/MenuScreen.js";
import ResaScreen from "./screens/ResaScreen.js";
import ContactScreen from "./screens/ContactScreen.js";
import NotfoundScreen from "./screens/NotfoundScreen.js";

export default class Routeur {
  
  #screen = null;
  get screen() { return this.#screen; }

  constructor() {
    window.onclick = this.handlePageClick;
    window.onload = this.navigate;
    window.onpopstate = this.navigate;
    // onpopstate : event exécuté qd entrée active de l'historique change
  }

  handlePageClick = (e) => {
    const link = e.target.closest('[target="spa"]');
    if (link) {
      e.preventDefault();
      history.pushState(null, null, link.href);
      this.navigate();
    }
  };

  navigate = (e) => {
    if (location.pathname == '/' || location.pathname == "/index.html") {
      this.#screen = new HomeScreen();
    } else if (location.pathname == "/menu") {
      this.#screen = new MenuScreen();
    } else if (location.pathname == "/reservations") {
      this.#screen = new ResaScreen();
    } else if (location.pathname == "/contact") {
      this.#screen = new ContactScreen();
    } else {
      this.#screen = new NotfoundScreen();
      
    }
    App.instance.render();
  };
}
