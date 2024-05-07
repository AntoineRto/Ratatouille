import BackgroundCarousel from "../components/Common/Background-carousel.js";
import Navbar from "../components/Common/Navbar.js";

export default class Screen extends HTMLElement {
    constructor() {
        super();
        this.props = {};
        this.props.navbar = new Navbar();
        this.props.backgroundCarousel = new BackgroundCarousel();
    }

    render(){
        return `
        <div>${this.props.navbar.render()}</div>
        <div>${this.props.backgroundCarousel.render()}</div>
        `;
    }
}