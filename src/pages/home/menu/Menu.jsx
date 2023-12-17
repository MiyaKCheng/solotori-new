import React, { useState } from "react";
import "./Menu.css";

function Menu() {
  // track the menu is open or not
  const [isMenuOpen, setMenuOpen] = useState(false);

  // toggle the menu state
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className="menu-container">
      {/* Hamburger menu */}
      <div className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="menu-icon" onClick={toggleMenu}>
          {/* bars of the icon */}
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>

      {/* items container */}
      <div className={`menu-items-container ${isMenuOpen ? "open" : ""}`}>
        <div className="menu-items text-[32px]">
          <div>ひとり旅の魅力</div>
          <div>SOLOTORIとは？</div>
          <div>クリエイターの良さ</div>
          <div>応募方法</div>
          <div>みんなの旅</div>
          <div>応募要項</div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
