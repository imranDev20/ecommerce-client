import { User } from "@/shared/types/user";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type UserSliceProps = {
  user: User | {};
};

const initialState: UserSliceProps = {
  user: {},
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = cartSlice.actions;
export default cartSlice.reducer;
