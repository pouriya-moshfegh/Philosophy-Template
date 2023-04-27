import React, { useState, useEffect } from "react";
import articles from "./ArticlesData/Articlesdata";
import ArticleCard from "./Articlecard/ArticleCard";

export default function MainArticle() {
  return (
    <section className="pt-24 sm:px-14  bg-[#f2f2f2] ">
      <div className="container mx-auto flex justify-evenly flex-wrap ">
        {/* card */}
        {articles.map(article => {
          return (
            <ArticleCard
              key={article.id}
              id={article.id}
              img={article.img}
              title={article.title}
              topic={article.topic}
              time={article.time}
            />
          );
        })}
      </div>
    </section>
  );
}
