import React, { useEffect } from "react";
import Footer from "../../components/layout/footer";
import VinskiKutak from "../../components/vineCorner/vinskiKutak";
import logo from "../../pictures/logo-footer.svg";
import "../../styles/pravilaUvjeti.css";

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
      <div className="background">
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
        <div className="grid">
          <div className="uvjeti">
            <p className="subtitle-sm">VINUM ART 2018 d.o.o.</p>
            <h1>Uvjeti korištenja</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Jacht;
