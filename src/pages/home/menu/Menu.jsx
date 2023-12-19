import React, { useState } from "react";
import "./Menu.css";
import Shell from "../../shared/shell";

function Menu() {
  // track the menu is open or not
  const [isMenuOpen, setMenuOpen] = useState(false);

  // close the menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // toggle the menu state
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div clas="menu-container">
      {/* Hamburger menu */}
      <div className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="menu-icon" onClick={toggleMenu}>
          {/* bars of the icon */}
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>

      {/* list */}
      <div className={`menu-items-container ${isMenuOpen ? "open" : ""}`}>
        <div className="menu-items">
          <div className="flex items-center gap-2" onClick={closeMenu}>
            <Shell />
            <a href="/">Top</a>
          </div>
          <div className="flex items-center gap-2" onClick={closeMenu}>
            <Shell />
            <a href="../#content1">ひとり旅の魅力</a>
          </div>
          <div className="flex items-center gap-2" onClick={closeMenu}>
            <Shell />
            <a href="#content2">SOLOTORIとは？</a>
          </div>
          <div className="flex items-center gap-2" onClick={closeMenu}>
            <Shell />
            <a href="#content3">クリエイターの良さ</a>
          </div>
          <div className="flex items-center gap-2" onClick={closeMenu}>
            <Shell />
            <a href="#steps">応募方法</a>
          </div>
          <div className="flex items-center gap-2" onClick={closeMenu}>
            <Shell />
            <a href="#ins">みんなの旅</a>
          </div>
          <div className="flex items-center gap-2" onClick={closeMenu}>
            <Shell />
            <a href="#info">応募要項</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
