import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import userLoggedReducer from "./slice/userLoggedSlice";
import sidebarReducer from "./slice/sidebarSlice";
import { modalUpdateRoleSlice } from "./slice/ModalUpdateRoleSlice";

const rootReducer = combineReducers({
  userLogged: userLoggedReducer,
  sidebar: sidebarReducer,
  modalUpdate: modalUpdateRoleSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
