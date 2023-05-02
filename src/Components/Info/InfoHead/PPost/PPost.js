import React from "react";
import { Link } from "react-router-dom";
import articles from "../../../ArticlePage/Articles/ArticlesData/Articlesdata";
import "./PPost.css"

export default function PPost() {
  return (
    <>
     
  
      <div className="md:w-1/2 xl:w-2/3 grid gap-2 grid-cols-1 xl:grid-cols-2 xl:gap-0 px-2 ">
      <h1 className="w-full text-center font-bold text-3xl col-span-2 mb-5">
            Popular Posts
          </h1>



        {articles.map((article) => {
       if (article.id<5)  return (
            <Link key={article.id}  to={`/articles/${article.title}` } className='col-span-2 xl:col-span-1 h-20 xl:h-25 group hover:bg-black/10'>
              <div className=" w-full flex">
               <div className="w-28 grid place-items-center overflow-hidden">
               <img src={article.img} className="h-14
                sm:h-20 max-w-[100px] xl:h-30 w-full object-cover group-hover:scale-105 duration-200 mx-auto" alt="" />
               </div>
                <div className="p-2 overflow-hidden h-20">
                  <h4 className=" sm:text-lg font-bold  break-words">
                    {article.title}
                  </h4>
                  <p className="text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat, distinctio...
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
