import React, { useEffect } from "react";
import Footer from "../../components/layout/footer";
import VinskiKutak from "../../components/vineCorner/vinskiKutak";
import logo from "../../pictures/logo-footer.svg";
import "../../styles/jacht.css";

function VinskaKarta() {
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
    <div className="header">
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
      <div className="grid">
        <img
          src="https://vinumart.hr/hr/assets/img/distribucija-vina.jpg"
          className="jacht"
          alt="jahta"
        ></img>
        <div className="bg">
          <div className="row">
            <p className="subtitle-sm">THE EXPERIENCE</p>
          </div>
          <div className="row2">
            <h1 className="naslov">Usluge<br></br> prezentacije i <br></br>degustacije</h1>
          </div>
        </div>
      </div>
      <div className="bd">
        <p className="tekst">
          Sretni i zadovoljni kupci od samog su početka u fokusu našeg
          poslovanja. Upravo su nam oni najveća motivacija u definiranju naših
          usluga i kreiranju sada već bogate ponude vina i alkoholnih pića. U
          velikoj većini riječ je barovima, restoranima i hotelima ali i svim
          onim koji traže vrhunsku uslugu, posebna vina, prihvatljive cijene s
          dostavom na kućna vrata.
        </p>
        <hr></hr>
      </div>
      <VinskiKutak />
      <Footer />
    </div>
  );
}

export default VinskaKarta;
