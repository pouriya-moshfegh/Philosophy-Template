import React from "react";

export default function HedaerLogoes() {
  return (
    <>
      <a href="h#" className="icon md:hidden group">
        <span className="menu-line"></span>
        <span className="menu-line"></span>
        <span className="menu-line"></span>
      </a>
      {/* ===============    md logoes      ================= */}
      <div className="hidden md:flex space-x-4 w-1/4">
        <a href="h#">
          <i className="fa fa-facebook iconStyle hover:text-blue-500"></i>
        </a>
        <a href="h#">
          <i className="fa fa-instagram iconStyle  hover:text-red-500"></i>
        </a>
        <a href="h#">
          <i className="fa fa-pinterest iconStyle hover:text-red-300"></i>
        </a>
        <a href="h#">
          <i className="fa fa-twitter iconStyle hover:text-blue-300"></i>
        </a>
      </div>
      <div className="w-2/3 text-center p-1 ">
      <img
        className="w-[70%] md:max-w-[60%] lg:max-w[50%] p-2 mx-auto"
        src="./image/header/logo-header.svg"
        alt="header-logo"
      />
      </div>
    </>
  );
}
