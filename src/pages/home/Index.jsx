import React, { useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// In Top.jsx
import Kv from './kv/Kv.jsx';
import KvBg from "./kv/KvBg.jsx";
import Top from './top/Top.jsx';
import Sub from "./sub/sub.jsx";
import Content1 from "./contents/Content1.jsx";
import Content2 from "./contents/Content2.jsx";
import Content3 from "./contents/Content3.jsx";
import Steps from "../steps/Steps.jsx";
import Ins from "./ig/Ins.jsx";
import Info from "./info/Info.jsx";
import Footer from "./footer/Footer.jsx";

function Index() {
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <>
      <Top />
      <div className="relative">
        <Kv />
        <Sub />
        <div className=" h-[500px]"></div>
        <KvBg className="absolute top-0" />
      </div>
      {displayMenu ? <Menu /> : null}
      <Content1 />
      <Content2 />
      <Content3 />
      <Steps />
      <Ins />
      <Info />
      <Footer />
    </>
  );
}

export default Index;
