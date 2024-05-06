import BackgroundCarousel from "../components/Common/Background-carousel";
import Navbar from "../components/Common/Navbar";
import MenuComponent from "../components/Menu/Menu-component";
import SpecialtyComponent from "../components/Menu/Specialty-component";

export default class MenuScreen extends HTMLElement {

    constructor() {
        super();
        this.props = {};
        this.props.navbar = new Navbar();
        this.props.backgroundCarousel = new BackgroundCarousel();
        this.props.specialtyComponent = new SpecialtyComponent();
        this.props.menuComponent = new MenuComponent();
        this.innerHTML = this.render();
    }

    render(){
        return `
        <style>@import "./src/screens/styles/MenuStyle.css"</style>
        <div>${this.props.navbar.render()}</div>
        <div>${this.props.backgroundCarousel.render()}</div>
        <div>${this.props.specialtyComponent.render()}</div>
        <div>${this.props.menuComponent.render()}</div>
        <script>@import "../src/components/isotope-menu.js"</script>
        `;
    }
}
customElements.define('menu-screen', MenuScreen);