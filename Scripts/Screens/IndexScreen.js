export default class IndexScreen extends HTMLElement {



  constructor(){


    super();
    
    this.innerHTML = this.render();
   
}

    render() {

        return `
        <!-- ======= Header ======= -->
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
        </header>
        <!-- End Header+navbar -->
    
        <!-- ======= Caroussel roll auto ======= -->
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide position-relative zn-1"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner w-auto">
            <div class="carousel-item active">
              <img src="./src/img/slide-1.jpg" class="w-100 vh-100 object-fit-cover" alt="Restaurant slide 1" />
            </div>
            <div class="carousel-item">
              <img src="./src/img/slide-2.jpg" class="w-100 vh-100 object-fit-cover" alt="Restaurant slide 2" />
            </div>
            <div class="carousel-item">
              <img src="./src/img/slide-3.jpg" class="w-100 vh-100 object-fit-cover" alt="Restaurant slide 3" />
            </div>
          </div>
        </div>
        <div class="card opacity-75 position-absolute presText" style="width: 20rem">
          <div class="card-body text-center">
            <h5 class="card-title satisfy-regular title text-black">Welcome</h5>
            <p class="card-text poppins-regular text-black">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>
        </div>
        <!-- End caroussel -->
    
        <script src="./node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
      
    
    
        `
    }
}
customElements.define("index-screen", IndexScreen);