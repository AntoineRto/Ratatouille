import Component from "../Component.js";

export default class FormResaComponent extends Component {
  constructor() {
    super();
  }

  handleContactFormSubmit = (e) => {
    e.preventDefault();
    // Accédez aux données du formulaire ici
    const entries = Object.fromEntries(new FormData(e.target));
    console.log(entries);
  };

  connectedCallback() {
    this.innerHTML = this.render();
    console.log("Form connected");
    this.querySelector("#resa-form").onsubmit = this.handleContactFormSubmit;
  }

  render() {
    return `
      <div class="container-fluid position-relative mx-auto pt-1">
        <div class="pb-2">
          <section class="container rounded-4 bg-body-tertiary bg-opacity-75 p-4 mt-5 mx-auto mb-3">

      <form id="resa-form" class="container" novalidate>
            <h2 class="d-flex justify-content-center mt-2 mb-4">Réservez une table ou un événement dès maintenant</h2>
            <div class="row mb-4 g-4 align-items-center">
                <div class="col-md-4">
                  <input type="text" id="name" name="name" class="form-control" placeholder="Votre Nom" required>
                </div>
                <div class="col-md-4">
                  <input type="email" id="email" name="email" class="form-control" placeholder="Votre Email" required>
                </div>
                <div class="col-md-4">
                  <input type="tel" id="phone" name="phone" class="form-control" placeholder="Votre Téléphone" required>
                </div>
            </div>
            <div class="row g-4 align-items-center">
                <div class="col-4">
                  <input type="date" id="date" name="date" class="form-control" placeholder="Date" required>
                </div>
                <div class="col-4">
                  <input type="time" id="heure" name="heure" class="form-control" placeholder="Heure" required>
                </div>
                <div class="col-4">
                  <input type="number" id="event" name="inputEvent" class="form-control" placeholder="Nombre de personnes" min="1" required>
                </div>
                <div>
                  <textarea class="form-control" id="resa-message" name="resa-message" placeholder="Votre Message..." rows="5" required></textarea>
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
