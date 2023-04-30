import React, { useState } from "react";

import "./HeaderSub/header.css";

import Nav from "./HeaderSub/Nav/Nav";
import HeaderLogoes from "./HeaderSub/HeaderLogoes";
import SearchBox from "./HeaderSub/SearchBox/SearchBox";

//............................................

export default function Header(props) {
  const [mode, setMode] = useState({
    navMode: "hidden",
    searchBoxMode: "hidden",
  });
  // nav close and open for mobile size
  const navModeChanger = () => {
    if (mode.navMode === "hidden") {
      setMode({ navMode: "block" });
    } else {
      setMode({ navMode: "hidden" });
    }
  };

  // searchBox close and open for mobile size

  const searchBoxChanger = (props) => {
    if (mode.searchBoxMode === "hidden") {
      setMode({ searchBoxMode: "block" });
    } else {
      setMode({ searchBoxMode: "hidden" });
    }
  };
  return (
    <header className=" header  z-0 select-none ">
      {/*header blur for background */}
      <div className="blurB cover">
        {/* ======================================= */}

        <div className="container h-[80%] mx-auto">
          {/* header items container (logo nav search) */}
          <div className="  flex-center md:border-b md:border-white/30">
            <HeaderLogoes navOnClick={navModeChanger} />
            <SearchBox searchBoxMode={searchBoxChanger} />
          </div>
          <Nav mode={mode.navMode} />
        {props.children}
        </div>

        {/* ====================================== */}
      </div>
    </header>
  );
}
