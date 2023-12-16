import React from 'react';
import { useState } from 'react';
import cloud002 from '../../../assets/img/cloud002.png';
import './Content.css';
import Title from '../../shared/title';
import CustomButton from "../../shared/button";

function Content2() {

  return (
    <div className="relative h-[660px] my-[80px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${cloud002})` }}
      />
      <div className="pt-[90px]">
        <Title text="SOLOTORIとは？" marginLeft="-20px" marginLeftTittle="30px" />
        <div className="content absolute inset-0 flex justify-center">
          <p>「ひとり旅をもっと自由に」を目指し、ひとり旅のメディアです。</p>
          <p>今後地域とのマッチングまでサポートするシステムにリニューアル予定。</p>
          <p>2022年経産省始動プログラムに採択。</p>
        </div>
        <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2">
          <CustomButton text="SOLOTORI LAB" link="https://solotori.jp/" />

        </div>
      </div>
    </div >
  );
}

export default Content2;