export default class FormResaComponent extends HTMLElement {
    constructor() {
      super();
  
      this.innerHTML = this.render();
    }
  
    render() {
      return `
        <div class="container-fluid position-relative mx-auto pt-1">
          <div class="pb-2">
            <section class="container rounded-4 bg-body-tertiary bg-opacity-75 p-4 mt-5 mx-auto mb-3">
  
        <form class="container">
              <h2 class="d-flex justify-content-center mt-2 mb-4">Réservez une table ou un événement dès maintenant</h2>
              <div class="row mb-4 g-4 align-items-center">
                  <div class="col-md-4">
                    <input type="text" id="inputName" class="form-control" placeholder="Votre Nom">
                  </div>
                  <div class="col-md-4">
                    <input type="email" id="inputEmail" class="form-control" placeholder="Votre Email">
                  </div>
                  <div class="col-md-4">
                    <input type="tel" id="inputPhone" class="form-control" placeholder="Votre Téléphone">
                  </div>
              </div>
              <div class="row g-4 align-items-center">
                  <div class="col-4">
                    <input type="date" id="inputDate" class="form-control" placeholder="Date">
                  </div>
                  <div class="col-4">
                    <input type="time" id="inputHeure" class="form-control" placeholder="Heure">
                  </div>
                  <div class="col-4">
                    <input type="number" id="inputEvent" class="form-control" placeholder="Nombre de personnes" min="1">
                  </div>
                  <div>
                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Votre Message..." rows="5"></textarea>
                  </div>
              </div>
            </form>
            <div class="mt-4 mb-2 d-flex justify-content-center">
              <button type="submit" class="btn btn-light poppins-medium sf-4">Envoyer</button>
            </div>
  
            </section>
          </div>
        </div>
              `;
    }
  }
  customElements.define("formresa-component", FormResaComponent);