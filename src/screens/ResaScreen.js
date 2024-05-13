import BackgroundCarousel from "../components/Common/Background-carousel.js";
import Navbar from "../components/Common/Navbar.js";
import EventCarouselComponent from "../components/Resa/EventCarousel-component.js";
import FormResaComponent from "../components/Resa/FormResa-component.js";
import Screen from "./Screen.js";

export default class ResaScreen extends Screen {

    constructor() {
        super();
        this.props.eventCarouselComponent = new EventCarouselComponent();
        this.props.formResaComponent = new FormResaComponent();
        this.innerHTML = this.render();
    }

    render(){
        return `
        <style>@import "./src/screens/styles/ResaStyle.css"</style>
        <div>${super.render()}</div>
        <div>${this.props.eventCarouselComponent.render()}</div>
        <div>${this.props.formResaComponent.render()}</div>
        `;
    }
}
customElements.define('resa-screen', ResaScreen);