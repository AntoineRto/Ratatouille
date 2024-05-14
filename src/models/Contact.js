import IdGenerator from "./IdGenerator.js";

export default class Contact {
    id;
    name;
    email;
    subject;
    textArea;

    constructor(props) {
        this.id = IdGenerator.generateId();
        this.name = props.name;
        this.email = props.email;
        this.subject = props.subject;
        this.textArea = props.textArea;
    }
}