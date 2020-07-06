import {
  LoginReducer,
  LoginState,
  LoginStatus,
  LogoutReducer,
} from "./reducers";

import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "loginSlice",
  initialState: { status: LoginStatus.LoggedOut } as LoginState,
  reducers: {},
  extraReducers: (builder) => {
    LoginReducer(builder);
    LogoutReducer(builder);
  },
});
