import React from "react";
// import "./Content.css";
import cloud003 from "../../../assets/img/cloud001.png";
import Shell from "../../shared/shell.jsx";
import Title from "../../shared/title.jsx";


function Content3() {
  const ShellListItem = ({ children }) => (
    <li className="list-item">
      <Shell />
      <span>{children}</span>
    </li>
  );

  return (
    <div className="relative h-[800px] my-[80px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${cloud003})` }}
      />
      <div className="pt-[90px]">
        <Title text={<span>SOLOTORIの<br />クリエイターの良さ</span>} marginLeft="-25px" marginLeftTittle="30px" />
        <div className="content absolute inset-0 flex justify-center pt-[80px]">
          <p>
            SOLOTORIのクリエイターは一人旅であった、あなたの思いや素敵なことを投稿しているだよ
          </p>
          <ol>
            <ShellListItem>旅をしながら、お金を稼げる</ShellListItem>
            <ShellListItem>コミュニケーションスキルが身に付く</ShellListItem>
            <ShellListItem>経験を共有することで共感をもらえる</ShellListItem>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Content3;
