import React, { useState } from "react";

import "../../styles/vineCorner.css";

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
        <h1 className="title">Vinski kutak</h1>

        <p className="tekst">
          Svaka etiketa ima svoju povijest, sve boce imaju svoju priču ali
          vrhunka staklena čaša je ispisuje.
        </p>

        <hr className="line"></hr>

        <a href="#" className="tekst">
          Saznajte više
        </a>

        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={false}
          spaceBetween={0}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://vinumart.hr/hr/assets/img/kutak/italesse.jpg"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="https://vinumart.hr/hr/assets/img/kutak/vacuin.webp"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="https://vinumart.hr/hr/assets/img/kutak/italesse.jpg"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="https://vinumart.hr/hr/assets/img/kutak/zafferano.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
