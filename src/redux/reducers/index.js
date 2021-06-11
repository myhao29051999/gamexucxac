import { combineReducers } from "redux";
import xucxacReducer from "./xucxacReducer";
import userReducer from "./userReducer";
const rootReducer = combineReducers({
  //reducer con

  //   xucxacReducer : xucxacReducer,
  xucxacReducer,
  userReducer,
});

export default rootReducer;
