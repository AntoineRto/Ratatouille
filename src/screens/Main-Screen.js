import BackgroundCarousel from "../components/common/Background-carousel.js";
import Navbar from "../components/common/Navbar.js";

export default class MainScreen extends HTMLElement {
  constructor() {
    super();
    this.props = {};
    this.props.navbar = new Navbar();
    this.props.backgroundCarousel = new BackgroundCarousel();
// pas besoin ici :
    // this.innerHTML = this.render();
  }

  render() {
    return `
      <div>${this.props.navbar.render()}</div>
      <div>${this.props.backgroundCarousel.render()}</div>
    `;
  }


}
// pas besoin sinon double le custom
// customElements.define("main-screen", MainScreen);