export default class SpecialtyComponent extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = this.render();
  }

  render() {
    return `
      <div class="container-fluid position-absolute top-0 mx-auto py-5 mt-4">
        <div class="py-4"></div>
          <section class="container rounded-4 bg-body-tertiary gap-3 bg-opacity-75 p-4 mt-5 mx-auto">


        
          </section>
        </div>
      </div>
            `;
  }
}
customElements.define("specialty-component", SpecialtyComponent);
