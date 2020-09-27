import { RECEIVE_ALL_GENRES } from "../actions/genreAction";

export const genreReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_GENRES:
      return action.genres;
    default:
      return state;
  }
};
