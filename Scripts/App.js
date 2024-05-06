import Router from "./Router.js";

export default class App{

    static #_instance = null;
    static get instance() {return new App();}
    static getInstance() {return new App();}

    #_router = null;
    get router() {return this.#_router;}

    name = "MyApp";

    constructor() {
        if(App.#_instance != null && App.#_instance instanceof App){
            return App.#_instance;
        }

        App.#_instance = this;
        this.#_router = new Router();

    }

    render(){
        document.getElementById('app').firstElementChild?.remove();
        document.getElementById('app').append(this.router.screen);
    }

}