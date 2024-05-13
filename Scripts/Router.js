import App from "./App.js";
import ContactScreen from "./Screens/ContactScreen.js";
import HomeScreen from "./Screens/ContactScreen.js";
import IndexScreen from "./Screens/IndexScreen.js";
import MenuScreen from "./Screens/MenuScreen.js";
import NotfoundScreen from "./Screens/NotFoundScreen.js";
import ReservationScreen from "./Screens/ReservationScreen.js"

export default class Router{

    #screen = null;
    get screen() {return this.#screen;}

    constructor(){

        window.onclick = this.handlePageClick;
        window.onload = this.navigate;
        window.onpopstate = this.navigate;
    }

    handlePageClick = (e) => {
        const link = e.target.closest('[target="spa"]');
        if(link){
            e.preventDefault();
            history.pushState(null, null, link.href);
            this.navigate();
        }
    }

    navigate = (e) => {
        
        if(location.pathname == '/' || location.pathname == '/contact'){
            this.#screen = new ContactScreen();
        }
        else if (location.pathname == '/menu'){
            this.#screen = new MenuScreen();
        }
        else if (location.pathname == '/resa') {
            this.#screen = new ReservationScreen();

        }
        else if (location.pathname == '/index') {

            this.#screen = new IndexScreen();
        }

        else{
            this.#screen = new NotfoundScreen();
        }

        App.instance.render();
    }

}