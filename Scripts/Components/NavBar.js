import Components from "./Components.js";

export default class NavBar extends Components{

    

    render(){
        return ` <!-- ======= Header =======  -->
        <header class="fixed-top d-flex align-items-center">
          <div class="container-fluid d-flex align-items-center">
            <nav class="navbar navbar-expand-md w-100">
              <div class="container-fluid">
                <a class="navbar-brand" href="index.html"
                  ><img src="./src/img/logo-ratatouille.png" class="logo " alt="Logo Ratatouille"
                /></a>
                <button
                  class="navbar-toggler bg-light btn-border-light"
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
                  <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <ul class="navbar-nav nav col-8 col-md-8 col-lg-8 col-xl-8 mqMenu menu">
                      <li class="nav-item item">
                        <a class="nav-link me-3 poppins-medium link" href="index.html">Accueil</a>
                      </li>
                      <li class="nav-item item">
                        <a class="nav-link me-3 poppins-medium link" href="menu.html">Menu</a>
                      </li>
                      <li class="nav-item item">
                        <a class="nav-link me-3 poppins-medium link" href="resa.html">Réservations</a>
                      </li>
                      <li class="nav-item item">
                        <a class="nav-link poppins-medium link" href="contact.html">Contact</a>
                      </li>
                    </ul>
                    <ul class="navbar-nav nav col-4 col-md-4 col-lg-4 col-xl-4 whiteBar margNumbers">
                      <i class="fa-solid fa-mobile-screen"
                        ><span class="ms-1 text-black poppins-medium pe-none">01 36 65 65 65</span></i
                      >
                      <i class="fa-regular fa-clock"
                        ><span class="ms-1 text-black poppins-medium pe-none"
                          >Mardi-Samedi: <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 11:00 - 23:00</span
                        ></i
                      >
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>`
    }
    
}
customElements.define("nav-bar-hello", NavBar);