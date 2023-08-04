import React, { useEffect, useState }  from "react";
import vino from "../../pictures/wine-and-friends.jpg";
import logo from "../../pictures/logo-footer.svg";

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
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpenText = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
      <div className="grid slikaVino">
        <img src={vino} alt="slika vina" className="imageHeader"></img>
        <div className="navLogo">
          <a href="#">
            <img src={logo} alt="logo" className="logo"></img>
          </a>
          <a href="#" title="Menu">
            <div className="meni" onClick={toggleOpenText}>
              <span>MENU</span>
              {isOpen && <span className="open-text">Open</span>}
            </div>
          </a>
        </div>
        <div className="titleVinum">
          <div className="row">
            <p className="subtitle-sm">VINUM ART 2018 - VAŠ HORECA PARTNER</p>
          </div>
          <div className="row">
            <h1 className="headerTitle">
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
