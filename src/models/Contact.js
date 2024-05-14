import IdGenerator from "./IdGenerator.js";

export default class Contact {
  #id;
  name;
  email;
  subject;
  contactMessage;
  //isRead : si a lu, IsAnwered si a répondu, etc.

  constructor(props) {
    this.#id = IdGenerator.generateId;
    this.name = props.name;
    this.email = props.email;
    this.subject = props.subject;
    this.contactMessage = props.contactMessage;
  }
}