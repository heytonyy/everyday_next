import { createSlice } from "@reduxjs/toolkit";
import { StoreState } from "./types";

const initialState: StoreState = {
  mode: "light",
  user: null,
};

export const storageSlice = createSlice({
  name: "client-storage",
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setMode, setUser } = storageSlice.actions;
export default storageSlice.reducer;
