import Component from "../Component.js";

export default class EventCarouselComponent extends Component {

  render() {
    return `
      <div class="container-fluid position-relative mx-auto pt-5 cardHeight">
        <div class="py-4">
          <section class="container rounded-4 bg-body-tertiary bg-opacity-75 p-4 mt-5 mx-auto mb-3">
    
    <div class="row carouselDirection">
            <h2 class="d-flex justify-content-center mt-2 mb-4">Organisez un événement</h2>
            <div id="carouselExampleCaptions" class="d-flex flex-wrap align-items-center col-4 col-sm- 8 col-md-8 col-lg-6 col-xl-4 mb-3 carousel slide" data-bs-ride="carousel">
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
            <div class="col-8 col-md-6 col-lg-6 col-xl-8 pWidth">
              <p class="poppins-regular">
                Découvrez une expérience culinaire sans pareille dans notre restaurant gastronomique trois étoiles, dirigé par le chef primé Rémy. Chaque plat est une œuvre d'art exquise, préparée avec des ingrédients d'exception pour offrir une expérience gustative inoubliable.
                <br />
                <br />

                Que ce soit pour une réception en plein air élégante ou une célébration intime, confiez-nous l'organisation de votre événement et laissez-nous vous émerveiller avec notre savoir-faire culinaire et notre service irréprochable. Contactez-nous dès aujourd'hui pour discuter de votre projet et recevoir un devis personnalisé.
              </p>
            </div>
      
    
                
          </section>
        </div>
      </div>
            `;
  }
}
customElements.define("eventcarousel-component", EventCarouselComponent);
