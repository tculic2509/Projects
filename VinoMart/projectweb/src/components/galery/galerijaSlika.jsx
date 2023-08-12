import React, { useEffect } from "react";

const Galerija = () => {
  useEffect(() => {
    const parallaxContainer = document.querySelector(".parallax-container");

    const handleScroll = () => {
      const scrollOffset = window.scrollY;
      parallaxContainer.style.transform = `translateX(-${
        scrollOffset * 0.5
      }px)`; // Adjust the parallax effect speed
    };

    window.addEventListener("scroll", handleScroll);

    // Append the duplicated set of images to the parallax container
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="grid">
      <h2 className="galeryNaslov">Naša galerija</h2>
      <div className="parallax-container">
        <div className="parallax-image">
          <div className="images">
            <a href="#">
              <img src="https://vinumart.hr/hr/assets/img/galerija/reserva.png"></img>
            </a>
            <a href="#">
              <img src="https://vinumart.hr/hr/assets/img/galerija/vinograd.png"></img>
            </a>
          </div>
          <div className="images up">
            <a href="#">
              <img src="https://vinumart.hr/hr/assets/img/galerija/police.png"></img>
            </a>
            <a href="#">
              <img src="https://vinumart.hr/hr/assets/img/galerija/prijatelji.png"></img>
            </a>
          </div>
          <div className="images">
            <a href="#">
              <img src="https://vinumart.hr/hr/assets/img/galerija/gliser.png"></img>
            </a>
            <a href="#">
              <img src="https://vinumart.hr/hr/assets/img/galerija/grozde.png"></img>
            </a>
          </div>
          <div className="images up">
            <a href="#">
              <img src="https://vinumart.hr/hr/assets/img/galerija/jahta.png"></img>
            </a>
            <a href="#">
              <img src="https://vinumart.hr/hr/assets/img/galerija/polica.png"></img>
            </a>
          </div>
          <div className="images">
            <a href="#">
              <img src="https://vinumart.hr/hr/assets/img/galerija/reserva.png"></img>
            </a>
            <a href="#">
              <img src="https://vinumart.hr/hr/assets/img/galerija/vinograd.png"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galerija;
