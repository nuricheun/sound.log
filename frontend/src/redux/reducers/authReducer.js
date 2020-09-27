import { SET_CURRENT_USER } from "../actions/authAction";

const INITIAL_STATE = {
  currentUser: null,
};

export const authReducer = (state = INITIAL_STATE, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        userId: action.userId,
        currentUser: action.currentUser,
      };
    default:
      return state;
  }
};
