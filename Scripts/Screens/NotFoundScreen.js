export default class NotfoundScreen extends HTMLElement{

    constructor(){
        super();

        this.innerHTML = this.render();
    }

    render(){
        return `<div class="h-100 d-flex flex-column align-items-center justify-content-center">
            <div class="m-3" bg-primary>Cette page n'existe pas ...</div>
            <div>
                <a href="/" target="spa">Page d'accueil</a>
            </div>
        </div>`
    }
}
customElements.define("notfound-screen", NotfoundScreen);