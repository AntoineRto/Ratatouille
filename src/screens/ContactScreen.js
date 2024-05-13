import ContactCardComponent from "../components/contact/ContactCard-component.js";
import MapComponent from "../components/contact/Map-component.js";
import FormContactComponent from "../components/contact/FormContact-component.js";
import MainScreen from "./Main-Screen.js";

export default class ContactScreen extends MainScreen {
  constructor() {
    super();
    this.props.contactCardComponent = new ContactCardComponent();
    this.props.mapComponent = new MapComponent();
    this.props.formContactComponent = new FormContactComponent();
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
    <style>@import "./src/screens/styles/ContactStyle.css"</style>
      <div id="preloader">  
        <div class="spinner-border text-dark" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div>${super.render()}</div>
      <div>${this.props.contactCardComponent.render()}</div>
      <div>${this.props.mapComponent.render()}</div>
      <div><formcontact-component /></div>
      
    `;
  }
}
customElements.define("contact-screen", ContactScreen);
