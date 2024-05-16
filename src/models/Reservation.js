import IdGenerator from "./IdGenerator.js";

export default class Reservation {
  #id;
  resaName;
  resaEmail;
  resaPhone;
  resaDateTime;
  resaNbPersonne;
  resaMessage;

  constructor(props) {
    this.#id = IdGenerator.generateId();
    this.resaName = props.resaName;
    this.resaEmail = props.resaEmail;
    this.resaPhone = props.resaPhone;
    this.resaDateTime = props.resaDateTime;
    this.resaNbPersonne = props.resaNbPersonne;
    this.resaMessage = props.resaMessage;
  }

  getId() {
    return this.#id;
  }

  toJSON() {
    return {
      id: this.#id,
      contactName: this.contactName,
      contactEmail: this.contactEmail,
      contactSubject: this.contactSubject,
      contactMessage: this.contactMessage,
    };
  }
}

