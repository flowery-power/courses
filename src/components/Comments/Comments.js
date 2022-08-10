import React, { useState, useEffect } from "react";

import "./Comments.css";
import * as commentService from "../../services/commentService.js";

const Comments = ({
  isAuthenticated,
  addComment,
  removeComment,
  commentsLoaded,
  courseId,
  state,
  setComments,
}) => {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    commentService.getByCourseId(courseId).then((comments) => {
      setComments(comments || []);
    });
  }, [courseId, setComments]);

  const handleSumbit = (ev) => {
    ev.preventDefault();

    commentService.create(courseId, { text: comment }).then((docRef) => {
      addComment({ id: docRef.id, text: comment });
    });
  };

  const handleRemove = (ev, commentId) => {
    ev.preventDefault();
    commentService.remove(courseId, commentId).then(() => {
      removeComment(commentId);
    });
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
                onClick={(event) => handleRemove(event, commentItem.id)}
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
