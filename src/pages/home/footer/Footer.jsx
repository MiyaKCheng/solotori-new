import { useState } from "react";
import PopOutLine from "../../shared/PopOutLine";
import UnderWater from "../../../assets/img/under_water.png";

function Footer() {
  const [count, setCount] = useState(0);

  return (
    <footer className="relative">
      <div className="text-xl font-bold text-center pt-[160px] px-[20px] relative z-10 ">
        <ul className="leading-[58px] flex flex-wrap justify-center">
          <li className="flex items-center gap-2">
            <a href="https://solotori.jp/">SOLOTORIラボ</a>
            <PopOutLine style={{ fill: '#D13200' }} />
          </li>
          <li className="flex items-center gap-2">
            <a href="https://magazine.solotori.jp/">SOLOTORI マガジン</a>
            <PopOutLine style={{ fill: '#D13200' }} />
          </li>
          <li className="flex items-center gap-2">
            <a href="https://www.instagram.com/solotori_official/">SOLOTORI Instagram</a>
            <PopOutLine style={{ fill: '#D13200' }} />
          </li>

          <li>
            <a href="contact">Contact us</a>
          </li>
        </ul>
        <p className="font-normal mt-5 leading-[48px]">
          <small>Copyright &copy; ソロトリ All Rights Reserved.</small>
        </p>
      </div>
      <img
        src={UnderWater}
        alt="Under Water画像"
        className="absolute inset-0 w-full h-full object-cover mix-blend-hard-light z-0 opacity-50"
      />
    </footer>
  );
}

export default Footer;
