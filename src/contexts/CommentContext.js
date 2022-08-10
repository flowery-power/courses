import { createContext, useReducer } from "react";

export const CommentContext = createContext();

function commentReducer(state, action) {
  switch (action.type) {
    case "COMMENTS_LOADED":
      return { showComments: true, comments: state.comments };
    case "SET_COMMENTS":
      return { showComments: state.showComments, comments: action.comments };
    case "ADD_COMMENT":
      const comments = [...state.comments];
      comments.push({
        id: action.comment.id,
        text: action.comment.text,
      });
      return { showComments: true, comments };
    case "REMOVE_COMMENT":
      const commentsWithoutDeleted = state.comments.filter(
        (comment) => comment.id !== action.commentId
      );

      return { showComments: true, comments: commentsWithoutDeleted };
    default:
      throw new Error();
  }
}

export const CommentProvider = ({ children }) => {
  const [commentsState, dispatch] = useReducer(commentReducer, {
    showComments: false,
    comments: [],
  });

  const addComment = (comment) => {
    dispatch({
      type: "ADD_COMMENT",
      comment,
    });
  };

  const removeComment = (commentId) => {
    dispatch({
      type: "REMOVE_COMMENT",
      commentId,
    });
  };

  const commentsLoaded = (commentId) => {
    dispatch({
      type: "COMMENTS_LOADED",
      commentId,
    });
  };

  const setComments = (comments) => {
    dispatch({
      type: "SET_COMMENTS",
      comments,
    });
  };

  return (
    <CommentContext.Provider
      value={{
        addComment,
        removeComment,
        commentsLoaded,
        setComments,
        commentsState,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};
