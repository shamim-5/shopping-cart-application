import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import myLogger from "./myLogger";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(myLogger)));

export default store;
