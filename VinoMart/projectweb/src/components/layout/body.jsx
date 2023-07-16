import React from "react";
import "../../styles/body.css";
import VinskiKutak from "../vineCorner/vinskiKutak";

const Body = () => {
  return (
    <body>
      <div className="bd grid">
        <div className="opis1">
          <h2 className="title-broj">+3400</h2>
          <h4>PREPOZNATIH ETIKETA</h4>
          <p>Na našem skladištu imamo preko 3400 vrhunskih vina i destilata.</p>
        </div>
        <div className="opis2">
          <h2 className="title-broj">+400</h2>
          <h4>UGOVORENIH PARTNERA</h4>
          <p>
            Svakim danom rastemo i našim partnerima omogućavamo uspješno
            poslovanje.
          </p>
        </div>
        <div className="opis3">
          <h2 className="title-broj">24h</h2>
          <h4>POTREBNO ZA DOSTAVU</h4>
          <p>Unutar 24 sata vršimo dostavu na području cijele Hrvatske.</p>
        </div>
        <h2 className="title-nu">Naše usluge</h2>
        <div className="grid slideshow">
          <div className="">
            <img
              src="https://vinumart.hr/hr/prezentacija-i-degustacija-vina.html"
              alt="slika1"
            ></img>
          </div>

          <div className="">
            <img
              src="https://vinumart.hr/hr/izrada-vinske-karte.html"
              alt="slika2"
            ></img>
          </div>

          <div className="">
            <img
              src="https://vinumart.hr/hr/opskrba-jahti.html"
              alt="slika3"
            ></img>
          </div>
        </div>
        <div className="under-img-txt">
          <h3 className="text">
            Naša misija je povezati ljubitelje vina s najboljim vinskim
            proizvođačima iz cijelog svijeta i pružiti jedinstvena vinska
            iskustva koja će ostaviti nezaboravan trag. Budite dio Wine &
            Friends zajednice i ostvarite najbolja vinska iskustva uz nas.
            Posjetite našu web stranicu i započnite svoju vinsku avanturu još
            danas!
          </h3>
          <hr></hr>
        </div>
      </div>
        <VinskiKutak />
        <div className="grid section2">
          <img src="https://vinumart.hr/hr/assets/img/champagne.jpg"alt="slika" className="dog"></img>
          <div className="section-dog">
          <h4 className="sastanak">Dogovori sastanak</h4>
          <p>Dogovorite prezentaciju i degustaciju naše ponude.</p>
          <a href="#">SAZNAJ VIŠE</a>
          </div>
          
        </div>
    </body>
  );
};

export default Body;
