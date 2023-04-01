import React from "react";

export default function SearchBox() {
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
          className="outline-none px-2 py-1 h-full bg-transparent absolute top-0 left-0 right-0  placeholder:text-2xl placeholder:text-transparent focus:placeholder:text-white md:placeholder:text-white text-xl
    text-transparent group-hover:text-white
     lg:px-14 lg:group-hover:px-2  duration-200"
        />

        {/* ===============     search icon    ================= */}

        <a
          href="h#"
          className="absolute right-2 top-0 py-1 md:right-20 lg:right-38 
 xl:right-40 md:group-hover:right-2 lg:group-hover-right-2 duration-500 "
        >
          <i className="fa fa-search text-white/80 text-2xl"></i>
        </a>
      </div>
    </>
  );
}
