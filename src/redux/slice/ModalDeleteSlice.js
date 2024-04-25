import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const modalDeleteSlice = createSlice({
  name: "modalDelete",
  initialState,
  reducers: {
    openModalDelete: (state) => {
      state.isOpen = true;
    },
    closeModalDelete: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModalDelete, closeModalDelete } = modalDeleteSlice.actions;

export default modalDeleteSlice.reducer;
