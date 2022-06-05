import React from "react";

const UpvotesSection = ({ articleName, upvotes, setArticleInfo }) => {
  const upvoteArticle = async () => {
    const result = await fetch(`/api/articles/${articleName}/upvote`, {
      method: "post",
    });

    const body = await result.json();

    setArticleInfo(body);
  };

  return (
    <div id="upvote-section">
      <button onClick={() => upvoteArticle()}>Add Upvote</button>
      <p>This post have been upvoted {upvotes} times</p>
    </div>
  );
};

export default UpvotesSection;
