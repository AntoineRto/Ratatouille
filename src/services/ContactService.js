export default class ContactService {

    data = [];

    constructor(){
        if(localStorage.getItem('contactList')){
            this.data = JSON.parse(localStorage.getItem('contactList')).map(json => {
                return new Contact(jsonObj);
            });
        }
    }

    create(){

    }

    read(){

    }

    update(){

    }

    delete(){

    }
}