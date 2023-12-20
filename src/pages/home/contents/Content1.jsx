
import "./Content.css";
import cloud001 from '../.././../assets/img/cloud001.png';
import Title from "../../shared/title";

function Content1() {
  return (
    <div id="content1" className="relative h-[800px] w-full my-[80px]">
      <img src={cloud001} alt="a cloud background picture" className="max-w-fit z-[-2] absolute right-[-50%]" />
      <div className="pt-[150px]">
        <Title text="ひとり旅の魅力" />
        <div className="content absolute pt-[180px] inset-0 flex justify-center">
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
