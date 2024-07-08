import Reservation from "../models/Reservation.js";

export default class ReservationsService {
  data = [];

  constructor() {
    if (localStorage.getItem("resaList")) {
      this.data = JSON.parse(localStorage.getItem("resaList")).map(jsonObj => {
        return new Reservation(jsonObj);
      });
    }
  }

  // initDateInput() {
  //   this.dateInput = document.querySelector('#resaDate');
  //   if (this.dateInput) {
  //     // this.setMinAndMaxDate();
  //     this.disableWeekends();
  //   } else {
  //     console.error('Date not found');
  //   }
  // }

  // setMinAndMaxDate() {
  //   let today = new Date();
  //   let daysToAdd = 0;
  //   if (today.getDay() == 0) {
  //     // Si aujourd'hui est dimanche, ajoutez 1 jour pour démarrer à partir de lundi
  //     daysToAdd = 1;
  //   } else if (today.getDay() == 1) {
  //     // Si aujourd'hui est lundi, ajoutez 6 jours pour démarrer à partir de dimanche
  //     daysToAdd = 6;
  //   } else {
  //     // Si aujourd'hui est un autre jour de la semaine, calculez le nombre de jours à ajouter pour démarrer à partir du prochain dimanche
  //     daysToAdd = 7 - today.getDay() + 1;
  //   }

  //   let minDate = new Date(today);
  //   minDate.setDate(today.getDate() + daysToAdd);

  //   let maxDate = new Date(minDate);
  //   maxDate.setDate(minDate.getDate() + 5); // Limitez la sélection à 5 jours à partir de la date de début

  //   // Formattez les dates au format ISO pour les attributs min et max
  //   let minDateISO = minDate.toISOString().split('T')[0];
  //   let maxDateISO = maxDate.toISOString().split('T')[0];

  //   // Définir les attributs min et max sur l'élément input de type date
  //   this.dateInput.setAttribute('min', minDateISO);
  //   this.dateInput.setAttribute('max', maxDateISO);
  // }

  // autre méthode pour désactiver les dimanches et lundis
  // disableWeekends() {
  //   this.dateInput.addEventListener('input', (e) => {
  //     const date = new Date(e.target.value);
  //     const day = date.getUTCDay();
  //     if (day === 0 || day === 1) {
  //       // Réinitialiser la date si c'est un dimanche ou un lundi
  //       alert("Les dimanches et les lundis ne sont pas disponibles à la réservation.");
  //       e.target.value = '';
  //     }
  //   });
  // }


  validate(entries) {
    // Regex pour vérifier la validité de l'email
    const emailRegex = /(^[a-zA-Z0-9_.-]+[@]{1}[a-z0-9]+[\.][a-z]{2,}$)/;
    const telRegex = /(^\+?(?:\d{1,3}\s?)?\d{9,}$)/;
    

    let errors = {};

    // Vérifier si les values sont valides
    if (!entries.resaName || entries.resaName.trim() === "") {
      errors.resaName = "Merci de saisir votre nom.";
    }
    if (!emailRegex.test(entries.resaEmail)) {
      errors.resaEmail = "L'adresse email n'est pas valide.";
    }
    if (!telRegex.test(entries.resaPhone)) {
      errors.resaPhone = "Le téléphone n'est pas valide.";
    }
    if (!entries.resaMessage || entries.resaMessage.trim() === "") {
      errors.resaMessage = "Merci de saisir votre message.";
    }

    return Object.keys(errors).length === 0 ? true : errors;
  }

  create(entries) {
    const reservation = new Reservation(entries);
    this.data.push(reservation);
    localStorage.setItem("resaList", JSON.stringify(this.data));
    console.log('Reservation created with ID:', reservation.getId());
    console.log('Data saved to localStorage', this.data);
  }

  read() {
    console.log('Data read from localStorage', this.data);
    return this.data;
  }

  update() {}

  delete() {}









}