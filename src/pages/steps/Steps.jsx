import React, { useRef, useState } from 'react';
import Swipe from './Swipe';
import Title from '../shared/title';

export default function Steps() {
  return (
    <div id="steps">
      <Title text="応募方法" />
      <span className="block h-[38px]"></span>
      <Swipe />

    </div>
  );
}