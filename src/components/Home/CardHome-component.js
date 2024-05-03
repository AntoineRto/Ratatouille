export default class CardHomeComponent extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = this.render();
  }

  render() {
    return `
      <div class="card opacity-75 position-absolute presText" style="width: 20rem">
      <div class="card-body text-center">
        <h5 class="card-title satisfy-regular title text-black">Welcome</h5>
        <p class="card-text poppins-regular text-black">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
      </div>
    </div>
        `;
  }
}
customElements.define("cardhome-component", CardHomeComponent);
