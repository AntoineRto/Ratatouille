import Navbar from "../components/common/Navbar.js";
import BackgroundCarousel from "../components/common/Background-carousel.js";

export default class HomeScreen extends HTMLElement {
  constructor() {
    super();
    this.props = {};
    this.props.navbar = new Navbar();
    this.props.backgroundCarousel = new BackgroundCarousel();
    this.innerHTML = this.render();
  }

  render() {
    return `
    <style>@import ".src/screens/styles/Homestyle.css"</style>
      <div>${this.props.navbar.render}</div>
      <div>${this.props.backgroundCarousel.render}</div >
      </div>
    `;
  }
}
customElements.define('home-screen', HomeScreen);