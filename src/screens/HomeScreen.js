import BackgroundCarousel from "../components/Common/Background-carousel.js";
import Navbar from "../components/Common/Navbar.js";
import CardHomeComponent from "../components/Home/CardHome-component.js";
import Screen from "./Screen.js";

export default class HomeScreen extends Screen {

    constructor() {
        super();
        this.props.cardhomecomponent = new CardHomeComponent();
        this.innerHTML = this.render();
    }

    render(){
        return `
        <style>@import "./src/screens/styles/HomeStyle.css"</style>
        <div>${super.render()}</div>
        <div>${this.props.cardhomecomponent.render()}</div>
        `;
    }
}
customElements.define('home-screen', HomeScreen);