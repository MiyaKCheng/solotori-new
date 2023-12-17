import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Steps.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Steps() {
  return (
    <>
      <Swiper
        slidesPerView={1.1}
        spaceBetween={19}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={{
          paddingBottom: '50px',
          '--swiper-pagination-color': '#D13200',
          '--swiper-pagination-bullet-inactive-color': '#FFF'
        }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </>
  );
}
