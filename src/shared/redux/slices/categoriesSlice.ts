import { Categories } from "@/shared/types/product";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Categories = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (_, action) => action.payload,
  },
});

export const { setCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
