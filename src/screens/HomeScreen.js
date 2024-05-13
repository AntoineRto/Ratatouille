import CardHomeComponent from "../components/Home/CardHome-component.js";
import MainScreen from "./Main-Screen.js";

export default class HomeScreen extends MainScreen {
  constructor() {
    super();
    this.props.cardhomecomponent = new CardHomeComponent();
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
    <style>@import "./src/screens/styles/HomeStyle.css"</style>
    <div id="preloader">  
        <div class="spinner-border text-dark" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    <div>${super.render()}</div>
    <div>${this.props.cardhomecomponent.render()}</div>
    `;
  }
}
customElements.define("home-screen", HomeScreen);
