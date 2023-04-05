import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IAccount } from "../../types/account";
export interface AccountState {
  isLogin: boolean;
  user: IAccount | null;
  error: boolean;
}
const initialState: AccountState = {
  isLogin: false,
  user: null,
  error: false,
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLogin = true;
    },
    loginSuccess: (state, action: PayloadAction<IAccount>) => {
      state.user = action.payload;
      state.isLogin = false;
      state.error = false;
      localStorage.setItem("userData", JSON.stringify(action.payload));
    },
    loginFailure: (state) => {
      state.isLogin = false;
      state.error = true;
    },
    logout: (state) => {
      state.user = null;
      state.isLogin = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginStart, loginSuccess, loginFailure, logout } =
  accountSlice.actions;

export default accountSlice.reducer;
