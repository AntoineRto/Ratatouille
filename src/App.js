import Routeur from "./Routeur.js";

export default class App {
  // singleton :
  static #_instance = null;
  static get instance() { return new App(); }

  // stock de la var Routeur pour lier les 2 class
  #routeur = null;
  get routeur() { return this.#routeur; };

  name = "myApp";

  

  constructor() {
    if (App.#_instance != null && App.#_instance instanceof App) {
      return App.#_instance;
    }
    App.#_instance = this;
    // créa objet Routeur qui va gérer la navigation
    this.#routeur = new Routeur();
  }

  render() {
        document.getElementById("app").firstElementChild?.remove();
        // const currentPage = document.createElement("div");
        // currentPage.innerText = location.pathname;
        document.getElementById("app").append(this.routeur.screen);
  }


}
