import { combineReducers } from "redux";

import simReducer from "./simreducer";
import uiReducer from "./uireducer";
const rootReducer = combineReducers({
  sim: simReducer,
  ui: uiReducer,
});

export default rootReducer;
