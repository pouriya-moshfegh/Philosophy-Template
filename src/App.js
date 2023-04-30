import { useRoutes } from "react-router-dom";
import ArticlePage from "./ArticlePage/ArticlePage";
import MainArticle from "./Articles/HomePage";

function App() {
  let routes = useRoutes([
    { path: "/", element: <MainArticle /> },
    { path: "/articles/:id", element: <ArticlePage /> },
  ]);
  return <>{routes}</>;
}

export default App;
