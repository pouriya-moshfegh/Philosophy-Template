import { useRoutes } from "react-router-dom";
import ArticlePage from "./pages/ArticlePage";
import MainArticle from "./pages/HomePage";

function App() {
  let routes = useRoutes([
    { path: "*", element: <MainArticle /> },
    { path: "articles/:id", element: <ArticlePage /> },
  ]);
  return <>{routes}</>;
}

export default App;
