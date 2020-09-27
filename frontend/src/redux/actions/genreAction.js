import * as APIUtil from "../../util/genreApi";

export const RECEIVE_ALL_GENRES = "RECEIVE_ALL_GENRES";
export const RECEIVE_GENRE = "RECEIVE_GENRE";

export const receiveAllGenres = (genres) => ({
  type: RECEIVE_ALL_GENRES,
  genres,
});

export const fetchAllGenres = () => (dispatch) =>
  APIUtil.fetchAllGenres().then((genres) =>
    dispatch(receiveAllGenres(genres.data))
  );
