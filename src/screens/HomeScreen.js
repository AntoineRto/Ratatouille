import Navbar from "../components/common/Navbar.js";
import BackgroundCarousel from "../components/common/Background-carousel.js";
import CardHomeComponent from "../components/Home/CardHome-component.js";

export default class HomeScreen extends HTMLElement {
  constructor() {
    super();
    this.props = {};
    this.props.navbar = new Navbar();
    this.props.backgroundCarousel = new BackgroundCarousel();
    this.props.cardhomecomponent = new CardHomeComponent();
    this.innerHTML = this.render();
  }

  render() {
    return `
    <style>@import "./src/screens/styles/HomeStyle.css"</style>
      <div>${this.props.navbar.render()}</div>
      <div>${this.props.backgroundCarousel.render()}</div>
      <div>${this.props.cardhomecomponent.render()}</div>
    `;
  }
}
customElements.define('home-screen', HomeScreen);