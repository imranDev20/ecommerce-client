import { CartPayload, CartProduct } from "@/shared/types/product";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CartStateType = {
  cartItems: CartProduct[];
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
    addToCart: (state, action: PayloadAction<CartPayload>) => {
      const itemToAdd = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item._id === itemToAdd._id
      );

      if (!existingItem?._id) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    incrementQuantity: (state, action: PayloadAction<CartPayload>) => {
      const itemToUpdate = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item._id === itemToUpdate._id
      );

      if (existingItem?._id) {
        existingItem.quantity += 1;
      }
    },

    decrementQuantity: (state, action: PayloadAction<CartPayload>) => {
      const itemToUpdate = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item._id === itemToUpdate._id
      );

      if (existingItem?._id && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      }
    },

    deleteFromCart: (state, action: PayloadAction<CartPayload>) => {
      const itemToDelete = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item._id === itemToDelete._id
      );
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item._id === itemToDelete._id
      );

      if (existingItemIndex !== -1) {
        state.cartItems.splice(existingItemIndex, 1);
      }
    },

    toggleCartDrawer: (state) => {},
  },
});

export const {
  addToCart,
  deleteFromCart,
  incrementQuantity,
  decrementQuantity,
  toggleCartDrawer,
} = cartSlice.actions;

export default cartSlice.reducer;
