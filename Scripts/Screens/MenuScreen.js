export default class MenuScreen extends HTMLElement {


    constructor(){


        super();
        this.render();
        this.innerHTML = this.render();
    }

    render() {

     return   `<body>
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
     
         <div class="container">
             <h1 class="text-center text-light mt-4 mb-4 bg-primary">Menu du restaurant</h1>
             <div class="row">
               <div class="col-md-3 mx-auto">
                 <div class="card">
                   <img src="src/img/Canard-à-lorange-navets-550x372.jpg" class="img-fluid" style="max-height: 300px;"  alt="...">
                   <div class="card-body">
                     <h5 class="card-title">Le coin coin</h5>
                     <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, porro saepe facilis eveniet voluptates, laudantium delectus officiis facere quod ea minus et quam quas ut provident, natus fuga doloremque? Facilis!.</p>
                     <p class="card-text">Prix : 96€</p>
                   </div>
                 </div>
               </div>
               <div class="col-md-3 mx-auto">
                 <div class="card">
                   <img src="src/img/i41134-ris-de-veau-a-l-estragon.jpg" class="img-fluid" style="max-height: 300px;"  alt="...">
                   <div class="card-body">
                     <h5 class="card-title">Le vôooooooo</h5>
                     <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quis assumenda necessitatibus laudantium incidunt aliquid dolorum id molestias impedit reiciendis accusamus, cumque iusto tempora pariatur non libero architecto vel hic!</p>
                     <p class="card-text">Prix : 1337€</p>
                   </div>
                 </div>
               </div>
               <div class="col-md-3 mx-auto">
                 <div class="card">
                   <img src="src/img/plat-gastronomique.jpg" class="img-fluid" style="max-height: 300px;" alt="...">
                   <div class="card-body">
                     <h5 class="card-title">Du poisson (je crois)</h5>
                     <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi eius nostrum minus in maiores, beatae rerum eligendi officia obcaecati molestias quidem repellat voluptas vero neque voluptate ex necessitatibus, temporibus sequi.</p>
                     <p class="card-text">Prix : 420€</p>
                   </div>
                 </div>
               </div>
             </div>
             <div class="container">
               <h1 class="text-center mt-4 mb-4 bg-primary">La spécialité</h1>
             <div class="col-md-6 mx-auto">
                 <div class="card">
                   <img src="https://images.ricardocuisine.com/services/recipes/5312.jpg" class="card-img-top" alt="...">
                   <div class="card-body">
                     <h5 class="card-title">Plat 4</h5>
                     <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eos ad possimus molestiae unde, culpa tempora, quos dignissimos ratione laborum, ea magni quidem facere laudantium! Magni repellat reprehenderit libero laborum!</p>
                     <p class="card-text">Prix : 69€</p>
                   </div>
                 </div>
               </div>
             </div>    
             
               <script src="./node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
             
         
     </body>`
    }
}

customElements.define("menu-screen", MenuScreen);