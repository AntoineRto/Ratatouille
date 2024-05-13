import Carousel from "../Components/Carousel.js";
import NavBar from "../Components/NavBar.js";

export default class Screen extends HTMLElement {
    constructor() {
        super();
        this.props = {};
        this.props.navbar = new NavBar();
        this.props.carousel = new Carousel();
        
    }

    render() {
        return `
            <nav-bar-hello></nav-bar-hello>
            
            
        `;
    }
}



   
 
 
 
 

         
 
     
 
 
    
















    