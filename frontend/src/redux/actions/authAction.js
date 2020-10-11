import * as APIUtil from "../../util/authApi";

export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const SIGNOUT_CURRENT_USER = "SIGNOUT_CURRENT_USER";

export const setCurrentUser = (payload) => ({
  type: SET_CURRENT_USER,
  user: payload,
});

export const signoutCurrentUser = () => ({
  type: SIGNOUT_CURRENT_USER,
});

export const register = (user) => (dispatch) =>
  APIUtil.register(user).then((res) => {
    const { jwtToken, user } = res.data;
    localStorage.setItem("jwtToken", jwtToken);
    APIUtil.authToken(jwtToken);

    dispatch(setCurrentUser(user));
  });

export const signin = (user) => (dispatch) =>
  APIUtil.signin(user).then((res) => {
    const { jwtToken, user } = res.data;
    localStorage.setItem("jwtToken", jwtToken);
    APIUtil.authToken(jwtToken);

    dispatch(setCurrentUser(user));
  });

export const fetchUser = () => (dispatch) =>
  APIUtil.fetchUser().then((res) => dispatch(setCurrentUser(res.data)));

export const updateUser = (user) => (dispatch) =>
  APIUtil.updateUser(user).then((res) => dispatch(setCurrentUser(res.data)));

export const signout = () => (dispatch) => {
  APIUtil.authToken(false);
  dispatch(signoutCurrentUser());
};
