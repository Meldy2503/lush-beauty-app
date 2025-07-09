import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../types";

const initialState: AuthState = {
  accessToken: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setToken, setLoading } = authSlice.actions;
export default authSlice.reducer;
