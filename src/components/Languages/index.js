import React from "react";
import "./Languages.css";
import logoReact from "./logoReact.png";
import logoHTML from "./logoHTML.png";
import logoCSS from "./logoCSS.png";
import logoJS from "./logoJS.png";
import logoSwiper from './logoSwiper.svg'
import logoBootstrap from './logoBootstrap.png'

import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/bundle';

export default function Languages() {
  function screenSize() {
    if(window.screen.width >= 1201) {
      return 4;
    } else if(window.screen.width >= 1025) {
      return 4;
    } else if(window.screen.width >= 769) {
      return 3;
    } else {
      return 1;
    }
  }
  return (
    <section className="languages">
      <div className="container">
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={screenSize()}
          navigation
          autoplay={{ delay: 2000 }}
          pagination={{ clickable: true }}
        >
          <SwiperSlide><img alt="Logo do react" src={logoReact}></img></SwiperSlide>
          <SwiperSlide><img alt="Logo do HTML" src={logoHTML}></img></SwiperSlide>
          <SwiperSlide><img alt="Logo do CSS" src={logoCSS}></img></SwiperSlide>
          <SwiperSlide><img alt="Logo do Java Script" src={logoJS}></img></SwiperSlide>
          <SwiperSlide><img alt="Logo do Swiper" src={logoSwiper}></img></SwiperSlide>
          <SwiperSlide><img alt="Logo do Bootstrap" src={logoBootstrap}></img></SwiperSlide>
          ...
        </Swiper>
      </div>
    </section>
  );
}
