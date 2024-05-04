export default class SpecialtyComponent extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = this.render();
  }

  render() {
    return `
      <div class="container-fluid position-relative mx-auto pt-5 cardHeight">
        <div class="py-4">
          <section class="container rounded-4 bg-body-tertiary bg-opacity-75 p-4 mt-5 mx-auto mb-3">
            
          
          <div class="row d-flex flex-wrap">
              
              <div class="col d-flex justify-content-center">
                <div class="card m-2" style="width: 18rem;">
                  <img src="./src/img/risdeveau.jpg" class="card-img-top" alt="Ratatouille photo">
                    <div class="card-body">
                      <h4 class="card-title text-center">Noix de ris de veau</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
              </div>

              <div class="col d-flex justify-content-center">
                <div class="card m-2" style="width: 18rem;">
                  <img src="./src/img/slide-3.jpg" class="card-img-top" alt="Ratatouille photo">
                    <div class="card-body">
                      <h4 class="card-title text-center">La Ratatouille</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
              </div>

              <div class="col d-flex justify-content-center">
                <div class="card m-2" style="width: 18rem;">
                  <img src="./src/img/turbot.jpg" class="card-img-top" alt="Ratatouille photo">
                    <div class="card-body">
                      <h4 class="card-title text-center">Darne de turbot rôtie</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
              </div>

            
            </div>
          </section>
        </div>
      </div>
            `;
  }
}
customElements.define("specialty-component", SpecialtyComponent);
