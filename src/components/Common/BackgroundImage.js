export default class BackgroundImage extends HTMLElement {

    constructor() {
        super();
        this.innerHTML = this.render();
    }

    render(){
        return `<img src="./src/img/slide-1.jpg" class="d-block vh-100 vw-100 object-fit-cover position-fixed" alt="Restaurant slide 1" draggable="false">`;
    }
}
customElements.define("background-image", BackgroundImage);