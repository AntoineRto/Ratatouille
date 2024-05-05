import Router from './Router.js';

export default class App {

    static #_instance = null;
    #router = null;

    constructor() {
        if (App.#_instance!= null && App.#_instance instanceof App) {
            return App.#_instance;
        }

        App.#_instance = this;
        this.#router = new Router();
    }

    static get instance() {
        return new App();
    }

    get router(){
        return this.#router;
    }

    render(){
        document.getElementById('app').firstElementChild?.remove();
        document.getElementById('app').append(this.router.screen);
    }
}