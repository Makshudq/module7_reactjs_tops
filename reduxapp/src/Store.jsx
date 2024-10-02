import { configureStore } from "@reduxjs/toolkit";
import countingslice from "./Countingslice";

export const store = configureStore({
  reducer: {
    counted: countingslice,
  },
});

export default store;
