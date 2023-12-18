import React, { useState } from "react";
import "./Menu.css";
import Shell from "../../shared/shell";

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
        <div className="menu-items">
        <div className="flex items-center gap-2">
            <Shell />
            Top
          </div>
          <div className="flex items-center gap-2">
            <Shell />
            ひとり旅の魅力
          </div>
          <div className="flex items-center gap-2">
            <Shell />
            SOLOTORIとは？
          </div>
          <div className="flex items-center gap-2">
            <Shell />
            クリエイターの良さ
          </div>
          <div className="flex items-center gap-2">
            <Shell />
            応募方法
          </div>
          <div className="flex items-center gap-2">
            <Shell />
            みんなの旅
          </div>
          <div className="flex items-center gap-2">
            <Shell />
            応募要項
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
