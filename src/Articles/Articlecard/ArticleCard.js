import React from 'react'
import { Link } from 'react-router-dom'

export default function ArticleCard(props) {
    console.log(props.id)
  return (
    <div className="w-[330px] bg-white shadow-md max-h-[90vh] m-3 relative">
    {/* card image */}
  <div className="h-1/2 overflow-hidden">
  <img
      className="h-full w-full "
      src={props.img}
      alt="lamp "
    />
  </div>
    {/* text container */}
    <div className="p-4">
      {/* time */}
      <div className="p-2">{props.time}</div>
      {/* title */}
      <Link
        to={`articles/${props.id}`}
        className="header__banner-title text-black text-2xl font-bold"
      >
        <h className="hover:border-b p-[1px] border-black/30 ">
          {props.title}
        </h>
      </Link>
      {/* info */}
      <p className="my-6"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cupiditate repellendus modi similique doloremque eligendi assumenda aliquid beatae debitis animi...</p>
      <a href="/" className="text-blue-900 text-lg font-semibold hover:text-black duration-150 absolute bottom-4">{props.topic}</a>
    </div>
    {/* topic */}

  </div>
  )
}
