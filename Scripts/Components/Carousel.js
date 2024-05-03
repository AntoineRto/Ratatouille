export default class Caroussel extends HTMLElement{

    constructor(){
        super();

        this.innerHTML = this.render();
    }

    render(){
        return `<h1>MON CAROUSSEL</h1>`
    }
    
}
customElements.define("caroussel-component", Caroussel);