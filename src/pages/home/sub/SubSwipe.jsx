import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

import './Sub.css';
import sub01 from "../../../assets/img/sub01.png";
import sub02 from "../../../assets/img/sub02.png";

// import required modules
import { EffectFade, Autoplay } from 'swiper/modules';

export default function SubSwipe() {
    return (
        <>
            <Swiper
                className='relative'
                spaceBetween={0}
                effect={'fade'}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Autoplay]}

                data-swiper-parallax-duration="3000"
            >
                <span className="absolute border-white border-[1px] box-border top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] rounded-full w-[95%] h-[97.5%] z-[1]"></span>
                <SwiperSlide>
                    <img src={sub01} alt="Sub Image 01" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sub02} alt="Sub Image 02" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
