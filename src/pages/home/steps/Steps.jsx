import React, { useRef, useState } from 'react';
import Swipe from './Swipe.jsx';
import Title from '../../shared/title.jsx';
import './Steps.css';

export default function Steps() {
  return (
    <div id="steps">
      <Title text="応募方法" />
      <span className="block h-[38px]"></span>
      <Swipe />

    </div>
  );
}