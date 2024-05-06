
// code menu isotope (menu.html)
(function () {
    "use strict";
  
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim();
      if (all) {
        return [...document.querySelectorAll(el)];
      } else {
        return document.querySelector(el);
      }
    };
  
    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all);
      if (selectEl) {
        if (all) {
          selectEl.forEach((e) => e.addEventListener(type, listener));
        } else {
          selectEl.addEventListener(type, listener);
        }
      }
    };
  
    /**
     * Menu isotope and filter
     */
    window.addEventListener("load", () => {
      let menuContainer = select(".menu-container");
      if (menuContainer) {
        let menuIsotope = new Isotope(menuContainer, {
          itemSelector: ".menu-item",
          layoutMode: "fitRows",
        });
  
        let menuFilters = select("#menu-filters li", true);
  
        on(
          "click",
          "#menu-filters li",
          function (e) {
            e.preventDefault();
            menuFilters.forEach(function (el) {
              el.classList.remove("filter-active");
            });
            this.classList.add("filter-active");
  
            menuIsotope.arrange({
              filter: this.getAttribute("data-filter"),
            });
          },
          true
        );
      }
    });
  })();