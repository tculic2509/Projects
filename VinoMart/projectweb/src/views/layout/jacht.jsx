import React, { useEffect } from "react";
import Footer from "../../components/layout/footer";
import VinskiKutak from "../../components/vineCorner/vinskiKutak";
import logo from "../../pictures/logo-footer.svg";
import "../../styles/jacht.css";

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
      <div className="container grid flex">
        <img
          src="https://vinumart.hr/hr/assets/img/jahte.jpg"
          className="jacht"
          alt="jahta"
        ></img>
        <h1>Opskrba jahti</h1>
      </div>
      <div className="bd">
        <p className="tekst">
          Nakon zavidnog iskustva u opskrbi velikog broja ugostiteljskih
          objekata na jadranskoj obali te edukacije njihovog kadra svoje smo
          široko znanje i prvoklasnu uslugu odlučili ponuditi i specifičnoj
          grani turizma- onoj Nautičkoj<br></br><br></br>
          Posljednjih nekoliko godina nautički turizam poprima sve veću pažnju
          javnosti i turista i svakako je jedan je od perspektivnijih oblika
          hrvatskog turizma. Širenjem našeg asortimana kao i povećani obujam
          poslovanja potpuno je prirodno usmjerio naš fokus i na taj segment
          poslovanja.<br></br><br></br>
          Sa sjedištem u Splitu, svojom pouzdanom kopnenom posadom želja nam je
          osigurati da svaki aspekt boravka gosta na brodu bude što je moguće
          lakši, radosniji i udobniji.
        </p>
        <hr></hr>
      </div>
      <VinskiKutak />
      <Footer />
    </div>
  );
}

export default Jacht;
