import { LoginReducer, LogoutReducer } from "./reducers";
import { configureStore, createSlice } from "@reduxjs/toolkit";

export enum LoginStatus {
  LoggedOut = 0,
  LoggedIn = 1,
  InProgress = 2,
}
export interface LoginState {
  status: LoginStatus;
  name: string;
}

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: { status: LoginStatus.LoggedOut } as LoginState,
  reducers: {},
  extraReducers: (builder) => {
    LoginReducer(builder);
    LogoutReducer(builder);
  },
});

export const store = configureStore({ reducer: loginSlice.reducer });
