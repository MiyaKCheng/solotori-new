import React from "react";
import Menu from "../menu/Menu.jsx"; // Import Hamburger component
import logo from "../../../assets/logo/logo.png"
function Top() {
  return (
    <>
      <div >
        <div id="top" className="flex justify-between mr-3 ml-4 my-5">
          <a href="/"><img src={logo} width="146px" alt="SOLOTORI スペシャルサイトlogo" /></a>
          <Menu />
        </div>
      </div>
    </>
  );
}

export default Top;

