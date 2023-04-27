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
         relative md:hover:justify-between w-0 md:w-1/3 h-10 group duration-300 hover:bg-slate-100/10 "
      >
        {/* ===============     search input      ================= */}

        <input
          type="search"
          placeholder="search"
          className="outline-none absolute top-0 left-0 right-0 h-full md:border-b border-white/20 hover:border-transparent text-white   bg-transparent caret-white placeholder:text-xl
          placeholder:text-white text-xl lg:text-2xl p-2 duration-200"
        />

        {/* ===============     search icon    ================= */}

        <button
          href="h#"
          onClick={searchBoxOpen}
          className="absolute right-2 top-0 p-2 md:p-1 duration-500 hover:bg-slate-300/10 md:group-hover:bg-transparent 
       rounded-full"
        >
          <i className="fa fa-search text-white/80 md:hover:text-white text-2xl"></i>
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
