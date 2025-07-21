import { combineReducers } from "@reduxjs/toolkit";
import appointmentReducer from "./slices/appointment-slice";
import authReducer from "./slices/auth-slice";
import cartReducer from "./slices/cart-slice";

const rootReducer = combineReducers({
  appointment: appointmentReducer,
  auth: authReducer,
  cart: cartReducer
});

export default rootReducer;
