import Screen from "../Screens/Screen.js"

export default class IndexScreen extends Screen {



  constructor(){


    super();
    
    this.innerHTML = this.render();
   
}

    render() {

        return `
        ${super.render()}
    
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