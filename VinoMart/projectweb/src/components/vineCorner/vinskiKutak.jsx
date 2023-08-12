import React, { useState } from "react";

// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css";

import "swiper/css/navigation";

// import required modules

import { Navigation } from "swiper/modules";

export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="body">
    <div className="section">
      <div className="section grid">
        <h1 className="title">Vinski kutak</h1>

        <p className="tekst">
          Svaka etiketa ima svoju povijest, sve boce imaju svoju priču ali
          vrhunka staklena čaša je ispisuje.
        </p>

        <hr className="line2"></hr>

        <a href="#" className="tekst">
          Saznajte više
        </a>
      </div>

      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={false}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation]}
        className="swiper"
      >
        <SwiperSlide>
          <div className="swiper-slide">
            <a href="https://lumaekskluziv.hr/product-category/pribor/case/">
              <img
                src="https://vinumart.hr/hr/assets/img/kutak/italesse.jpg"
                alt="slika vina"
                className="slika"
              />
            </a>
           
          </div>
          <div className="vineText">
            <h2 className="op">Taste like master</h2>
            <h4 className="subtitle-sm">italesse staklene čaše</h4>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="swiper-slide">
            <a href="https://lumaekskluziv.hr/product-category/pribor/case/">
          <img
            src="https://vinumart.hr/hr/assets/img/kutak/vacuin.webp"
            alt="slika vina"
            className="slika"
          />
          </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="swiper-slide">
            <a href="https://lumaekskluziv.hr/product-category/pribor/case/">
          <img
            src="https://vinumart.hr/hr/assets/img/kutak/zafferano.jpg"
            alt="slika vina"
            className="slika"
          />
          </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="swiper-slide">
            <a href="https://lumaekskluziv.hr/product-category/pribor/case/">
          <img
            src="https://vinumart.hr/hr/assets/img/kutak/italesse.jpg"
            alt="slika vina"
            className="slika"
          />
          </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  );
}
