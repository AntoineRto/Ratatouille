import Reservation from "../models/Reservation.js";

export default class ReservationService {

    data = [];

    constructor(){
        if(localStorage.getItem('reservationList')){
            this.data = JSON.parse(localStorage.getItem('reservationList')).map(jsonObj => {
                return new Reservation(jsonObj);
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
        const reservation = new Reservation(props);
        this.data.push(reservation);
        localStorage.setItem('reservationList', JSON.stringify(this.data));
    }

    read(){

    }

    update(){

    }

    delete(){

    }
}