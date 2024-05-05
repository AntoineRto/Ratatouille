export default class MenuComponent extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = this.render();
  }

  render() {
    return `
      <section id="menuIsotope" class="container-fluid position-relative mt-5 mb-4" >
        <div class="container rounded-4 bg-body-tertiary gap-3 bg-opacity-75 p-4">
        <!-- menu interactif isotope -->
    <section id="menu" class="menu ">
      <div class="container">

      <h2 class="d-flex justify-content-center mt-2 mb-4">Menu</h2>

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
              <span class="poppins-medium">Ravigote d’escargots aux légumes primeurs</span><span>105</span>
            </div>
            <div class="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-specialty">
            <div class="menu-content">
              <span class="poppins-medium">La Ratatouille et son Carré d’agneau de Lozère</span><span>210</span>
            </div>
            <div class="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-starters">
            <div class="menu-content">
              <span class="poppins-medium">Chaud-froid d’œuf mollet aux asperges</span><span>160</span>
            </div>
            <div class="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-salads">
            <div class="menu-content">
              <span class="poppins-medium">Filets de saint-pierre aux coquillages</span><span>130</span>
            </div>
            <div class="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-specialty">
            <div class="menu-content">
              <span class="poppins-medium">Noix de ris de veau à la Rémy</span><span>145</span>
            </div>
            <div class="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-starters">
            <div class="menu-content">
              <span class="poppins-medium">Dariole de foie gras aux morilles</span><span>140</span>
            </div>
            <div class="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-salads">
            <div class="menu-content">
              <span class="poppins-medium">Suprêmes de pigeon de Bresse et endives braisées</span><span>130</span>
            </div>
            <div class="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-salads"> 
            <div class="menu-content">
              <span class="poppins-medium">Escalopines de bar à l’émincé d’artichaut</span><span>185</span>
            </div>
            <div class="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-specialty">
            <div class="menu-content">
              <span class="poppins-medium">Darne de turbot rôtie aux asperges et morilles</span><span>250</span>
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
