import { createSlice } from "@reduxjs/toolkit";

export const thema = createSlice({
  name: "mode",
  initialState: false,
  reducers: {
    setMode: (state, action) => {
      return action.payload;
    },
  },
});

export const { setMode } = thema.actions;

export default thema.reducer;
