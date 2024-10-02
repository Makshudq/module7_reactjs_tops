import { createSlice } from "@reduxjs/toolkit";

const countingslice = createSlice({
  name: "counting",
  initialState: 0,
  reducers: {
    increament(state, action) {
      return state + action.payload;
    },
    decreament(state, action) {
      return state - action.payload;
    },
  },
});

console.log(countingslice.actions);

export default countingslice.reducer;
export const { increament, decreament } = countingslice.actions;
