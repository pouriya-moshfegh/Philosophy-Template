import React from "react";
import Header from "../Header/Header";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ArticlesData from "../Articles/ArticlesData/Articlesdata";

export default function ArticlePage(props) {
  let params = useParams();
  const targetArticle = useState(
    ArticlesData.find((aricle) => {
      return aricle.title === params.id;
    })
  );

  console.log(targetArticle[0]);
  let { id, title, img, topic, time } = targetArticle[0];

  return (
    <div className="bg-gray-100">
      <div className="h-[25vh] overflow-hidden">
        <Header className=""></Header>
      </div>
      {/* container */}
      <div className="container mx-auto mt-10 p-10">
        {/* header title */}
        <h1 className="text-center sm:text-4xl text-2xl  font-bold">{title}</h1>
        {/* time and topic */}
        <div className="text-center mt-6 ">
          <p className="text">
            {time} &nbsp; &nbsp; &nbsp; In
            <Link to={`articles/${topic}`} className="font-bold text-slate-900 first-letter:uppercase">
            &nbsp;   {topic} 
            </Link>
          </p>
         
        </div>
        <img className=" mx-auto bg-black/10 h-[50vh] object-contain mt-10" src={img} alt={title} />
        <p className="text-left mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, fugit deserunt quae soluta modi laudantium in amet deleniti voluptate impedit veritatis voluptas, autem dicta, temporibus aspernatur cumque quo itaque inventore consequatur! Explicabo praesentium aspernatur veniam in! Quidem labore ad eum est delectus recusandae eveniet aspernatur iste nobis natus! Ad at necessitatibus nam quis culpa minus ipsam magni laboriosam quod ut tempore, doloribus ducimus optio exercitationem id, expedita sapiente porro nulla sit amet consequuntur aliquam? Autem exercitationem, commodi suscipit, nobis harum itaque atque ipsa repellendus vel cupiditate labore libero qui facilis accusantium veniam similique! Vitae quis voluptas quo rem ullam nobis.</p>
       
      </div>
    </div>
  );
}
