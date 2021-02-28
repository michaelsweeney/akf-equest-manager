import { combineReducers } from "redux";

import simReducer from "./simreducer";

const rootReducer = combineReducers({
  sim: simReducer,
});

export default rootReducer;
