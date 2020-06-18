import { LoginState, LoginStatus } from "./store";
import { loginToWebsite, logoutFromWebsite } from "./thunk";

import { ActionReducerMapBuilder } from "@reduxjs/toolkit";

export const LoginReducer = (
  builder: ActionReducerMapBuilder<LoginState>
): void => {
  builder
    .addCase(loginToWebsite.pending, (state: LoginState) => {
      state.status = LoginStatus.InProgress;
    })
    .addCase(loginToWebsite.fulfilled, (state: LoginState, action) => {
      state.status = LoginStatus.LoggedIn;
      state.name = action.payload;
    })
    .addCase(loginToWebsite.rejected, (state: LoginState) => {
      state.status = LoginStatus.LoggedOut;
    });
};

export const LogoutReducer = (
  builder: ActionReducerMapBuilder<LoginState>
): void => {
  builder
    .addCase(logoutFromWebsite.pending, (state: LoginState) => {
      state.status = LoginStatus.InProgress;
    })
    .addCase(logoutFromWebsite.fulfilled, (state: LoginState) => {
      state.status = LoginStatus.LoggedOut;
      state.name = "";
    });
};
