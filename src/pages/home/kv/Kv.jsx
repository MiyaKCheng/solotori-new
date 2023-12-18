import React from "react";
import NewNormal from "./NewNormal.jsx";
// import { BlurBackground } from "./KvImg.jsx";
import './Kv.css';
import kv01 from '../../../assets/img/kv01.png';

import kvBackground from '../../../assets/img/kvBackground.png';
import new_normal from '../../../assets/img/new_normal.png'
function Kv() {

  return (
    <>
      <div id="KvArea" className=" font-extrabold text-white font-sans relative">

        <div className="mt-[0px]">
          <img
            src={kv01}
            alt="Key Visual Image"
            className="relative block border-[3px] border-white kvshadow rounded-[15px]  -rotate-12 w-60 top-[35px] left-[55px] inset-0 transform-gpu  backdrop-blur-3xl blur-img bg-[rgba(225,225,225,0.3)]" />
          {/* <div className="absolute top-10 right-[-30px]  z-10 blur-sm w-screen h-[300px] backdrop-blur-sm"></div> */}

          <div className="absolute top-0 right-0 mt-[-80px] mr-2 z-[-10] w-20">
            <NewNormal />
          </div>

        </div>

        <div className="absolute bottom-[-50px] pb-[130px] ml-3 h-200">
          <div className="grid grid-cols-10">
            <p className="text-[20px] text-center tracking-widest bg-main-color bg-cover col-start-1 col-end-8 row-span-1 ">
              クリエイター
            </p>
            <p className="mb-[-15px] mt-[-10px] text-[90px] lg:mt-8 custom-text-shadow col-start-1 col-end-10">
              募集中
            </p>
            <div className="text-main-color mb-[-5px] mr-[-5px] text-[10px] flex justify-between items-center col-start-1 col-end-8 row-span-1 tracking-[4px]">
              <p className="col-start-1 col-end-4">2024年</p>
              <p className="col-start-5 col-end-8" >SOLOTORI公式</p>
            </div>
            <div className=" flex col-start-1 col-end-8 items-center">
              <p className="font-light text-[8px] bg-main-color bg-cover pl-1.5 p-1 rounded border border-white tracking-[.25em] text-white">
                応募<br />期間
              </p>
              <div className="text-main-color text-[30px] pl-2">
                1.01
                <span className="text-xs ml-1">MON</span>
                <span className="underline decoration-2 text-2xl ml-1 mr-1">　</span>
                2.29
                <span className="text-xs ml-1">THU</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>

  );
}

export default Kv;
