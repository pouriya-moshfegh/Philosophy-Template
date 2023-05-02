import React from "react";

export default function HeaderBanner() {
  return (
    <div className="bg-white grid my-8 md:grid-rows-3 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 h-[90%]">
      {/* first img(big one) */}
      <div className="header--img__1 md:col-span-3 lg:col-span-2 md:row-span-2  ">
        <div className="dark-filter">
          <div className=" flex-col__end">
            <a href="h#" className="btn-sm bg-green-500">
              Music
            </a>
            <h className="header__banner-title">
              <a className="hover:border-b p-[1px] border-white/30 " href="h#">
                What your music refrence says about you and your taste.
              </a>
            </h>
            <div className="">
              <ul className="flex space-x-4 text-white/70">
                <li>
                  <a href="#0">John Doe</a>
                </li>
                <li>December 29, 2017</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* second img */}
      <div className="header--img__2 duration-300">
        {" "}
        <div className="dark-filter">
          <div className=" flex-col__end space-y-3">
            <a href="h#" className="btn-sm bg-orange-500">
         Time
            </a>
            <h className="header__banner-title md:text-2xl lg:text-3xl">
              <a  className="hover:border-b p-[1px] border-white/30 "href="h#">What your music refrence</a>
            </h>
            <div className="">
              <ul className="flex space-x-4 text-white/70">
                <li>
                  <a href="#0">John Doe</a>
                </li>
                <li>December 29, 2017</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* third img */}
      <div className="header--img__3 hidden md:block ">
        <div className="dark-filter">
          <div className=" flex-col__end space-y-3">
            <a href="h#" className="btn-sm bg-violet-500">
              Car
            </a>
            <h className="header__banner-title md:text-2xl lg:text-3xl">
              <a className="hover:border-b p-[1px] border-white/30 " href="h#">What your music refrence</a>
            </h>
            <div className="">
              <ul className="flex space-x-4 text-white/70">
                <li>
                  <a href="#0">John Doe</a>
                </li>
                <li>December 29, 2017</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
