import BackgroundCarousel from "../components/Common/Background-carousel";
import Navbar from "../components/Common/Navbar";
import ContactCardComponent from "../components/Contact/ContactCard-component";
import MapComponent from "../components/Contact/Map-Component";

export default class ContactScreen extends HTMLElement {

    constructor() {
        super();
        this.props = {};
        this.props.navbar = new Navbar();
        this.props.backgroundCarousel = new BackgroundCarousel();
        this.props.contactCardComponent = new ContactCardComponent();
        this.props.mapComponent = new MapComponent();
        this.innerHTML = this.render();
    }

    render(){
        return `
        <style>@import "./styles/ContactStyle.css"</style>
        <div>${this.props.navbar.render()}</div>
        <div>${this.props.backgroundCarousel.render()}</div>
        <div>${this.props.contactCardComponent.render()}</div>
        <div>${this.props.mapComponent.render()}</div>
        <div>${this.props.formContactComponent.render()}</div>
        `;
    }
}
customElements.define('contact-screen', ContactScreen);