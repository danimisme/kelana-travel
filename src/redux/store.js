import { userLoggedSlice } from "./slices/UserLoggedSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    userLogged: userLoggedSlice.reducer,
  },
});

export default store;
