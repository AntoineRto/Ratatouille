import BackgroundCarousel from "../components/Common/Background-carousel";
import Navbar from "../components/Common/Navbar";
import CardHomeComponent from "../components/Home/CardHome-component";

export default class HomeScreen extends HTMLElement {

    constructor() {
        super();
        this.props = {};
        this.props.navbar = new Navbar();
        this.props.backgroundCarousel = new BackgroundCarousel();
        this.props.cardhomecomponent = new CardHomeComponent();
        this.innerHTML = this.render();
    }

    render(){
        return `
        <style>@import "./styles/HomeStyle.css"</style>
        <div>${this.props.navbar.render()}</div>
        <div>${this.props.backgroundCarousel.render()}</div>
        <div>${this.props.cardhomecomponent.render()}</div>
        `;
    }
}
customElements.define('home-screen', HomeScreen);