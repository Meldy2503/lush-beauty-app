import { combineReducers } from "@reduxjs/toolkit";
import appointmentReducer from "./slices/appointment-slice";
import authReducer from "./slices/auth-slice";

const rootReducer = combineReducers({
  appointment: appointmentReducer,
  auth: authReducer
});

export default rootReducer;
