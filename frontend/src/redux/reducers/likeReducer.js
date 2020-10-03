import {
  RECEIVE_ALL_LIKES,
  RECEIVE_LIKE,
  DELETE_LIKE,
} from "../actions/likeAction";

const INITIAL_STATE = [];

export const likeReducer = (state = INITIAL_STATE, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_LIKES:
      return action.likedTracks;
    case RECEIVE_LIKE:
      return [...state, action.likedTrack];
    case DELETE_LIKE:
      newState = state.filter((e) => e !== action.deleted);

      return newState;
    default:
      return state;
  }
};
