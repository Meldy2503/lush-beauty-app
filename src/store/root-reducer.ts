import { combineReducers } from "@reduxjs/toolkit";
import appointmentReducer from "./slices/appointment-slice";

const rootReducer = combineReducers({
  appointment: appointmentReducer,
});

export default rootReducer;
