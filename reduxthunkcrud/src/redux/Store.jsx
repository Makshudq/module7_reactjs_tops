import { configureStore } from "@reduxjs/toolkit";
import userslice from "./Userslice";

const store = configureStore({
  reducer: {
    userSlice: userslice,
  },
});

export default store;
