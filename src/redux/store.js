import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { cartoonReducer } from "./cartoons/cartoonReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    cartoonStore: cartoonReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);
