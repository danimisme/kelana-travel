import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import userLoggedReducer from "./slice/userLoggedSlice";

const rootReducer = combineReducers({
  userLogged: userLoggedReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
