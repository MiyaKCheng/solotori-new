import React from "react";
import Menu from "../menu/Menu.jsx"; // Import Hamburger component

function Top() {
  return (
    <>
      <div >
        <div id="top" className="flex justify-between mr-3 ml-4 my-5">
          <a href="/"><img src="../../../assets/logo/logo.svg" alt="SOLOTORI スペシャルサイトlogo" /></a>
          <Menu />
        </div>
      </div>
    </>
  );
}

export default Top;

