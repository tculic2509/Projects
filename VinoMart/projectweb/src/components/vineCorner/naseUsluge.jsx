import React, { useState } from "react";

// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css";

import "swiper/css/navigation";

// import required modules

import { Navigation } from "swiper/modules";
import {useNavigate} from "react-router-dom";

export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);

  const navigate = useNavigate();

  function handleLinkClick(path) {
    // Use the navigate function to navigate to the specified path
    navigate(path);
  }

  return (
    <div className="swiperNaseUsluge">
      <Swiper
        onSwiper={setSwiperRef} // https://swiperjs.com/react#installation CTRL+F Controller za 2 pogledat
        slidesPerView={1}
        centeredSlides={false}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-slide">
            <a onClick={()=>handleLinkClick("/distribution")}>
            <img
              src="https://vinumart.hr/hr/assets/img/distribucija-vina.jpg"
              alt=""
              className="slika naseUslugeslika"
            />
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-slide">
            <a onClick={()=>handleLinkClick("/vineCard")}>
            <img
              src="https://vinumart.hr/hr/assets/img/vina-c%CC%8Cas%CC%8Ce.jpg"
              alt=""
              className="slika"
            />
            <h2 className="title-broj">Usluga prezentacije i degustacije</h2>
            <p className="txt">
              Distributeri i zastupnici smo poznatih vinskih brendova uz
              svjetski priznate destilate, te uz naše stručno osoblje vršimo
              uslugu prezentacije i degustacije naše ponude.
            </p>
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-slide">
            <a onClick={()=>handleLinkClick("/jacht")}>
            <img
              src="https://vinumart.hr/hr/assets/img/jahte.jpg"
              alt=""
              className="slika"
            />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            ::before
            <a onClick={()=>handleLinkClick("/distribution")}>
            <img
              src=" https://vinumart.hr/hr/assets/img/edukacija.jpg"
              alt=""
              className="slika"
            />
            </a>
            ::after
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
