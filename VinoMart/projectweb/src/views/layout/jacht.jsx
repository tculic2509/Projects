import React, { useEffect } from "react";
import Footer from "../../components/layout/footer";
import VinskiKutak from "../../components/vineCorner/vinskiKutak";
import jahta from "../../pictures/jahte.jpg";
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
  return (
    <body>
      <div className="grid">
        <img src={jahta} alt="jahta" className="jahta imageHeader"></img>
        <Logo />

        <div className="titleVinum row">
          <h1 className="headerTitle">Opskrba jahti</h1>
        </div>
      </div>
      <div className="grid">
        <div className="under-img-txt under-txt">
          <p className="tekst2">
            Nakon zavidnog iskustva u opskrbi velikog broja ugostiteljskih
            objekata na jadranskoj obali te edukacije njihovog kadra svoje smo
            široko znanje i prvoklasnu uslugu odlučili ponuditi i specifičnoj
            grani turizma- onoj Nautičkoj<br></br>
            <br></br>
            Posljednjih nekoliko godina nautički turizam poprima sve veću pažnju
            javnosti i turista i svakako je jedan je od perspektivnijih oblika
            hrvatskog turizma. Širenjem našeg asortimana kao i povećani obujam
            poslovanja potpuno je prirodno usmjerio naš fokus i na taj segment
            poslovanja.<br></br>
            <br></br>
            Sa sjedištem u Splitu, svojom pouzdanom kopnenom posadom želja nam
            je osigurati da svaki aspekt boravka gosta na brodu bude što je
            moguće lakši, radosniji i udobniji.
          </p>
          <hr className="line"></hr>
        </div>
      </div>

      <Galerija />
      <VinskiKutak />
      <Footer />
    </body>
  );
}

export default Jacht;
