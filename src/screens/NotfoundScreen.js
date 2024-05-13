import MainScreen from "./Main-Screen.js";

export default class NotfoundScreen extends MainScreen {
  constructor() {
    super();

    this.innerHTML = this.render();
  }

  connectedCallback() {
    const preloader = document.querySelector("#preloader");

    setTimeout(() => {
      preloader.style.opacity = "0";
      preloader.style.visibility = "hidden";
    }, 500);
  }

  render() {
    return `
    <style>@import "./src/screens/styles/NotfoundStyle.css"</style>
    <div id="preloader">  
        <div class="spinner-border text-dark" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    <div>${super.render()}</div>
    <div class="card position-absolute presText d-flex align-items-center" style="width: 20rem">
      <img src="./src/img/oups.png" class="card-img-oups px-2 mt-2" alt="Sorry, wrong page" draggable="false">
        <div class="card-body">
          <p class="card-text poppins-regular text-center text-black mt-2">
            Désolé, cette page n'existe pas...
          </p>
        </div>
    </div>
    `;
  }
}
customElements.define("notfound-screen", NotfoundScreen);
