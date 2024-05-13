import Screen from "../Screens/Screen.js"

export default class ReservationScreen extends Screen {
  constructor() {
    super();
    this.render();
    this.innerHTML = this.render();
    
    
  }

  render() {
    return `${super.render()}
    
          <body>
    <!-- background carousel -->
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
    <!--end background carousel -->
  
    
  
        <main class="container-fluid position-absolute top-0 mx-auto py-5 mt-4">
          <div class="py-4"></div>
          <section class="container rounded-4 bg-body-tertiary gap-3 bg-opacity-75 p-4 mt-5 mx-auto">
            <div class="row">
              <h2 class="d-flex justify-content-center satisfy-regular mt-2 mb-4">Organisez un événement</h2>
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
                <p class="poppins-regular">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto exercitationem illum quis voluptatibus voluptates reprehenderit culpa doloribus quisquam eum! Expedita placeat nulla libero tempora ipsam! Repudiandae nobis deleniti ad pariatur.</p>
              </div>
            </div>
          </section>
          <!-- Form Réservation -->
            <form class="container rounded-4 bg-body-tertiary bg-opacity-75 p-4 mt-4">
              <h2 class="d-flex justify-content-center mt-2 mb-4 satisfy-regular">Réservez dès maintenant</h2>
              <div class="row mb-4 g-4 align-items-center">
                  <div class="col-md-4">
                    <input type="text" id="inputName" class="form-control" placeholder="Votre Nom">
                  </div>
                  <div class="col-md-4">
                    <input type="email" id="inputEmail" class="form-control" placeholder="Votre Email">
                  </div>
                  <div class="col-md-4">
                    <input type="text" id="inputPhone" class="form-control" placeholder="Votre Téléphone">
                  </div>
              </div>
              <div class="row g-4 align-items-center">
                  <div class="col-4">
                    <input type="text" id="inputDate" class="form-control" placeholder="Date">
                  </div>
                  <div class="col-4">
                    <input type="email" id="inputHeure" class="form-control" placeholder="Heure">
                  </div>
                  <div class="col-4">
                    <input type="text" id="inputPhone" class="form-control" placeholder="Event">
                  </div>
                  <div>
                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Votre Message..." rows="5"></textarea>
                  </div>
              </div>
            </form>
            <!-- Fin formulaire -->
        </main>
  
        <script src="node_modules\bootstrap\dist\js\bootstrap.min.js"></script>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script type="module" src="contact.js"></script> 

  </body>`;
  }
}

customElements.define("reservation-screen", ReservationScreen);
