export default class Component extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = this.render();
  }
}