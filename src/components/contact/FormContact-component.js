import Component from "../Component.js";

export default class FormContactComponent extends Component {

  render() {
    return `
      <div class="container-fluid position-relative mx-auto pt-1 mb-4">
          <section class="container rounded-4 bg-body-tertiary bg-opacity-75 p-4 mt-2 mx-auto mb-2">

          <form class="container" novalidate>
            <h2 class="d-flex justify-content-center mt-2 mb-4">Contactez-nous</h2>
            
            <div class="row align-items-center">
              <div class="col-6">
                <input type="text" id="inputName" class="form-control" placeholder="Votre Nom">
              </div>
              <div class="col-6">
                <input type="email" id="inputEmail" class="form-control" placeholder="Votre Email">
              </div>

              <div class="row subject mt-4 mb-3">
                <div class="col">
                  <input type="text" id="inputSubject" class="form-control" placeholder="Objet de votre message">
                </div>
              </div>
            </div>

            <div class="row mt-2">
              <div>
                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Votre Message..." rows="5"></textarea>
              </div>
            </div>
          </form>
          <div class="mt-4 mb-2 d-flex justify-content-center">
            <button type="submit" class="btn btn-light poppins-medium">Envoyer</button>
          </div>

          </section>
      </div>
            `;
  }
}
customElements.define("formcontact-component", FormContactComponent);
