import { Component } from "react";
import Nav from "./Nav";
import HeaderLogoes from "./HeaderLogoes";
import HeaderBanner from "./HeaderBanner";
import SearchBox from "./SearchBox";

//............................................

export default class Header extends Component {
  render() {
    return (
      <header className=" header h-screen z-0 select-none ">
        {/*header blur for background */}
        <div className="blurB cover">

          {/* ======================================= */}

          <div className="container h-[80%] mx-auto">
            {/* header items container (logo nav search) */}
            <div className="  flex-center md:border-b md:border-white/30">
              <HeaderLogoes/>
              <SearchBox/>
            </div>
            <Nav/>
          <HeaderBanner/>
          </div>

          {/* ====================================== */}
        </div>
      </header>
    );
  }
}
