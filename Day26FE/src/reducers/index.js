import { combineReducers } from "redux";
import InputReducer from "./InputReducer";

const rootReducer = combineReducers({
  credentials: InputReducer,
});

export default rootReducer;
