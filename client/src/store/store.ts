import { createStore, applyMiddleware } from "redux";
import rootReducer from "../_reducers/index";
import promiseMiddleware from "redux-promise";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(promiseMiddleware))
);

export type RootReducerType = ReturnType<typeof rootReducer>;

export default store;
