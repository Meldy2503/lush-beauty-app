import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState, CheckoutItemsState } from "../types";

const initialState: CartState = {
  cartItems: [],
  guestId: null,
  checkoutCartItems: null,
  redirectToOrderSummary: false,
  hasMergedIds: false,
  orderId: null,
  orderClientSecretKey: null,
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
    clearCart: (state) => {
      state.cartItems = [];
    },
    setOrderId: (state, action: PayloadAction<string>) => {
      state.orderId = action.payload;
    },
    setOrderClientSecretKey: (state, action: PayloadAction<string>) => {
      state.orderClientSecretKey = action.payload;
    },
    // to remove the secret key
    removeOrderClientSecretKey: (state) => {
      state.orderClientSecretKey = null;
    },
  },
});

export const {
  addCartItems,
  clearCart,
  setGuestId,
  setRedirectToOrderSummary,
  setCheckoutCartItems,
  setHasMergedIds,
  setOrderId,
  setOrderClientSecretKey,
  removeOrderClientSecretKey,
} = cartSlice.actions;
export default cartSlice.reducer;
