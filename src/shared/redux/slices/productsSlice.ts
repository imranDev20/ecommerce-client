import { Products } from "@/shared/types/product";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Products = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
