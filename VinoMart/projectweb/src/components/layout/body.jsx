import React, { useEffect } from "react";
import VinskiKutak from "../vineCorner/vinskiKutak";
import NaseUsluge from "../vineCorner/naseUsluge";

const Body = () => {
  useEffect(() => {
    const handleScroll = () => {
      const partner = document.querySelector(".partner");
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        partner.classList.add("scrolled");
      } else {
        partner.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <body>
      <div className="partner grid">
        <div className="partnerTxt">
          <h2 className="h2">Vaš partner za HoReCa</h2>
          <p className="txt">
            Tvrtka smo koja pruža usluge promocije i prodaje hrvatskih vina,
            domaćih i stranih pjenušaca te ostalih domaćih i stranih alkoholnih
            pića. Profesionalna smo podrška u odabiru vina za vinske karte koje
            najbolje odgovaraju potrebama i željama naručitelja te karakteru
            krajnjeg kupca.
          </p>
        </div>
      </div>
      <div className="grid body numbers">
        <div className="opis1">
          <h2 className="title-broj">+3400</h2>
          <h4 className="title2">PREPOZNATIH ETIKETA</h4>
          <p className="txt">
            Na našem skladištu imamo preko 3400 vrhunskih vina i destilata.
          </p>
        </div>
        <div className="opis2">
          <h2 className="title-broj">+400</h2>
          <h4 className="title2">UGOVORENIH PARTNERA</h4>
          <p className="txt">
            Svakim danom rastemo i našim partnerima omogućavamo uspješno
            poslovanje.
          </p>
        </div>
        <div className="opis3">
          <h2 className="title-broj">24h</h2>
          <h4 className="title2">POTREBNO ZA DOSTAVU</h4>
          <p className="txt">
            Unutar 24 sata vršimo dostavu na području cijele Hrvatske.
          </p>
        </div>
        <h2 className="title-nu">Naše usluge</h2>
        <div className="slideshow">
          <NaseUsluge />
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
          <hr className="line"></hr>
        </div>
      </div>
      <VinskiKutak />
      <div className="grid section2">
        <img
          src="https://vinumart.hr/hr/assets/img/champagne.jpg"
          alt="slika"
          className="dog"
        ></img>
        <div className="section-dog">
          <h4 className="sastanak">Dogovori sastanak</h4>
          <p className="txt">
            Dogovorite prezentaciju i degustaciju naše ponude.
          </p>
          <a href="#">SAZNAJ VIŠE</a>
        </div>
      </div>
    </body>
  );
};

export default Body;
