import React from "react";
import Menu from "../menu/Menu.jsx"; // Import Hamburger component

function Top() {
  return (
    <>
      <div id="top" className="flex justify-between mr-3 ml-4 my-5">
        <img src="./src/assets/logo/logo.svg" alt="SOLOTORI スペシャルサイトlogo" />
        <Menu />
      </div>
    </>
  );
}

export default Top;

