import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userLoggedReducer from "./slice/userLoggedSlice";
import sidebarReducer from "./slice/sidebarSlice";
import modalUpdateRoleReducer from "./slice/ModalUpdateRoleSlice";
import formUserReducer from "./slice/FormUserSlice";

const rootReducer = combineReducers({
  userLogged: userLoggedReducer,
  sidebar: sidebarReducer,
  modalUpdateRole: modalUpdateRoleReducer,
  formUser: formUserReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
