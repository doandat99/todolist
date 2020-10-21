import todoReducer from "./todoReaducers";
import coutReducer from "./countReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todo: todoReducer,
  count: coutReducer,
});

export default rootReducer;
