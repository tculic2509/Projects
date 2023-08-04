import React from "react";
import logo from "../../pictures/logo-footer.svg";
import faceLogo from "../../pictures/face.png";
import instaLogo from "../../pictures/insta.png"; 
import {useNavigate} from "react-router-dom";



const Footer = () => {

  const navigate = useNavigate();

  function handleLinkClick(path) {
    // Use the navigate function to navigate to the specified path
    navigate(path);
  }
  return (
    <footer className="footer-grid">
      <div className="footer-logo">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="footer-links">
        <ul className="footer-lista">
          <li>
            <a onClick={()=>handleLinkClick("/jacht")} className="txt">
              OPSKRBA JAHTI
            </a>
          </li>
          <li>
          <a onClick={()=>handleLinkClick("/distribution")} className="txt">
              USLUGA PREZENTACIJA I DEGUSTACIJE
            </a>
          </li>
          <li>
          <a onClick={()=>handleLinkClick("/distribution")} className="txt">
              EDUKACIJE OSOBLJA
            </a>
          </li>
          <li>
          <a onClick={()=>handleLinkClick("/vineCard")} className="txt">
              IZRADA VINSKE KARTE
            </a>
          </li>
          <li>
            <a href="https://lumaekskluziv.hr/" className="txt">WEB SHOP</a>
          </li>
        </ul>
      </div>
      <div className="footer-links2">
        <ul className="footer-lista2">
          <li>
            <a onClick={()=>handleLinkClick("/privatnost")} className="txt">
              Pravila privatnosti |
            </a>
          </li>

          <li>
            <a onClick={()=>handleLinkClick("/uvjeti")} className="txt">
              Uvjeti korištenja |
            </a>
          </li>
          <li>
            <a onClick={()=>handleLinkClick("/impresum")} className="txt">Impresum</a>
          </li>
        </ul>
        <p className="txt">&copy;2023 All rights reserved.</p>
      </div>
      <div className="footer-social footer-grid">
        <a href="https://www.facebook.com"><img src={faceLogo} alt="facebook" className="faceLogo"></img></a>
        <a href="https://www.instagram.com/"><img src={instaLogo} alt="instagram" className="faceLogo"></img></a>
      </div>
      
    </footer>
  );
};

export default Footer;
