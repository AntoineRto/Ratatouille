import Component from "../Component.js";

export default class BackgroundCarousel extends Component {

  render() {
    return `
      <div id="carouselExampleSlidesOnly" class="carousel slide position-fixed zn-1" data-bs-ride="carousel">
        <div class="carousel-inner w-auto">
          <div class="carousel-item active">
            <img src="./src/img/slide-1.jpg" class="vw-100 vh-100 object-fit-cover" alt="Restaurant slide 1" />
          </div>
          <div class="carousel-item">
            <img src="./src/img/slide-2.jpg" class="vw-100 vh-100 object-fit-cover" alt="Restaurant slide 2" />
          </div>
          <div class="carousel-item">
            <img src="./src/img/slide-3.jpg" class="vw-100 vh-100 object-fit-cover" alt="Restaurant slide 3" />
          </div>
        </div>
      </div>
        `;
  }
}
customElements.define("background-carousel", BackgroundCarousel);
