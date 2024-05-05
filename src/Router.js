import ContactScreen from './screens/ContactScreen.js';
import HomeScreen from './screens/HomeScreen.js';
import LoginScreen from './screens/LoginScreen.js';
import MenuScreen from './screens/MenuScreen.js';
import NotFoundScreen from './screens/NotFoundScreen.js';
import ResaScreen from './screens/ResaScreen.js';
import App from './script/App.js';

export default class Router {
    #screen = null;

    constructor() {
        window.onclick = this.handlePageClick;
        window.onload = this.navigate;
        window.onpopstate = this.navigate;
    }

    get screen(){
        return this.#screen;
    }

    handlePageClick = (e) => {
        const link = e.target.closest('[target="spa"]');
        if (link) {
            e.preventDefault();
            history.pushState(null, null, link.href);
            this.navigate();
        }
    }

    navigate = (e) => {
        if(location.pathname === '/' || location.pathname === '/home'){
            this.#screen = new HomeScreen();
        }
        else if(location.pathname === '/login'){
            this.#screen = new LoginScreen();
        }
        else if(location.pathname === '/menu'){
            this.#screen = new MenuScreen();
        }
        else if(location.pathname === '/contact'){
            this.#screen = new ContactScreen();
        }
        else if(location.pathname === '/resa'){
            this.#screen = new ResaScreen();
        }
        else{
            this.#screen = new NotFoundScreen();
        }
        App.instance.render();
    }
}