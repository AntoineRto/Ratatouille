import Component from "../Component.js";
import ContactService from "../../services/ContactService.js";

export default class FormContactComponent extends Component {
  constructor() {
    super();
  }

  handleContactFormSubmit = (e) => {
    e.preventDefault();
    // Accédez aux données du formulaire ici
    const entries = Object.fromEntries(new FormData(e.target));
    //validation entries
    const contactService = new ContactService();
    const validation = contactService.validate(entries);
    if (validation === true) {
      contactService.create(entries);
    } else {
      this.querySelector("#contactEmail").textContent = validation["contactEmail"];
    }

  };

  connectedCallback() {
    this.innerHTML = this.render();
    console.log("Form connected");
    this.querySelector("#contact-form").onsubmit = this.handleContactFormSubmit;
  }

  render() {
    return `
      <div class="container-fluid position-relative mx-auto pt-1 mb-4">
          <section class="container rounded-4 bg-body-tertiary bg-opacity-75 p-4 mt-2 mx-auto mb-2">

          <form id="contact-form" class="container" novalidate>
            <h2 class="d-flex justify-content-center mt-2 mb-4">Contactez-nous</h2>
            
            <div class="row align-items-center">
              <div class="col-6">
                <input type="text" id="contactName" name="name" class="form-control" placeholder="Votre Nom" required>
                <span id="contactNameError" class="error-message"></span>
              </div>
              
              <div class="col-6">
                <input type="email" id="contactEmail" name="email" class="form-control" placeholder="Votre Email" required>
                <span id="contactEmailError" class="error-message"></span>
              </div>
              

              <div class="row subject mt-4 mb-3">
                <div class="col">
                  <input type="text" id="contactSubject" name="subject" class="form-control" placeholder="Objet de votre message" required>
                  <span id="contactSubjectError" class="error-message"></span>
                </div>
                
              </div>
            </div>

            <div class="row mt-2">
              <div>
                <textarea class="form-control" id="contactMessage" name="contactMessage" placeholder="Votre Message..." rows="5" required></textarea>
                <span id="contactMessageError" class="error-message"></span>
              </div>
              
            </div>
          
          <div class="mt-4 mb-2 d-flex justify-content-center">
            <button type="submit" id="contact-submit-button" class="btn btn-light poppins-medium">Envoyer</button>
          </div>
          </form>

          </section>
      </div>
            `;
  }
}
customElements.define("formcontact-component", FormContactComponent);
