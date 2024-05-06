export default class BackgroundCarousel extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = this.render();
  }

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
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
      </div>
        `;
  }
}
customElements.define("background-carousel", BackgroundCarousel);
