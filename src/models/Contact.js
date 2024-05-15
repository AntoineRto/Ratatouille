import IdGenerator from "./IdGenerator.js";

export default class Contact {
    #id;
    #name;
    #email;
    #subject;
    #textArea;

    constructor(props) {
        this.#id = IdGenerator.generateId();
        this.#name = props.name;
        this.#email = props.email;
        this.#subject = props.subject;
        this.#textArea = props.textArea;
    }

    toJSON() {
        const jsonObj = {
            id : this.#id,
            name : this.#name,
            email : this.#email,
            subject : this.#subject,
            textArea : this.#textArea,
        };
        return jsonObj;
    }
}