import React  from "react";
import articles from "./ArticlesData/Articlesdata";
import ArticleCard from "./Articlecard/ArticleCard";
import Header from "../Header/Header";
import HeaderBanner from "../Header/HeaderSub/HeaderBanner"


export default function MainArticle() {
  return (
    <>
    <Header><HeaderBanner/></Header>
    <section className="pt-24 sm:px-14  bg-[#f2f2f2] select-none noSelect ">
      <div className="container mx-auto flex justify-evenly flex-wrap ">
        {/* card */}
        {articles.map((article) => {
          return <ArticleCard key={article.id} {...article} />;
        })}
      </div>
    </section>
    </>
  );
}
