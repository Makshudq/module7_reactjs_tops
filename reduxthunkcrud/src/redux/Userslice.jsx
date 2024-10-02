import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { act, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export const fetchdata = createAsyncThunk("userdata", async () => {
  let getdata = await axios.get(`http://localhost:3000/userData`);
  return getdata.data;
});

export const deletedata = createAsyncThunk("deletedata", async (id) => {
  const deleteddata = await axios.delete(
    `http://localhost:3000/userData/${id}`
  );

  return id;
});

export const updatedataedit = createAsyncThunk(
  "updatedataedit",
  async ({ id, name, email, contact, address }) => {
    const updateddata = axios.put(`http://localhost:3000/userData/${id}`, {
      name,
      email,
      contact,
      address,
    });

    return { name, email, contact, address };
  }
);

export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    isloading: false,
    iserror: false,
    flage: false,
    items: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchdata.fulfilled, (state, action) => {
      state.items = action.payload;
      console.log(state.items);
    });
    builder.addCase(fetchdata.rejected, (state, action) => {
      state.iserror = true;
    });
    builder.addCase(deletedata.fulfilled, (state, action) => {
      console.log("deleted....", action.payload);
      state.items = state.items.filter((item) => item.id != action.payload);
    });
    builder.addCase(updatedataedit.fulfilled, (state, action) => {
      let index = state.items.findIndex((item) => item.id == action.payload.id);
      state.items[index] = action.payload;
      console.log(action.payload);

      state.flage = action.payload.name;
    });
  },
});

export default userSlice.reducer;
