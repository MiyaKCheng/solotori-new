import React, { useRef, useState } from 'react';
import CustomButton from '../../shared/button';
import step1 from '../../../assets/img/step01.png';
import step2 from '../../../assets/img/step02.png';
import step3 from '../../../assets/img/step03.png';
import CopyClip from '../../shared/CopyClip.jsx';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Steps.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Swipe() {
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
          padding: '50px 0',

          '--swiper-pagination-color': '#D13200',
          '--swiper-pagination-bullet-inactive-color': '#FFF',
          overflow: 'visible',

        }}
      >
        {/* 1 */}
        <SwiperSlide className="flex flex-col">
          <h3 className='stepshadow Syncopate w-[231px] h-[20px] text-center text-white text-5xl font-bold leading-[0px] '>STEP1</h3>
          <h4 className='mt-[20px] w-[170px] h-[63px] text-center text-white text-xl font-bold leading-[30px] tracking-wide'>公式アカウントをフォロー</h4>

          <img
            src={step1}
            alt="Step 1"
            style={{ width: '144px', height: '240px', objectFit: 'cover' }}
            className='my-4 '
          />
          <h5 className='drop-shadow Syncopate w-[260px] h-[140px] text-center text-white text-base font-bold leading-[35px] tracking-wide'>SOLOTORIのInstagramの公式アカウント(@solotori_office)をフォローしてください!</h5>
          <CustomButton className="shadow-md" text={'公式アカウント'} style={{ fontWeight: '900', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)' }} link="https://www.instagram.com/solotori_official/" />
          <span className='h-[60px]'></span>
        </SwiperSlide>
        {/* 2 */}
        <SwiperSlide className="flex flex-col">
          <h3 className='stepshadow Syncopate w-[231px] h-[20px] text-center text-white text-5xl font-bold leading-[0px] '>STEP2</h3>
          <h4 className='mt-[20px] w-[170px] h-[63px] text-center text-white text-xl font-bold leading-[30px] tracking-wide'>旅行先で撮影!</h4>

          <img
            src={step2}
            alt="Step 2"
            style={{ width: '144px', height: '240px', objectFit: 'cover' }}
            className='my-4'
          />
          <h5 className='drop-shadow w-[260px] h-[140px] text-center text-white text-base font-bold leading-[35px] tracking-wide'>1人旅をして旅行先であなたが素敵だと感じた風景をあなたの世界観で撮影してください！</h5>

          <span className='h-[109.19px]'></span>
        </SwiperSlide>
        {/* 3 */}
        <SwiperSlide className="flex flex-col">
          <h3 className='stepshadow Syncopate w-[231px] h-[20px] text-center text-white text-5xl font-bold leading-[0px] '>STEP3</h3>
          <h4 className='w-[190px] mt-[20px] h-[63px] text-center text-white text-xl font-bold leading-[30px] tracking-wide'># (ハッシュタグ) をつけて投稿！</h4>

          <img
            src={step3}
            alt="Step 3"
            style={{ width: '144px', height: '240px', objectFit: 'cover' }}
            className='my-4'
          />
          <div className="left-[20px] top-[360px] absolute justify-start items-start gap-1 inline-flex">
            <div className="px-1.5 bg-white bg-opacity-10 rounded-[3px] border border-white justify-center items-center flex">
              <div className="text-center  text-xs font-bold  leading-[20px]">#SOLOTORI</div>
            </div>
            <div className="px-1.5 bg-white bg-opacity-10 rounded-[3px] border border-white justify-center items-center flex">
              <div className="text-center  text-xs font-bold  leading-[20px]">#一人旅募集中</div>
            </div>
            <div className="px-1.5 bg-white bg-opacity-10 rounded-[3px] border border-white justify-center items-center flex">
              <div className="text-center  text-xs font-bold leading-[20px]">#世界観同化</div>
            </div>
          </div>
          <div className="px-1.5 left-[20px] top-[392px] absolute bg-white bg-opacity-10 rounded-[3px] border border-white justify-center items-center inline-flex">
            <div className=" text-center text-xs font-bold leading-[20px]">#NewNormal</div>
          </div>
          <h5 className='-mt-[12px] drop-shadow w-[268px] h-[140px] text-center text-white text-base font-bold leading-[35px] tracking-wide'><br />　　　　　　全てのハッシュタグをつけて、撮影した素敵な世界観の写真をインスタに投稿してください!</h5>
          <CopyClip />
          <span className='h-[60px]'></span>
        </SwiperSlide>
      </Swiper >
    </>
  );
}
