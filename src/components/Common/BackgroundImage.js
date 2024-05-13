import Component from "../Component.js";

export default class BackgroundImage extends Component {
    render(){
        return `<img src="./src/img/slide-1.jpg" class="d-block vh-100 vw-100 object-fit-cover position-fixed" alt="Restaurant slide 1">`;
    }
}
customElements.define("background-image", BackgroundImage);