

import ArticlePage from "./ArticlePage/ArticlePage";
import { Routes ,Route } from "react-router-dom";
// import Header from "./Header/Header";
import MainArticle from "./Articles/HomePage";

function App() {
  return (
    <>
    {/* <Header></Header> */}
    <Routes>
      <Route path="/" element={ <MainArticle/>}></Route>
      <Route path="/articles/:id" element={ <ArticlePage/>}></Route>
    </Routes>

    </>
  );
}

export default App;
