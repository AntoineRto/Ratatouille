import Screen from "../Screens/Screen.js"

export default class MenuScreen extends Screen {


    constructor(){


        super();
        this.render();
        this.innerHTML = this.render();
    }

    render() {

     return   `<body>
     ${super.render()}
     
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