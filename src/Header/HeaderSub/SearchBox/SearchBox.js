import React from "react";

export default function SearchBox(props) {
  const searchBoxOpen = () => {
    props.searchBoxMode();
  };
  return (
    <>
      {/* seach container */}
      <div
        className="
        flex justify-between md:justify-center items-center
         relative md:hover:justify-between w-0 md:w-1/3 h-10 group duration-300 hover:bg-slate-100/20 "
      >
        {/* ===============     search input      ================= */}

        <input
          type="search"
          placeholder="search"
          className="outline-none px-2 py-1 h-full bg-transparent absolute top-0 left-0 right-0 placeholder:text-2xl placeholder:text-transparentfocus:placeholder:text-white md:placeholder:text-white text-xl text-transparent group-hover:text-white lg:px-14 lg:group-hover:px-2  duration-200"
        />

        {/* ===============     search icon    ================= */}

        <button
          href="h#"
          onClick={searchBoxOpen}
          className="absolute right-2 top-0 py-1 md:right-20 lg:right-38 xl:right-40 md:group-hover:right-2 lg:group-hover-right-2 duration-500 hover:bg-slate-300/10
          p-2 rounded-full"
        >
          <i className="fa fa-search text-white/80 text-2xl"></i>
        </button>
      </div>
      {/* this is for moblile size when clicked on item */}
      <div className="
      md:hidden hidden {should-be-fixed} h-screen w-screen left-0 top-0 px-10 bg-slate-300/90 text-white z-50 flex justify-center items-center ">
        <div className="bg-slate-800 hover:bg-slate-900 w-full  duration-200">
          <input
            type="search"
            placeholder="search..."
            className="
            px-4 py-2 outline-none placeholder:text-white placeholder:text-2xl bg-transparent text-xl w-[90%] "
          />
          <button>
            <i className="fa fa-search text-white/80 text-2xl"></i>
          </button>
        </div>
      </div>
    </>
  );
}
