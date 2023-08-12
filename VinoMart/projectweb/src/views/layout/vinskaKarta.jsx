import React, { useEffect } from "react";
import Footer from "../../components/layout/footer";
import VinskiKutak from "../../components/vineCorner/vinskiKutak";
import Logo from "../../components/navbar/logo";
import Galerija from "../../components/galery/galerijaSlika";

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
      <div className="grid body">
        <img
          src="https://vinumart.hr/hr/assets/img/vina-c%CC%8Cas%CC%8Ce.jpg"
          className="imageHeader"
          alt="jahta"
        ></img>
        <Logo />
        <div className="titleVinum">
          <div className="row">
            <p className="subtitle-sm">THE EXPERIENCE</p>
          </div>
          <div className="row">
            <h1 className="headerTitle">
              Usluga<br></br> savjetovanja u<br></br> izradi vaše<br></br>
              vinske karte
            </h1>
          </div>
        </div>
      </div>
      <div className="grid">
        <div className="under-img-txt under-txt">
          <p className="tekst2">
            Osmišljavanje vinske karte ili izmjena već postojeće pravi su izazov
            ako niste dobar poznavalac vina i kulture njegovog konzumiranja.
            Vinska karta vrlo je bitan dio komunikacije između restorana i
            gosta, pa se njezino kvalitetno kreiranje po važnosti stavlja odmah
            iza kreiranja samog jelovnika. Pravilno osmišljena vinska karta,
            koja u konačnici određuje renome ugostiteljskog objekta svakako,
            zahtjeva detaljnu analizu postojećeg stanja i okruženja u kojem Vaš
            objekt egzistira.<br></br>
            <br></br>Iako se većina ugostitelja sama upušta u odabir vina i
            njihovo selektiranje, vjerujemo da nije loša ideja poslušati i
            savjete osoba koje se time profesionalno bave. <br></br>
            <br></br>Naše bogato dosadašnje iskustvo i dobro poznavanje vinske
            scene garantirano će pomoći da izbjegnete naknadno preslagivanje
            vaše vinska karte i nepotrebno trošenje Vašeg dragocjenog vremena.
          </p>
          <hr className="line"></hr>
        </div>
      </div>
      <Galerija />
      <VinskiKutak />
      <Footer />
    </div>
  );
}

export default VinskaKarta;
