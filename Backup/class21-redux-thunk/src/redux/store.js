import { applyMiddleware, createStore } from "redux";
import { userReducer } from "./user/user.reducer";
import { composeWithDevTools } from '@redux-devtools/extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
let store = createStore(userReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

export { store }