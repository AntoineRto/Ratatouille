import MenuComponent from "../components/Menu/Menu-component.js";
import SpecialtyComponent from "../components/Menu/Specialty-component.js";
import Screen from "./Screen.js";

export default class MenuScreen extends Screen {

    constructor() {
        super();
        this.props.specialtyComponent = new SpecialtyComponent();
        this.props.menuComponent = new MenuComponent();
        this.innerHTML = this.render();
    }

    render(){
        return `
        <style>@import "./src/screens/styles/MenuStyle.css"</style>
        <div>${super.render()}</div>
        <div>${this.props.specialtyComponent.render()}</div>
        <div>${this.props.menuComponent.render()}</div>
        `;
    }
}
customElements.define('menu-screen', MenuScreen);