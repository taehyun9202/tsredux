import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/index";

const initializeState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initializeState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export type RootStore = ReturnType<typeof rootReducer>;
export default store;
