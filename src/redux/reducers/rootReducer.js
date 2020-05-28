import testReducer from "./testReducer";
import loginReducer from "./loginReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  test: testReducer,
  login: loginReducer
});

export default rootReducer;
