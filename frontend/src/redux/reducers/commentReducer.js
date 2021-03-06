import { RECEIVE_COMMENTS, RECEIVE_COMMENT } from "../actions/commentAction";
import merge from "lodash/merge";

export const commentReducer = (state = {}, action) => {
  let newState = {};
  switch (action.type) {
    case RECEIVE_COMMENTS:
      action.comments.forEach((comment) => {
        newState[comment.commentId] = comment;
      });
      return newState;
    case RECEIVE_COMMENT:
      return merge({}, state, { [action.comment.commentId]: action.comment });
    default:
      return state;
  }
};
