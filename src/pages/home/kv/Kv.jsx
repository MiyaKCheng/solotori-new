import React, { useState, useEffect } from "react";
import NewNormal from "./NewNormal.jsx";
// import { BlurBackground } from "./KvImg.jsx";
import './Kv.css';
import kv01 from '../../../assets/img/kv02.png';
import kv02 from '../../../assets/img/kv01.png';
import Arrow from '../../../assets/img/arrow.png';

function Kv() {
  const [visibleImage, setVisibleImage] = useState(kv01);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVisibleImage((prevImage) => (prevImage === kv01 ? kv02 : kv01));
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div id="KvArea" className=" font-extrabold text-white font-sans relative">

        <div className=" relative mt-[0px]">
          <div className="absolute left-[14%]  top-[60px] -rotate-12">
            <p className="absolute z-10 left-[3.7%] top-[300px] text-[#D13200] text-[9px] font-light leading-4"><span className="font-bold" >solotori_official</span>  #世界観同化 #NewNormal</p>
            <p className="absolute z-10 left-[3.7%] top-[312px] text-[#D13200] text-[9px] font-light leading-5"> #solotori #一人旅募集中</p>
            <img
              src={visibleImage}
              alt="Key Visual Image"
              className="w-[73%] border-[3px] border-white kvShadow rounded-[15px] inset-0 transform-gpu backdrop-blur-3xl blur-img bg-[rgba(225,225,225,0.3)]"
            />
          </div>
          <div className="absolute top-0 right-0 mt-[-65px] mr-2 z-[-10] w-20">
            <NewNormal />
          </div>
          <div className="absolute top-[470px] ml-3">
            <div className="box-border w-[100%]">
              <p className="float-left  text-[20px] w-[68%] text-center tracking-widest bg-main-color bg-cover ">
                クリエイター
              </p>
              <p className=" float-left w-[100%] mb-[-15px] mt-[-10px]  ml-[-4px] text-[5.6rem] custom-text-shadow">
                募集中
              </p>
              <div className="w-[69%] text-main-color  text-[10px] flex justify-between items-center tracking-[4px]">
                <p className="float-left">2024年</p>
                <p className="float-right" >SOLOTORI公式</p>
              </div>
              <div className=" w-[100%] flex items-center  mt-[4px] ">
                <p className="float-left w-[35px] h-[35px] font-light text-[8px] bg-main-color bg-cover pl-2 p-1 rounded border border-white tracking-[.25em] text-white">
                  応募<br />期間
                </p>
                <div className="float-right text-main-color text-[2rem] pl-1">
                  1.01
                  <span className="text-xs ml-[1px]">MON</span>
                  <span className="underline decoration-2 text-[15px] ml-1 mr-1">　</span>
                  2.29
                  <span className="text-xs ml-[2px]">THU</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute md:bottom-[17%] lg:bottom-[17%] bottom-[17%]  right-[-20px] flex flex-wrap items-center ">
          <img src={Arrow} alt="Arrow" className="h-[100px]" />
          <p className="rotate-90 text-[#D13200] tracking-[6px] text-[12px] ml-[-30px]">SCROLL</p>
        </div>
      </div>
    </>

  );
}

export default Kv;
