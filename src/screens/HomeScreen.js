import CardHomeComponent from "../components/Home/CardHome-component.js";
import MainScreen from "./Main-Screen.js";

export default class HomeScreen extends MainScreen {
  constructor() {
    super();
    this.props.cardhomecomponent = new CardHomeComponent();
    this.innerHTML = this.render();
  }

  render() {
    return `
    <style>@import "./src/screens/styles/HomeStyle.css"</style>
    <div>${super.render()}</div>
    <div>${this.props.cardhomecomponent.render()}</div>
    `;
  }
}
customElements.define("home-screen", HomeScreen);
