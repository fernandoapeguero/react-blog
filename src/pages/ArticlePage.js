import React from "react";
import { useParams } from "react-router-dom";
import ArticlesList from "../components/ArticlesList";
import articles from "./article-content";
import NotFoundPage from "./NotFoundPage";

const ArticlePage = () => {
  const { name } = useParams();

  const currentArticle = articles.find((article) => article.name === name);

  if (!currentArticle) return <NotFoundPage />;

  const otherArticles = articles.filter(
    (article) => article.name !== currentArticle.name
  );

  return (
    <>
      <h1>{currentArticle.title}</h1>
      {currentArticle.content.map((text, key) => (
        <p key={key}>{text}</p>
      ))}

      <h3>Other Articles</h3>
      <ArticlesList articles={otherArticles} />
    </>
  );
};

export default ArticlePage;
