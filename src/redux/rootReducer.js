import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import counterAsusReducer from "./counterAsus/counterAsusReducer";
import counterCanonReducer from "./counterCanon/counterCanonReducer";
import counterDellReducer from "./counterDell/counterDellReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  counterAsus: counterAsusReducer,
  counterCanon: counterCanonReducer,
  counterDell: counterDellReducer,
});

export default rootReducer;
