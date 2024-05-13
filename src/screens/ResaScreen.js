import EventCarouselComponent from "../components/Resa/EventCarousel-component.js";
import FormResaComponent from "../components/Resa/FormResa-component.js";
import MainScreen from "./Main-Screen.js";

export default class ResaScreen extends MainScreen {
  constructor() {
    super();
    this.props.eventCarouselComponent = new EventCarouselComponent();
    this.props.formResaComponent = new FormResaComponent();
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
    <style>@import "./src/screens/styles/ResaStyle.css"</style>
    <div id="preloader">  
        <div class="spinner-border text-dark" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div>${super.render()}</div>
      <div>${this.props.eventCarouselComponent.render()}</div>
      <div><formresa-component /></div>
    `;
  }
}
customElements.define("resa-screen", ResaScreen);
