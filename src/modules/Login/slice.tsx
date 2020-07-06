import { LoginReducer, LogoutReducer } from "./reducers";
import { LoginState, LoginStatus } from "../../store";

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
