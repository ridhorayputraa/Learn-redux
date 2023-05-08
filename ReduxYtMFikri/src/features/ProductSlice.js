import { createSlice } from "@reduxjs/toolkit";
// Adalah function yang terdapat function dimana terdapat initial state reducer, kemudian akan membuat action creator dan action tab secara Otomatis

const productSlice = createSlice({
  name: "Product",
  initialState: {
    title: "Product 1",
    price: "123456",
  },
  reducers: {
    update: (state, action) => {
      state.title = action.payload.title;
      state.price = action.payload.price;
    },
  },
});

export const { update } = productSlice.actions;
export default productSlice.reducer;
