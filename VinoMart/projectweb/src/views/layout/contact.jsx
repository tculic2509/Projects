import React, { useEffect } from "react";
import Footer from "../../components/layout/footer";
import logo from "../../pictures/logo-footer.svg";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navig = useNavigate();
  function navigate() {
    navig("/");
  }
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
          <div className="imp sadrzaj contact-grid">
            <div className="pad margin-podaci line-height">
              <h4 className="subtitle-sm">Vinumart 2018</h4>
              <h1 className="h1 imp-naslov">Podaci</h1>
              <p>Uvijek stojimo na raspolaganju.</p>
              <br></br>
              <p>Email: info@vinumart.hr</p>
              <p>Tel: +385 99 422 2933</p>
              <p>VINUM ART 2018 d.o.o.</p>
              <p>OIB (VAT): 32421772956</p>
              <p className="max">Sjedište tvrtke: Bijankinijeva 2, 21000 Split, Hrvatska, EU</p>
              <p className="max">
                IBAN: HR0724840081135070555, Raiffeisenbank Austria d.d.
              </p>
            </div>
            <div className="pitanje">
              <h4 className="subtitle-sm">Kontaktirajte nas</h4>
              <h1 className="h1 imp-naslov">Imate pitanje?</h1>
              <p className="p">
                Naš tim stoji Vam na raspolaganju za sve dodatne informacije.
              </p>
              <form onSubmit={navigate}>
                <input
                  type="text"
                  placeholder="Ime i prezime"
                  className="input"
                />
                <input type="email" placeholder="Vaš email" className="input" />
                <p className="p">Poruka</p>
                <textarea
                  placeholder="Unesite Vašu poruku..."
                  className="input"
                  maxLength={500}
                ></textarea>
                <small className="char">500 characters</small>
                <button type="submit" className="submit">
                  SEND
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
