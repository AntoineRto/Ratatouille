import Contact from "../models/Contact.js";


export default class ContactService {

    data = [];

    constructor(){
        if(localStorage.getItem('contact-List')){

            this.data = JSON.parse(localStorage.getItem('contact-List')).map(jsonObj => {
                return new Contact(jsonObj);
            
           } );
        }

    }

    create(entries){

        const contact = new Contact(entries);
        this.data.push(contact);
        localStorage.setItem('contact-List', JSON.stringify(this.data));

    }

    read(filter){
        return filter ? this.data.filter(filter) : this.data;

    }

    update(){

    }

    delete(){

    };

    



}