
import "./Nav.css"
import React, { useEffect } from 'react';

import { Link}  from "react-router-dom";

export default function Nav(props) {
  useEffect(()=>{

  },[])
 return (
    <>

   
   {props.mode === "block"?  (
    <>
    <nav className="nav-sm md:nav-md">
    <Link to="/home " className={`nav-item nav-item-sm ${props.mode} nav-item-md `}>
      Home
    </Link>
    <Link to="/categories " className={`nav-item nav-item-sm ${props.mode} md:nav-item-md `}>
      Categories
    </Link>
    <Link to="/style " className={`nav-item nav-item-sm ${props.mode} md:nav-item-md `}>
      Style
    </Link>
    <Link to="/blog " className={`nav-item nav-item-sm ${props.mode} md:nav-item-md `}>
      Blog
    </Link>
    <Link to="/about " className={`nav-item nav-item-sm ${props.mode} md:nav-item-md `}>
      About
    </Link>
    <Link to="/contact " className={`nav-item nav-item-sm ${props.mode} md:nav-item-md `}>
      Contact
    </Link>
  </nav></>
   ):(
   <nav className="nav-md">
   <Link to="/home " className={`nav-item nav-item-sm  nav-item-md `}>
     Home
   </Link>
   <Link to="/categories " className={`nav-item nav-item-sm  nav-item-md `}>
     Categories
   </Link>
   <Link to="/style " className={`nav-item nav-item-sm  nav-item-md `}>
     Style
   </Link>
   <Link to="/blog " className={`nav-item nav-item-sm nav-item-md `}>
     Blog
   </Link>
   <Link to="/about " className={`nav-item nav-item-sm  nav-item-md `}>
     About
   </Link>
   <Link to="/contact " className={`nav-item nav-item-sm sm:${props.mode} md:nav-item-md `}>
     Contact
   </Link>
 </nav>)}   
      
    </>
  );
}
