import React, { useEffect } from "react";
import logo from "../../pictures/logo-footer.svg";
import { useNavigate } from "react-router-dom";
import faceLogo from "../../pictures/face.png";
import instaLogo from "../../pictures/insta.png";

function NavBar() {
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
  const navigate = useNavigate();

  function handleLinkClick(path) {
    // Use the navigate function to navigate to the specified path
    navigate(path);
  }

  function toggleCloseText() {
    const closeSpan = document.querySelector('.meni .close-spanShow');
    closeSpan.classList.toggle('visible');
  }
  
  return (
    <div className="body nav-bg">
      
      <div className="grid">
      <div className="navLogo margin-logo">
        <a onClick={() => handleLinkClick("/")}>
          <img src={logo} alt="logo" className="logo " />
        </a>
        <a href="" title="Menu">
            <div className="meni" onClick={toggleCloseText}>
              <span className="close-spanShow" onClick={() => handleLinkClick("/")}>CLOSE</span>
            </div>
          </a>
      </div>
        <ul className="navLista">
          <li>
            <a onClick={() => handleLinkClick("/about")} className="navLinks">
              O NAMA
            </a>
          </li>
          <li>
            <a onClick={() => handleLinkClick("/jacht")} className="navLinks">
              OPSKRBA JAHTI
            </a>
          </li>
          <li>
            <a
              onClick={() => handleLinkClick("/vineCard")}
              className="navLinks"
            >
              IZRADA VINSKE KARTE
            </a>
          </li>
          <li>
            <a
              onClick={() => handleLinkClick("/distribution")}
              className="navLinks"
            >
              DISTRIBUCIJA PIĆA
            </a>
          </li>
          <li>
            <a onClick={() => handleLinkClick("/contact")} className="navLinks">
              KONTAKT
            </a>
          </li>
        </ul>
        <div className="grid">
          <ul className="navLista2">
            <li>
              <a href="https://lumaekskluziv.hr/" className="navLinks2">
                NAŠ WEBSHOP
              </a>
            </li>
            <li>
              <a
                onClick={() => handleLinkClick("/contact")}
                className="navLinks2"
              >
                KONTAKT
              </a>
            </li>
            <hr className="navLine"></hr>
          </ul>
          <ul className="navLista3">
            <li>
              <a href="#" className="navLinks2">
                HRV
              </a>
            </li>
            <li>
              <a href="#" className="navLinks2">
                ENG
              </a>
            </li>
          </ul>

          <div className="grid">
            <div className="navSocial">
              <a href="https://www.facebook.com">
                <img src={faceLogo} alt="facebook" className="faceLogo"></img>
              </a>
              <a href="https://www.instagram.com/">
                <img src={instaLogo} alt="instagram" className="faceLogo"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
