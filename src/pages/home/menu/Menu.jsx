import React, { useState } from "react";
import "./Menu.css";

function Menu() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {/* Your menu items go here */}
      <div className="menu-items">
        <div>ひとり旅の魅力</div>
        <div>SOLOTORIとは？</div>
        <div>クリエイターの良さ</div>
        <div>応募方法</div>
        <div>みんなの旅</div>
        <div>応募要項</div>
      </div>
    </div>
  );
}

export default Menu;
