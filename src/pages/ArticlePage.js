import React from "react";
import { useParams } from "react-router-dom";
import articles from "./article-content";

const ArticlePage = () => {
  const { name } = useParams();

  const currentArticle = articles.find((article) => article.name === name);

  if (!currentArticle) return <h1>Article does not exists.</h1>;

  return (
    <div>
      <h1>{currentArticle.title}</h1>
      {currentArticle.content.map((text, key) => (
        <p key={key}>{text}</p>
      ))}
    </div>
  );
};

export default ArticlePage;
