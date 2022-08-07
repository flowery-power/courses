import { createContext, useReducer } from "react";

export const CommentContext = createContext();

function commentReducer(state, action) {
  switch (action.type) {
    case "COMMENTS_LOADED":
      return { showComments: true, comments: [] };
    case "SET_COMMENTS":
      return { showComments: state.showComments, comments: state.comments };
    case "ADD_COMMENT":
      const comments = [...state.comments];
      comments.push({
        id: state.comments[state.comments.length - 1].id + 1,
        text: action.payload,
      });
      return { showComments: true, comments: comments };
    case "REMOVE_COMMENT":
      const commentsWithoutDeleted = state.comments.filter(
        (comment) => comment.id != action.payload
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

  const addComment = (commentId, comment) => {
    dispatch({
      type: "ADD_COMMENT",
      payload: comment,
      commentId,
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
