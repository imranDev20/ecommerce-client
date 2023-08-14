import { Product } from "@/shared/types/productTypes";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CartStateType = {
  cartItems: Product[];
  persisted: boolean;
  drawerOpen: boolean;
};

type UpdateCartQuantityPayload = {
  id: string;
  type: "increase" | "decrease";
};

const initialState: CartStateType = {
  cartItems: [],
  persisted: false,
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
