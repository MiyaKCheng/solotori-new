// 'use client'
import React from "react";
import Spin from "./Spin.jsx";
import SubSwipe from "./SubSwipe.jsx";

import './Sub.css';
import SubBg from "../../../assets/img/sub-bg.png"

function Sub() {

  return (
    <section className="relative my-[50px] py-[120px]">
      <h2 className="text-center absolute top-[350px] mx-10 mt-32  z-[10]  text-[64px] font-bold custom-text-shadow ">一人旅をしよう</h2>
      <div className="relative place-items-center">
        <SubSwipe />
        <Spin />
      </div>
      <img
        src={SubBg}
        alt="Under Water画像"
        className="sub-bg absolute top-[15px] w-100% h-[1000px]  mix-blend-hard-light z-[-15] opacity-30"
      />
    </section>
  );
}

export default Sub; 