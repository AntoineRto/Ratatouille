export default class ResaScreen extends HTMLElement {

    constructor() {
        super();

        this.innerHTML = this.render();
    }

    render(){
        `return <div>${this.constructor.name}</div>`; // return le nom de la classe
    }
}
customElements.define('resa-screen', ResaScreen);