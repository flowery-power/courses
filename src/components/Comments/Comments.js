import React, { useState } from "react";

import "./Comments.css";

const Comments = ({
  isAuthenticated,
  addComment,
  removeComment,
  commentsLoaded,
  state,
}) => {
  const [comment, setComment] = useState([]);

  const handleSumbit = (ev) => {
    ev.preventDefault();

    addComment(comment);
  };

  const handleChange = (ev) => {
    setComment(ev.target.value);
  };

  if (!state?.showComments) {
    return (
      <>
        {isAuthenticated && (
          <article className="create-comment">
            <label>Add new comment:</label>{" "}
            <form className="form" onSubmit={handleSumbit}>
              {" "}
              <textarea
                name="comment"
                value={comment}
                placeholder="Comment..."
                onChange={handleChange}
              ></textarea>{" "}
              <input className="myButton" type="submit" value="Add" />{" "}
            </form>{" "}
          </article>
        )}
        <div className="btn" onClick={() => commentsLoaded()}>
          Load comments
        </div>
      </>
    );
  } else {
    return (
      <>
        {isAuthenticated && (
          <article className="create-comment">
            <label>Add new comment:</label>{" "}
            <form className="form" onSubmit={handleSumbit}>
              {" "}
              <textarea
                name="comment"
                value={comment}
                placeholder="Comment..."
                onChange={handleChange}
              ></textarea>{" "}
              <input className="myButton" type="submit" value="Add" />{" "}
            </form>{" "}
          </article>
        )}
        <h5>Comments</h5>
        <div>
          {state.comments.map((commentItem) => (
            <div key={commentItem.id} className="comment">
              <div className="comment__text">{commentItem.text}</div>
              <div
                className="comment__delete-btn"
                onClick={() => removeComment(commentItem.id)}
              >
                Delete
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
};

export default Comments;
