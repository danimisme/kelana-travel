import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import userLoggedReducer from "./slice/userLoggedSlice";
import sidebarReducer from "./slice/sidebarSlice";

const rootReducer = combineReducers({
  userLogged: userLoggedReducer,
  sidebar: sidebarReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
