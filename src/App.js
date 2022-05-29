import "./App.css";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import ArticleList from "./pages/ArticleList";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="page-body">
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/articles-list" element={<ArticleList />} />
          <Route path="/article" element={<ArticlePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
