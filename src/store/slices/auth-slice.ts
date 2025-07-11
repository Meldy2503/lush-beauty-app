import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, LoggedInUser } from "../types";

const initialState: AuthState = {
  accessToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    setAuthData: (
      state,
      action: PayloadAction<{ token: string; user: LoggedInUser }>
    ) => {
      state.accessToken = action.payload.token;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.accessToken = null;
      state.user = null;
    },
  },
});

export const { setAuthData, setToken, logout } = authSlice.actions;
export default authSlice.reducer;
