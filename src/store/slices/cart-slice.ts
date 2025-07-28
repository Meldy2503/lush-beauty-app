import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState, CheckoutItemsState } from "../types";

const initialState: CartState = {
  cartItems: [],
  guestId: null,
  checkoutCartItems: null,
  redirectToOrderSummary: false,
  hasMergedIds: false,
  orderId: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItems: (state, action: PayloadAction<CartItem>) => {
      state.cartItems.push(action.payload);
    },
    setCheckoutCartItems: (
      state,
      action: PayloadAction<CheckoutItemsState>
    ) => {
      state.checkoutCartItems = action.payload;
    },
    setGuestId: (state, action: PayloadAction<string>) => {
      state.guestId = action.payload;
    },
    setRedirectToOrderSummary: (state, action: PayloadAction<boolean>) => {
      state.redirectToOrderSummary = action.payload;
    },
    setHasMergedIds: (state, action: PayloadAction<boolean>) => {
      state.hasMergedIds = action.payload;
    },
    setOrderId: (state, action: PayloadAction<string>) => {
      state.orderId = action.payload;
    },
  },
});

export const {
  addCartItems,
  setGuestId,
  setRedirectToOrderSummary,
  setCheckoutCartItems,
  setHasMergedIds,
  setOrderId
} = cartSlice.actions;
export default cartSlice.reducer;
