export default class App {

    static #_instance = null;

    constructor() {
        if (App.#_instance!= null && App.#_instance instanceof App) {
            return App.#_instance;
        }

        App.#_instance = this;

        window.onclick = this.handlePageClick;
        window.onload = this.navigate;
        window.onpopstate = this.navigate;
    }

    static get instance() {
        return new App();
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
        document.getElementById('app').firstElementChild?.remove();
        const currentPage = document.createElement('div');
        currentPage.innerText = location.pathname;
        document.getElementById('app').append(currentPage);
    }
}