import React from "react";
import ArticlesList from "../components/ArticlesList";
import articlecontent from "./article-content";

const ArticleListPage = () => {
  return (
    <>
      <h1>Articles</h1>
      <ArticlesList articles={articlecontent} />
    </>
  );
};

export default ArticleListPage;
