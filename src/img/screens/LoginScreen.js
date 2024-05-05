export default class LoginScreen extends HTMLElement {

    constructor() {
        super();

        this.innerHTML = this.render();
    }

    render(){
        `return <div>${this.constructor.name}</div>`; // return le nom de la classe
    }
}
customElements.define('login-screen', LoginScreen);