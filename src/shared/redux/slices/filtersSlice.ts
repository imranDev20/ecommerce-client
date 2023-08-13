import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  isFiltered: boolean;
};

const initialState: InitialState = {
  isFiltered: false,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setIsFiltered: (state) => {
      state.isFiltered = true;
    },
  },
});

export const { setIsFiltered } = filtersSlice.actions;

export default filtersSlice.reducer;
