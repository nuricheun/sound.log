import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/rootReducer";

const middleWares = [thunk, logger];
export const store = createStore(rootReducer, applyMiddleware(...middleWares));
