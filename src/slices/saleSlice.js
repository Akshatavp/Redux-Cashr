import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const saleSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    setStateSales(state, action) {
      return action.payload;
    },
  },
});

export const { setStateSales } = saleSlice.actions;

export default saleSlice.reducer;
