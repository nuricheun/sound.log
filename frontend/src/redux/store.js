import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { rootReducer } from "./reducers/rootReducer";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import logger from "redux-logger";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["currentUser"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configStore = () => {
  let middleware = [thunk];
  if (process.env.NODE_ENV !== "production") {
    middleware = [...middleware, logger];
  }
  let store = createStore(persistedReducer, applyMiddleware(...middleware));
  let persistor = persistStore(store);
  return { store, persistor };
};
