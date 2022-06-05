import React, { useEffect, useState } from "react";

const AddCommentForm = ({ articleName, setArticleInfo }) => {
  const clearData = {
    username: "",
    comment: "",
  };
  const [formData, setFormData] = useState(clearData);

  const addComment = async () => {
    const result = await fetch(`/api/articles/${articleName}/add-comment`, {
      method: "post",
      body: JSON.stringify({
        username: formData.username,
        text: formData.comment,
      }),
      headers: {
        "Content-Type": "Application/json",
      },
    });

    const body = await result.json();

    setArticleInfo(body);
    setFormData(clearData);
  };

  return (
    <div id="add-comment-form">
      <h3>Add Comment</h3>
      <label>
        Name:
        <input
          type="text"
          name="text"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />
      </label>

      <label>
        Comment:
        <textarea
          rows="4"
          cols="50"
          name="comment"
          value={formData.comment}
          onChange={(e) =>
            setFormData({ ...formData, comment: e.target.value })
          }
        />
      </label>

      <button onClick={() => addComment()}>Add Comment</button>
    </div>
  );
};

export default AddCommentForm;
