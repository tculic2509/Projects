import React, { useEffect } from "react";
import vino from "../../pictures/wine-and-friends.jpg";
import logo from "../../pictures/logo-footer.svg";
import "../../styles/header.css";

const Header = () => {
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
    <header className="header grid">
      <div className="navLogo">
        <a href="#">
          <img src={logo} alt="logo" className="logo"></img>
        </a>
        <a href="#" title="Menu">
          <div className="meni">
            <span>::before MENU ::after</span>
          </div>
        </a>
      </div>
      <div className="container grid">
        <img src={vino} alt="slika vina" className="slikaVino"></img>
        <div className="back">
          <div className="row">
            <p className="subtitle-sm">VINUM ART 2018 - VAŠ HORECA PARTNER</p>
          </div>
          <div className="row">
            <h1>
              Distribucija vina i <br></br> alkoholnih pića,<br></br> Opskrba
              jahti
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
