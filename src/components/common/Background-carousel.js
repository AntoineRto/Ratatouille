import Component from "../Component.js";

export default class BackgroundCarousel extends Component {

    render() {
      return `
      <div class="carousel-page">
        <div id="carouselExampleSlidesOnly" class="carousel slide position-fixed zn-1">  
          <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="./src/img/slide-1.jpg" class="d-block vh-100 vw-100 object-fit-cover" alt="Restaurant slide 1">
                </div>
                <div class="carousel-item">
                  <img src="./src/img/slide-2.jpg" class="d-block vh-100 vw-100 object-fit-cover" alt="Restaurant slide 2">
                </div>
                <div class="carousel-item">
                  <img src="./src/img/slide-3.jpg" class="d-block vh-100 vw-100 object-fit-cover" alt="Restaurant slide 3">
                </div>
                <div class="carousel-item">
                  <img src="./src/img/slide-4.jpg" class="d-block vh-100 vw-100 object-fit-cover" alt="Restaurant slide 3">
                </div>
                <div class="carousel-item">
                  <img src="./src/img/slide-5.jpg" class="d-block vh-100 vw-100 object-fit-cover" alt="Restaurant slide 3">
                </div>
                <div class="carousel-item">
                  <img src="./src/img/slide-6.jpg" class="d-block vh-100 vw-100 object-fit-cover" alt="Restaurant slide 3">
                </div>
                <div class="carousel-item">
                  <img src="./src/img/slide-7.jpg" class="d-block vh-100 vw-100 object-fit-cover" alt="Restaurant slide 3">
                </div>



          </div>
              <button class="carousel-control-prev d-flex justify-content-start ms-3" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next d-flex justify-content-end me-3" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
        </div>
        </div>
        `;
    }
  }

customElements.define("background-carousel", BackgroundCarousel);
