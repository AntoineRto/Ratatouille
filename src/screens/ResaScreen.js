import EventCarouselComponent from "../components/Resa/EventCarousel-component.js";
import FormResaComponent from "../components/Resa/FormResa-component.js";
import MainScreen from "./Main-Screen.js";

export default class ResaScreen extends MainScreen {
  constructor() {
    super();
    this.props.eventCarouselComponent = new EventCarouselComponent();
    this.props.formResaComponent = new FormResaComponent();
    this.innerHTML = this.render();
  }

  render() {
    return `
    <style>@import "./src/screens/styles/ResaStyle.css"</style>
      <div>${super.render()}</div>
      <div>${this.props.eventCarouselComponent.render()}</div>
      <div><formresa-component /></div>
    `;
  }
}
customElements.define("resa-screen", ResaScreen);
