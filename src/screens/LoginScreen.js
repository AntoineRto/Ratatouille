export default class LoginScreen extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = this.render();
  }

  render() {
    return `
      <div>${this.constructor.name}</div>
    `;
  }
}
customElements.define("login-screen", LoginScreen);
