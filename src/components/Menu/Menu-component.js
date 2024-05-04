export default class MenuComponent extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = this.render();
  }

  render() {
    return `
      <section class="container-fluid position-relative mt-5 mb-4" >
        <div class="container rounded-4 bg-body-tertiary gap-3 bg-opacity-75 p-4">
        <!-- menu interactif isotope -->
    <section id="menu" class="menu ">
      <div class="container">

      <h2 class="d-flex justify-content-center satisfy-regular mt-2 p-3 mb-4">Menu</h2>

        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="menu-filters">
              <li data-filter="*" class="filter-active">Tout voir</li>
              <li data-filter=".filter-starters">Entrées</li>
              <li data-filter=".filter-salads">Plats</li>
              <li data-filter=".filter-specialty">Spécialités</li>
            </ul>
          </div>
        </div>

        <div class="row menu-container">

          <div class="col-lg-6 menu-item filter-starters">
            <div class="menu-content">
              <a href="#">Ravigote d’escargots aux légumes primeurs</a><span>105</span>
            </div>
            <div class="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-specialty">
            <div class="menu-content">
              <a href="#">La Ratatouille et son Carré d’agneau de Lozère</a><span>210</span>
            </div>
            <div class="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-starters">
            <div class="menu-content">
              <a href="#">Chaud-froid d’œuf mollet aux asperges</a><span>160</span>
            </div>
            <div class="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-salads">
            <div class="menu-content">
              <a href="#">Filets de saint-pierre aux coquillages</a><span>130</span>
            </div>
            <div class="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-specialty">
            <div class="menu-content">
              <a href="#">Noix de ris de veau à la Rémy</a><span>145</span>
            </div>
            <div class="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-starters">
            <div class="menu-content">
              <a href="#">Dariole de foie gras aux morilles</a><span>140</span>
            </div>
            <div class="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-salads">
            <div class="menu-content">
              <a href="#">Suprêmes de pigeon de Bresse et endives braisées à l’orange</a><span>130</span>
            </div>
            <div class="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-salads"> 
            <div class="menu-content">
              <a href="#">Escalopines de bar à l’émincé d’artichaut</a><span>185</span>
            </div>
            <div class="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-specialty">
            <div class="menu-content">
              <a href="#">Darne de turbot rôtie aux asperges et morilles</a><span>250</span>
            </div>
            <div class="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>

        </div>

      </div>
    </section>
        <!-- end menu interactif isotope -->
        
        
        </div>
        </section>
        `;
  }
}
customElements.define("menu-component", MenuComponent);
