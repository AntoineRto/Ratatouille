import Caroussel from "../Components/Carousel.js";

//importer du CSS
export default class ContactScreen extends HTMLElement{

    constructor(){
        super();
        this.props = {}
        this.props.caroussel = new Caroussel({title:"Mon Caroussel"});
        this.innerHTML = this.render();
        const cssLinks = //document.head.querySelectorAll('link');
            document.styleSheets;
    }

    render(){

        return `
        <style>@import "Scripts\Screens\Styles\ContactStyles.css"</style>        
        <div id="myDiv">
            ${this.constructor.name}
            <div><caroussel-component title="Mon Caroussel"/></div>
            <div>${this.props.caroussel.innerHTML}</div>
        </div>`
        

    }

}
customElements.define("contact-screen", ContactScreen);