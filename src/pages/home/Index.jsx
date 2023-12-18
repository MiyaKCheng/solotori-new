import React, { useState } from "react";

// Import other components
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
import Bg from "./kv/Bg.jsx";

function Index() {
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <>
      <Top />

      <div className="relative">
        {/* Content layers */}
        <Kv />
        <Sub />
        <Bg style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: '0' }} />
        <Content1 />
        <Content2 />
        <Content3 />
        <Steps />
        <Ins />
        <Info />
        <Footer />

      </div>

      {displayMenu ? <Menu /> : null}
    </>
  );
}

export default Index;
