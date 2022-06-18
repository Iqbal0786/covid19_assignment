import { createStore } from "redux";
import thunk from "redux-thunk"
import { applyMiddleware  } from "redux";
import { combineReducers } from "redux";
import { LogReducer } from "./LogInRedux/LogReducer";
const rootReducer= combineReducers({
    logInData:LogReducer
})
export const store= createStore(rootReducer, applyMiddleware(thunk));