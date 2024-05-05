import Navbar from "../components/common/Navbar.js";
import BackgroundCarousel from "../components/common/Background-carousel.js";
import EventCarouselComponent from "../components/Resa/EventCarousel-component.js";
import FormResaComponent from "../components/Resa/FormResa-component.js";


export default class ResaScreen extends HTMLElement {
  constructor() {
    super();
    this.props = {};
    this.props.navbar = new Navbar();
    this.props.backgroundCarousel = new BackgroundCarousel();
    this.props.eventCarouselComponent = new EventCarouselComponent();
    this.props.formResaComponent = new FormResaComponent();
    this.innerHTML = this.render();
  }

  render() {
    return `
    <style>@import "./src/screens/styles/ResaStyle.css"</style>
      <div>${this.props.navbar.render()}</div>
      <div>${this.props.backgroundCarousel.render()}</div>
      <div>${this.props.eventCarouselComponent.render()}</div>
      <div>${this.props.formResaComponent.render()}</div>
    `;
  }
}
customElements.define("resa-screen", ResaScreen);
