import React, { useState, useEffect } from "react";
import "./Menu.css";
import Shell from "../../shared/shell";

function Menu() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");

  const closeMenu = () => {
    setMenuOpen(false);
  };
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    // Scrolling up and down
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      prevScrollPos = currentScrollPos;
    };

    // window.addEventListener("scroll", handleScroll);
    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, []);

  return (
    <div className={`menu-container ${scrollDirection === "up" ? "visible" : "hidden"}`}>
      <div className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="menu-icon" onClick={toggleMenu}>
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
