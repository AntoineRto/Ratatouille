import ContactCardComponent from "../components/Contact/ContactCard-component.js";
import FormContactComponent from "../components/Contact/FormContact-component.js";
import MapComponent from "../components/Contact/Map-Component.js";
import Screen from "./Screen.js";

export default class ContactScreen extends Screen {

    constructor() {
        super();
        this.props.contactCardComponent = new ContactCardComponent();
        this.props.mapComponent = new MapComponent();
        this.props.formContactComponent = new FormContactComponent();
        this.innerHTML = this.render();
        this.append(this.props.formContactComponent);
    }

    render(){
        return `
        <style>@import "./src/screens/styles/ContactStyle.css"</style>
        <div>${super.render()}</div>
        <div>${this.props.contactCardComponent.render()}</div>
        <div>${this.props.mapComponent.render()}</div>
        `;
    }
}
customElements.define('contact-screen', ContactScreen);