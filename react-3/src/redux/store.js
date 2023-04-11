import { applyMiddleware, createStore } from "redux";
import { userReducer } from "./user/user.reducer";
import { composeWithDevTools } from '@redux-devtools/extension'
let store = createStore(userReducer, composeWithDevtools(applyMiddleware()))

export { store }