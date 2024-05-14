import Contact from "../models/Contact.js";

export default class ContactService {

    data = [];

    constructor(){
        if(localStorage.getItem('contactList')){
            this.data = JSON.parse(localStorage.getItem('contactList')).map(json => {
                return new Contact(json);
            });
        }
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