import Component from "../Component.js";
import ReservationsService from "../../services/ReservationsService.js";

export default class FormResaComponent extends Component {
  constructor() {
    super();
  }

  handleContactFormSubmit = (e) => {
    e.preventDefault();
    // Réinitialiser tous les messages d'erreur
    this.querySelectorAll('.error-message').forEach(errorElement => {
      errorElement.textContent = '';
    });
    // Accédez aux données du formulaire ici
    const entries = Object.fromEntries(new FormData(e.target));
    //validation entries
    const reservationService = new ReservationsService();
    const validation = reservationService.validate(entries);

    if (validation === true) {
      reservationService.create(entries);
    } else {
      // Afficher les messages d'erreur
      Object.keys(validation).forEach(key => {
          const errorElement = this.querySelector(`#${key}Error`);
          if (errorElement) {
              errorElement.textContent = validation[key];
          }
      });
  }
  };

  connectedCallback() {
    this.innerHTML = this.render();
    console.log("Form connected");
    this.querySelector("#resa-form").onsubmit = this.handleContactFormSubmit;
    
    // Initialisation de Flatpickr
    flatpickr("#resaDateTime", {
      locale: "fr",
      enableTime: true,
      dateFormat: "Y-m-d H:i",
      minDate: "today",
      minuteIncrement: 30,
      disable: [
        {
          daysOfWeek: [0, 1], // Désactiver les dimanches et lundis
        },
          function(date) {
              // Désactiver les heures spécifiques
              const hour = date.getHours();
              return (hour < 12 || (hour >= 14 && hour < 19) || hour >= 21);
          }
      ]
  });

    //Appel à la méthode pour initialiser les dates et désactiver les week-ends
  //   const reservationService = new ReservationsService();
  //   reservationService.initDateInput();

}


  render() {
    return `
      <div class="container-fluid position-relative mx-auto pt-1">
        <div class="pb-2">
          <section class="container rounded-4 bg-body-tertiary bg-opacity-75 p-4 mt-5 mx-auto mb-3">

      <form id="resa-form" class="container" novalidate>
            <h2 class="d-flex justify-content-center mt-2 mb-4">Réservez une table ou un événement dès maintenant</h2>
            <div class="row mt-2 mb-2 align-items-center">
                <div class="col-md-4">
                  <input type="text" id="resaName" name="resaName" class="form-control" placeholder="Votre Nom" required>
                  <span id="resaNameError" class="error-message"></span>
                  </div>
                <div class="col-md-4">
                  <input type="email" id="resaEmail" name="resaEmail" class="form-control" placeholder="Votre Email" required>
                  <span id="resaEmailError" class="error-message"></span>
                </div>
                <div class="col-md-4">
                  <input type="tel" id="resaPhone" name="resaPhone" class="form-control" placeholder="Votre Téléphone" required>
                  <span id="resaPhoneError" class="error-message"></span>
                </div>
            </div>
            <div class="row mt-2 mb-4 align-items-center">
                <div class="col-6">
                <input type="datetime-local" id="resaDateTime" name="resaDateTime" class="form-control" placeholder="Date et heure" required>
                </div>
                <div class="col-6">
                  <input type="number" id="resaNbPersonne" name="resaNbPersonne" class="form-control" placeholder="Nombre de personnes" min="1" required>
                </div>
            </div>
            <div class="row mt-2 mb-2 align-items-center">
              <div>
              <textarea class="form-control" id="resaMessage" name="resaMessage" placeholder="Votre Message..." rows="5" required></textarea>
              <span id="resaMessageError" class="error-message"></span>
              </div>
            </div>


          <div class="mt-2 mb-2 d-flex justify-content-center">
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
