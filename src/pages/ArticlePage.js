import React from "react";
import Header from "../Components/Header/Header";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ArticlesData from "../Components/ArticlePage/Articles/ArticlesData/Articlesdata";
import Info from "../Components/Info/Info";

export default function ArticlePage(props) {
  let params = useParams();
  const targetArticle = useState(
    ArticlesData.find((aricle) => {
      return aricle.title === params.id;
    })
  );

  console.log(targetArticle[0]);
  let { title, img, topic, time } = targetArticle[0];

  return (
    <div className="bg-gray-100/30 select-none noSelect">
      <div className="sm:h-[25svh] h-[20svh] overflow-hidden">
        <Header className=""></Header>
      </div>
      {/* container */}
      <div className="container mx-auto mt-10 p-10">
        {/* ================== */}

        {/* header title */}
        <h1 className="text-center sm:text-4xl text-2xl font-bold">{title}</h1>
        {/* ================== */}
        {/* time and topic */}
        <div className="text-center mt-6 ">
          <p className="text">
            {time} &nbsp; &nbsp; &nbsp; In
            <Link
              to={`articles/${topic}`}
              className="font-bold text-slate-900 first-letter:uppercase"
            >
              &nbsp; {topic}
            </Link>
          </p>
        </div>
        {/* ================== */}
        {/* image of the photo */}
        <img
          className=" mx-auto bg-slate-100/10 h-[50vh] object-contain mt-10"
          src={img}
          alt={title}
        />
        {/* ================== */}

        {/* desceription of the photo */}
        <p className="text-left mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, fugit
          deserunt quae soluta modi laudantium in amet deleniti voluptate
          impedit veritatis voluptas, autem dicta, temporibus aspernatur cumque
          quo itaque inventore consequatur! Explicabo praesentium aspernatur
          veniam in! Quidem labore ad eum est delectus recusandae eveniet
          aspernatur iste nobis natus! Ad at necessitatibus nam quis culpa minus
          ipsam magni laboriosam quod ut tempore, doloribus ducimus optio
          exercitationem id, expedita sapiente porro nulla sit amet consequuntur
          aliquam? Autem exercitationem, commodi suscipit, nobis harum itaque
          atque ipsa repellendus vel cupiditate labore libero qui facilis
          accusantium veniam similique! Vitae quis voluptas quo rem ullam nobis.
        </p>
        <p className="font-bold"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem pariatur qui ab unde aliquid eius fugit voluptas consectetur adipisci laudantium amet, sunt dolorum repellat accusantium quod non accusamus nulla? Tempore nemo facilis magni odit deserunt autem ullam! Nulla consectetur odio ad dolorem veniam quam culpa repellendus fuga, quae officiis, ullam quibusdam maxime architecto excepturi alias expedita perferendis aperiam praesentium magnam quisquam sed ipsam minus sint facilis. Aperiam minima, odit, odio tempore repellat cupiditate maxime repellendus consequuntur voluptas accusamus ea exercitationem architecto aliquam recusandae laborum dolor! Nulla molestias illo ut aliquam mollitia quis quibusdam explicabo consequuntur, perferendis nisi repudiandae minima!</p>
        <h2 className="text-center text-3xl mt-10 ">New Title</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est voluptas velit quibusdam architecto distinctio illum. Et, reiciendis? Ut, et eligendi. Asperiores error quam laudantium expedita odio atque ut facilis neque incidunt deleniti suscipit ab dolore cumque velit officiis, nesciunt tempore. Quae sunt ducimus id ad itaque quisquam eveniet ullam, veniam suscipit vitae sapiente ipsum magnam, eius esse voluptate commodi at veritatis sed rerum doloremque alias eum. Ullam modi adipisci, fugit dolor voluptate beatae dicta soluta officiis molestiae architecto voluptates nihil culpa cupiditate praesentium quae sit rem ab ad veritatis. Odio ipsam natus quos iusto omnis quis possimus alias ad impedit.</p>
      </div>
      <Info></Info>
    </div>
  );
}
