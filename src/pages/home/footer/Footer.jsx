import { useState } from "react";
import PopOutLine from "../../shared/PopOutLine";
import UnderWater from "../../../assets/img/under_water.png";

function Footer() {
  const footerStyle = {
    // backgroundColor: 'rgba(255,255,255,0.25)',
    backgroundImage: `url(${UnderWater})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '600px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
    alignItems: 'center',
    mixBlendMode: 'hard-light',
  };

  return (
    <footer className="pb-4" style={footerStyle}>
      <div className="text-xl font-bold text-center relative z-10">
        <ul className="leading-[58px] flex-col justify-center">
          <li className="text-center flex items-center justify-center gap-2">
            <a
              target="_blank"
              href="https://solotori.jp/">SOLOTORIラボ</a>
            <PopOutLine style={{ fill: '#D13200' }} />
          </li>
          <li className="text-center flex items-center justify-center gap-2">
            <a target="_blank"
              href="https://magazine.solotori.jp/">SOLOTORI マガジン</a>
            <PopOutLine style={{ fill: '#D13200' }} />
          </li>
          <li className="text-center flex items-center justify-center">
            <a
              href="https://www.instagram.com/solotori_official/">SOLOTORI Instagram</a>
            <PopOutLine style={{ fill: '#D13200' }} />
          </li>
          <li className="text-center">
            <a href="contact">Contact us</a>
          </li>
        </ul>
        <p className="font-normal mt-20 leading-[38px]">
          <small>Copyright &copy; ソロトリ All Rights Reserved.</small>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
