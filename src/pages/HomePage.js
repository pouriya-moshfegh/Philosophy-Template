import React from "react";
import articles from "../Components/ArticlePage/Articles/ArticlesData/Articlesdata";
import ArticleCard from "../Components/ArticlePage/Articles/Articlecard/ArticleCard";

import Header from "../Components/Header/Header";
import HeaderBanner from "../Components/Header/HeaderSub/HeaderBanner";
import Pagination from "@mui/material/Pagination";
import Info from "../Components/Info/Info";

export default function MainArticle() {
  return (
    <>
      <Header>
        <HeaderBanner />
      </Header>
      <section className="pt-24 sm:px-14  bg-[#f2f2f2] select-none noSelect ">
        <div className="container mx-auto flex justify-evenly flex-wrap ">
          {/* card */}
          {articles.map((article) => {
            return <ArticleCard key={article.id} {...article} />;
          })}
        </div>
        <div className="w-full flex justify-center">
          <Pagination className="mt-10" count={10} />
        </div>

        <Info></Info>
      </section>
    </>
  );
}
