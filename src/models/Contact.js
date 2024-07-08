import IdGenerator from "./IdGenerator.js";

export default class Contact {
  #id;
  contactName;
  contactEmail;
  contactSubject;
  contactMessage;
  //isRead : si a lu, IsAnwered si a répondu, etc.

  constructor(props) {
    this.#id = IdGenerator.generateId();
    this.contactName = props.contactName;
    this.contactEmail = props.contactEmail;
    this.contactSubject = props.contactSubject;
    this.contactMessage = props.contactMessage;
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