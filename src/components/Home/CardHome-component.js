import Component from "../Component.js";

export default class CardHomeComponent extends Component {

  render() {
    return `
      <div class="card opacity-75 position-absolute presText" style="width: 20rem">
      <div class="card-body text-center">
        <h5 class="card-title title text-black">L'institution gastronomique</h5>
        <p class="card-text poppins-regular text-black mt-4">
          Le Chef Rémy s’emploie avec
          ferveur à faire vivre l'histoire gastronomique. À chaque service la maison vibre d'une brigade de
          salle, de sommellerie et de cuisine jouant la pièce avec passion
          sur une scène ouverte !
        </p>
      </div>
    </div>
        `;
  }
}
customElements.define("cardhome-component", CardHomeComponent);
