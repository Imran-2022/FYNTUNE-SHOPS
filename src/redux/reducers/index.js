import counterReducer from "./counter";
import loggedReducer from "./islogged";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    counterReducer,
    loggedReducer,
})

export default rootReducer;