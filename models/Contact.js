import ContactScreenScreen from "../Scripts/Screens/ContactScreen.js"

export default class Contact {


    constructor(props) {

        this._name = props.name;
        this._email = props.email;
        this._subject = props.subject;
        this._message = props.message;


    }
    toJSON() {
    
        const jsonObj = {
    
            name : this._name,
            email : this._email,
            subject : this._subject,
            message : this._message,
    
    
        }
        return jsonObj
    }
}