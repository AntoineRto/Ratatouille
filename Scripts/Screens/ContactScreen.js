import Carousel from "../Components/Carousel.js";

//importer du CSS
export default class ContactScreen extends HTMLElement {

    constructor(){
        super();
        this.props = {}
        this.props.caroussel = new Carousel({title:"Mon Caroussel"});
        this.innerHTML = this.render();
        const cssLinks = //document.head.querySelectorAll('link');
            document.styleSheets;
    }

    render(){

        return `
        
<body>
  <!-- ======= Header =======  -->
  <header class="fixed-top d-flex align-items-center">
    <div class="container-fluid d-flex align-items-center">
      <nav class="navbar navbar-expand-md w-100">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html"
            ><img src="./src/img/logo-ratatouille.png" class="logo " alt="Logo Ratatouille"
          /></a>
          <button
            class="navbar-toggler bg-light btn-border-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="bg-light bg-opacity-75 p-3 w-100 d-flex rounded-3 d-flex whiteBar">
            <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
              <ul class="navbar-nav nav col-8 col-md-8 col-lg-8 col-xl-8 mqMenu menu">
                <li class="nav-item item">
                  <a class="nav-link me-3 poppins-medium link" href="index.html">Accueil</a>
                </li>
                <li class="nav-item item">
                  <a class="nav-link me-3 poppins-medium link" href="menu.html">Menu</a>
                </li>
                <li class="nav-item item">
                  <a class="nav-link me-3 poppins-medium link" href="resa.html">Réservations</a>
                </li>
                <li class="nav-item item">
                  <a class="nav-link poppins-medium link" href="contact.html">Contact</a>
                </li>
              </ul>
              <ul class="navbar-nav nav col-4 col-md-4 col-lg-4 col-xl-4 whiteBar margNumbers">
                <i class="fa-solid fa-mobile-screen"
                  ><span class="ms-1 text-black poppins-medium pe-none">01 36 65 65 65</span></i
                >
                <i class="fa-regular fa-clock"
                  ><span class="ms-1 text-black poppins-medium pe-none"
                    >Mardi-Samedi: <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 11:00 - 23:00</span
                  ></i
                >
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>


 


 <div id="app" class="container-lg">
     
 </div>
 <!-- <div id="links">
     <link rel="stylesheet" href="style.css">
 </div> -->

    <section id="chefs" class="chefs">
        <div class="container bg-light">
  
          <div class="section-title bg-primary">
            <h2>Our Professional <span>Chefs</span></h2>
            <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
          </div>
  
          <div class="row">
  
            <div class="col-lg-4 col-md-6">
              <div class="">
                <div class="pic"><img src="assets/img/remi.png" class="img-fluid" alt=""></div>
                <div class=" bg-primary">
                  <h4>Le rat principal</h4>
                  <span>Master Chef

                  </span>
                  <div class="">
                    <a href=""><i class="bi bi-twitter"></i></a>
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
  
            <div class="col-lg-4 col-md-6">
              <div class="">
                <div class="pic"><img src="assets/img/PHoto2.jpg" class="img-fluid" alt=""></div>
                <div class=" bg-primary">
                  <h4>Un autre rat</h4>
                  <span>
                  </span>
                  <div class="">
                    <a href=""><i class="bi bi-twitter"></i></a>
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
  
            <div class="col-lg-4 col-md-6">
              <div class="">
                <div class="pic"><img src="assets/img/django.png" class="img-fluid" alt=""></div>
                <div class=" bg-primary">
                  <h4>Django</h4>
                  <span> 

                    Juste le goat apparement.
                   
                  </span>
                  <div class="">
                    <a href=""><i class="bi bi-twitter"></i></a>
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
  
          </div>
  
        </div>
      </section><!-- End Chefs Section --> 
      <caroussel-component></caroussel-component>
      
      

      
      
      
  
        </div>
      </section><!-- End Testimonials Section -->
  
      <!-- ======= Contact Section ======= -->
      <section id="contact" class="contact">
        <div class="container">
  
          <div class="section-title">
            <h2><span>Contact</span> Us</h2>
            <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
          </div>
        </div>
  
        <div class="map">
          <iframe style="border:0; width: 100%; height: 350px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
        </div>
  
        <div class="container mt-5 bg-info">
  
          <div class="info-wrap">
            <div class="row">
              <div class="col-lg-3 col-md-6 info">
                <i class="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>A108 Adam Street<br>New York, NY 535022</p>
              </div>
  
              <div class="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                <i class="bi bi-clock"></i>
                <h4>Open Hours:</h4>
                <p>Monday-Saturday:<br>11:00 AM - 2300 PM</p>
              </div>
  
              <div class="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                <i class="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>info@example.com<br>contact@example.com</p>
              </div>
  
              <div class="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                <i class="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+1 5589 55488 51<br>+1 5589 22475 14</p>
              </div>
            </div>
          </div>
  
          <form action="forms/contact.php" method="post" role="form" class="php-email-form">
            <div class="row">
              <div class="col-md-6 form-group">
                <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required>
              </div>
              <div class="col-md-6 form-group mt-3 mt-md-0">
                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required>
              </div>
            </div>
            <div class="form-group mt-3">
              <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required>
            </div>
            <div class="form-group mt-3">
              <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
            </div>
            <div class="my-3">
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div class="text-center"><button type="submit">Send Message</button></div>
          </form>
  
        </div>
      </section><!-- End Contact Section -->
    
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script type="module" src="contact.js"></script> 


</body>
</html>`
        

    }

}
customElements.define("contact-screen", ContactScreen);