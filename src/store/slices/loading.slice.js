import { createSlice } from "@reduxjs/toolkit";

export const isLoading = createSlice({
  name: "Loading",
  initialState: false,
  reducers: {
    setIsLoading: (state, action) => {
      return action.payload;
    },
  },
});

export const { setIsLoading } = isLoading.actions;

export default isLoading.reducer;
