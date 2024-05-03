export default class ContactScreen extends HTMLElement {
  constructor() {
    super();
    this.props = {};
    this.props.navbar = new Navbar();
    this.props.backgroundCarousel = new BackgroundCarousel();
    this.innerHTML = this.render();
  }

  render() {
    return `
    // <style>@import "./src/screens/styles/MenuStyle.css"</style>
      <div>${this.props.navbar.render()}</div>
      <div>${this.props.backgroundCarousel.render()}</div>
    `;
  }
}
customElements.define("contact-screen", ContactScreen);
