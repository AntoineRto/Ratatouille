import Contact from "../models/Contact.js";

export default class ContactService {
  // 4 opé de base à faire sur une BDD : CRUD

  data = [];

  constructor() {
    if (localStorage.getItem("contactList")) {
      this.data = JSON.parse(localStorage.getItem("contactList")).map(jsonObj => {
        return new Contact(jsonObj);
      });
    }
  }
  // map méthode magique un peu comme une boucle
  // prend ttes lignes du tableau et transforme chaque ligne

  validate(entries) {
    // Regex pour vérifier la validité de l'email
    const emailRegex = /(^[a-zA-Z0-9_.-]+[@]{1}[a-z0-9]+[\.][a-z]{2,}$)/;

    let errors = {};

    // Vérifier si les values sont valides
    if (!emailRegex.test(entries.contactEmail)) {
      errors.contactEmail = "L'adresse email n'est pas valide.";
    }
    if (!entries.contactName || entries.contactName.trim() === "") {
      errors.contactName = "Merci de saisir votre nom.";
    }
    if (!entries.contactSubject || entries.contactSubject.trim() === "") {
      errors.contactSubject = "Merci de saisir un l'objet de votre message.";
    }
    if (!entries.contactMessage || entries.contactMessage.trim() === "") {
      errors.contactMessage = "Merci de saisir votre message.";
    }

    return Object.keys(errors).length === 0 ? true : errors;
  }

  create(entries) {
    const contact = new Contact(entries);
    this.data.push(contact);
    localStorage.setItem("contactList", JSON.stringify(this.data));
    console.log('Contact created with ID:', contact.getId());
    console.log('Data saved to localStorage', this.data);
  }

  read() {
    console.log('Data read from localStorage', this.data);
    return this.data;
  }

  update() {}

  delete() {}
}
