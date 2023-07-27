import React, { useEffect } from "react";
import "../../styles/footer.css";
import "../../styles/pravilaUvjeti.css";
import Footer from "../../components/layout/footer";
import logo from "../../pictures/logo-footer.svg";

const Contact = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navLogo = document.querySelector(".navLogo");
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        navLogo.classList.add("scrolled");
      } else {
        navLogo.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="grid">
      <div className="navLogo">
        <a href="#">
          <img src={logo} alt="logo" className="logo" />
        </a>
        <a href="#" title="Menu">
          <div className="meni">
            <span>MENU</span>
          </div>
        </a>
      </div>
      <div className="bd">
        <div className="contact-bg background">
        <h1>Impresum</h1>
          <div className="imp">
            <div className="podaci pad">
              
              <h4 className="op">Općenito</h4>
              <p>VINUM ART 2018 d.o.o.</p>
              <br></br>
              <p>OIB VAT: 32421772956</p>
              <p>VAT: HR32421772956</p>
              <p>Sjedište tvrtke: Bijankinijeva 2, 21000 Split, Hrvatska, EU</p>
              <p>IBAN: HR0724840081135070555, Raiffeisenbank Austria d.d</p>
              <p>SWIFT: RZBHHR2Xk</p>
            </div>
            <div className="podaci pad">
              <h4 className="op">Općenito</h4>
              <p>Email: info@vinumart.hr</p>
              <br></br>
              <p>Odgovorne osobe: Daniel Bilobrk</p>
              <p>Osnovna djelatnost: Nespecijalizirana trgovina na veliko</p>
              <p>Pravni oblik: Društvo sa ograničenom odgovornošću</p>
              <p>Temeljni kapital društva: 20000 HRK, uplaćen u cijelosti</p>
              <p>
                Matični broj poslovnog subjekta: 060384192, Trgovački sud u
                Splitu
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Contact;
