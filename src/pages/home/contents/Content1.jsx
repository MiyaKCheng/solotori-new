import { useState } from "react";
import cloud001 from "../../../assets/img/cloud001.png";
import "./Content.css";
import Title from "../../shared/title";

function Content1() {
  const [count, setCount] = useState(0);

  return (
    <div className="relative h-[660px] my-[80px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${cloud001})` }}
      />
      <div className="pt-[90px]">
        <Title text="ひとり旅の魅力" />
        <div className="content absolute pt-[200px] inset-0 flex justify-center">
          <p>
            ひとり旅では、
          </p>
          <p>
            「 温泉やリゾート、エステやスパでとことんリラックスする」
          </p>
          <p>
            「話題の美味しい食べ物やスイーツを食べ尽くすグルメな旅にする」
          </p>
          <p>
            「ショッピング中心に旅を楽しむ」
          </p>
          <p>
            などテーマを決めて、他人を気にせず自由気ままに自分のやりたいことを存分に楽しむことがポイントです。
          </p>
        </div>
      </div>
    </div>
  );
}

export default Content1;
