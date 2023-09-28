import { createSlice } from "@reduxjs/toolkit";
import { StoreState } from "./types";

const initialState: StoreState = {
  mode: "light",
};

export const storageSlice = createSlice({
  name: "client-storage",
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { setMode } = storageSlice.actions;
export default storageSlice.reducer;
