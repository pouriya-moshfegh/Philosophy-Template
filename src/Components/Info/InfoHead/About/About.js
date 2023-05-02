import React from 'react'

export default function About() {
  return (
    <div className=" md:w-1/2 xl:w-1/3 mt-10 md:mt-0">
        <h1 className='text-3xl font-bold'> 
        About Philosophy
        </h1>
        <p className="mt-6 md:mt-10 xl:mt-14">
        Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada.
        </p>
      <div className="text-black mt-4">
      <a href="h#">
          <i className="fa fa-facebook iconStyle mr-2 hover:text-blue-500"></i>
        </a>
        <a href="h#">
          <i className="fa fa-instagram iconStyle m-2  hover:text-red-500"></i>
        </a>
        <a href="h#">
          <i className="fa fa-pinterest iconStyle m-2 hover:text-red-300"></i>
        </a>
        <a href="h#">
          <i className="fa fa-twitter iconStyle m-2 hover:text-blue-300"></i>
        </a>
      </div>
    </div>
  )
}
