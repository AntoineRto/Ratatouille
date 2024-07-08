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
    // pas besoin de render le form ensuite grâce à append
    this.append(this.props.formContactComponent);
  }

  render() {
    return `
    <style>@import "./src/screens/styles/ContactStyle.css"</style>
      <div>${super.render()}</div>
      <div>${this.props.contactCardComponent.render()}</div>
      <div>${this.props.mapComponent.render()}</div>
    `;
  }
}
customElements.define("contact-screen", ContactScreen);
