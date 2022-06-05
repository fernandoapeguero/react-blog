import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticlesList from "../components/ArticlesList";
import articles from "./article-content";
import NotFoundPage from "./NotFoundPage";
import CommentsList from "../components/CommentsList";
import UpvotesSection from "../components/UpvotesSection";

const ArticlePage = () => {
  const { name } = useParams();

  const currentArticle = articles.find((article) => article.name === name);

  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();

      setArticleInfo(body);
    };
    fetchData();
  }, [name]);

  if (!currentArticle) return <NotFoundPage />;

  const otherArticles = articles.filter(
    (article) => article.name !== currentArticle.name
  );

  return (
    <>
      <h1>{currentArticle.title}</h1>
      <UpvotesSection
        articleName={name}
        upvotes={articleInfo.upvotes}
        setArticleInfo={setArticleInfo}
      />
      {currentArticle.content.map((text, key) => (
        <p key={key}>{text}</p>
      ))}

      <h3>Other Articles</h3>
      <ArticlesList articles={otherArticles} />
      <CommentsList comments={articleInfo.comments} />
    </>
  );
};

export default ArticlePage;
