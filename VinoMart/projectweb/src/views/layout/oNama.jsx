import React, { useEffect } from "react";
import Footer from "../../components/layout/footer";
import VinskiKutak from "../../components/vineCorner/vinskiKutak";
import Logo from "../../components/navbar/logo";
import Galerija from "../../components/galery/galerijaSlika";

function Jacht() {
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

  useEffect(() => {
    const handleScroll = () => {
      const partner = document.querySelector(".partner");
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        partner.classList.add("scrolled");
      } else {
        partner.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <body>
      <div className="grid">
      <img
          src="https://vinumart.hr/hr/assets/img/slika-vinp-c%CC%8Cas%CC%8Ca.jpg"
          alt="jahta"
          className="jahta imageHeader"
        ></img>
        <Logo />
        
        <div className="titleVinum">
          <div className="row">
            <p className="subtitle-sm">VINUMART PART OF WINE AND FRIENDS</p>
          </div>
          <div className="row">
            <h1 className="headerTitle">
              Vaš HoReCa<br></br> partner
            </h1>
          </div>
        </div>
      </div>
      <div className="partner grid">
        <div className="about-partnerTxt">
          <p className="txt3">
            Specijalizirani smo za zastupstvo, veleprodaju i distribuciju vina
            te biranih alkoholnih pića.<br></br>
            <br></br> U našoj ponudi pića pronaći ćete široku paletu hrvatskih
            vina i vina iz uvoza. Naši su kupci u najvećoj mjeri restorani,
            hoteli, barovi ponajviše grada Splita, ali i ostalih dijelova
            Dalmacije.<br></br>
            <br></br> U cilju da se približimo individualnim kupcima sa našom
            ponudom vina nastojimo upoznati i sve one koji u vinima žele uživati
            u svojoj privatnosti.
          </p>
          <hr className="about-line"></hr>
        </div>
      </div>
      <div className="grid about-margin">
        <img
          src="https://vinumart.hr/hr/assets/img/distribucija-vina.jpg"
          alt="slika"
          className="imageHeader"
        ></img>
        <div className="about-us">
          <div className="about-sad">
            <div className="row">
              <p className="subtitle-sm">MALO O NAMA</p>
            </div>
            <div className="row">
              <h2 className="about-naslov">VINUMART</h2>
            </div>

            <p className="txt about-txt">
              Svojim stručnim znanjem nastoji pridonijeti stvaranju i razvoju
              kulture ispijanja vina u Hrvatskoj. S tim ciljem, kupcima nudimo
              niz usluga koje se temelje na višegodišnjem iskustvu i temeljitom
              poznavanju vina i vinske kulture.
            </p>
          </div>
        </div>
      </div>
      <Galerija />
      <VinskiKutak />
      <Footer />
    </body>
  );
}

export default Jacht;
