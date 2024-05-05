export default class EventCarouselComponent extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = this.render();
  }

  render() {
    return `
      <div class="container-fluid position-relative mx-auto pt-5 cardHeight">
        <div class="py-4">
          <section class="container rounded-4 bg-body-tertiary bg-opacity-75 p-4 mt-5 mx-auto mb-3">
    
    <div class="row">
            <h2 class="d-flex justify-content-center mt-2 mb-4">Organisez un événement</h2>
            <div id="carouselExampleCaptions" class="col-auto col-lg-4 mb-3 mb-lg-0 carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="./src/img/event-birthday.jpg" class="d-block rounded-3 w-100" alt="...">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="./src/img/event-custom.jpg" class="d-block rounded-3 w-100" alt="...">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="./src/img/event-private.jpg" class="d-block rounded-3 w-100" alt="...">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            <div class="col-auto col-lg-8">
              <p class="poppins-regular">Réception en extérieur, en intérieur, ou anniversaire ? <br />
              Remplissez le formulaire ci-dessous pour nous faire part de votre projet et nous demander un devis. </p>
            </div>
      
    
                
          </section>
        </div>
      </div>
            `;
  }
}
customElements.define("eventcarousel-component", EventCarouselComponent);
