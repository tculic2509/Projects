import React, { useEffect } from "react";
import Footer from "../../components/layout/footer";
import logo from "../../pictures/logo-footer.svg";
import { useNavigate } from "react-router-dom";

const Impresum = () => {
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
  function toggleOpenText() {
    const meniDiv = document.querySelector('.meni');
    
    meniDiv.classList.toggle('hovered');
  }

  const navigate = useNavigate();
  function handleLinkClick(path) {
    // Use the navigate function to navigate to the specified path
    navigate(path);
  }
  return (
    <div className="bg">
    <div className="impresum-bg">
      <div className="navLogo contact-back max margin-logo-contact">
      <a onClick={() => handleLinkClick("/")}>
            <img src={logo} alt="logo" className="logo" />
          </a>
          <a href="" title="Menu">
            <div className="meni" onClick={toggleOpenText}>
              <span className="open-span" onClick={() => handleLinkClick("/navbar")}>OPEN</span>
              <span className="menu-span">MENU</span>
            </div>
          </a>
      </div>
      <div className="bd grid">
        <div className="sadrzaj">
        <h1 className="h1 imp-naslov">Impresum</h1>
          <div className="imp">
            <div className="pad">
              
              <h4 className="op">Općenito</h4>
              <p>VINUM ART 2018 d.o.o.</p>
              <p>OIB VAT: 32421772956</p>
              <p>VAT: HR32421772956</p>
              <p>Sjedište tvrtke: Bijankinijeva 2, 21000 Split, Hrvatska, EU</p>
              <p>IBAN: HR0724840081135070555, Raiffeisenbank Austria d.d</p>
              <p>SWIFT: RZBHHR2Xk</p>
            </div>
            <div className="pad">
              <h4 className="op">Općenito</h4>
              <p>Email: info@vinumart.hr</p>
              <p>Odgovorne osobe: Daniel Bilobrk</p>
              <p>Osnovna djelatnost: Nespecijalizirana trgovina na veliko</p>
              <p>Pravni oblik: Društvo sa ograničenom odgovornošću</p>
              <p>Temeljni kapital društva: 20000 HRK, uplaćen u cijelosti</p>
              <p>
                Matični broj poslovnog subjekta: 060384192, Trgovački sud u
                Splitu
              </p>
            </div>
          </div>
        </div>
        </div>
        </div>
        <Footer />
      </div>
    
    
  );
};

export default Impresum;
