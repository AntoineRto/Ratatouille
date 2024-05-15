import Contact from "../models/Contact.js";

export default class ContactService {

    data = [];

    constructor(){
        if(localStorage.getItem('contactList')){
            this.data = JSON.parse(localStorage.getItem('contactList')).map(jsonObj => {
                return new Contact(jsonObj);
            });
        }
    }

    validate(props){
        // If email is not valid
        return {"email": "L'adresse mail n'est pas valide"};

        // If email is valid
        return true;
    }

    create(props){
        const contact = new Contact(props);
        this.data.push(contact);
        localStorage.setItem('contactList', JSON.stringify(this.data));
    }

    read(){

    }

    update(){

    }

    delete(){

    }
}