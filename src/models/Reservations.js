export default class Reservation {
  id;
  name;
  email;
  phone;
  date;
  heure;
  nbPersonne;
  resaMessage;

  constructor(props) {
    this.id = 0;
    this.name = props.name;
    this.email = props.email;
    this.phone = props.phone;
    this.date = props.date;
    this.heure = props.heure;
    this.nbPersonne = props.event;
    this.resaMessage = props.resaMessage;
  }
}

// à refaire par rapport form résa !!