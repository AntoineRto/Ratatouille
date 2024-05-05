import Navbar from "../components/common/Navbar.js";
import BackgroundCarousel from "../components/common/Background-carousel.js";
import ContactCardComponent from "../components/contact/ContactCard-component.js";
import MapComponent from "../components/contact/Map-component.js";
import FormContactComponent from "../components/contact/FormContact-component.js";



export default class ContactScreen extends HTMLElement {
  constructor() {
    super();
    this.props = {};
    this.props.navbar = new Navbar();
    this.props.backgroundCarousel = new BackgroundCarousel();
    this.props.contactCardComponent = new ContactCardComponent();
    this.props.mapComponent = new MapComponent();
    this.props.formContactComponent = new FormContactComponent();
    this.innerHTML = this.render();
  }

  render() {
    return `
    <style>@import "./src/screens/styles/ContactStyle.css"</style>
      <div>${this.props.navbar.render()}</div>
      <div>${this.props.backgroundCarousel.render()}</div>
      <div>${this.props.contactCardComponent.render()}</div>
      <div>${this.props.mapComponent.render()}</div>
      <div>${this.props.formContactComponent.render()}</div>
    `;
  }
}
customElements.define("contact-screen", ContactScreen);
