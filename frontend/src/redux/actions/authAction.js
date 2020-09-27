import * as APIUtil from "../../util/authApi";

export const SET_CURRENT_USER = "SET_CURRENT_USER";

export const setCurrentUser = (payload) => ({
  type: SET_CURRENT_USER,
  currentUser: payload.jwtToken,
  userId: payload.userId,
});

export const register = (user) => (dispatch) =>
  APIUtil.register(user).then((res) => dispatch(setCurrentUser(res.data)));

export const signin = (user) => (dispatch) =>
  APIUtil.signin(user).then((user) => dispatch(setCurrentUser(user)));
