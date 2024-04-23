import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const modalUpdateRoleSlice = createSlice({
  name: "modalUpdateRole",
  initialState,
  reducers: {
    openModalUpdateRole: (state) => {
      state.isOpen = true;
    },
    closeModalUpdateRole: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModalUpdateRole, closeModalUpdateRole } =
  modalUpdateRoleSlice.actions;

export default modalUpdateRoleSlice.reducer;
