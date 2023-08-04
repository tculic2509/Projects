import React, { useState } from "react";

// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react';




// Import Swiper styles

import 'swiper/css';

import 'swiper/css/navigation';





// import required modules

import { Navigation } from 'swiper/modules';




export default function App() {

  const [swiperRef, setSwiperRef] = useState(null);




  return (

    <div className="swiperSlider1">

      <Swiper

        onSwiper={setSwiperRef}// https://swiperjs.com/react#installation CTRL+F Controller za 2 pogledat

        slidesPerView={1}

        centeredSlides={false}

        spaceBetween={0}

        navigation={true}

        modules={[Navigation]}

        className="mySwiper"

      >

        <SwiperSlide><img src="https://vinumart.hr/hr/assets/img/distribucija-vina.jpg" alt="" /></SwiperSlide>

        <SwiperSlide><img src="https://vinumart.hr/hr/assets/img/vina-c%CC%8Cas%CC%8Ce.jpg" alt="" /></SwiperSlide>

        <SwiperSlide><img src="https://vinumart.hr/hr/assets/img/distribucija-vina.jpg" alt="" /></SwiperSlide>

      </Swiper>

    </div>




  )

}