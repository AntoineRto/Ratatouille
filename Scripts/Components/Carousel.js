export default class Caroussel extends HTMLElement{

    constructor(){
        super();

        this.innerHTML = this.render();
    }

    render(){
        return ` <section class="container w-50 h-50">
        <div id="carouselExampleControls" class="carousel slide w-50" data-ride="carousel" >
          <div class="carousel-inner" >
            <div class="carousel-item active " >
              <img class="  w-100 p-1 " src="assets/img/remi.png" alt="First slide" style="width: 100%; height: 350px">
            </div>
            <div class="carousel-item">
              <img class="  w-100 p-1" src="assets/img/PHoto2.jpg" alt="First slide" style="width: 100%; height: 450px">
            </div>
            <div class="carousel-item">
              <img class=" w-100 p-1" src="assets/img/django.png" alt="First slide"  style="width: 100%; height: 550px">
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only bg-success">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only bg-success">Next</span>
          </a>
        </div>`
    }
    
}
customElements.define("caroussel-component", Caroussel);