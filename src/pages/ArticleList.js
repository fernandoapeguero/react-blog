import React from "react";
import { Link } from "react-router-dom";
import articlecontent from "./article-content";

const ArticleList = () => {
  return (
    <>
      <h1>Articles</h1>

      {articlecontent.map((article, key) => (
        <Link
          className="article-list-item"
          key={key}
          to={`/article/${article.name}`}
        >
          <h3>{article.title}</h3>
          <p>{article.content.toString().substring(0, 150)}</p>
        </Link>
      ))}
    </>
  );
};

export default ArticleList;
