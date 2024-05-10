import Component from "../Component.js";

export default class MapComponent extends Component {
  render() {
    return `
      <div class="container-fluid position-relative mx-auto pt-1 mapMaps">
          <section class="container rounded-4 bg-body-tertiary bg-opacity-75 p-4 mt-5 mx-auto mb-2">
            
          <div class="row">
            <div class="col d-flex justify-content-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.429057595358!2d2.35477229031582!3d48.85002821215764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671e4b4d76375%3A0x527bb6b83bdfd8a4!2s15%20Quai%20de%20la%20Tournelle%2C%2075005%20Paris!5e0!3m2!1sfr!2sfr!4v1714844857867!5m2!1sfr!2sfr" width="400" height="400" style="border-radius: 15px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="col d-flex flex-column align-items-center justify-content-center gapInfos">

            <h3 class="pb-2">Nous retrouver</h3>
                <span class="poppins-regular ms-2 text-center">
                15 Quai de la Tournelle <br />
                75005 Paris</span>

            <h3 class="pt-5 pb-2">Nos horaires</h3>
              <span class="poppins-regular ms-2 text-center">
                Mardi au Samedi <br />
                De 12h00 à 14h00 <br />
                & de 19h00 à 21h00</span>

            <h3 class="pt-5 pb-2">Nous joindre</h3>
              <span class="poppins-regular ms-2 text-center">
              01 36 65 65 65</span>

            </div>
          </div>


          </section>
      </div>
            `;
  }
}
customElements.define("map-component", MapComponent);
