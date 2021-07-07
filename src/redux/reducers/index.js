import { combineReducers } from "redux";
import { commentReducer } from "./commentReducer.js";
import { postReducer } from "./postReducer.js";

const rootReducers = combineReducers( {
  postReducer,
  commentReducer,
} );

export { rootReducers };
