import Navbar from "../components/common/Navbar.js";
import BackgroundCarousel from "../components/common/Background-carousel.js";
import MenuComponent from "../components/Menu/Menu-component.js";
import SpecialtyComponent from "../components/Menu/Specialty-component.js";

export default class MenuScreen extends HTMLElement {
  constructor() {
    super();
    this.props = {};
    this.props.navbar = new Navbar();
    this.props.backgroundCarousel = new BackgroundCarousel();
    this.props.specialtyComponent = new SpecialtyComponent();
    this.props.menuComponent = new MenuComponent();
    this.innerHTML = this.render();
  }

  render() {
    return `
    <style>@import "./src/screens/styles/MenuStyle.css"</style>

      <div>${this.props.navbar.render()}</div>
      <div>${this.props.backgroundCarousel.render()}</div>
      <div>${this.props.specialtyComponent.render()}</div>
      <div>${this.props.menuComponent.render()}</div>
    `;
  }
}
customElements.define("menu-screen", MenuScreen);
