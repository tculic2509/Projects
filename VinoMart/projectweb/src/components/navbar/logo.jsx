import React, { useEffect } from "react";
import logo from "../../pictures/logo-footer.svg";
import { useNavigate } from "react-router-dom";

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
  function toggleOpenText() {
    const meniDiv = document.querySelector(".meni");

    meniDiv.classList.toggle("hovered");
  }
  const navigate = useNavigate();

  function handleLinkClick(path) {
    // Use the navigate function to navigate to the specified path
    navigate(path);
  }
  return (
    <header>
      <div className="grid slikaVino">
        <div className="navLogo">
        <a onClick={() => handleLinkClick("/")}>
          <img src={logo} alt="logo" className="logo" />
        </a>
        <a href="" title="Menu">
            <div className="meni" onClick={toggleOpenText}>
              <span
                className="open-span"
                onClick={() => handleLinkClick("/navbar")}
              >
                OPEN
              </span>
              <span className="menu-span">MENU</span>
            </div>
          </a>
      </div>
      </div>
    </header>
  );
};

export default Header;
