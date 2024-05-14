import Component from "../Component.js";
import Contact from "../../models/Contact.js";

export default class FormResaComponent extends Component {
  constructor() {
    super();
    this.querySelector("form").onsubmit = this.handleResaFormSubmit;
  }

  handleResaFormSubmit = (e) => {
    e.preventDefault();
    const entries = Object.fromEntries(new FormData(e.target));
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
                    <input type="text" name="name" id="inputName" class="form-control" placeholder="Votre Nom">
                  </div>
                  <div class="col-md-4">
                    <input type="email" name="email" id="inputEmail" class="form-control" placeholder="Votre Email">
                  </div>
                  <div class="col-md-4">
                    <input type="tel" name"phone" id="inputPhone" class="form-control" placeholder="Votre Téléphone">
                  </div>
              </div>
              <div class="row g-4 align-items-center">
                  <div class="col-4">
                    <input type="date" name="date" id="inputDate" class="form-control" placeholder="Date">
                  </div>
                  <div class="col-4">
                    <input type="time" name="heure" id="inputHeure" class="form-control" placeholder="Heure">
                  </div>
                  <div class="col-4">
                    <input type="number" name="event" id="inputEvent" class="form-control" placeholder="Nombre de personnes" min="1">
                  </div>
                  <div>
                    <textarea class="form-control" name="textArea" id="textAreaInput" placeholder="Votre Message..." rows="5"></textarea>
                  </div>
              </div>
              <div class="mt-4 mb-2 d-flex justify-content-center">
              <button type="submit" class="btn btn-light poppins-medium sf-4">Envoyer</button>
            </div>
            </form>
            </section>
          </div>
        </div>
              `;
    }
  }
  customElements.define("formresa-component", FormResaComponent);