import React, { useEffect } from "react";
import Footer from "../../components/layout/footer";
import logo from "../../pictures/logo-footer.svg";
import { useNavigate } from "react-router-dom";

function Uvjeti() {
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
    <div className="background">
        <div className="navLogo margin-logo-contact">
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
        <div className="grid">
          <div className="titleVinum row h1 uvjeti">
            <p className="subtitle-sm">VINUM ART 2018 d.o.o.</p>
            <h1 className="headerTitle">Uvjeti korištenja</h1>
          </div>
        </div>
      <Footer />
    </div>
  );
}

export default Uvjeti;
