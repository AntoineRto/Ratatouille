import IdGenerator from "./IdGenerator.js";

export default class Reservation {
    #id;
    #name;
    #email;
    #phone;
    #date;
    #heure;
    #event;
    #textArea;

    constructor(props) {
        this.#id = IdGenerator.generateId();
        this.#name = props.name;
        this.#email = props.email;
        this.#phone = props.phone;
        this.#date = props.date;
        this.#heure = props.heure;
        this.#event = props.event;
        this.#textArea = props.textArea;
    }

    toJSON() {
        const jsonObj = {
            id: this.#id,
            name: this.#name,
            email: this.#email,
            phone: this.#phone,
            date: this.#date,
            heure: this.#heure,
            event: this.#event,
            textArea: this.#textArea
        };
        return jsonObj;
    }
}