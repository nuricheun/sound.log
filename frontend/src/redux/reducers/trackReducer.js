import {
  RECEIVE_ALL_TRACKS,
  RECEIVE_TRACK,
  REMOVE_TRACK,
} from "../actions/trackAction";
import {
  RECEIVE_ALL_LIKES,
  RECEIVE_LIKE,
  DELETE_LIKE,
} from "../actions/likeAction";
import merge from "lodash/merge";

export const trackReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_ALL_TRACKS:
      action.tracks.forEach((track) => {
        newState[track.trackId] = track;
        newState[track.trackId].liked = false;
      });
      return newState;
    case RECEIVE_ALL_LIKES:
      newState = merge({}, state);
      action.likedTracks.forEach((e) => (newState[e].liked = true));
      return newState;
    case RECEIVE_LIKE:
      newState = merge({}, state);
      console.log(action);
      newState[action.likedTrack].liked = true;
      return newState;
    case RECEIVE_TRACK:
      return merge({}, state, { [action.track.trackId]: action.track });
    case REMOVE_TRACK:
      newState = merge({}, state);
      delete newState[action.trackId];
      return newState;
    case DELETE_LIKE:
      console.log(action);
      newState = merge({}, state);
      newState[action.deleted].liked = false;
      return newState;
    default:
      return state;
  }
};
