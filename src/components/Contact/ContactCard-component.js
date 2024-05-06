export default class ContactCardComponent extends HTMLElement {
    constructor() {
      super();
  
      this.innerHTML = this.render();
    }
  
    render() {
      return `
        <div class="container-fluid position-relative mx-auto pt-5 cardHeight">
          <div class="py-4">
            <section class="container rounded-4 bg-body-tertiary bg-opacity-75 p-4 mt-5 mx-auto mb-3">
      
            <h2 class="d-flex justify-content-center mt-2 mb-4">Rencontrez notre équipe</h2>
            
              <div class="row d-flex flex-wrap">
                <div class="col d-flex justify-content-center">
                  <div class="card m-2" style="width: 18rem;">
                    <img src="./src/img/emile.png" class="card-img-top" alt="Photo Emile">
                      <div class="card-body bg-body-tertiary rounded-4 shadow-lg">
                        <h4 class="card-title text-center">Emile</h4>
                        <h6 class="card-subtitle mb-2 text-body-secondary text-center">Commis</h6>
                          <p class="card-text text-center poppins-regular">Frère aîné de Rémy, gourmand et loyal, toujours prêt à suivre son frère dans ses aventures.</p>
                      </div>
                  </div>
                </div>
  
                <div class="col d-flex justify-content-center align-items-center">
                  <div class="card m-2" style="width: 18rem;">
                    <img src="./src/img/remy.png" class="card-img-top" alt="Photo Rémy">
                      <div class="card-body bg-body-tertiary rounded-4 shadow-lg">
                        <h4 class="card-title text-center">Rémy</h4>
                        <h6 class="card-subtitle mb-2 text-body-secondary text-center">Master Chef</h6>
                          <p class="card-text text-center poppins-regular">Passionné de cuisine dont le rêve de devenir un grand chef est devenu réalité.</p>
                      </div>
                  </div>
                </div>
  
                <div class="col d-flex justify-content-center align-items-center">
                  <div class="card m-2" style="width: 18rem;">
                    <img src="./src/img/django.png" class="card-img-top" alt="Photo Django">
                      <div class="card-body bg-body-tertiary rounded-4 shadow-lg">
                        <h4 class="card-title text-center">Django</h4>
                        <h6 class="card-subtitle mb-2 text-body-secondary text-center">Chef de partie</h6>
                          <p class="card-text text-center poppins-regular">Père de Rémy, chef de clan, et mentor de son fils dans l'art de la cuisine clandestine.</p>
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
  customElements.define("contactcard-component", ContactCardComponent);