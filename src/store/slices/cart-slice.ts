import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState } from "../types";

const initialState: CartState = {
  cartItems: [],
  guestId: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItems: (state, action: PayloadAction<CartItem>) => {
      state.cartItems.push(action.payload);
    },
    setGuestId: (state, action: PayloadAction<string>) => {
      state.guestId = action.payload;
    },
  },
});

export const { addCartItems, setGuestId } = cartSlice.actions;
export default cartSlice.reducer;
