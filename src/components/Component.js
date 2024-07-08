export default class Component extends HTMLElement {
  constructor(render = true) {
    super();

    if (render) this.innerHTML = this.render();
  }
}