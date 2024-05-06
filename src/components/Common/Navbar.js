
export default class Navbar extends HTMLElement {
    constructor() {
      super();
  
      this.innerHTML = this.render();
    }
  
    render() {
      return `
        <header class="fixed-top d-flex align-items-center">
        <div class="container-fluid position-relative d-flex align-items-center">
          <nav class="navbar navbar-expand-md w-100">
            <div class="container-fluid leftPosition">
              <a class="navbar-brand" href="/"
                ><img src="./src/img/logo-ratatouille.png" class="logo " alt="Logo Ratatouille"
              /></a>
              <button
                class="navbar-toggler bg-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="bg-light bg-opacity-75 p-3 w-100 d-flex rounded-3 d-flex whiteBar">
                <div class="collapse navbar-collapse justify-content-between w-100" id="navbarNav">
                  <ul class="navbar-nav nav menu">
                    <li class="nav-item item">
                      <a class="nav-link me-3 poppins-medium link" href="/" target="spa">Accueil</a>
                    </li>
                    <li class="nav-item item">
                      <a class="nav-link me-3 poppins-medium link" href="/menu" target="spa">Menu</a>
                    </li>
                    <li class="nav-item item">
                      <a class="nav-link me-3 poppins-medium link" href="/resa" target="spa">Réservations</a>
                    </li>
                    <li class="nav-item item">
                      <a class="nav-link poppins-medium link" href="/contact" target="spa">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      `;
    }
  }
  customElements.define("navbar-component", Navbar);