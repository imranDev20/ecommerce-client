import { Product } from "@/shared/types/product";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CartStateType = {
  cartItems: Product[];
  drawerOpen: boolean;
};

const initialState: CartStateType = {
  cartItems: [],
  drawerOpen: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {},

    updateItemQuantity: (state, action: PayloadAction<Product>) => {},

    deleteFromCart: (state, action: PayloadAction<string>) => {},

    toggleCartDrawer: (state) => {},
  },
});

export const {
  addToCart,
  deleteFromCart,
  updateItemQuantity,
  toggleCartDrawer,
} = cartSlice.actions;
export default cartSlice.reducer;
