import Screen from "./Screen.js";

export default class LoginScreen extends Screen {

    constructor() {
        super();

        this.innerHTML = this.render();
    }

    render(){
        return `
        <div>${super.render()}</div>
        <div>${this.constructor.name}</div>`; // return le nom de la classe
    }
}
customElements.define('login-screen', LoginScreen);