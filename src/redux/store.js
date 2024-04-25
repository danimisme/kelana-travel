import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userLoggedReducer from "./slice/userLoggedSlice";
import sidebarReducer from "./slice/sidebarSlice";
import modalUpdateRoleReducer from "./slice/ModalUpdateRoleSlice";
import formUserReducer from "./slice/FormUserSlice";
import modalDeleteReducer from "./slice/ModalDeleteSlice";

const rootReducer = combineReducers({
  userLogged: userLoggedReducer,
  sidebar: sidebarReducer,
  modalUpdateRole: modalUpdateRoleReducer,
  formUser: formUserReducer,
  modalDelete: modalDeleteReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
