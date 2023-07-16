import React from "react";
import "../../styles/footer.css";
import logo from "../../pictures/logo-footer.svg";
import faceLogo from "../../pictures/face.png";
import instaLogo from "../../pictures/insta.png";
const Footer = () => {
  return (
    <footer className="footer-grid">
      <div className="footer-logo">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="links">
        <ul className="lista">
          <li>
            <a href="https://vinumart.hr/hr/opskrba-jahti.html">
              OPSKRBA JAHTI
            </a>
          </li>
          <li>
            <a href="https://vinumart.hr/hr/prezentacija-i-degustacija-vina.html">
              USLUGA PREZENTACIJA I DEGUSTACIJE
            </a>
          </li>
          <li>
            <a href="https://vinumart.hr/hr/edukacija-osoblja.html">
              EDUKACIJE OSOBLJA
            </a>
          </li>
          <li>
            <a href="https://vinumart.hr/hr/izrada-vinske-karte.html">
              IZRADA VINSKE KARTE
            </a>
          </li>
          <li>
            <a href="https://lumaekskluziv.hr/">WEB SHOP</a>
          </li>
        </ul>
      </div>
      <div className="links2">
        <ul className="lista2">
          <li>
            <a href="https://vinumart.hr/hr/pravila-privatnosti.html">
              Pravila privatnosti |
            </a>
          </li>

          <li>
            <a href="https://vinumart.hr/hr/uvjeti-koristenja.html">
              Uvjeti korištenja |
            </a>
          </li>
          <li>
            <a href="https://vinumart.hr/hr/impressum.html">Impresum</a>
          </li>
        </ul>
        <p>&copy;2023 All rights reserved.</p>
      </div>
      <div className="footer-social footer-grid">
        <a href="https://www.facebook.com"><img src={faceLogo} alt="facebook" className="faceLogo"></img></a>
        <a href="https://www.instagram.com/"><img src={instaLogo} alt="instagram" className="faceLogo"></img></a>
      </div>
      
    </footer>
  );
};

export default Footer;
