export default class NotfoundScreen extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = this.render();
  }

  render() {
    return `
      <div class="h-100 d-flex flex-column align-items-center justify-content-center">
      <div class="m-3">Cette page n'existe pas...</div>
      <a href="/" target="spa">Page d'accueil</a>
      </div>
    `;
  }
}
customElements.define("notfound-screen", NotfoundScreen);
