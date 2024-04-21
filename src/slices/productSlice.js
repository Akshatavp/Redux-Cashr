import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setStateProducts(state, action) {
      return action.payload;
    },
  },
});

export const { setStateProducts } = productSlice.actions;

export default productSlice.reducer;
