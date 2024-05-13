import MenuComponent from "../components/Menu/Menu-component.js";
import SpecialtyComponent from "../components/Menu/Specialty-component.js";
import MainScreen from "./Main-Screen.js";

export default class MenuScreen extends MainScreen {
  constructor() {
    super();
    this.props.specialtyComponent = new SpecialtyComponent();
    this.props.menuComponent = new MenuComponent();
    this.innerHTML = this.render();
  }

  // connectedCallback() {
  //   // vérifier class sur html et css
  //   const script = document.createElement("script");
  //   script.src = "src/screens/scripts/isotope-menu.js";
  //   this.append(script);
  // }

  connectedCallback() {
    const preloader = document.querySelector("#preloader");

    setTimeout(() => {
      preloader.style.opacity = "0";
      preloader.style.visibility = "hidden";
    }, 500);
  }

  render() {
    return `
    <style>@import "./src/screens/styles/MenuStyle.css"</style>
    <div id="preloader">  
        <div class="spinner-border text-dark" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div>${super.render()}</div>
      <div>${this.props.specialtyComponent.render()}</div>
      <div>${this.props.menuComponent.render()}</div>
    `;
  }
}
customElements.define("menu-screen", MenuScreen);
